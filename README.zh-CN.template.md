<div align="right">
  <a href="README.md">English</a> | <strong>简体中文</strong>
</div>

<div align="center">
  <a href="https://{{domains.landing}}">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" />
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-horizontal-zh.svg" />
      <img alt="{{brand.name}}" src="packages/brand/assets/logo/logo-horizontal-zh.svg" width="320" />
    </picture>
  </a>
  <br />
  <br />
  <h3>{{brand.tagline}}</h3>
  <br />
  <p>
    <a href="https://{{domains.landing}}"><strong>官网</strong></a> · 
    <a href="#简介"><strong>简介</strong></a> · 
    <a href="#技术栈"><strong>技术栈</strong></a> · 
    <a href="#快速开始"><strong>快速开始</strong></a> · 
    <a href="#参与贡献"><strong>贡献</strong></a>
  </p>
  <p>
    <a href="https://github.com/{{repo.full}}/stargazers">
      <img src="https://img.shields.io/github/stars/{{repo.full}}?style=for-the-badge&logo=github&color=6366f1&logoColor=fff" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/{{repo.full}}/network/members">
      <img src="https://img.shields.io/github/forks/{{repo.full}}?style=for-the-badge&logo=github&color=14b8a6&logoColor=fff" alt="GitHub Forks" />
    </a>
    <a href="https://github.com/{{repo.full}}/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/许可证-MIT%20%2B%20公共条款-6366f1?style=for-the-badge" alt="License" />
    </a>
  </p>
</div>

<br />
<br />

## 简介

{{brand.name}} 是一个企业级、AI 原生的 SaaS 单体仓库架构，专为构建现代多租户平台而设计。它为内容社区、推荐系统、电商集成和 Web3 应用提供了经过实战检验的基础设施。

采用最新技术栈构建，包括 Next.js 17、React 19 和 Prisma 7，秉承「AI 优先」的理念，原生支持大语言模型、向量搜索和智能工作流。

### 品牌愿景

{{brand.vision}}

### 为什么选择 {{brand.name}}？

- **🚀 生产就绪** — 经过实际企业部署验证的架构模式
- **🤖 AI 原生** — 内置 LLM、Embeddings、RAG 和 AI Agent（MCP）支持
- **🏢 多租户** — 开箱即用的行级安全、租户隔离和租户定制
- **⚡ 现代技术栈** — Next.js 17、React 19、TypeScript 5.6+、TailwindCSS 4.0
- **🔌 可扩展** — 模块化微服务架构，事件驱动通信
- **🌍 全球化** — 国际化、CDN、边缘缓存、多区域部署支持
- **📊 实战成效** — 交付项目中，报表时间降幅 >70%、洞察交付提速 4×；运营效率提升 ~50%
- **🦄 面向独角兽** — 从 PoC 到上线的工程范式，兼顾速度与可靠性

## 亮点

<table>
  <tr>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/ai.svg" width="28" alt="AI" /><br />
      <strong>AI 原生</strong>
      <br />内置 LLM、向量检索、MCP Agents，现代 AI 应用的一等公民。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/tenants.svg" width="28" alt="Tenants" /><br />
      <strong>多租户为先</strong>
      <br />租户上下文、RLS、缓存与限流按租户隔离。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/enterprise.svg" width="28" alt="Enterprise" /><br />
      <strong>企业级工程</strong>
      <br />Cloudflare WAF/R2、Inngest 工作流、Sentry/Otel、Vercel 部署。
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/workflows.svg" width="28" alt="Workflows" /><br />
      <strong>工作流</strong>
      <br />后台任务、定时、事件总线。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/security.svg" width="28" alt="Security" /><br />
      <strong>安全</strong>
      <br />RLS、WAF、Turnstile、多租户隔离。
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/toolkit.svg" width="28" alt="Toolkit" /><br />
      <strong>工具集</strong>
      <br />UI 套件、品牌包、脚本与预设。
    </td>
  </tr>
</table>

## 技术栈

<table>
<tr>
<td><strong>前端</strong></td>
<td>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_17-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
</td>
</tr>
<tr>
<td><strong>认证</strong></td>
<td>
  <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" /></a>
  <img src="https://img.shields.io/badge/多租户组织-gray?style=flat-square" alt="Multi-tenant" />
</td>
</tr>
<tr>
<td><strong>BFF 层</strong></td>
<td>
  <a href="https://hono.dev/"><img src="https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white" alt="Hono" /></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma_7-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" /></a>
  <a href="https://zod.dev/"><img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" /></a>
</td>
</tr>
<tr>
<td><strong>数据库</strong></td>
<td>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" /></a>
  <img src="https://img.shields.io/badge/pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="pgvector" />
  <img src="https://img.shields.io/badge/RLS-gray?style=flat-square" alt="RLS" />
</td>
</tr>
<tr>
<td><strong>AI</strong></td>
<td>
  <a href="https://sdk.vercel.ai/"><img src="https://img.shields.io/badge/Vercel_AI_SDK-black?style=flat-square&logo=vercel" alt="Vercel AI" /></a>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/Anthropic-191919?style=flat-square" alt="Anthropic" />
</td>
</tr>
<tr>
<td><strong>基础设施</strong></td>
<td>
  <a href="https://cloudflare.com/"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
  <a href="https://upstash.com/"><img src="https://img.shields.io/badge/Upstash-00E9A3?style=flat-square&logo=upstash&logoColor=black" alt="Upstash" /></a>
  <a href="https://inngest.com/"><img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square" alt="Inngest" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" alt="Vercel" /></a>
</td>
</tr>
<tr>
<td><strong>可观测性</strong></td>
<td>
  <a href="https://sentry.io/"><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white" alt="Sentry" /></a>
  <a href="https://opentelemetry.io/"><img src="https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" /></a>
</td>
</tr>
</table>

<br />

## 快速开始

### 环境要求

| 工具 | 版本 |
|------|------|
| Node.js | `v20+` |
| pnpm | `v9+` |
| Python | `3.11+` <sub>（微服务需要）</sub> |

### 安装

```bash
# 克隆仓库
git clone https://github.com/{{repo.full}}.git
cd {{repo.name}}

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env

# 生成 Prisma 客户端并启动开发服务器
pnpm db:generate && pnpm dev
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动所有应用（开发模式） |
| `pnpm build` | 构建所有包 |
| `pnpm lint` | 代码检查 |
| `pnpm typecheck` | 类型检查 |
| `pnpm db:studio` | 打开 Prisma Studio |

<br />

## 参与贡献

我们欢迎所有贡献者！

| | |
|---|---|
| **报告 Bug** | [提交 Issue](https://github.com/{{repo.full}}/issues) |
| **功能建议** | 通过 Issue 提出 |
| **提交 PR** | 添加功能或修复 Bug |

<br />

## 许可证

**MIT 许可证 + 公共条款**

| | |
|---|---|
| **免费使用** | 个人项目、学习和内部工具 |
| **可自由修改** | 创建衍生作品 |
| **可自由分发** | 需注明出处 |
| **商业使用** | 需开源 |
| **豁免** | {{license.commercialExempt}} |

<br />

---

<br />

<div align="center">
  <a href="https://{{domains.landing}}">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" width="100">
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-mono.svg" width="100">
      <img alt="{{brand.name}}" src="packages/brand/assets/logo/logo-mono.svg" width="100">
    </picture>
  </a>
  <br />
  <br />
  <sub>
    <strong>每一次提交，都在创造未来。</strong>
  </sub>
  <br />
  <br />
  <sub>© {{company.year}}-至今 {{company.nameCN}}</sub>
</div>
