# Changelog

## v1.3.2

- Corrected Agent onboarding language in both READMEs and corrected the previously invalid Agent naming.
- Added a repository-first Agent workflow: the Agent must clone/download and read `VERSION`, the README, canonical textbook, and course data before teaching; it must explicitly report when repository access is unavailable.
- Added `AGENT_GUIDE.md` / `AGENT_GUIDE.en.md` with full copy-ready teaching prompts.
- Synchronized textbook, course-data, HTML, standalone, and release version labels to v1.3.2.
- Reader release bundles now include `standalone.html` and the Agent teaching guides.

## v1.3.1

- Added root-level `standalone.html`: bilingual, single-file, self-contained, and fully offline.
- Chinese, English, and standalone home pages now surface the original author (`jyu-zhou`) and source project more clearly; the primary textbook nav action is replaced by a Latest Version link, while the textbook remains available as a secondary action.
- Updated both READMEs with standalone usage and repository-layout documentation.

## v1.3.0

- Canonical project name is now **Sichuan Mahjong Masterclass**, with “Chuan Mahjong” used as the short-form English reference.
- Added a full English textbook, English interactive course, and two-way language navigation.
- Refactored the site into one shared interaction engine plus language-specific content data, removing historical duplicate code and chat-process wording.
- Preserved the 34-lesson curriculum, 45 interactive questions, fan catalogue, Hand Lab, probability/score tools, continuous-reading timeline, and rule-contract page.
- Added parallel Chinese and English canonical textbooks with a mathematical toolkit, twelve-question checklist, 12-week curriculum, and glossary.
- Added the repository link and author `jyu-zhou` to the home page.
- Standardized rule/scoring language for publication-quality reading.
- Added GitHub Pages and bilingual Release automation workflows.