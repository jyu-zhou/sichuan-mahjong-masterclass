"""Build generated browser assets from canonical JSON/Markdown sources."""
from pathlib import Path
import json,re,html
import mistune
ROOT=Path(__file__).resolve().parents[1]
VERSION=(ROOT/'VERSION').read_text(encoding='utf-8').strip()

def build_content_js():
    for lang in ('zh-CN','en'):
        src=ROOT/'assets'/f'content.{lang}.json'
        dst=ROOT/'assets'/f'content.{lang}.js'
        data=json.loads(src.read_text(encoding='utf-8'))
        dst.write_text('window.SCMJ_CONTENT = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')

def render_book(src,dst,lang):
    markdown=mistune.create_markdown(plugins=['table','strikethrough','task_lists'])
    text=src.read_text(encoding='utf-8')
    seen={};toc=[];lines=[]
    def slug(title):
        base=re.sub(r'[^\w\u4e00-\u9fff-]+','-',title.lower()).strip('-') or 'section'
        n=seen.get(base,0);seen[base]=n+1
        return base if n==0 else f'{base}-{n+1}'
    for line in text.splitlines():
        m=re.match(r'^(#{1,3})\s+(.+)$',line)
        if m:
            level=len(m.group(1));title=m.group(2).strip();anchor=slug(title)
            lines += [f'<a id="{anchor}"></a>',line]
            if level<=2:toc.append((level,title,anchor))
        else:lines.append(line)
    body=markdown('\n'.join(lines));zh=lang=='zh-CN';prefix='' if zh else '../'
    toc_html=''.join(f'<li class="toc-l{lv}"><a href="#{a}">{html.escape(t)}</a></li>' for lv,t,a in toc)
    page=f'''<!doctype html><html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{f'四川麻将大师教材 v{VERSION}' if zh else f'Sichuan Mahjong Masterclass v{VERSION}'}</title><link rel="stylesheet" href="{prefix}assets/app.css"><style>.book-shell{{display:grid;grid-template-columns:260px 1fr;gap:22px;max-width:1260px;margin:0 auto;padding:18px}}.toc{{position:sticky;top:18px;align-self:start;max-height:calc(100vh - 36px);overflow:auto;background:white;border:1px solid var(--line);border-radius:13px;padding:16px}}.toc h3{{margin:0 0 10px}}.toc ul{{list-style:none;padding:0;margin:0}}.toc li{{margin:5px 0;font-size:11px}}.toc-l1{{font-weight:750;margin-top:10px!important}}.toc-l2{{padding-left:10px}}.book-actions{{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}}@media(max-width:880px){{.book-shell{{grid-template-columns:1fr;padding:0}}.toc{{position:static;max-height:340px;border-radius:0}}.textbook{{margin:0}}}}</style></head><body><div class="book-shell"><aside class="toc"><div class="book-actions"><a class="btn soft" href="index.html">{'返回课程' if zh else 'Course home'}</a><a class="btn outline" href="{'en/textbook.html' if zh else '../textbook.html'}">{'English' if zh else '中文'}</a></div><h3>{'目录' if zh else 'Contents'}</h3><ul>{toc_html}</ul><p class="small"><a href="https://github.com/jyu-zhou/sichuan-mahjong-masterclass">{'项目源码' if zh else 'Source repository'}</a><br>{'作者' if zh else 'Author'}: jyu-zhou</p></aside><main class="textbook">{body}</main></div></body></html>'''
    dst.write_text(page,encoding='utf-8')

def main():
    build_content_js()
    render_book(ROOT/'docs/zh-CN/textbook.md',ROOT/'textbook.html','zh-CN')
    render_book(ROOT/'docs/en/textbook.md',ROOT/'en/textbook.html','en')
    print('Build complete.')
if __name__=='__main__':main()
