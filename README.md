# Mimosa 官网

<p align="center">
  <img src="/public/favicon.svg" width="100" height="100" alt="Mimosa Logo">
</p>

<h1 align="center">Mimosa</h1>
<p align="center">新一代智能社交平台</p>

## 📋 项目概述

Mimosa 官网是一个现代化的企业级网站，为用户提供品牌展示、功能介绍、多平台下载等服务。采用 Vue 3 + TypeScript + Vite 技术栈，具有响应式设计、流畅的动画效果和优秀的用户体验。

## ✨ 核心特性

- **品牌展示**：现代化的品牌形象，突出核心价值观
- **全平台支持**：Android、iOS、Windows、macOS、Linux 多平台下载
- **响应式设计**：完美适配 PC、平板、移动设备
- **视觉效果**：玻璃表面效果、电光边框、流体光标等高级视觉效果
- **性能优化**：代码分割、资源压缩、懒加载等优化策略
- **TypeScript**：类型安全，提高代码质量
- **组件化**：模块化架构，易于维护和扩展

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue.js | 3.5.13 | 前端框架 |
| TypeScript | 5.6.2 | 类型系统 |
| Vite | 6.0.5 | 构建工具 |
| Vue Router | 4.5.0 | 路由管理 |
| Pinia | 2.3.0 | 状态管理 |
| Element Plus | 2.9.1 | UI 组件库 |
| SCSS | - | 样式预处理器 |

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 yarn/pnpm

### 安装

```bash
# 克隆仓库
git clone https://github.com/Mimosa-X/Mimosa-web.git

# 进入项目目录
cd Mimosa-web

# 安装依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 访问地址
# http://localhost:5173
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
Mimosa-web/
├── public/             # 静态资源
│   ├── favicon.svg     # 网站图标
│   └── ...
├── src/                # 源代码
│   ├── assets/         # 静态资源（会被构建工具处理）
│   ├── components/     # 组件
│   │   ├── effects/    # 特效组件
│   │   ├── layout/     # 布局组件
│   │   └── sections/   # 页面区块组件
│   ├── router/         # 路由配置
│   ├── stores/         # 状态管理
│   ├── views/          # 页面视图
│   ├── App.vue         # 根组件
│   └── main.ts         # 入口文件
├── index.html          # 入口 HTML
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
├── DEPLOY_TO_VERCEL.md # Vercel 部署指南
├── LOCAL_DEPLOYMENT.md # 本地部署指南
└── README.md           # 项目说明
```

## 🌐 部署

### Vercel 部署

详细步骤请参考 [DEPLOY_TO_VERCEL.md](DEPLOY_TO_VERCEL.md)

### 本地部署

详细步骤请参考 [LOCAL_DEPLOYMENT.md](LOCAL_DEPLOYMENT.md)

## 🎨 设计特色

### 视觉效果

- **玻璃表面效果**：现代化的毛玻璃界面
- **电光边框**：动态发光边框动画
- **流体光标**：鼠标跟随的流体粒子效果
- **渐变色彩**：品牌特色的渐变配色方案

### 响应式设计

- **PC 端**：完整功能展示，丰富的交互效果
- **平板端**：适配中等屏幕，优化布局
- **移动端**：简洁布局，触控友好的交互

## 📱 多平台下载

- **Android**：APK 直装，支持自动更新
- **iOS**：App Store 下载，TestFlight 测试
- **Windows**：原生应用，系统通知支持
- **macOS**：原生体验，Touch Bar 支持
- **Linux**：开源社区支持，多种包格式

## 🤝 贡献

1. Fork 本仓库
2. 创建 feature 分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- **官方网站**：[https://mimosa.com](https://mimosa.com)
- **GitHub**：[https://github.com/Mimosa-X/Mimosa-web](https://github.com/Mimosa-X/Mimosa-web)
- **邮箱**：contact@mimosa.com

---

<p align="center">
  <img src="/public/favicon.svg" width="60" height="60" alt="Mimosa Logo">
  <br>
  <strong>连接世界，分享精彩生活</strong>
</p>
