from pathlib import Path
import hashlib
import shutil
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
RELEASE = ROOT / 'release'
VERSION = (ROOT / 'VERSION').read_text(encoding='utf-8').strip()


def copy_common(dst: Path) -> None:
    shutil.copytree(ROOT / 'assets', dst / 'assets')
    (dst / 'docs' / 'zh-CN').mkdir(parents=True)
    (dst / 'docs' / 'en').mkdir(parents=True)
    shutil.copy2(ROOT / 'docs/zh-CN/textbook.md', dst / 'docs/zh-CN/textbook.md')
    shutil.copy2(ROOT / 'docs/en/textbook.md', dst / 'docs/en/textbook.md')
    for name in ['VERSION', 'CHANGELOG.md', 'CHANGELOG.en.md', 'AGENT_GUIDE.md', 'AGENT_GUIDE.en.md', 'LICENSE']:
        shutil.copy2(ROOT / name, dst / name)


def make_zip(src: Path, dst: Path) -> None:
    with zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for path in sorted(src.rglob('*')):
            if path.is_file():
                archive.write(path, path.relative_to(src))


def chinese_bundle(dst: Path) -> None:
    copy_common(dst)
    for name in ['index.html', 'textbook.html', 'README.md', 'README.en.md',
                 'CONTRIBUTING.md', 'CONTRIBUTING.en.md', 'standalone.html']:
        shutil.copy2(ROOT / name, dst / name)
    (dst / 'en').mkdir()
    shutil.copy2(ROOT / 'en/index.html', dst / 'en/index.html')
    shutil.copy2(ROOT / 'en/textbook.html', dst / 'en/textbook.html')


def english_bundle(dst: Path) -> None:
    copy_common(dst)
    shutil.copy2(ROOT / 'standalone.html', dst / 'standalone.html')

    # English becomes the package root while Chinese remains one click away.
    text = (ROOT / 'en/index.html').read_text(encoding='utf-8')
    text = text.replace('href="../assets/app.css"', 'href="assets/app.css"')
    text = text.replace('href="../index.html" hreflang="zh-CN"', 'href="zh/index.html" hreflang="zh-CN"')
    text = text.replace("window.ASSET_PREFIX='../';", "window.ASSET_PREFIX='';")
    text = text.replace('src="../assets/content.en.js"', 'src="assets/content.en.js"')
    text = text.replace('src="../assets/app.js"', 'src="assets/app.js"')
    (dst / 'index.html').write_text(text, encoding='utf-8')

    text = (ROOT / 'en/textbook.html').read_text(encoding='utf-8')
    text = text.replace('href="../assets/app.css"', 'href="assets/app.css"')
    text = text.replace('href="../textbook.html">中文</a>', 'href="zh/textbook.html">中文</a>')
    (dst / 'textbook.html').write_text(text, encoding='utf-8')

    (dst / 'zh').mkdir()
    text = (ROOT / 'index.html').read_text(encoding='utf-8')
    text = text.replace('href="assets/app.css"', 'href="../assets/app.css"')
    text = text.replace('href="en/index.html" hreflang="en"', 'href="../index.html" hreflang="en"')
    text = text.replace("window.ASSET_PREFIX='';", "window.ASSET_PREFIX='../';")
    text = text.replace('src="assets/content.zh-CN.js"', 'src="../assets/content.zh-CN.js"')
    text = text.replace('src="assets/app.js"', 'src="../assets/app.js"')
    (dst / 'zh/index.html').write_text(text, encoding='utf-8')

    text = (ROOT / 'textbook.html').read_text(encoding='utf-8')
    text = text.replace('href="assets/app.css"', 'href="../assets/app.css"')
    text = text.replace('href="en/textbook.html">English</a>', 'href="../textbook.html">English</a>')
    (dst / 'zh/textbook.html').write_text(text, encoding='utf-8')

    shutil.copy2(ROOT / 'README.en.md', dst / 'README.md')
    shutil.copy2(ROOT / 'README.md', dst / 'README.zh-CN.md')
    shutil.copy2(ROOT / 'CONTRIBUTING.en.md', dst / 'CONTRIBUTING.md')
    shutil.copy2(ROOT / 'CONTRIBUTING.md', dst / 'CONTRIBUTING.zh-CN.md')


def main() -> None:
    RELEASE.mkdir(exist_ok=True)
    for path in RELEASE.iterdir():
        if path.is_file():
            path.unlink()
        else:
            shutil.rmtree(path)

    with tempfile.TemporaryDirectory(prefix='scmj-release-') as tmp:
        tmp = Path(tmp)
        zh = tmp / 'zh-CN'
        en = tmp / 'en'
        zh.mkdir(); en.mkdir()
        chinese_bundle(zh)
        english_bundle(en)
        make_zip(zh, RELEASE / f'Sichuan-Mahjong-Masterclass-zh-CN-v{VERSION}.zip')
        make_zip(en, RELEASE / f'Sichuan-Mahjong-Masterclass-en-v{VERSION}.zip')

    hashes = []
    for path in sorted(RELEASE.glob('*.zip')):
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        hashes.append(f'{digest}  {path.name}')
    (RELEASE / 'SHA256SUMS.txt').write_text('\n'.join(hashes) + '\n', encoding='utf-8')
    print(f'Built {len(hashes)} reader bundles for v{VERSION}.')


if __name__ == '__main__':
    main()
