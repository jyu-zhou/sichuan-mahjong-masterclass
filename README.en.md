<div align="center">

<img src="assets/logo-main.png" alt="Sichuan Mahjong Masterclass" width="360">

# Sichuan Mahjong Masterclass

**A zero-to-advanced, bilingual course for Sichuan Mahjong (Chuan Mahjong): rules, tile efficiency, scoring, probability, defense, endgame, and review.**

[![Release](https://img.shields.io/github/v/release/jyu-zhou/sichuan-mahjong-masterclass?sort=semver&style=flat-square)](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)
[![Pages](https://img.shields.io/badge/course-GitHub%20Pages-176456?style=flat-square&logo=github)](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/)
[![Code: MIT](https://img.shields.io/badge/code-MIT-257c70?style=flat-square)](LICENSE-CODE)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-a87839?style=flat-square)](LICENSE-CONTENT)
[![Lessons](https://img.shields.io/badge/lessons-34-405852?style=flat-square)](#course-map)

[中文](README.md) · [Chinese Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/) · [English Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/) · [Releases](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)

</div>

Sichuan Mahjong Masterclass is a **beginner-to-analyst curriculum** for Sichuan Mahjong. Instead of teaching a bag of table sayings, it turns a decision into steps you can inspect: establish the rules and legality first, compare tile efficiency next, separate known information from hidden information, introduce probability only with explicit assumptions, and discuss risk/expected value last.

The main course uses the rules contract currently locked by this project: four players, 108 suited tiles, Swap Three, Dingque, no chow, pung/kong allowed, and Blood Battle to the End. Room-dependent details remain explicit rather than being silently borrowed from another Mahjong ruleset.

> **Legality before efficiency. Facts before inference. Assumptions before expected value.**

## Guide

<table>
<tr><td align="right"><b>Learn online</b></td><td><a href="https://jyu-zhou.github.io/sichuan-mahjong-masterclass/">中文</a> · <a href="https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/">English</a></td></tr>
<tr><td align="right"><b>Take it offline</b></td><td><a href="https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest">Release downloads</a> · <a href="standalone.html">single-file HTML in the repo</a></td></tr>
<tr><td align="right"><b>Read the textbook</b></td><td><a href="docs/en/textbook.md">English Markdown</a> · <a href="en/textbook.html">browser textbook</a> · <a href="docs/zh-CN/textbook.md">中文教材</a></td></tr>
<tr><td align="right"><b>Learn with AI</b></td><td><a href="#teach-with-an-aiagent">copy the Quick Start Prompt</a> · <a href="AGENT_GUIDE.en.md">full Agent Guide</a></td></tr>
<tr><td align="right"><b>Practice</b></td><td>Hand Lab · fan catalogue · probability/score tools · 45 interactive questions · reading timeline</td></tr>
<tr><td align="right"><b>Contribute</b></td><td><a href="CONTRIBUTING.en.md">contributing guide</a> · <a href="https://github.com/jyu-zhou/sichuan-mahjong-masterclass/issues">Issues</a> · <a href="https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases">Releases</a></td></tr>
</table>

## What should I read?

| Question | Start here |
| --- | --- |
| I have never played Mahjong | Lessons 1–7: rule contract, tiles, legal wins, turn flow, pung/kong, full-round flow |
| What should I swap, and which suit should I declare missing? | Lessons 8–10: Swap Three and Dingque |
| Two discards both look reasonable. How do I compare them? | Lessons 11–15: blocks, effective tiles, shanten, improvement, draw-then-discard decisions |
| How do fans, multipliers, roots, and kong payments fit together? | Lessons 16–21: scoring, kong ledgers, score transfer, opportunity cost |
| How do I calculate the chance of seeing a target tile? | Lessons 22–23: physical copies, hypergeometric probability, sampling without replacement |
| How do I read opponents without pretending I can read minds? | Lessons 24–27: conditioning, Bayes, per-opponent risk, dynamic evidence |
| The wall is almost empty. Should I still push? | Lessons 28–32: Flower Pig, ready-hand inspection, refunds, endgame, complete-state walkthroughs |
| How do I review a hand without hindsight bias? | Lessons 33–34: the twelve-question loop, counterfactual review, calibration |

## Course map

| Stage | Lessons | Exit skill |
| --- | ---: | --- |
| Foundations | 1–7 | Recognize tiles, legal wins, and complete a basic round |
| Opening & efficiency | 8–15 | Execute Swap Three/Dingque and compare shanten, effective tiles, and improvements |
| Scoring decisions | 16–21 | Read the fan table and kong ledger; understand the opportunity cost of chasing value |
| Probability & inference | 22–27 | Separate unseen copies, wall probability, opponent risk, and model assumptions |
| Advanced play | 28–32 | Re-optimize decisions under endgame settlement and changing active-player states |
| Training & review | 33–34 | Review decisions with a repeatable framework instead of outcome hindsight |

New to Chuan Mahjong? Read in order. Already play regularly? Jump to the stage you need, but read the rule contract in Lesson 1 and Dingque constraints before importing habits from another Mahjong variant.

## How to use the project

- **First course:** follow the online lessons in order and answer each checkpoint before moving on.
- **Already know the rules:** spend more time in Hand Lab, discard comparison, probability exercises, and the continuous-reading timeline.
- **Researching strategy:** use the Markdown textbook and keep every probability claim tied to its stated sample space/model.
- **Need an offline copy:** the Release `standalone.html` is a complete bilingual single file; open it directly in a modern browser.
- **Want an AI tutor:** use the prompt below or the full [Agent Guide](AGENT_GUIDE.en.md). The Agent should read the repository before it teaches.

## Teach with an AI/Agent

Copy this into ChatGPT, Claude, Codex, or another Agent with file/terminal/web access. Add your level, available study time, and goal at the end.

<details>
<summary><b>Open the repository-first Quick Start Prompt</b></summary>

```text
Act as my Sichuan Mahjong (Chuan Mahjong) coach, but do not start by teaching from generic model memory.

Before teaching, obtain and read this project:
https://github.com/jyu-zhou/sichuan-mahjong-masterclass

Workflow:
1. If you have a terminal and Git:
   - If the project is not present locally:
     git clone https://github.com/jyu-zhou/sichuan-mahjong-masterclass.git
   - If it already exists, inspect the working tree first. Do not overwrite uncommitted work. When safe:
     git pull --ff-only
2. If Git is unavailable, download the repository ZIP or latest Release. If you cannot access the network either, say so clearly and ask me to provide the local project directory or archive.
3. Actually read, rather than merely name, these files:
   - VERSION
   - README.en.md
   - AGENT_GUIDE.en.md
   - docs/en/textbook.md
   - assets/content.en.json
   - when needed, index.html / en/index.html, assets/app.js, and the rule references under assets/rules/
4. Before Lesson 1, report:
   - the project version you actually loaded;
   - the Sichuan Mahjong rules baseline used by the course;
   - which rules are locked and which remain room-dependent parameters/boundaries.
5. Use the current project files as the teaching baseline. If project rules conflict with your generic Mahjong knowledge, follow the project's current rules contract and point out the conflict. Do not silently import Riichi, MCR, Guangdong Mahjong, or another Sichuan implementation.
6. Separate strategy claims into:
   - deterministic rule/enumeration facts;
   - conditional probability results that depend on explicit assumptions;
   - empirical claims that still need real hand-history data.
7. Give me a short diagnostic first, then build a progressive course from the project. Teach a manageable amount each session, let me answer examples before showing explanations, and track my weak areas.
8. Whenever practical, cite the corresponding lesson number, textbook section, or repository path so I can verify the source.
9. If you cannot actually access the repository/files, explicitly say "I have not loaded the project yet." Do not pretend the lesson is based on this course.

My current situation:
- Chuan Mahjong level: [fill in]
- Study time per week: [fill in]
- Goal: [fill in]
```

</details>

See [AGENT_GUIDE.en.md](AGENT_GUIDE.en.md) for the full workflow and teaching acceptance criteria.

## Repository layout

```text
.
├── index.html                  # Chinese interactive course
├── en/                         # English interactive course
├── standalone.html             # self-contained bilingual offline course
├── textbook.html               # Chinese browser textbook
├── docs/
│   ├── zh-CN/textbook.md       # canonical Chinese textbook
│   └── en/textbook.md          # canonical English textbook
├── assets/
│   ├── app.js / app.css        # course frontend
│   ├── content.*               # lessons, quiz, fan data
│   ├── logo-main.png           # project logo
│   ├── logo-hd.png             # higher-quality logo asset
│   └── rules/                  # in-game rule reference images (third-party)
├── AGENT_GUIDE*.md             # AI/Agent teaching workflow
├── scripts/                    # build, QA, release packaging
└── .github/workflows/          # Pages and Release automation
```

### How to read claims

| Type | What it supports | What it does not support |
| --- | --- | --- |
| Rule fact | Legality and settlement under the current course contract | It does not prove a strategy is optimal |
| Deterministic calculation | Waits, copy counts, enumeration, exact conditional combinatorics | Change the conditions and the answer changes |
| Conditional model | Probability/risk under an explicit sample space or prior | It is not a mind-reader for hidden hands |
| Strategy recommendation | A decision direction under a specified objective/risk model | It does not guarantee a fixed win rate or profit |
| Open boundary | A rule that may differ by room/version | It should not be presented as universal until verified |

## Run locally / development

Learners do not need a build step:

```bash
git clone https://github.com/jyu-zhou/sichuan-mahjong-masterclass.git
cd sichuan-mahjong-masterclass
python -m http.server 8000
```

Open <http://localhost:8000/> or <http://localhost:8000/en/>.

Development dependencies are only needed when editing course data or running QA:

```bash
python -m pip install -r requirements-dev.txt
python scripts/build.py
python scripts/qa.py
node --check assets/app.js
```

Build the reader-facing bundles with:

```bash
python scripts/package_release.py
```

## Contributing

Rule corrections, legal-hand/wait fixes, probability corrections, translation, accessibility, and teaching improvements are welcome. Please read [CONTRIBUTING.en.md](CONTRIBUTING.en.md) first.

For a rule discrepancy, include the game/room version, full hand or action timeline, visible tiles, expected settlement, observed settlement, and a public source when available. Do not use a single hand outcome as evidence that one strategy is better.

## Licensing

This repository uses **separate licenses for code and educational content**:

| Scope | License |
| --- | --- |
| Original source code, build scripts, frontend logic, and workflows | [MIT License](LICENSE-CODE) |
| Original textbook prose, lesson structure, exercises, translations, Agent documentation, and project logo | [CC BY 4.0](LICENSE-CONTENT) |
| In-game screenshots under `assets/rules/` and explicitly attributed third-party material | **Not relicensed**; rights remain with their respective owners |

The root [LICENSE](LICENSE) mirrors `LICENSE-CODE` so GitHub can identify the software license normally.

When redistributing or adapting CC BY 4.0 content, credit **Sichuan Mahjong Masterclass**, **jyu-zhou**, link the original repository, and indicate changes.

## Credits

Created and maintained by [@jyu-zhou](https://github.com/jyu-zhou).

The current in-game rule pages and fan tables are the primary rules contract. Public Tencent/Joy Mahjong material is used only as a historical cross-check where useful; it does not override rules already locked by this project.
