<div align="center">

<img src="assets/logo.svg" width="128" alt="Sichuan Mahjong Masterclass logo">

# Sichuan Mahjong Masterclass

**A bilingual, offline-first Sichuan Mahjong learning project built around explicit rules, reproducible calculations, and evidence-aware decisions.**

[![Latest Release](https://img.shields.io/github/v/release/jyu-zhou/sichuan-mahjong-masterclass?sort=semver)](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)
[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f?logo=github)](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-vanilla%20HTML%2FCSS%2FJS-f7df1e)](#development)

[中文](README.md) · [Chinese Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/) · [English Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/) · [Releases](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)

</div>

Sichuan Mahjong Masterclass is a zero-to-advanced curriculum for **Sichuan Mahjong (Chuan Mahjong)**. It connects rules, tile efficiency, scoring, probability, defense, endgame settlement, and review into one learning path.

The guiding idea is simple: **legality before efficiency; known information before probability; expected value only after the assumptions are explicit.**

## Demo and downloads

| Entry | Use |
| --- | --- |
| [Chinese course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/) | Default online course |
| [English course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/) | Full English experience |
| [Latest Release](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest) | Chinese/English offline bundles, checksums, and standalone HTML |
| [standalone.html](standalone.html) | One self-contained bilingual HTML file |
| [English textbook](docs/en/textbook.md) | Canonical Markdown textbook |
| [Agent guide](AGENT_GUIDE.en.md) | Make an AI Agent read the project before it teaches |

## Features

- **34 progressive lessons** from tiles and legal wins to Dingque, efficiency, scoring, probability, defense, endgame, and review.
- **45 interactive questions** with explanations across rules, structure, probability, and strategy.
- **Fan catalogue and Hand Lab** for wait enumeration, direct-ready discard comparison, visible-tile correction, and four-copy validation.
- **Decision tools** for sampling without replacement, fan settlement, Flower Pig penalties, and break-even attack/defense risk.
- **Continuous-reading timeline** that separates certain facts, rule exclusions, probabilistic clues, and hidden-state changes.
- **Bilingual and offline-first**: Chinese default, full English edition, Markdown/HTML textbooks, and a self-contained single-file build.
- **Agent-first teaching workflow** so AI tutors work from the current repository instead of generic model memory.

## Quick start

There are **no runtime dependencies** for the course itself.

```bash
git clone https://github.com/jyu-zhou/sichuan-mahjong-masterclass.git
cd sichuan-mahjong-masterclass
python -m http.server 8000
```

Then open:

- Chinese: <http://localhost:8000/>
- English: <http://localhost:8000/en/>

For a portable copy, download [`standalone.html`](standalone.html). It embeds both languages, the textbooks, SVG tiles, styles, scripts, and rule-reference images into one file.

## Rules scope

The main line uses four players, 108 suited tiles, Swap Three, fixed Dingque, no chow, pung/kong allowed, and Blood Battle to the End. The current in-game fan table and settlement pages are treated as the primary rules contract. Room-dependent parameters stay explicit instead of being silently imported from another ruleset.

Endgame coverage includes Flower Pig, ready-hand inspection, kong refund, and kong-score transfer. See the [English textbook](docs/en/textbook.md) for the full rule contract.

> This project is about decision quality. It does not promise a guaranteed win rate, guaranteed profit, or an unbeatable strategy.

## Repository layout

```text
.
├── index.html                  # Chinese course
├── en/                         # English course
├── standalone.html             # Bilingual single-file offline build
├── textbook.html               # Chinese textbook HTML
├── docs/                       # Canonical Markdown textbooks
├── assets/
│   ├── app.css                 # Shared styling
│   ├── app.js                  # Shared interactive engine
│   ├── content.*               # Localized course data
│   ├── logo.svg                # Project logo
│   └── rules/                  # Rule-reference images
├── AGENT_GUIDE.en.md           # Repository-first Agent workflow
├── scripts/                    # Build, QA, and release packaging
└── .github/workflows/          # Pages / Release automation
```

## Using an Agent

If you want ChatGPT, Claude, Codex, or another Agent to teach from this project, use [`AGENT_GUIDE.en.md`](AGENT_GUIDE.en.md).

The guide tells the Agent to clone/download the repository, verify `VERSION`, read the canonical textbook and course data, and only then start teaching. The goal is to ground the lesson in the **current project files**, not in a model's generic memory of Mahjong.

## Development

Learners do not need a build step. Development dependencies are only required when editing course data, rebuilding textbook HTML, or running QA.

```bash
python -m pip install -r requirements-dev.txt
python scripts/build.py
python scripts/qa.py
node --check assets/app.js
```

Build reader-facing release bundles with:

```bash
python scripts/package_release.py
```

The frontend is plain HTML/CSS/JavaScript. Mahjong tiles are rendered as reusable SVG, and course progress is stored locally in the browser.

## Contributing

Bug reports, rule discrepancies, translation fixes, accessibility improvements, and teaching improvements are welcome. Please read [CONTRIBUTING.en.md](CONTRIBUTING.en.md) before opening a pull request.

For rule or settlement issues, include the game/room version, full hand or action timeline, visible tiles, expected result, observed result, and a public source when possible. Strategy discussions should distinguish deterministic results, assumption-dependent conditional models, and empirical claims that require real hand-history data.

## License

Original code, course text, lesson structure, and exercises are released under the [MIT License](LICENSE).

Third-party rule screenshots in `assets/rules/` and other explicitly attributed third-party material remain the property of their respective rights holders and are not relicensed under MIT.

## Credits

Created and maintained by [@jyu-zhou](https://github.com/jyu-zhou).

The project uses current in-game rule pages and fan tables as its primary contract. Tencent/Joy Mahjong's 2016 Sichuan tournament rules are used only as a historical cross-check for selected public mechanisms.

- [Tencent Joy Mahjong 2016 Sichuan tournament rules](https://majiang.qq.com/webplat/info/news_version3/7207/25932/25972/m16557/201611/523252.shtml)
