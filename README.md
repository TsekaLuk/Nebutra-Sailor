<div align="right">
  <strong>English</strong> | <a href="README.zh-CN.md">简体中文</a>
</div>

<div align="center">
  <br />
  <a href="https://nebutra.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" width="280">
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-horizontal-en.svg" width="280">
      <img alt="Nebutra" src="packages/brand/assets/logo/logo-horizontal-en.svg" width="280">
    </picture>
  </a>
  <br />
  <br />
  <h3>The Open-Source Enterprise SaaS Platform</h3>
  <br />
  <p>
    <a href="https://nebutra.com"><strong>Website</strong></a> · 
    <a href="#-introduction"><strong>Introduction</strong></a> · 
    <a href="#-tech-stack"><strong>Tech Stack</strong></a> · 
    <a href="#-getting-started"><strong>Quick Start</strong></a> · 
    <a href="#-contributing"><strong>Contributing</strong></a>
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
      <img src="https://img.shields.io/badge/license-MIT%20%2B%20Commons%20Clause-6366f1?style=for-the-badge" alt="License" />
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

## 📚 Introduction

Nebutra Sailor is an enterprise-grade, AI-native SaaS monorepo architecture designed for building modern multi-tenant platforms. It provides a battle-tested foundation for content communities, recommendation systems, e-commerce integrations, and Web3 applications.

Built with the latest technologies including Next.js 17, React 19, and Prisma 7, Sailor embraces an "AI-first" philosophy with native support for LLMs, vector search, and intelligent workflows.

### Brand Vision
Nebula • Nurture • Ultra • Future
- Nebula: Aggregate data, tools, and intelligence into usable products.
- Nurture: Incubate AI-native apps via automated toolchains and “digital employees.”
- Ultra: Ship reliable engineering and value-first outcomes.
- Future: Make AI productivity accessible to everyone.

### YC-style Pitch (at a glance)
- Problem — Teams struggle to turn AI capabilities into measurable business value: tooling sprawl, slow delivery, and high integration costs.
- Solution — An AI-first, multi-tenant SaaS foundation with RLS, vector search, MCP agents, and production patterns that ship fast and safely.
- What we build — AI product design, LLM app development, data analytics/visualization, full‑stack web. From PoC to production.
- Why now — AI platform costs are dropping while enterprise demand for measurable outcomes is rising; teams need a reliable blueprint, not just models.
- Moats — End-to-end delivery (design→data→frontend→backend→infra), opinionated patterns, and a brand system that scales (brand package, UI kit, MCP tools).
- Selected case studies —
  - Automated analytics: cut monthly reporting time by >70% and 4× faster insight delivery.
  - Vertical ERP modernization: +50% operational efficiency with traceable, real-time dashboards.
- Business model — Services (project-based) → Productized SaaS (subscriptions) → Ecosystem revenue (APIs, integrations).
- Roadmap — 0→1 PoCs → multi-tenant SaaS baselines → domain-specific agents → enterprise rollouts.
- Call to action — Build with us. hello@nebutra.com

### Why Sailor?

- **🚀 Production-Ready** — Battle-tested architecture patterns used in real enterprise deployments
- **🤖 AI-Native** — Built-in support for LLMs, embeddings, RAG, and AI agents via MCP
- **🏢 Multi-Tenant** — Row-level security, tenant isolation, and per-tenant customization out of the box
- **⚡ Modern Stack** — Next.js 17, React 19, TypeScript 5.6+, TailwindCSS 4.0
- **🔌 Extensible** — Modular microservices architecture with event-driven communication
- **🌍 Global-Ready** — i18n, CDN, edge caching, and multi-region deployment support

<br />

## 🛠️ Tech Stack

<table>
<tr>
<td><strong>🎨 Frontend</strong></td>
<td>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_17-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
</td>
</tr>
<tr>
<td><strong>🔐 Auth</strong></td>
<td>
  <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" /></a>
  <img src="https://img.shields.io/badge/Multi--tenant_Orgs-gray?style=flat-square" alt="Multi-tenant" />
</td>
</tr>
<tr>
<td><strong>⚙️ BFF</strong></td>
<td>
  <a href="https://hono.dev/"><img src="https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white" alt="Hono" /></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma_7-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" /></a>
  <a href="https://zod.dev/"><img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" /></a>
</td>
</tr>
<tr>
<td><strong>🗄️ Database</strong></td>
<td>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" /></a>
  <img src="https://img.shields.io/badge/pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="pgvector" />
  <img src="https://img.shields.io/badge/RLS-gray?style=flat-square" alt="RLS" />
