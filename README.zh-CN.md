<div align="right">
  <a href="README.md">English</a> | <strong>简体中文</strong>
</div>

<div align="center">
  <br />
  <a href="https://nebutra.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" width="280">
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-horizontal-zh.svg" width="280">
      <img alt="Nebutra" src="packages/brand/assets/logo/logo-horizontal-zh.svg" width="280">
    </picture>
  </a>
  <br />
  <br />
  <h3>开源的企业级 AI 原生 SaaS 平台</h3>
  <br />
  <p>
    <a href="https://nebutra.com"><strong>官网</strong></a> · 
    <a href="#-简介"><strong>简介</strong></a> · 
    <a href="#%EF%B8%8F-技术栈"><strong>技术栈</strong></a> · 
    <a href="#-快速开始"><strong>快速开始</strong></a> · 
    <a href="#-参与贡献"><strong>贡献</strong></a>
  </p>
  <br />
  <p>
    <a href="https://github.com/TsekaLuk/Nebutra-Sailor/stargazers">
      <img src="https://img.shields.io/github/stars/TsekaLuk/Nebutra-Sailor?style=for-the-badge&logo=github&color=6366f1&logoColor=fff" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/TsekaLuk/Nebutra-Sailor/network/members">
      <img src="https://img.shields.io/github/forks/TsekaLuk/Nebutra-Sailor?style=for-the-badge&logo=github&color=14b8a6&logoColor=fff" alt="GitHub Forks" />
    </a>
    <a href="https://github.com/TsekaLuk/Nebutra-Sailor/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/许可证-MIT%20%2B%20公共条款-6366f1?style=for-the-badge" alt="License" />
    </a>
  </p>
  <p>
    <a href="https://twitter.com/nebutra">
      <img src="https://img.shields.io/twitter/follow/nebutra?style=flat-square&logo=x&color=18181b&logoColor=fff" alt="Twitter" />
    </a>
    <a href="https://discord.gg/nebutra">
      <img src="https://img.shields.io/discord/000000000000000000?style=flat-square&logo=discord&color=5865F2&logoColor=fff&label=Discord" alt="Discord" />
    </a>
  </p>
</div>

<br />
<br />

## 📖 简介

Nebutra Sailor 是一个企业级、AI 原生的 SaaS 单体仓库架构，专为构建现代多租户平台而设计。它为内容社区、推荐系统、电商集成和 Web3 应用提供了经过实战检验的基础设施。

采用最新技术栈构建，包括 Next.js 17、React 19 和 Prisma 7，Sailor 秉承「AI 优先」的理念，原生支持大语言模型、向量搜索和智能工作流。

### 为什么选择 Sailor？

- **🚀 生产就绪** — 经过实际企业部署验证的架构模式
- **🤖 AI 原生** — 内置 LLM、Embeddings、RAG 和 AI Agent（MCP）支持
- **🏢 多租户** — 开箱即用的行级安全、租户隔离和租户定制
- **⚡ 现代技术栈** — Next.js 17、React 19、TypeScript 5.6+、TailwindCSS 4.0
- **🔌 可扩展** — 模块化微服务架构，事件驱动通信
- **🌍 全球化** — 国际化、CDN、边缘缓存、多区域部署支持

<br />

## 🛠️ 技术栈

<table>
<tr>
<td><strong>🎨 前端</strong></td>
<td>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_17-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
</td>
</tr>
<tr>
<td><strong>🔐 认证</strong></td>
<td>
  <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" /></a>
  <img src="https://img.shields.io/badge/多租户组织-gray?style=flat-square" alt="Multi-tenant" />
</td>
</tr>
<tr>
<td><strong>⚙️ BFF 层</strong></td>
<td>
  <a href="https://hono.dev/"><img src="https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white" alt="Hono" /></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma_7-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" /></a>
  <a href="https://zod.dev/"><img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" /></a>
</td>
</tr>
<tr>
<td><strong>🗄️ 数据库</strong></td>
<td>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" /></a>
  <img src="https://img.shields.io/badge/pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="pgvector" />
  <img src="https://img.shields.io/badge/RLS-gray?style=flat-square" alt="RLS" />
</td>
</tr>
<tr>
<td><strong>⚡ 缓存</strong></td>
<td>
  <a href="https://upstash.com/"><img src="https://img.shields.io/badge/Upstash_Redis-00E9A3?style=flat-square&logo=upstash&logoColor=black" alt="Upstash" /></a>
  <img src="https://img.shields.io/badge/限流-gray?style=flat-square" alt="Rate Limiting" />
</td>
</tr>
<tr>
<td><strong>🤖 AI</strong></td>
<td>
  <a href="https://sdk.vercel.ai/"><img src="https://img.shields.io/badge/Vercel_AI_SDK-black?style=flat-square&logo=vercel" alt="Vercel AI" /></a>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/Anthropic-191919?style=flat-square" alt="Anthropic" />
</td>
</tr>
<tr>
<td><strong>💳 支付</strong></td>
<td>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white" alt="Stripe" /></a>
</td>
</tr>
<tr>
<td><strong>📧 邮件</strong></td>
<td>
  <a href="https://resend.com/"><img src="https://img.shields.io/badge/Resend-black?style=flat-square" alt="Resend" /></a>
</td>
</tr>
<tr>
<td><strong>📝 CMS</strong></td>
<td>
  <a href="https://sanity.io/"><img src="https://img.shields.io/badge/Sanity-F03E2F?style=flat-square&logo=sanity&logoColor=white" alt="Sanity" /></a>
