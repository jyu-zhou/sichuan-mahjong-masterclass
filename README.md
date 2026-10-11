<div align="center">

<img src="assets/logo.svg" width="128" alt="四川麻将大师学院 Logo">

# 四川麻将大师学院

**一套双语、离线优先、强调可验证推理的四川麻将（川麻）学习项目。**

[![Latest Release](https://img.shields.io/github/v/release/jyu-zhou/sichuan-mahjong-masterclass?sort=semver)](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)
[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f?logo=github)](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-vanilla%20HTML%2FCSS%2FJS-f7df1e)](#开发)

[English](README.en.md) · [在线课程](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/) · [英文版](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/) · [Releases](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest)

</div>

四川麻将大师学院把规则、牌效率、番型、概率、攻守、残局和复盘放进一条连续学习路径。项目既适合第一次接触川麻的新手，也适合希望用更严格的方法分析牌局的进阶玩家。

核心原则：**先保证合法，再谈牌效；先区分确定信息与隐藏信息，再谈概率；最后才比较条件期望收益。**

## Demo 与下载

| 入口 | 用途 |
| --- | --- |
| [中文在线课程](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/) | 默认入口，直接在浏览器学习 |
| [English Course](https://jyu-zhou.github.io/sichuan-mahjong-masterclass/en/) | 完整英文课程 |
| [最新 Release](https://github.com/jyu-zhou/sichuan-mahjong-masterclass/releases/latest) | 中英文离线包、SHA-256 校验和单文件版 |
| [standalone.html](standalone.html) | 单个 HTML 文件即可离线运行，中英文可切换 |
| [中文教材](docs/zh-CN/textbook.md) | 适合阅读、引用和版本审查 |
| [Agent 教学指南](AGENT_GUIDE.md) | 让 Agent 先读取本仓库，再按教材授课 |

## Features

- **34 堂循序课程**：认牌 → 胡牌结构 → 换三张 → 定缺 → 牌效率 → 番型 → 概率 → 攻守 → 残局 → 复盘。
- **45 道互动练习**，覆盖规则、结构、概率与策略辨析。
- **番型图鉴与摆牌实验室**：13 张听口、14 张弃牌比较、公开牌修正、四枚上限校验。
- **概率与收益工具**：不放回抽样、番型结算、花猪罚则和攻守临界值。
- **连续读牌时间轴**：区分确定事实、规则排除、概率线索与隐藏状态变化。
- **双语与离线优先**：中文默认、完整英文版、Markdown 教材、浏览器教材以及单文件离线版。
- **Agent-first 教学**：要求 AI Agent 先获取并读取当前项目，而不是凭通用模型记忆混用其他麻将规则。

## Quick start

课程运行本身**没有运行时依赖**。克隆仓库后直接打开 HTML，或用任意静态服务器启动：

```bash
git clone https://github.com/jyu-zhou/sichuan-mahjong-masterclass.git
cd sichuan-mahjong-masterclass
python -m http.server 8000
```

然后访问：

- 中文：<http://localhost:8000/>
- English：<http://localhost:8000/en/>

如果只需要便携版本，下载 [`standalone.html`](standalone.html) 即可。它把课程、教材、SVG 牌面、样式、脚本和规则参考图全部内嵌在一个文件里。

## 规则范围

项目主线采用四人、108 张万/筒/条、换三张、固定定缺、不吃、可碰杠、血战到底。当前游戏内番型表和结算页是项目的主规则合同；房间参数或平台实现存在差异时，教材会显式标注，而不是把不同规则集混在一起。

终局重点覆盖花猪、查大叫、退税与呼叫转移。完整规则合同和番型说明见 [中文教材](docs/zh-CN/textbook.md)。

> 本项目讨论的是决策质量，不提供“必胜”“保证盈利”或固定胜率承诺。

## 项目结构

```text
.
├── index.html                  # 中文课程
├── en/                         # English course
├── standalone.html             # 中英双语单文件离线版
├── textbook.html               # 中文教材网页版
├── docs/                       # 中英文 Markdown 教材
├── assets/
│   ├── app.css                 # 共享样式
│   ├── app.js                  # 共享交互逻辑
│   ├── content.*               # 双语课程数据
│   ├── logo.svg                # 项目 Logo
│   └── rules/                  # 规则参考图
├── AGENT_GUIDE.md              # Agent 教学工作流
├── scripts/                    # 构建、QA、Release 打包
└── .github/workflows/          # Pages / Release 自动化
```

## Agent 使用

如果你希望 ChatGPT、Claude、Codex 或其他 Agent 基于本项目教学，请直接使用 [`AGENT_GUIDE.md`](AGENT_GUIDE.md)。该指南要求 Agent 先 clone/下载仓库、核验 `VERSION`、读取正式教材和课程数据，再开始教学。

这样做的目的不是“让模型更听话”，而是保证教学依据来自**当前版本的项目文件**，避免把其他麻将变体、旧计分或模型自身记忆混入课程。

## 开发

用户学习课程不需要安装依赖；只有修改课程数据、重建教材或运行 QA 时才需要开发环境。

```bash
python -m pip install -r requirements-dev.txt
python scripts/build.py
python scripts/qa.py
node --check assets/app.js
```

构建 Release 资产：

```bash
python scripts/package_release.py
```

当前前端使用原生 HTML/CSS/JavaScript，不依赖前端框架。麻将牌图形由 SVG 生成，学习进度保存在浏览器本地。

## Contributing

Bug、规则差异、翻译、可访问性和教学改进都欢迎提交。提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

如果是规则或结算问题，Issue 中最好包含游戏/房间版本、完整手牌或行动时间轴、已公开牌、预期结果、实际结果，以及可公开核验的来源。策略讨论请区分“可证明结论”“条件模型”和“需要数据验证的经验假设”。

## License

本项目的原创代码、教材文本、课程结构和练习以 [MIT License](LICENSE) 开源。

`assets/rules/` 中的第三方规则截图及其他明确标注的第三方材料仍归各自权利人所有，不因本仓库采用 MIT License 而被重新授权。

## Credits

项目由 [@jyu-zhou](https://github.com/jyu-zhou) 发起并维护。

规则主线以当前游戏内规则页和番型表为准；腾讯《欢乐麻将》2016 川麻赛事规则仅用于交叉核对部分历史公开机制，不用于覆盖当前项目中已经明确的计分规则。

- [腾讯《欢乐麻将》2016 川麻赛事规则](https://majiang.qq.com/webplat/info/news_version3/7207/25932/25972/m16557/201611/523252.shtml)
