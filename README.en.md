# Sichuan Mahjong Masterclass

[中文](README.md) · [Chinese Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/) · [English Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/) · [Bilingual Single-file Offline Edition](standalone.html) · [Full English Textbook](docs/en/textbook.md) · [Agent Teaching Guide](AGENT_GUIDE.en.md) · [Latest Release](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)

> A zero-to-advanced curriculum for **Sichuan Mahjong (Chuan Mahjong)**. The project focuses on Blood Battle to the End and teaches decisions through legality, tile efficiency, probability, expected value, opponent-specific risk, and scientific review instead of unverifiable “expert rules of thumb.”

**Author: [@jyu-zhou](https://github.com/jyu-zhou)**

## What this project is

The course serves both complete beginners and experienced players who want a more rigorous decision process. The canonical ruleset uses four players, 108 suited tiles, Swap Three, fixed Dingque (Declare a Missing Suit), no chow, pung/kong allowed, and Blood Battle to the End. The current in-game fan table and settlement pages are treated as the primary rules contract.

“Scientific” here does not mean a guaranteed winning algorithm. It means every conclusion should identify its evidence level: what follows from exact tile conservation and enumeration, what depends on probabilistic assumptions, and what can only be validated with long-run real hand histories.

## Highlights

- **34 progressive lessons**: tiles → legal hand shapes → Swap Three → Dingque → tile efficiency → fan scoring → probability → defense → endgame → scientific review.
- **45 interactive questions** with explanations across rules, efficiency, probability, and strategy.
- **Complete fan catalogue** from 0 to 8 fan plus ×2 bonus conditions and Heavenly/Earthly Hand handling.
- **Interactive Hand Lab** for 13-tile wait enumeration, 14-tile direct-ready discard comparison, public-tile correction, and the four-copy constraint.
- **Probability and score calculators** for hypergeometric draws, fan multipliers, Flower Pig settlement, and attack/defense break-even risk.
- **Continuous-reading timeline** that separates certain facts, rule exclusions, probabilistic clues, and hidden-state transitions.
- **Full bilingual textbook** in both Markdown and browser-friendly HTML.
- **Bilingual single-file offline edition**: [`standalone.html`](standalone.html) embeds both languages, the full textbooks, SVG tiles, styles, scripts, and rule-reference images into one portable HTML file.

## Quick start

No dependency installation is required. Clone the repository and open `index.html` for the default Chinese course or `en/index.html` for English. The interactive course is implemented with plain HTML, CSS, and JavaScript; Mahjong tiles are generated as reusable inline SVG, and progress is stored locally in the browser.

```bash
git clone https://github.com/jyu-zhou/sichuan-mahjong-masterclass.git
cd sichuan-mahjong-masterclass
# Double-click index.html, or use any static file server:
python -m http.server 8000
```

Open `http://localhost:8000/en/` for the English course.

### Bilingual single-file offline edition

For a truly portable copy, download or open [`standalone.html`](standalone.html). It has no dependency on `assets/`, external fonts, external scripts, or a network connection. Chinese and English switch inside the same file, and the full textbook plus interactive tools are embedded. The standalone edition permanently identifies the original author (`jyu-zhou`) and source repository, while its “Latest Version” action always points back to this project so provenance and updates remain easy to verify.

## Make the Agent read the project before it teaches

If you want ChatGPT, Claude, Codex, or another **Agent** to act as your Sichuan Mahjong coach, do not rely on a generic “teach me Sichuan Mahjong” prompt. A more reliable workflow is to make the Agent **obtain and read this repository first**, verify the project version and rule contract, and only then teach from the canonical textbook. This reduces accidental mixing of other Mahjong variants, outdated scoring tables, or the model's generic memory.

See [`AGENT_GUIDE.en.md`](AGENT_GUIDE.en.md) for the full copy-ready prompt. The compact version below works with an Agent that has Git/file access:

```text
You are my Sichuan Mahjong (Chuan Mahjong) teaching Agent. Do not start by teaching from generic model memory.

Repository: https://github.com/jyu-zhou/sichuan-mahjong-masterclass

First obtain and read the project:
- If the repo already exists locally, inspect its state and update to the latest main only when this will not overwrite uncommitted work; use `git pull --ff-only` when safe.
- If it is absent and Git is available, run: `git clone https://github.com/jyu-zhou/sichuan-mahjong-masterclass.git`.
- If Git is unavailable but downloads are possible, download and extract the latest GitHub source ZIP.
- If you cannot access GitHub and I have not supplied the files, explicitly tell me that you have not read the project and ask me for a repo copy, ZIP, or `standalone.html`. Never pretend the files were loaded.

After obtaining it, read `VERSION` and verify at least: `README.en.md`, `docs/en/textbook.md`, `assets/content.en.json`, `en/index.html`, and `standalone.html`.

Use this reading priority:
1. `README.en.md` for scope, rules, and methodology;
2. `docs/en/textbook.md` as the canonical English teaching text;
3. `assets/content.en.json` to cross-check interactive lessons, quizzes, fan data, and rule content;
4. inspect `en/index.html` / `assets/app.js` when you need to understand the interactive tools;
5. use `standalone.html` as the portable fallback when the full repository is unavailable.

Once you have actually read the project, give me a “Project Load Card”: version, core files read, active ruleset, room-dependent parameters still requiring confirmation, and any missing/version-conflict issues. Then ask about my skill level, schedule, actual game/room, learning preference, and whether I can provide hand histories, and create a 4–12 week curriculum grounded in the project.

For each lesson, name the corresponding textbook section, teach one small topic, ask me a question before revealing the answer, and distinguish exact rule/tile-conservation results, assumption-dependent conditional models, and empirical claims requiring real hand histories. For a real hand, analyze in this order: Dingque/legality → shape/shanten → candidate discards → effective tiles and visible-tile correction → fan/settlement → per-opponent risk → endgame rules → conditional expected value.

If my current room rules differ from the project baseline, list the differences and strategic consequences first. Do not silently mix another Mahjong ruleset. Do not promise a fixed win rate, guaranteed profit, or an unbeatable strategy.

Start by obtaining and reading the project and giving me the Project Load Card. Do not begin Lesson 1 until the core files have actually been read.
```

> If the Agent has no network access, give it this repository directory, a source ZIP, or `standalone.html`, then keep the same “read the project first” rule.

## Rules scope

The main line uses four players, 108 suited tiles, Swap Three, fixed Dingque, no chow, pung/kong allowed, winner leaves, and the hand ends after the third winner or wall exhaustion. The base fan table begins with Basic Hand at 0 fan / 1× and includes All Pungs, Full Flush, Seven Pairs, Golden Hook, Dragon Seven Pairs, Eighteen Arhats, and their full-flush/multi-dragon combinations. Self-draw, Win After Kong, Kong Discard, Robbing a Kong, Last Tile, and Root are modeled as ×2 conditions under the current table; Heavenly and Earthly Hands settle directly at the room cap and do not stack.

Endgame rules include Flower Pig, ready-hand inspection, kong refund, and kong-score transfer. Room-specific parameters such as the ordinary cap, immediate kong payments, and pass-win reset behavior remain explicit parameters rather than being silently imported from another ruleset.

See [`docs/en/textbook.md`](docs/en/textbook.md) for the full rule contract.

## Methodology

The project uses one consistent reasoning pipeline:

1. **Legality** — Is Dingque cleared? Is the action legal? Can the hand be fully decomposed into a winning shape?
2. **Deterministic efficiency** — Enumerate candidate discards, waits, nominal copies, and public-tile corrections.
3. **Hidden information** — Separate unseen copies from wall copies; use probability only after defining the sample space.
4. **Per-opponent risk** — Ask who can win on the discard, how much each win would cost, and who pays.
5. **Expected value** — Combine win payments, deal-in losses, kong cashflow, endgame penalties, and opportunity cost.
6. **Dynamic updating** — An opponent’s hidden state can change between turns; cross-turn evidence is not automatically independent.
7. **Counterfactual review** — Evaluate a decision using only information available at the time, never the hidden future tile order.

The mathematical toolkit includes physical copy conservation, sampling without replacement, Bayesian updating, linearity of expectation, and break-even risk thresholds. Formulas are useful because they expose assumptions—not because they create fake precision.

## Repository layout

```text
sichuan-mahjong-masterclass/
├── index.html                  # Default Chinese entry point
├── standalone.html             # Bilingual single-file offline edition
├── AGENT_GUIDE.md              # Chinese repository-first Agent prompt
├── AGENT_GUIDE.en.md           # English repository-first Agent prompt
├── textbook.html               # Full Chinese textbook in HTML
├── README.md                   # Chinese README
├── README.en.md                # This file
├── en/
│   ├── index.html              # English interactive course
│   └── textbook.html           # Full English textbook
├── assets/
│   ├── app.css                 # Shared styling
│   ├── app.js                  # Shared interactive engine
│   ├── content.zh-CN.js        # Chinese course content
│   ├── content.en.js           # English course content
│   └── rules/                  # In-game rule references
├── docs/
│   ├── zh-CN/textbook.md       # Canonical Chinese textbook
│   └── en/textbook.md          # Canonical English textbook
├── release/                    # Release assets
└── .github/workflows/          # GitHub Pages / Release automation
```

## Bilingual architecture

Chinese is the repository default. Every Chinese page links to the English counterpart, and every English page links back to Chinese. Both languages share one interaction engine while lesson text, terminology, questions, fan descriptions, and explanations are independently localized—not merely the navigation chrome.

On first use, important Sichuan Mahjong terms keep both English and Chinese/pinyin references where helpful: Dingque (定缺), Flower Pig / Huazhu (花猪), Ready-hand Inspection / Cha Dajiao (查大叫), and so on.

## Quality checks

Before release, the project validates that:

- Chinese and English both contain 34 lessons and 45 interactive questions;
- every quiz answer index is valid;
- no exact tile can appear more than four times in the hand tool;
- ready-hand results respect the declared missing suit;
- Flower Pig is computed per recipient as `max(64×, that recipient’s maximum ready multiplier)`;
- composite patterns such as Dragon Seven Pairs and Eighteen Arhats do not automatically double-count Roots;
- publication text is written as standalone documentation and contains no conversation-specific wording;
- the canonical naming is **四川麻将（川麻） / Sichuan Mahjong (Chuan Mahjong)** across all public materials.

## Releases

Each formal release exposes two reader-facing offline packages:

- `Sichuan-Mahjong-Masterclass-zh-CN-vX.Y.Z.zip`
- `Sichuan-Mahjong-Masterclass-en-vX.Y.Z.zip`

GitHub Actions in the repository are prepared for Pages deployment and bilingual Release asset publication. Current course version: **v1.3.2**. The repository root also ships `standalone.html` as the portable bilingual single-file edition.

## Strategy and data boundaries

This project does not claim that any fixed strategy guarantees long-run gambling profit. Sichuan Mahjong is a stochastic multiplayer game with hidden information; better decisions do not remove short-run variance. Opponent behavior probabilities should be reported as ranges, directional evidence, or conditional assumptions unless supported by measured hand-history data.

The project contains no automated betting, auto-play, or guaranteed-profit functionality.

## References and acknowledgements

The current in-game rule pages and fan table define the project’s primary rules contract. Tencent/Joy Mahjong’s 2016 Sichuan tournament rules are used to cross-check historical public mechanisms such as the 108-tile set, Blood Battle structure, ready-hand inspection, and kong refund. Their tournament fan and penalty schedule is not silently imported when it conflicts with the current rules.

- Tencent Joy Mahjong 2016 Sichuan tournament rules: <https://majiang.qq.com/webplat/info/news_version3/7207/25932/25972/m16557/201611/523252.shtml>

Rule screenshots and third-party material remain the property of their respective rights holders. Course structure, explanations, code, and exercises are maintained by this project.

## Contributing

For a rule discrepancy, hand-shape bug, or translation issue, open an Issue with the room/version, full hand or action timeline, expected settlement, observed settlement, and reproducible steps whenever possible. Strategy discussions should distinguish exact structural claims, conditional models, and hypotheses that require real data.

## License

No open-source license has been declared yet. Until a `LICENSE` file is added, do not assume that the code or educational content grants redistribution, commercial-use, or derivative-work rights.