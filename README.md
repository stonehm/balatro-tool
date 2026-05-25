# Balatro Tool

Windows 桌面工具，用于管理 Balatro 游戏存档、调整游戏窗口大小、分析游戏种子。

基于 **Tauri v2**（Rust + WebView）构建。

## 功能

### 种子分析

- **种子解析** — 输入游戏种子，分析每个底注（Ante）的商店队列、卡牌包、Boss 盲注、优惠券、标签
- **多牌组/赌注支持** — 支持 15 种牌组、8 种赌注等级
- **多版本支持** — 支持 1.0.1f / 1.0.1c / 1.0.0n 三个游戏版本
- **解锁控制** — 可手动锁定/解锁小丑和优惠券，模拟不同游戏进度
- **可视化展示** — 使用 Canvas 绘制小丑、塔罗牌、星球牌、标签、优惠券等游戏素材图片
- **搜索过滤** — 支持英文逗号分隔的关键词搜索，可上下导航高亮匹配项
- **历史记录** — 自动保存最近 30 条分析记录，点击即可快速重新加载参数
- **多底注分析** — 可同时分析多个底注，每个底注可设置不同的商店刷新数
- **WASM 引擎** — 基于 [immolate](https://github.com/AnimateAnt/immolate) 编译的 WebAssembly 模块进行本地计算，无需联网

### 存档管理

- **一键备份** — 将当前游戏存档 `save.jkr` 快速备份到本地
- **回档恢复** — 从备份列表中选择任意存档恢复到游戏目录
- **自动清理** — 最多保留 10 份备份，超出时自动删除最旧的备份
- **删除管理** — 手动删除不需要的备份

### 窗口管理

- **游戏检测** — 自动检测 Balatro 游戏窗口的标题、位置、大小
- **百分比缩放** — 按 50%/75%/100%/125%/150% 快速调整游戏窗口大小
- **自定义缩放** — 支持 10%-500% 之间任意百分比
- **位置预设** — 保存当前窗口的位置和大小，随时一键恢复
- **工具窗口记忆** — 自动保存和恢复工具自身窗口的位置、大小、最大化状态
- **运行状态** — 顶部状态栏每 5 秒自动检测 Balatro 是否在运行

## 界面预览

应用包含三个主要标签页：

| 标签 | 功能 |
|------|------|
| 种子分析 | 输入种子 → 设置牌组/赌注/版本/底注 → 查看可视化分析结果 |
| 存档管理 | 备份/恢复/删除游戏存档 |
| 窗口管理 | 检测游戏窗口 → 缩放/保存预设 |

## 目录结构

```
balatro-tool/
├── src-tauri/               # Rust 后端（Tauri 核心）
│   ├── src/
│   │   ├── main.rs          # 入口
│   │   ├── lib.rs           # 应用初始化、命令注册、窗口状态管理
│   │   ├── error.rs         # 自定义错误类型
│   │   ├── utils/           # 工具函数
│   │   │   └── mod.rs       # 目录创建、文件名验证
│   │   ├── commands/        # Tauri IPC 命令处理
│   │   │   ├── save.rs      # 存档备份命令
│   │   │   ├── game.rs      # 游戏进程检测
│   │   │   ├── seed_history.rs # 种子历史记录持久化
│   │   │   └── window_cmds.rs # 窗口调整命令
│   │   ├── balatro/         # Balatro 业务逻辑
│   │   │   ├── save_manager.rs  # 存档管理（备份/恢复/删除）
│   │   │   └── game_checker.rs  # 进程检测（tasklist）
│   │   └── window/          # Win32 窗口管理
│   │       ├── enumber.rs   # 枚举窗口（EnumWindows）
│   │       ├── resizer.rs   # 调整窗口大小/位置（SetWindowPos）
│   │       └── config.rs    # 预设/窗口状态持久化
│   ├── Cargo.toml
│   └── tauri.conf.json
├── src/                     # 前端（HTML/CSS/JS）
│   ├── index.html           # 主页面（含内联样式）
│   ├── scripts/
│   │   └── app.js           # 主逻辑（标签页、存档、窗口、种子历史）
│   ├── seed/
│   │   ├── immolate.wasm    # Immolate WASM 模块
│   │   ├── immolate.js      # WASM 加载器
│   │   ├── seed.js          # 种子分析逻辑
│   │   └── ui.js            # 可视化渲染、搜索、图片绘制
│   └── assets/
│       └── seed-images/     # 游戏素材图片（小丑、塔罗牌、标签等）
├── package.json
└── AGENTS.md
```

## 快速开始

### 环境要求

- Windows 10+（需要 WebView2 运行时，Windows 11 自带）
- [Node.js](https://nodejs.org/) 18+
- [Rust](https://www.rust-lang.org/tools/install) 1.70+
- [Tauri v2 CLI](https://v2.tauri.app/start/prerequisites/)

### 安装与运行

```bash
# 安装前端依赖
npm install

# 开发模式（热重载）
npm run tauri dev

# 生产构建（生成 .exe）
npm run tauri build

# 仅构建 Rust 后端
cargo build --manifest-path src-tauri/Cargo.toml
```

## 技术栈

- **后端**：Rust + Tauri v2 + Win32 API
- **前端**：HTML + CSS + JavaScript（无框架依赖）
- **种子分析**：WebAssembly（immolate）

### 主要依赖

| 依赖 | 用途 |
|------|------|
| `tauri` | 应用框架 |
| `serde` / `serde_json` | 序列化 |
| `thiserror` | 错误类型 |
| `chrono` | 时间戳 |
| `dirs` | 系统目录（APPDATA 等） |
| `windows` | Win32 API 绑定（UI、Threading） |

## 架构设计

### 存档文件管理

- Balatro 存档位置：`%APPDATA%\Balatro\1\save.jkr`
- 备份存放位置：`%APPDATA%\BalatroTool\saves\`
- 备份文件名格式：`save.jkr.<unix_timestamp_ms>`
- 最大备份数：10（可配置）

### 窗口管理

- 使用 Win32 API `EnumWindows` + `GetWindowThreadProcessId` 枚举窗口
- 使用 `SetWindowPos` 调整窗口大小/位置（先置顶再取消，确保生效）
- 预设配置存储在 `%APPDATA%\BalatroTool\window-presets.json`

### 种子分析

- 前端通过 XHR 加载 `immolate.wasm`，使用 Emscripten 生成的 `immolate.js` 初始化 WASM 模块
- 分析结果通过 `outputBox` textarea 中转，由 `ui.js` 解析文本并生成可视化卡片
- 历史记录通过 Tauri IPC 持久化到 `%APPDATA%\BalatroTool\seed-history.json`

### 数据存储

| 数据 | 路径 |
|------|------|
| 存档备份 | `%APPDATA%\BalatroTool\saves\` |
| 窗口预设 | `%APPDATA%\BalatroTool\window-presets.json` |
| 窗口状态 | `%APPDATA%\BalatroTool\app-window.json` |
| 种子历史 | `%APPDATA%\BalatroTool\seed-history.json` |

### Tauri IPC API

| 命令 | 说明 |
|------|------|
| `check_game_running` | 检测 Balatro 是否在运行 |
| `list_save_files` | 列出备份存档 |
| `create_backup` | 创建存档备份 |
| `restore_save` | 恢复备份到游戏目录 |
| `delete_backup` | 删除指定备份 |
| `find_balatro_window` | 查找 Balatro 游戏窗口 |
| `resize_window` | 按 hwnd 调整窗口大小 |
| `get_presets` | 加载窗口大小预设 |
| `save_preset` | 保存窗口大小预设 |
| `remove_preset` | 删除窗口大小预设 |
| `load_app_window_state` | 加载工具窗口位置/大小 |
| `load_seed_history` | 加载种子历史记录 |
| `save_seed_history` | 保存种子历史记录 |

### 前端调用示例

```javascript
const { invoke } = window.__TAURI__.core;

// 列出存档备份
const saves = await invoke('list_save_files');

// 创建备份
await invoke('create_backup');

// 调整窗口大小
await invoke('resize_window', { hwnd: 12345, left: 0, top: 0, width: 960, height: 540 });
```

## 开发指南

### Lint 与格式化

```bash
# Rust lint 检查
cargo clippy --manifest-path src-tauri/Cargo.toml -- -D warnings

# Rust 格式检查
cargo fmt --manifest-path src-tauri/Cargo.toml -- --check

# Rust 自动格式化
cargo fmt --manifest-path src-tauri/Cargo.toml
```

### 测试

```bash
# 运行全部 Rust 测试
cargo test --manifest-path src-tauri/Cargo.toml

# 运行单个测试（按名称）
cargo test --manifest-path src-tauri/Cargo.toml -- <test_name>

# 运行指定模块的测试
cargo test --manifest-path src-tauri/Cargo.toml -- balatro

# 运行测试并显示输出
cargo test --manifest-path src-tauri/Cargo.toml -- --nocapture
```

### 代码风格

#### Rust 后端

- 使用 `cargo fmt`，默认 rustfmt 配置，最大行宽 100 字符
- 缩进：4 个空格
- 命名：类型 `UpperCamelCase`，函数/模块 `snake_case`，常量 `SCREAMING_SNAKE_CASE`
- Import 顺序：标准库 → 外部 crate → 内部模块，各组之间空一行
- 错误处理：所有地方使用 `Result<T, E>`，库代码中不要 panic
- 文件路径使用 `PathBuf`，时间戳使用 `chrono::DateTime`
- 前后端交互数据类型需 derive `Serialize`、`Deserialize`

#### 前端

- 缩进：2 个空格
- 使用 ES modules（`import`/`export`），优先 `async/await`
- 文件名 / CSS 类名：`kebab-case`
- JS 函数：`camelCase`，JS 常量：`UPPER_SNAKE_CASE`

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
feat: 添加存档备份自动清理
fix: 处理 Balatro 存档目录不存在的情况
refactor: 将存档路径解析提取为独立模块
chore: 升级 Tauri 到 v2.x
```

## 参考项目

- [TheSoul-chinese](https://github.com/qkmk/TheSoul-chinese) — Balatro 种子分析工具（中文版），种子分析和可视化部分参考了该项目
- [immolate](https://github.com/AnimateAnt/immolate) — Balatro 种子计算引擎，WASM 模块基于此项目编译
- [WindowResizer](https://github.com/imkuang/WindowResizer) — 通用窗口大小调整工具，窗口管理功能参考了该项目的实现思路
- [Bilibili - 小丑牌存档加载工具](https://www.bilibili.com/video/BV1qMiqYfEAw/) — Balatro 存档管理工具演示视频，存档管理功能的设计灵感来源

## License

MIT
