# Contributing

[中文](CONTRIBUTING.md)

Thank you for improving Sichuan Mahjong Masterclass. The project maintains rules, mathematical models, pedagogy, and interactive code at the same time, so correctness matters more than volume.

## Good contributions

- reproducible rule or settlement discrepancies;
- legal-hand, wait, effective-tile, scoring, or probability fixes;
- Chinese/English terminology and teaching improvements;
- accessibility, mobile, offline, and interaction improvements;
- strategy research that clearly separates assumptions from facts.

## Reporting a rule discrepancy

Please include the game/room version, full hand or action timeline, visible tiles, declared missing suit, relevant fan pattern, expected settlement, observed settlement, and a publicly verifiable source when available. If behavior can vary by room, do not generalize one room's result into a universal rule.

## Proposing a strategy claim

Label the evidence level:

1. **Deterministic** — provable from rules, tile conservation, or exhaustive enumeration;
2. **Conditional probability** — dependent on a defined sample space and explicit assumptions;
3. **Empirical hypothesis** — requires real hand histories or long-run data.

Do not use one hand's outcome to prove decision quality, and do not equate unseen copies with probability of drawing them.

## Development checks

```bash
python -m pip install -r requirements-dev.txt
python scripts/build.py
python scripts/qa.py
node --check assets/app.js
```

Before submitting, verify that the default Chinese entry, English entry, both textbooks, and language-switch links still work.

## Naming and editorial style

Chinese uses **四川麻将（川麻）**; English uses **Sichuan Mahjong (Chuan Mahjong)**. Published copy should read as standalone documentation and must not refer to chat history, upload history, or a specific questioner.


## Contribution licensing

Code contributions are accepted under the project's [MIT License](LICENSE-CODE). Contributions to textbook prose, lesson structure, exercises, translations, Agent documentation, and other educational content are accepted under [CC BY 4.0](LICENSE-CONTENT).

Do not submit third-party screenshots, images, or prose as project-original material unless you have the right to relicense them. Rule-reference material should keep its source and rights boundary explicit.
