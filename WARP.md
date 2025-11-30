# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Nebutra-Sailor is an enterprise-grade SaaS monorepo architecture supporting multi-tenant systems, AI-native features, content communities, recommendation systems, e-commerce (Shopify), and Web3 platforms.

## Tech Stack

**Apps (Vercel):** Next.js 17 (App Router), React 19, TypeScript 5.6+, TailwindCSS 4.0, Framer Motion 11+, shadcn/ui, Clerk (Auth), Vercel AI SDK

**BFF (Vercel Serverless):** Node.js 20 LTS, Hono/Express, Prisma ORM 7.x, Zod

**Infrastructure:** Supabase (Postgres 15 + pgvector), Redis (Upstash), Inngest (Workflows), Stripe (Billing), Resend (Email), Sentry/OpenTelemetry

**Microservices:** Python 3.11 (FastAPI), Go 1.22+, Rust 1.80+, Foundry/Hardhat (Web3)

## Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev                    # Run all apps in dev mode
pnpm dev --filter=web       # Run specific app
pnpm dev --filter=api-gateway

# Build
pnpm build                  # Build all packages/apps
pnpm build --filter=web

# Lint & Type Check
pnpm lint
pnpm typecheck

# Database (Prisma)
pnpm db:generate            # Generate Prisma client
pnpm db:migrate             # Run migrations
pnpm db:push                # Push schema changes
pnpm db:studio              # Open Prisma Studio

# Testing
pnpm test                   # Run all tests
pnpm test --filter=web      # Run tests for specific package

