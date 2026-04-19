# Mimosa 官网 Vercel 部署教程

本文档详细介绍如何将 Mimosa 官网项目部署到 Vercel 平台。

## 目录

- [准备工作](#准备工作)
- [方式一：通过 Vercel CLI 部署](#方式一通过-vercel-cli-部署)
- [方式二：通过 Git 仓库部署（推荐）](#方式二通过-git-仓库部署推荐)
- [配置说明](#配置说明)
- [常见问题](#常见问题)

---

## 准备工作

### 1. 注册 Vercel 账号

访问 [Vercel 官网](https://vercel.com) 并使用以下方式注册：
- GitHub 账号
- GitLab 账号
- Bitbucket 账号
- 邮箱注册

### 2. 安装 Vercel CLI（可选，方式一需要）

```bash
npm i -g vercel
```

### 3. 项目结构确认

确保项目包含以下关键文件：

```
Mimosa-web/
├── index.html          # 入口 HTML 文件
├── package.json        # 项目依赖和脚本
├── vite.config.ts      # Vite 配置文件
├── tsconfig.json       # TypeScript 配置
├── public/             # 静态资源
│   └── favicon.svg     # 网站图标
└── src/                # 源代码
    ├── main.ts         # 入口文件
    ├── App.vue         # 根组件
    └── ...
```

---

## 方式一：通过 Vercel CLI 部署

适用于快速测试或本地开发环境部署。

### 步骤 1：登录 Vercel

```bash
vercel login
```

按提示完成身份验证。

### 步骤 2：进入项目目录

```bash
cd c:\Users\Mimosa\OneDrive\Desktop\Mimosa-web
```

### 步骤 3：执行部署命令

```bash
vercel
```

首次部署时会提示配置：

```
? Set up and deploy "Mimosa-web"? [Y/n] y
? Which scope do you want to deploy to? [你的用户名]
? Link to existing project? [y/N] n
? What's your project name? [mimosa-official-website]
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

### 步骤 4：等待部署完成

部署成功后，会显示访问链接：

```
🔍  Inspect: https://vercel.com/[用户名]/[项目名]/[部署ID]
✅  Production: https://[项目名]-[随机字符].vercel.app
```

### 步骤 5：后续更新部署

```bash
# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

---

## 方式二：通过 Git 仓库部署（推荐）

适用于团队协作和持续集成，支持自动部署。

### 步骤 1：创建 Git 仓库

#### 使用 GitHub（推荐）

1. 访问 [GitHub](https://github.com) 创建新仓库
2. 仓库名称建议：`mimosa-official-website`
3. 选择公开或私有仓库

#### 初始化本地仓库并推送

```bash
# 进入项目目录
cd c:\Users\Mimosa\OneDrive\Desktop\Mimosa-web

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Mimosa official website"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/[你的用户名]/mimosa-official-website.git

# 推送到主分支
git branch -M main
git push -u origin main
```

### 步骤 2：在 Vercel 导入项目

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 **"Add New Project"** 按钮
3. 选择 **"Import Git Repository"**
4. 授权 Vercel 访问你的 GitHub 账号
5. 找到并选择 `mimosa-official-website` 仓库
6. 点击 **"Import"**

### 步骤 3：配置项目

在配置页面填写以下信息：

| 配置项 | 值 | 说明 |
|--------|-----|------|
| **Framework Preset** | `Vite` | 自动识别或手动选择 |
| **Root Directory** | `./` | 项目根目录 |
| **Build Command** | `npm run build` | 构建命令 |
| **Output Directory** | `dist` | 构建输出目录 |
| **Install Command** | `npm install` | 依赖安装命令 |

### 步骤 4：环境变量（可选）

如果项目需要环境变量，点击 **"Environment Variables"** 添加：

```
# 示例环境变量
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Mimosa
```

### 步骤 5：部署

点击 **"Deploy"** 按钮，等待构建和部署完成。

部署成功后，Vercel 会提供：
- 生产环境链接：`https://mimosa-official-website.vercel.app`
- 每次推送代码会自动触发重新部署

---

## 配置说明

### vercel.json 配置（可选）

在项目根目录创建 `vercel.json` 文件，用于自定义部署配置：

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "version": 2,
  "name": "mimosa-official-website",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### 路由配置说明

由于本项目使用 Vue Router 的 history 模式，需要配置路由重写规则，确保刷新页面时不会 404。

### 自定义域名（可选）

1. 在 Vercel Dashboard 选择项目
2. 点击 **"Settings"** → **"Domains"**
3. 输入你的域名（如 `www.mimosa.com`）
4. 按提示添加 DNS 记录

---

## 常见问题

### Q1: 构建失败，提示 "Cannot find module"

**解决方案：**

```bash
# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install

# 本地测试构建
npm run build
```

### Q2: 部署后页面空白或资源加载失败

**解决方案：**

检查 `vite.config.ts` 中的 `base` 配置：

```typescript
export default defineConfig({
  // 如果使用自定义域名，保持默认
  base: '/',
  
  // 如果使用子路径，需要配置
  // base: '/subpath/',
})
```

### Q3: 刷新页面出现 404

**解决方案：**

确保已创建 `vercel.json` 并配置路由重写：

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Q4: 如何配置环境变量？

**方式一：Vercel Dashboard**

1. 进入项目 → Settings → Environment Variables
2. 添加变量名和值
3. 选择环境（Production/Preview/Development）

**方式二：Vercel CLI**

```bash
vercel env add VITE_API_URL production
```

### Q5: 如何回滚到之前的版本？

1. 进入 Vercel Dashboard
2. 选择项目 → Deployments
3. 找到要回滚的版本
4. 点击右侧菜单 → **"Promote to Production"**

### Q6: 构建时间过长如何优化？

1. 使用 `vercel.json` 配置构建缓存
2. 优化依赖，移除未使用的包
3. 使用 `npm ci` 代替 `npm install`

```json
{
  "installCommand": "npm ci"
}
```

---

## 部署检查清单

部署前请确认：

- [ ] 本地 `npm run build` 构建成功
- [ ] `dist` 目录包含所有必要文件
- [ ] 已配置路由重写规则（Vue Router history 模式需要）
- [ ] 环境变量已正确设置（如有需要）
- [ ] 已测试生产构建的本地预览 `npm run preview`

---

## 相关链接

- [Vercel 官方文档](https://vercel.com/docs)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vue Router History 模式](https://router.vuejs.org/guide/essentials/history-mode.html)

---

## 联系支持

如果在部署过程中遇到问题：

1. 查看 Vercel 构建日志获取详细错误信息
2. 访问 [Vercel 社区](https://github.com/vercel/community) 寻求帮助
3. 检查项目 GitHub Issues（如有）

---

**祝部署顺利！** 🚀
