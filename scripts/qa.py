from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = []

def err(message):
    errors.append(message)

zh = json.loads((ROOT / 'assets/content.zh-CN.json').read_text(encoding='utf-8'))
en = json.loads((ROOT / 'assets/content.en.json').read_text(encoding='utf-8'))

for lang, data in [('zh-CN', zh), ('en', en)]:
    if len(data['lessons']) != 34:
        err(f'{lang}: expected 34 lessons')
    if len(data['quiz']) != 45:
        err(f'{lang}: expected 45 quiz items')
    if len(data['fans']) != 16:
        err(f'{lang}: expected 16 fan patterns')
    for i, q in enumerate(data['quiz'], 1):
        if not 0 <= q['a'] < len(q['opts']):
            err(f'{lang}: quiz {i} answer index invalid')

if [x[2] for x in zh['fans']] != [x[2] for x in en['fans']]:
    err('fan values differ across languages')
if [x[1] for x in zh['fans']] != [x[1] for x in en['fans']]:
    err('fan multipliers differ across languages')

required = [
    'index.html', 'en/index.html', 'textbook.html', 'en/textbook.html',
    'README.md', 'README.en.md', 'AGENT_GUIDE.md', 'AGENT_GUIDE.en.md', 'standalone.html', 'CONTRIBUTING.md', 'CONTRIBUTING.en.md',
    'docs/zh-CN/textbook.md', 'docs/en/textbook.md',
]
for path in required:
    if not (ROOT / path).exists():
        err(f'missing {path}')

for path in ['index.html', 'en/index.html']:
    text = (ROOT / path).read_text(encoding='utf-8')
    if 'jyu-zhou/sichuan-mahjong-masterclass' not in text:
        err(f'{path}: project link missing')
    if 'jyu-zhou' not in text:
        err(f'{path}: author missing')

# Build publication-process phrases without keeping them literally in published docs.
forbidden = [
    '成都' + '麻将',
    '你' + '提供的截图',
    '我们' + '之前讨论',
    '用户' + '上传的番型',
    'A' + 'Agent',
]
for path in list(ROOT.rglob('*.md')) + list(ROOT.rglob('*.html')) + list(ROOT.glob('assets/content.*.json')):
    if '/release/' in path.as_posix():
        continue
    text = path.read_text(encoding='utf-8', errors='ignore')
    for phrase in forbidden:
        if phrase in text:
            err(f'{path.relative_to(ROOT)}: conversation-specific or deprecated phrase remains')

# Check local HTML links and script/style/image references.
ref_re = re.compile(r'(?:href|src)="([^"]+)"')
for path in [ROOT/'index.html', ROOT/'en/index.html', ROOT/'textbook.html', ROOT/'en/textbook.html']:
    text = path.read_text(encoding='utf-8')
    for ref in ref_re.findall(text):
        if ref.startswith(('https://', 'http://', '#', 'mailto:', 'javascript:')):
            continue
        clean = ref.split('#', 1)[0].split('?', 1)[0]
        if not clean:
            continue
        if not (path.parent / clean).resolve().exists():
            err(f'{path.relative_to(ROOT)}: broken local reference {ref}')

if errors:
    print('\n'.join('ERROR: ' + item for item in errors))
    sys.exit(1)
print('QA passed: bilingual content, naming, links, counts, Agent guides, standalone edition, author/project credit, and publication wording are consistent.')