# Turborepo
turbo run build --filter=...web  # Build web and its dependencies
turbo run dev --parallel
```

## Monorepo Structure

```
Nebutra-Sailor/
├── apps/                   # Frontend apps + BFF (deploy to Vercel)
│   ├── landing-page/       # Marketing site with AI i18n
│   ├── web/                # Main SaaS dashboard (multi-tenant)
│   └── api-gateway/        # BFF: rate-limit, circuit breaker, Prisma 7
├── packages/               # Shared libraries
│   ├── design-system/      # Design tokens, Framer Motion presets
│   ├── ui/                 # shadcn/ui extended components
│   ├── db/                 # Prisma schema and client
│   ├── rate-limit/         # Multi-tenant token bucket
│   ├── cache/              # Redis strategies (TTL, lock, stampede, lazy refresh)
│   ├── event-bus/          # Cross-service event communication
│   └── saga/               # Saga pattern for distributed transactions
├── services/               # Microservices (deploy to Railway/Docker)
│   ├── ai/                 # Python FastAPI - LLM, embeddings, translate
│   ├── content/            # Python FastAPI - posts, feed, comments
│   ├── recsys/             # Python - recall/rank pipeline
│   ├── ecommerce/          # Python - Shopify/Shopline sync
│   └── web3/               # Python - blockchain indexer, listeners
├── infra/                  # IaC, observability configs
│   ├── inngest/            # Workflow definitions (cron jobs)
│   ├── supabase/           # SQL schemas, RLS policies
│   └── observability/      # Logging, tracing, metrics configs
└── docs/                   # Architecture documentation
```

## Architecture Patterns

### Multi-Tenant Flow
```
Clerk Org → BFF TenantContext Middleware → Supabase RLS
```
- Tenant context extracted from Clerk organization in `apps/api-gateway/src/middlewares/tenantContext.ts`
- All database queries scoped via Supabase Row-Level Security

### BFF Layer (`api-gateway`)
The BFF handles:
- **Rate Limiting:** Token bucket per IP + User + Tenant + API weight (`packages/rate-limit/`)
- **Circuit Breaker:** Fail-fast for downstream service failures
- **Retry Middleware:** Exponential backoff for transient errors
- Service discovery via `src/config/serviceRegistry.ts`

### Event-Driven Communication
- Microservices communicate via `packages/event-bus/`
- Event schemas defined in `packages/event-bus/schemas/`
- Producers/Subscribers pattern in each service (`services/*/producers/`, `services/*/subscribers/`)

### Saga Pattern
Distributed transactions (e-commerce orders, Web3) use orchestrated sagas:
- Orchestrator: `packages/saga/orchestrator.ts`
- Steps: reserve inventory → charge user → create record → send email
- Compensation logic for rollbacks

### Caching Strategies (`packages/cache/`)
- `ttlCache.ts` - Standard TTL-based caching
- `lockCache.ts` - Distributed locks
- `stampede.ts` - Cache stampede prevention
- `lazyRefresh.ts` - Background refresh before expiry

## App-Specific Notes

### `apps/landing-page`
- Dynamic i18n via `lib/i18n/translator.ts` → calls `api-gateway/ai/translate`
- SEO handled in `lib/seo.ts`, sitemap at `app/sitemap.ts`
- Route groups: `(marketing)/` for main pages, `[lang]/` for localized

### `apps/web`
- Route groups: `(auth)/` for Clerk auth, `(dashboard)/` for main features
- Multi-tenant context in `lib/tenant.ts`
- API client wrapper in `lib/api-client.ts`

### `apps/api-gateway`
- Entry point: `src/index.ts`
- Health check: `/misc/health`
- OpenStatus monitoring: `/system/status`
- All routes under `src/routes/` mirror microservice domains

## Microservices (`services/`)

All Python services use FastAPI with consistent structure:
```
services/{name}/
├── app/main.py              # FastAPI entry
├── app/api/v1/routes_*.py   # Route handlers
├── services/                # Business logic
├── subscribers/             # Event consumers
├── producers/               # Event publishers
└── utils/                   # Shared utilities (supabase_client, redis_client)
```

Run a service locally:
```bash
cd services/ai
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
```

## Inngest Workflows (`infra/inngest/`)

Background jobs and cron tasks:
- `auto_translate.ts` - AI translation jobs
- `recsys_refresh.ts` - Recommendation model updates
- `ecommerce_sync.ts` - Shopify inventory sync
- `daily_digest_email.ts` - User notifications

## Database

- **Primary:** Supabase Postgres 15 with pgvector for embeddings
- **Cache:** Upstash Redis
- **Schema:** `packages/db/prisma/schema.prisma`
- **RLS Policies:** `infra/supabase/policies.sql`

## Environment Variables

Key variables needed across apps:
- `CLERK_*` - Authentication
- `DATABASE_URL` - Supabase Postgres connection
- `UPSTASH_REDIS_*` - Redis connection
- `STRIPE_*` - Billing
- `OPENAI_API_KEY` / `GOOGLE_VERTEX_*` - AI services

## MCP / Smithery Integration (`packages/mcp/`)

Model Context Protocol support for AI agent tool calling:

### Architecture
```
Agent → MCPClient → ServerRegistry → Internal/External MCP Servers
                  ↓
            Middleware (rate-limit, audit, access-control)
```

### Key Components
- **MCPClient:** Execute tools across registered servers (`src/client/`)
- **ServerRegistry:** Manage MCP server registration and access control (`src/registry/`)
- **Middleware:** Rate limiting, audit logging, access control (`src/middleware/`)
- **Internal Servers:** Pre-configured wrappers for Nebutra services (`src/server/`)

### Plan-Based Access Control
- `FREE`: Basic tools (AI generate, content)
- `PRO`: + Recommendations, E-commerce
- `ENTERPRISE`: + Web3, all tools

### Usage
```typescript
import { mcpClient, registerInternalServers } from "@nebutra/mcp";

// Initialize
registerInternalServers();

// Execute tool with tenant context
const result = await mcpClient.executeTool(
  "generate_text",
  { prompt: "Hello" },
  { requestId: "req-1", tenantId: "org-1", plan: "PRO" }
);
```

## Observability

- **Monitoring:** OpenStatus (`/system/status` endpoint)
- **Error Tracking:** Sentry
- **Tracing:** OpenTelemetry
- **Analytics:** Dub, PostHog
- **Configs:** `infra/observability/`