</td>
</tr>
<tr>
<td><strong>⚡ Cache</strong></td>
<td>
  <a href="https://upstash.com/"><img src="https://img.shields.io/badge/Upstash_Redis-00E9A3?style=flat-square&logo=upstash&logoColor=black" alt="Upstash" /></a>
  <img src="https://img.shields.io/badge/Rate_Limiting-gray?style=flat-square" alt="Rate Limiting" />
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
<td><strong>💳 Payments</strong></td>
<td>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white" alt="Stripe" /></a>
</td>
</tr>
<tr>
<td><strong>📧 Email</strong></td>
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
<td><strong>🛡️ CDN/Security</strong></td>
<td>
  <a href="https://cloudflare.com/"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
  <img src="https://img.shields.io/badge/WAF-gray?style=flat-square" alt="WAF" />
  <img src="https://img.shields.io/badge/R2_Storage-gray?style=flat-square" alt="R2" />
  <img src="https://img.shields.io/badge/Turnstile-gray?style=flat-square" alt="Turnstile" />
</td>
</tr>
<tr>
<td><strong>🔄 Workflows</strong></td>
<td>
  <a href="https://inngest.com/"><img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square" alt="Inngest" /></a>
</td>
</tr>
<tr>
<td><strong>📊 Monitoring</strong></td>
<td>
  <a href="https://sentry.io/"><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white" alt="Sentry" /></a>
  <a href="https://opentelemetry.io/"><img src="https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" /></a>
</td>
</tr>
<tr>
<td><strong>🚀 Deployment</strong></td>
<td>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" alt="Vercel" /></a>
  <a href="https://turbo.build/"><img src="https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white" alt="Turborepo" /></a>
</td>
</tr>
</table>
<br />

## 📂 Project Structure

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

<br />

## 🚀 Getting Started

### Prerequisites

<table>
<tr><td><strong>Node.js</strong></td><td><code>v20+</code></td></tr>
<tr><td><strong>pnpm</strong></td><td><code>v9+</code></td></tr>
<tr><td><strong>Python</strong></td><td><code>3.11+</code> <sub>(for microservices)</sub></td></tr>
</table>

### Quick Start

```bash
# Clone the repository
git clone https://github.com/TsekaLuk/Nebutra-Sailor.git
cd Nebutra-Sailor

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client & run dev servers
pnpm db:generate && pnpm dev
```

### 💻 Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm build` | Build all packages (auto-syncs brand assets) |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Type check all packages |
| `pnpm db:studio` | Open Prisma Studio |
| `pnpm brand:sync` | Sync brand assets to apps |

<br />

## 🤝 Contributing

We love our contributors! Here's how you can help:

| | |
|---|---|
| 🐛 **Report Bugs** | [Open an issue](https://github.com/TsekaLuk/Nebutra-Sailor/issues) if you encounter a bug |
| 💡 **Feature Requests** | Suggest new features via issues |
| 🔧 **Pull Requests** | Submit PRs to add features or fix bugs |

### Development Workflow

```
1️⃣ Fork the repository
2️⃣ Create a feature branch (git checkout -b feat/amazing-feature)
3️⃣ Commit your changes (git commit -m 'feat: add amazing feature')
4️⃣ Push to the branch (git push origin feat/amazing-feature)
5️⃣ Open a Pull Request
```

<br />

## 📄 License

This project is licensed under the **MIT License with Commons Clause**.

### What this means:

- ✅ **Free to use** for personal projects, learning, and internal tools
- ✅ **Free to modify** and create derivative works
- ✅ **Free to distribute** with attribution
- ⚠️ **Commercial use requires open source** — If you use this repository in a commercial product, the complete source code of your product must be made publicly available under the same license terms
- 🏢 **Exemption** — Wuxi Yunyu Intelligent Technology Co., Ltd. (无锡云毓智能科技有限公司), Nebutra Intelligence, and their affiliated organizations are exempt from the commercial open-source requirement

For commercial licensing inquiries, please contact us.

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
    <sub>Built with ❤️ by <a href="https://nebutra.com"><strong>Nebutra Intelligence</strong></a></sub>
  </p>
  <p>
    <sub>© 2024-present <strong>Wuxi Yunyu Intelligent Technology Co., Ltd.</strong></sub>
  </p>
  <br />
  <p>
    <a href="https://nebutra.com">Website</a> ·
    <a href="https://twitter.com/nebutra">Twitter</a> ·
    <a href="https://discord.gg/nebutra">Discord</a> ·
    <a href="mailto:hello@nebutra.com">Contact</a>
  </p>
</div>
