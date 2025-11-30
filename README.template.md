<div align="right">
  <strong>English</strong> | <a href="README.zh-CN.md">简体中文</a>
</div>

<div align="center">
  <a href="https://{{domains.landing}}">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="packages/brand/assets/logo/logo-inverse.svg" />
      <source media="(prefers-color-scheme: light)" srcset="packages/brand/assets/logo/logo-horizontal-en.svg" />
      <img alt="{{brand.name}}" src="packages/brand/assets/logo/logo-horizontal-en.svg" width="320" />
    </picture>
  </a>
  <br />
  <br />
  <h3>{{brand.tagline}}</h3>
  <br />
  <p>
    <a href="https://{{domains.landing}}"><strong>Website</strong></a> · 
    <a href="#introduction"><strong>Introduction</strong></a> · 
    <a href="#tech-stack"><strong>Tech Stack</strong></a> · 
    <a href="#getting-started"><strong>Quick Start</strong></a> · 
    <a href="#contributing"><strong>Contributing</strong></a>
  </p>
  <p>
    <a href="https://github.com/{{repo.full}}/stargazers">
      <img src="https://img.shields.io/github/stars/{{repo.full}}?style=for-the-badge&logo=github&color=6366f1&logoColor=fff" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/{{repo.full}}/network/members">
      <img src="https://img.shields.io/github/forks/{{repo.full}}?style=for-the-badge&logo=github&color=14b8a6&logoColor=fff" alt="GitHub Forks" />
    </a>
    <a href="https://github.com/{{repo.full}}/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT%20%2B%20Commons%20Clause-6366f1?style=for-the-badge" alt="License" />
    </a>
  </p>
</div>

<br />
<br />

## Introduction

{{brand.name}} is an enterprise-grade, AI-native SaaS monorepo architecture designed for building modern multi-tenant platforms. It provides a battle-tested foundation for content communities, recommendation systems, e-commerce integrations, and Web3 applications.

Built with the latest technologies including Next.js 17, React 19, and Prisma 7, it embraces an "AI-first" philosophy with native support for LLMs, vector search, and intelligent workflows.

### Brand Vision

{{brand.vision}}

### Why {{brand.name}}?

- **🚀 Production-Ready** — Battle-tested architecture patterns used in real enterprise deployments
- **🤖 AI-Native** — Built-in support for LLMs, embeddings, RAG, and AI agents via MCP
- **🏢 Multi-Tenant** — Row-level security, tenant isolation, and per-tenant customization out of the box
- **⚡ Modern Stack** — Next.js 17, React 19, TypeScript 5.6+, TailwindCSS 4.0
- **🔌 Extensible** — Modular microservices architecture with event-driven communication
- **🌍 Global-Ready** — i18n, CDN, edge caching, and multi-region deployment support
- **📊 Proven Impact** — Delivered projects have shown >70% reduction in manual reporting time with 4× faster insights
- **🦄 For Unicorns** — PoC‑to‑production patterns that balance velocity with reliability

## Highlights

<table>
  <tr>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/ai.svg" width="28" alt="AI" /><br />
      <strong>AI‑native</strong>
      <br />LLMs, vector search, MCP agents. First‑class patterns for modern AI apps.
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/tenants.svg" width="28" alt="Tenants" /><br />
      <strong>Multi‑tenant by default</strong>
      <br />Tenant context, RLS, scoped caching and rate limits baked in.
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/enterprise.svg" width="28" alt="Enterprise" /><br />
      <strong>Enterprise‑ready</strong>
      <br />Cloudflare WAF/R2, Inngest workflows, Sentry/Otel, Vercel deployments.
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/workflows.svg" width="28" alt="Workflows" /><br />
      <strong>Workflows</strong>
      <br />Background jobs, cron, events with Inngest and event bus.
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/security.svg" width="28" alt="Security" /><br />
      <strong>Security</strong>
      <br />RLS, WAF, Turnstile, isolation by tenant.
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/toolkit.svg" width="28" alt="Toolkit" /><br />
      <strong>Toolkit</strong>
      <br />UI kit, brand package, dev scripts, and presets.
    </td>
  </tr>
</table>

## Tech Stack

<table>
<tr>
<td><strong>Frontend</strong></td>
<td>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_17-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
</td>
</tr>
<tr>
<td><strong>Auth</strong></td>
<td>
  <a href="https://clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" /></a>
  <img src="https://img.shields.io/badge/Multi--tenant_Orgs-gray?style=flat-square" alt="Multi-tenant" />
</td>
</tr>
<tr>
<td><strong>BFF</strong></td>
<td>
  <a href="https://hono.dev/"><img src="https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white" alt="Hono" /></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma_7-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" /></a>
  <a href="https://zod.dev/"><img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" /></a>
</td>
</tr>
<tr>
<td><strong>Database</strong></td>
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
<td><strong>Infra</strong></td>
<td>
  <a href="https://cloudflare.com/"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
  <a href="https://upstash.com/"><img src="https://img.shields.io/badge/Upstash-00E9A3?style=flat-square&logo=upstash&logoColor=black" alt="Upstash" /></a>
  <a href="https://inngest.com/"><img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square" alt="Inngest" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" alt="Vercel" /></a>
</td>
</tr>
<tr>
<td><strong>Observability</strong></td>
<td>
  <a href="https://sentry.io/"><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white" alt="Sentry" /></a>
  <a href="https://opentelemetry.io/"><img src="https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" /></a>
</td>
</tr>
</table>

<br />

## Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | `v20+` |
| pnpm | `v9+` |
| Python | `3.11+` <sub>(for microservices)</sub> |

### Quick Start

```bash
# Clone the repository
git clone https://github.com/{{repo.full}}.git
cd {{repo.name}}

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client & run dev servers
pnpm db:generate && pnpm dev
```

### Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Type check all packages |
| `pnpm db:studio` | Open Prisma Studio |

<br />

## Contributing

We welcome contributions of all kinds.

| | |
|---|---|
| **Report Bugs** | [Open an issue](https://github.com/{{repo.full}}/issues) |
| **Feature Requests** | Suggest via issues |
| **Pull Requests** | Submit PRs for features or fixes |

<br />

## License

**MIT License with Commons Clause**

| | |
|---|---|
| **Free to use** | Personal projects, learning, internal tools |
| **Free to modify** | Create derivative works |
| **Free to distribute** | With attribution |
| **Commercial use** | Requires open source |
| **Exemption** | {{license.commercialExempt}} |

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
    <strong>Shipping the future, one commit at a time.</strong>
  </sub>
  <br />
  <br />
  <sub>© {{company.year}}-present {{company.name}}</sub>
</div>