</td>
</tr>
<tr>
<td><strong>🛡️ CDN/安全</strong></td>
<td>
  <a href="https://cloudflare.com/"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
  <img src="https://img.shields.io/badge/WAF-gray?style=flat-square" alt="WAF" />
  <img src="https://img.shields.io/badge/R2_存储-gray?style=flat-square" alt="R2" />
  <img src="https://img.shields.io/badge/Turnstile-gray?style=flat-square" alt="Turnstile" />
</td>
</tr>
<tr>
<td><strong>🔄 工作流</strong></td>
<td>
  <a href="https://inngest.com/"><img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square" alt="Inngest" /></a>
</td>
</tr>
<tr>
<td><strong>📊 监控</strong></td>
<td>
  <a href="https://sentry.io/"><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white" alt="Sentry" /></a>
  <a href="https://opentelemetry.io/"><img src="https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" /></a>
</td>
</tr>
<tr>
<td><strong>🚀 部署</strong></td>
<td>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" alt="Vercel" /></a>
  <a href="https://turbo.build/"><img src="https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white" alt="Turborepo" /></a>
</td>
</tr>
</table>

<br />

## 📂 项目结构

```
Nebutra-Sailor/
├── apps/
│   ├── landing-page/      # 营销官网 (nebutra.com)
│   ├── web/               # SaaS 主控台 (app.nebutra.com)
│   ├── studio/            # Sanity CMS (studio.nebutra.com)
│   └── api-gateway/       # BFF 层 (api.nebutra.com)
├── packages/
│   ├── brand/             # 统一品牌资产与组件
│   ├── ui/                # Lobe UI + Lobe Icons + 设计系统
│   ├── db/                # Prisma 7 Schema 与客户端
│   ├── captcha/           # Cloudflare Turnstile 集成
│   ├── storage/           # R2/S3 存储客户端
│   ├── cache/             # Redis 缓存策略
│   ├── rate-limit/        # 多租户限流
│   ├── event-bus/         # 跨服务消息总线
│   ├── saga/              # 分布式事务
│   └── mcp/               # Model Context Protocol（AI Agent）
├── services/
│   ├── ai/                # Python FastAPI - LLM、Embeddings
│   ├── content/           # Python FastAPI - 内容、Feed
│   ├── recsys/            # Python - 推荐引擎
│   ├── ecommerce/         # Python - Shopify/Shopline 同步
│   └── web3/              # Python - 区块链索引器
├── infra/
│   ├── cloudflare/        # CDN、WAF、R2 配置
│   ├── database/          # RLS 策略
│   ├── terraform/         # IaC
│   ├── k8s/               # Kubernetes 清单
│   ├── inngest/           # 工作流定义
│   └── observability/     # 日志、链路追踪、指标
└── docs/                  # 架构文档
```

<br />

## 🚀 快速开始

### 环境要求

<table>
<tr><td><strong>Node.js</strong></td><td><code>v20+</code></td></tr>
<tr><td><strong>pnpm</strong></td><td><code>v9+</code></td></tr>
<tr><td><strong>Python</strong></td><td><code>3.11+</code> <sub>（微服务需要）</sub></td></tr>
</table>

### 安装

```bash
# 克隆仓库
git clone https://github.com/TsekaLuk/Nebutra-Sailor.git
cd Nebutra-Sailor

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env

# 生成 Prisma 客户端并启动开发服务器
pnpm db:generate && pnpm dev
```

### 💻 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动所有应用（开发模式） |
| `pnpm build` | 构建所有包（自动同步品牌资产） |
| `pnpm lint` | 代码检查 |
| `pnpm typecheck` | 类型检查 |
| `pnpm db:studio` | 打开 Prisma Studio |
| `pnpm brand:sync` | 同步品牌资产到各应用 |

<br />

## 🤝 参与贡献

我们欢迎所有贡献者！以下是参与方式：

| | |
|---|---|
| 🐛 **报告 Bug** | 遇到问题请[提交 Issue](https://github.com/TsekaLuk/Nebutra-Sailor/issues) |
| 💡 **功能建议** | 通过 Issue 提出新功能建议 |
| 🔧 **提交 PR** | 提交 Pull Request 添加功能或修复 Bug |

### 开发流程

```
1️⃣ Fork 本仓库
2️⃣ 创建功能分支 (git checkout -b feat/amazing-feature)
3️⃣ 提交更改 (git commit -m 'feat: 添加精彩功能')
4️⃣ 推送分支 (git push origin feat/amazing-feature)
5️⃣ 发起 Pull Request
```

<br />

## 📄 许可证

本项目采用 **MIT 许可证 + 公共条款**。

| | |
|---|---|
| ✅ **免费使用** | 个人项目、学习和内部工具 |
| ✅ **可自由修改** | 创建衍生作品 |
| ✅ **可自由分发** | 需注明出处 |
| ⚠️ **商业使用需开源** | 商业产品完整源代码必须以相同许可条款公开 |
| 🏢 **豁免** | 无锡云毓智能科技有限公司、Nebutra Intelligence 及其关联组织 |

如需商业授权，请与我们联系。

<br />

---

<br />

<div align="center">
  <a href="https://nebutra.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" width="120">
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-mono.svg" width="120">
      <img alt="Nebutra" src="packages/brand/assets/logo/logo-mono.svg" width="120">
    </picture>
  </a>
  <br />
  <br />
  <p>
    <sub>由 <a href="https://nebutra.com"><strong>Nebutra Intelligence</strong></a> 用 ❤️ 构建</sub>
  </p>
  <p>
    <sub>© 2024-至今 <strong>无锡云毓智能科技有限公司</strong></sub>
  </p>
  <br />
  <p>
    <a href="https://nebutra.com">官网</a> ·
    <a href="https://twitter.com/nebutra">Twitter</a> ·
    <a href="https://discord.gg/nebutra">Discord</a> ·
    <a href="mailto:hello@nebutra.com">联系我们</a>
  </p>
</div>
