# Mimosa 官网本地部署指南

本文档详细介绍如何在本地环境部署 Mimosa 官网项目。

## 目录

- [环境要求](#环境要求)
- [安装步骤](#安装步骤)
- [开发环境启动](#开发环境启动)
- [生产环境构建](#生产环境构建)
- [本地预览构建结果](#本地预览构建结果)
- [常见问题](#常见问题)
- [项目结构](#项目结构)

---

## 环境要求

| 软件 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 18.0.0 | 推荐使用 LTS 版本 |
| npm | >= 9.0.0 | 或使用 yarn/pnpm |
| Git | 任意版本 | 用于代码管理 |
| 浏览器 | Chrome/Firefox/Edge | 最新版本 |

---

## 安装步骤

### 1. 克隆代码仓库

```bash
# 使用 HTTPS
git clone https://github.com/Mimosa-X/Mimosa-web.git

# 或使用 SSH
git clone git@github.com:Mimosa-X/Mimosa-web.git

# 进入项目目录
cd Mimosa-web
```

### 2. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 3. 配置环境变量（可选）

如果项目需要环境变量，在根目录创建 `.env` 文件：

```env
# 示例环境变量
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Mimosa
```

---

## 开发环境启动

### 1. 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

### 2. 访问开发环境

启动成功后，在浏览器中访问：
- **本地地址**：`http://localhost:5173`
- **网络地址**：`http://你的IP地址:5173`（用于其他设备访问）

### 3. 开发模式特性

- **热重载**：修改代码后自动刷新页面
- **TypeScript 类型检查**：实时检测类型错误
- **ESLint**：代码质量检查
- **Source Map**：便于调试

---

## 生产环境构建

### 1. 执行构建命令

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

### 2. 构建输出

构建完成后，生成的静态文件会放在 `dist` 目录中：

```
dist/
├── assets/           # 静态资源文件
├── index.html        # 入口 HTML
└── ...
```

### 3. 构建优化

- **代码压缩**：JavaScript、CSS、HTML 自动压缩
- **资源哈希**：静态资源文件名添加哈希值，支持浏览器缓存
- **代码分割**：按模块分割代码，减少初始加载体积
- **Tree Shaking**：移除未使用的代码

---

## 本地预览构建结果

### 1. 启动预览服务器

```bash
# 使用 npm
npm run preview

# 或使用 yarn
yarn preview

# 或使用 pnpm
pnpm preview
```

### 2. 访问预览

在浏览器中访问：`http://localhost:4173`

### 3. 预览模式特性

- 模拟生产环境的静态资源加载
- 支持路由刷新（不会 404）
- 验证构建结果是否正常

---

## 常见问题

### Q1: 安装依赖失败

**解决方案：**

```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### Q2: 开发服务器启动失败

**解决方案：**

- 检查端口 5173 是否被占用
- 确保 Node.js 版本符合要求
- 检查依赖是否安装成功

### Q3: 构建失败

**解决方案：**

- 检查 TypeScript 类型错误
- 确保所有依赖都已正确安装
- 检查项目配置文件是否正确

### Q4: 预览时路由刷新 404

**解决方案：**

- 预览服务器已配置为支持历史模式路由
- 如果部署到其他服务器，需要配置服务器重写规则

### Q5: 性能优化

**建议：**

- 使用 `npm run build` 构建生产版本
- 启用浏览器缓存
- 考虑使用 CDN 加速静态资源

---

## 项目结构

```
Mimosa-web/
├── public/             # 静态资源（不会被构建工具处理）
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
├── .env                # 环境变量（可选）
├── .gitignore          # Git 忽略文件
├── index.html          # 入口 HTML
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── README.md           # 项目说明
```

---

## 开发工具推荐

### IDE 推荐

- **Visual Studio Code**：推荐使用，支持 Vue 和 TypeScript 插件
  - 推荐插件：Volar、TypeScript Vue Plugin (Volar)、ESLint

### 浏览器插件

- **Vue DevTools**：Vue 开发调试工具
- **React DevTools**：如果使用了 React 组件
- **Redux DevTools**：如果使用了 Redux

---

## 调试技巧

### 1. 开启详细日志

```bash
# 启动开发服务器时开启详细日志
npm run dev -- --debug
```

### 2. 检查构建输出

```bash
# 构建时显示详细信息
npm run build -- --verbose
```

### 3. 性能分析

```bash
# 构建时生成性能分析报告
npm run build -- --profile
```

---

## 部署到其他环境

### 1. 部署到 Nginx

**配置示例：**

```nginx
server {
    listen 80;
    server_name mimosa.example.com;

    root /path/to/Mimosa-web/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 2. 部署到 Apache

**配置示例：**

```apache
<VirtualHost *:80>
    ServerName mimosa.example.com
    DocumentRoot /path/to/Mimosa-web/dist

    <Directory /path/to/Mimosa-web/dist>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

**创建 .htaccess 文件：**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 3. 部署到 GitHub Pages

1. 修改 `vite.config.ts`：

```typescript
export default defineConfig({
  base: '/Mimosa-web/', // 仓库名称
  // 其他配置...
})
```

2. 构建并部署：

```bash
npm run build
npx gh-pages -d dist
```

---

## 联系支持

如果在本地部署过程中遇到问题：

1. 查看控制台错误信息
2. 检查项目文档和 GitHub Issues
3. 联系项目维护者

---

**祝开发顺利！** 🚀
