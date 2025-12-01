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
- **💳 Billing Built-in** — Database-driven plans, Stripe integration, usage metering, and feature entitlements
- **📋 Legal & Compliance** — Cookie consent, privacy controls, GDPR/CCPA compliance infrastructure
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
      <strong>Billing & Monetization</strong>
      <br />Database-driven plans, Stripe billing, usage metering, feature gates.
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/security.svg" width="28" alt="Security" /><br />
      <strong>Security & Compliance</strong>
      <br />RLS, WAF, Turnstile, GDPR/CCPA, cookie consent.
    </td>
    <td width="33%" valign="top">
      <img src="packages/brand/assets/icons/toolkit.svg" width="28" alt="Toolkit" /><br />
      <strong>Marketing UI Kit</strong>
      <br />Hero, Features, Pricing, Testimonials — conversion-optimized components.
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
<td><strong>UI / Design</strong></td>
<td>
  <a href="https://primer.style/react"><img src="https://img.shields.io/badge/Primer-24292F?style=flat-square&logo=github&logoColor=white" alt="Primer" /></a>
  <a href="https://primer.style/octicons"><img src="https://img.shields.io/badge/Octicons-24292F?style=flat-square&logo=github&logoColor=white" alt="Octicons" /></a>
  <img src="https://img.shields.io/badge/Design_Tokens-gray?style=flat-square" alt="Design Tokens" />
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
  <img src="https://img.shields.io/badge/Realtime-gray?style=flat-square" alt="Realtime" />
  <img src="https://img.shields.io/badge/RLS-gray?style=flat-square" alt="RLS" />
</td>
</tr>
<tr>
<td><strong>Cache</strong></td>
<td>
  <a href="https://upstash.com/"><img src="https://img.shields.io/badge/Upstash_Redis-00E9A3?style=flat-square&logo=redis&logoColor=white" alt="Upstash" /></a>
  <img src="https://img.shields.io/badge/Rate_Limiting-gray?style=flat-square" alt="Rate Limiting" />
</td>
</tr>
<tr>
<td><strong>AI</strong></td>
<td>
  <a href="https://sdk.vercel.ai/"><img src="https://img.shields.io/badge/Vercel_AI_SDK-black?style=flat-square&logo=vercel" alt="Vercel AI" /></a>
  <a href="https://openrouter.ai/"><img src="https://img.shields.io/badge/OpenRouter-6366F1?style=flat-square" alt="OpenRouter" /></a>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
  <img src="https://img.shields.io/badge/Anthropic-191919?style=flat-square" alt="Anthropic" />
  <img src="https://img.shields.io/badge/Google_AI-4285F4?style=flat-square&logo=google&logoColor=white" alt="Google AI" />
  <img src="https://img.shields.io/badge/SiliconFlow-6366F1?style=flat-square" alt="SiliconFlow" />
</td>
</tr>
<tr>
<td><strong>Payments</strong></td>
<td>
  <a href="https://stripe.com/"><img src="https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white" alt="Stripe" /></a>
</td>
</tr>
<tr>
<td><strong>Email</strong></td>
<td>
  <a href="https://resend.com/"><img src="https://img.shields.io/badge/Resend-black?style=flat-square" alt="Resend" /></a>
</td>
</tr>
<tr>
<td><strong>CMS</strong></td>
<td>
  <a href="https://sanity.io/"><img src="https://img.shields.io/badge/Sanity-F03E2F?style=flat-square" alt="Sanity" /></a>
</td>
</tr>
<tr>
<td><strong>CDN / Security</strong></td>
<td>
  <a href="https://cloudflare.com/"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>
  <img src="https://img.shields.io/badge/WAF-gray?style=flat-square" alt="WAF" />
  <img src="https://img.shields.io/badge/R2_Storage-gray?style=flat-square" alt="R2" />
  <img src="https://img.shields.io/badge/Turnstile-gray?style=flat-square" alt="Turnstile" />
</td>
</tr>
<tr>
<td><strong>Workflows</strong></td>
<td>
  <a href="https://inngest.com/"><img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square" alt="Inngest" /></a>
  <a href="https://n8n.io/"><img src="https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white" alt="n8n" /></a>
