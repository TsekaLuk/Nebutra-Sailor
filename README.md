<div align="center">
  <h1>Nebutra Sailor</h1>
  <p><strong>The open-source enterprise SaaS platform for AI-native applications.</strong></p>
  <p>开源的企业级 AI 原生 SaaS 平台。</p>
  <br />
  <a href="https://nebutra.com"><strong>Website »</strong></a> ·
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
  <br />
  <br />
  <a href="https://github.com/TsekaLuk/Nebutra-Sailor/stargazers">
    <img src="https://img.shields.io/github/stars/TsekaLuk/Nebutra-Sailor?style=flat&logo=github&color=f80&logoColor=fff" alt="Stars" />
  </a>
  <a href="https://github.com/TsekaLuk/Nebutra-Sailor/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT%20%2B%20Commons%20Clause-blue" alt="License" />
  </a>
  <a href="https://twitter.com/nebutra">
    <img src="https://img.shields.io/twitter/follow/nebutra?style=flat&label=%40nebutra&logo=twitter&color=0bf&logoColor=fff" alt="Twitter" />
  </a>
</div>

<br />

## Introduction

**English** | [中文](#简介)

Nebutra Sailor is an enterprise-grade, AI-native SaaS monorepo architecture designed for building modern multi-tenant platforms. It provides a battle-tested foundation for content communities, recommendation systems, e-commerce integrations, and Web3 applications.

Built with the latest technologies including Next.js 17, React 19, and Prisma 7, Sailor embraces an "AI-first" philosophy with native support for LLMs, vector search, and intelligent workflows.

### Why Sailor?

- **🚀 Production-Ready** — Battle-tested architecture patterns used in real enterprise deployments
- **🤖 AI-Native** — Built-in support for LLMs, embeddings, RAG, and AI agents via MCP
- **🏢 Multi-Tenant** — Row-level security, tenant isolation, and per-tenant customization out of the box
- **⚡ Modern Stack** — Next.js 17, React 19, TypeScript 5.6+, TailwindCSS 4.0
- **🔌 Extensible** — Modular microservices architecture with event-driven communication
- **🌍 Global-Ready** — i18n, CDN, edge caching, and multi-region deployment support

---

## 简介

[English](#introduction) | **中文**

Nebutra Sailor 是一个企业级、AI 原生的 SaaS 单体仓库架构，专为构建现代多租户平台而设计。它为内容社区、推荐系统、电商集成和 Web3 应用提供了经过实战检验的基础设施。

采用最新技术栈构建，包括 Next.js 17、React 19 和 Prisma 7，Sailor 秉承「AI 优先」的理念，原生支持大语言模型、向量搜索和智能工作流。

### 为什么选择 Sailor？

- **🚀 生产就绪** — 经过实际企业部署验证的架构模式
- **🤖 AI 原生** — 内置 LLM、Embeddings、RAG 和 AI Agent（MCP）支持
- **🏢 多租户** — 开箱即用的行级安全、租户隔离和租户定制
- **⚡ 现代技术栈** — Next.js 17、React 19、TypeScript 5.6+、TailwindCSS 4.0
- **🔌 可扩展** — 模块化微服务架构，事件驱动通信
- **🌍 全球化** — 国际化、CDN、边缘缓存、多区域部署支持

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | [Next.js 17](https://nextjs.org/) · [React 19](https://react.dev/) · [TypeScript 5.6+](https://www.typescriptlang.org/) · [TailwindCSS 4.0](https://tailwindcss.com/) · [Lobe UI](https://github.com/lobehub/lobe-ui) |
| **Auth** | [Clerk](https://clerk.com/) · Multi-tenant Organizations |
| **BFF** | [Hono](https://hono.dev/) · [Prisma 7](https://www.prisma.io/) · [Zod](https://zod.dev/) |
| **Database** | [Supabase](https://supabase.com/) (Postgres 15 + pgvector) · RLS |
| **Cache** | [Upstash](https://upstash.com/) Redis · Rate Limiting · Stampede Protection |
| **AI** | [Vercel AI SDK](https://sdk.vercel.ai/) · OpenAI · Anthropic · Vector Search |
| **Payments** | [Stripe](https://stripe.com/) · Subscriptions · Usage-based Billing |
| **Email** | [Resend](https://resend.com/) · Transactional · Marketing |
| **CMS** | [Sanity](https://sanity.io/) · Structured Content |
| **CDN/Security** | [Cloudflare](https://cloudflare.com/) · WAF · R2 Storage · Turnstile |
| **Workflows** | [Inngest](https://inngest.com/) · Background Jobs · Cron |
| **Monitoring** | [Sentry](https://sentry.io/) · [OpenTelemetry](https://opentelemetry.io/) |
| **Deployment** | [Vercel](https://vercel.com/) · [Turborepo](https://turbo.build/) |

---

## Project Structure

```
Nebutra-Sailor/
├── apps/
│   ├── landing-page/      # Marketing site (nebutra.com)
│   ├── web/               # Main SaaS dashboard (app.nebutra.com)
│   ├── studio/            # Sanity CMS (studio.nebutra.com)
│   └── api-gateway/       # BFF layer (api.nebutra.com)
├── packages/
│   ├── brand/             # Centralized brand assets & components
│   ├── ui/                # Lobe UI + Lobe Icons + Design System
│   ├── db/                # Prisma 7 schema & client
│   ├── captcha/           # Cloudflare Turnstile integration
│   ├── storage/           # R2/S3 storage client
│   ├── cache/             # Redis caching strategies
│   ├── rate-limit/        # Multi-tenant rate limiting
│   ├── event-bus/         # Cross-service messaging
│   ├── saga/              # Distributed transactions
│   └── mcp/               # Model Context Protocol for AI agents
├── services/
│   ├── ai/                # Python FastAPI - LLM, embeddings
│   ├── content/           # Python FastAPI - posts, feed
│   ├── recsys/            # Python - recommendation engine
│   ├── ecommerce/         # Python - Shopify/Shopline sync
│   └── web3/              # Python - blockchain indexer
├── infra/
│   ├── cloudflare/        # CDN, WAF, R2 configs
│   ├── database/          # RLS policies
│   ├── terraform/         # IaC
│   ├── k8s/               # Kubernetes manifests
│   ├── inngest/           # Workflow definitions
│   └── observability/     # Logging, tracing, metrics
└── docs/                  # Architecture documentation
```

---

## Getting Started

### Prerequisites

| Package | Version |
|---------|----------|
| Node.js | v20+ |
| pnpm | v9+ |
| Python | 3.11+ (for microservices) |

### Installation

```bash
# Clone the repository
git clone https://github.com/TsekaLuk/Nebutra-Sailor.git
cd Nebutra-Sailor

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
pnpm db:generate

# Run development servers
pnpm dev
```

### Key Commands

```bash
pnpm dev              # Start all apps in dev mode
pnpm build            # Build all packages (auto-syncs brand assets)
pnpm lint             # Lint all packages
pnpm typecheck        # Type check all packages
pnpm db:studio        # Open Prisma Studio
pnpm brand:sync       # Sync brand assets to apps
```

---

## Contributing

We welcome contributions! Here's how you can help:

- **🐛 Report Bugs** — [Open an issue](https://github.com/TsekaLuk/Nebutra-Sailor/issues) if you encounter a bug
- **💡 Feature Requests** — Suggest new features via issues
- **🔧 Pull Requests** — Submit PRs to add features or fix bugs

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License with Commons Clause**.

### What this means:

- ✅ **Free to use** for personal projects, learning, and internal tools
- ✅ **Free to modify** and create derivative works
- ✅ **Free to distribute** with attribution
- ⚠️ **Commercial use requires open source** — If you use this repository in a commercial product, the complete source code of your product must be made publicly available under the same license terms
- 🏢 **Exemption** — Wuxi Yunyu Intelligent Technology Co., Ltd. (无锡云毓智能科技有限公司), Nebutra Intelligence, and their affiliated organizations are exempt from the commercial open-source requirement

For commercial licensing inquiries, please contact us.

---

## 许可证

本项目采用 **MIT 许可证 + 公共条款**。

### 这意味着：

- ✅ 个人项目、学习和内部工具**免费使用**
- ✅ **可自由修改**并创建衍生作品
- ✅ **可自由分发**（需注明出处）
- ⚠️ **商业使用需开源** — 如果您在商业产品中使用本仓库，您产品的完整源代码必须以相同许可条款公开
- 🏢 **豁免条款** — 无锡云毓智能科技有限公司、Nebutra Intelligence 及其关联组织免除商业开源要求

如需商业授权，请与我们联系。

---

<div align="center">
  <br />
  <p>
    <sub>Built with ❤️ by <a href="https://nebutra.com">Nebutra Intelligence</a></sub>
  </p>
  <p>
    <sub>© 2024-present Wuxi Yunyu Intelligent Technology Co., Ltd. (无锡云毓智能科技有限公司)</sub>
  </p>
</div>