</td>
</tr>
<tr>
<td><strong>Analytics</strong></td>
<td>
  <a href="https://dub.co/"><img src="https://img.shields.io/badge/Dub-000000?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=" alt="Dub" /></a>
  <img src="https://img.shields.io/badge/Link_Attribution-gray?style=flat-square" alt="Link Attribution" />
  <img src="https://img.shields.io/badge/Conversions-gray?style=flat-square" alt="Conversions" />
</td>
</tr>
<tr>
<td><strong>Observability</strong></td>
<td>
  <a href="https://sentry.io/"><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white" alt="Sentry" /></a>
  <a href="https://opentelemetry.io/"><img src="https://img.shields.io/badge/OpenTelemetry-425CC7?style=flat-square&logo=opentelemetry&logoColor=white" alt="OpenTelemetry" /></a>
</td>
</tr>
<tr>
<td><strong>Deployment</strong></td>
<td>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel" alt="Vercel" /></a>
  <a href="https://turbo.build/"><img src="https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white" alt="Turborepo" /></a>
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

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `pnpm dev`         | Start all apps in dev mode                   |
| `pnpm build`       | Build all packages (auto-syncs brand assets) |
| `pnpm lint`        | Lint all packages                            |
| `pnpm typecheck`   | Type check all packages                      |
| `pnpm db:studio`   | Open Prisma Studio                           |
| `pnpm brand:sync`  | Sync brand assets to apps                    |
| `pnpm brand:init`  | Initialize white-label branding              |
| `pnpm brand:apply` | Apply custom branding                        |

<br />

## Project Structure

```
{{repo.name}}/
├── apps/
│   ├── landing-page/      # Marketing site
│   ├── web/               # Main SaaS dashboard
│   ├── studio/            # Sanity CMS
│   └── api-gateway/       # BFF layer
├── packages/
│   ├── 21st/              # shadcn/ui + 21st.dev components
│   ├── ai-providers/      # Multi-provider AI SDK (OpenRouter, OpenAI, etc)
│   ├── billing/           # Stripe billing, plans, usage metering
│   ├── brand/             # Brand assets, guidelines & programmatic tokens
│   ├── custom-ui/         # Marketing UI components (Hero, Pricing, etc.)
│   ├── design-system/     # Design tokens, marketing themes, Primer base
│   ├── legal/             # Cookie consent, privacy, GDPR/CCPA compliance
│   ├── ui/                # Lobe UI + Lobe Icons + Design System
│   ├── db/                # Prisma 7 schema & client
│   ├── supabase/          # Supabase Realtime, Storage, Edge Functions
│   ├── sanity/            # Sanity CMS client & schemas
│   ├── captcha/           # Cloudflare Turnstile integration
│   ├── storage/           # R2/S3 storage client
│   ├── cache/             # Redis caching strategies
│   ├── rate-limit/        # Multi-tenant rate limiting
│   ├── event-bus/         # Cross-service messaging
│   ├── saga/              # Distributed transactions
│   ├── mcp/               # Model Context Protocol for AI agents
│   ├── config/            # Shared configuration utilities
│   ├── errors/            # Standardized error handling
│   ├── feature-flags/     # Feature flag management
│   ├── alerting/          # Multi-channel alerting
│   ├── audit/             # Compliance audit logging
│   ├── health/            # Health check utilities
│   ├── status/            # OpenStatus integration
│   └── analytics/         # Dub-powered link tracking & conversions
├── services/
│   ├── ai/                # Python FastAPI - LLM, embeddings
│   ├── content/           # Python FastAPI - posts, feed
│   ├── recsys/            # Python - recommendation engine
│   ├── ecommerce/         # Python - Shopify/Shopline sync
│   └── web3/              # Python - blockchain indexer
├── infra/
│   ├── cloudflare/        # CDN, WAF, R2 configs
│   ├── docker/            # Container configurations
│   ├── k8s/               # Kubernetes manifests
│   ├── railway/           # Railway deployment
│   ├── terraform/         # IaC configurations
│   ├── inngest/           # TypeScript workflow definitions
│   ├── n8n/               # Visual workflow automation
│   └── observability/     # Logging, tracing, metrics
└── docs/                  # Architecture documentation
```

<br />

## White-label

Fork this repo and customize it for your own brand:

```bash
# Interactive setup wizard
pnpm brand:init

# Add your logos to brand.config/assets/

# Apply your branding
pnpm brand:apply
```

See [WHITELABEL.md](WHITELABEL.md) for full documentation.

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
