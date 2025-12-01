# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Nebutra-Sailor is an enterprise-grade SaaS monorepo architecture supporting multi-tenant systems, AI-native features, content communities, recommendation systems, e-commerce (Shopify), and Web3 platforms. It also supports white-labeling for multi-brand deployments.

## Tech Stack

**Apps (Vercel):** Next.js 17 (App Router), React 19, TypeScript 5.9+, TailwindCSS 4.0, Framer Motion 11+, shadcn/ui, Clerk (Auth), Vercel AI SDK, Sanity CMS

**BFF (Vercel Serverless):** Node.js 20 LTS, Hono/Express, Prisma ORM 7.x, Zod

**Infrastructure:** Supabase (Postgres 15 + pgvector), Redis (Upstash), Inngest (Workflows), Stripe (Billing), Resend (Email), Sentry/OpenTelemetry, n8n (Automation)

**Microservices:** Python 3.11 (FastAPI), Go 1.22+, Rust 1.80+, Foundry/Hardhat (Web3)

**IaC & Deployment:** Terraform, Kubernetes, Railway, Cloudflare

## Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev                    # Run all apps in dev mode
pnpm dev --filter=web       # Run specific app
pnpm dev --filter=api-gateway
pnpm dev --filter=studio    # Run Sanity Studio

# Build
pnpm build                  # Build all packages/apps (includes brand:sync)
pnpm build --filter=web

# Lint & Type Check
pnpm lint
pnpm typecheck
pnpm format                 # Prettier formatting

# Database (Prisma)
pnpm db:generate            # Generate Prisma client
pnpm db:migrate             # Run migrations
pnpm db:push                # Push schema changes
pnpm db:studio              # Open Prisma Studio

# Testing
pnpm test                   # Run all tests
pnpm test --filter=web      # Run tests for specific package
pnpm test:coverage          # Run tests with coverage

# Brand / White-label
pnpm brand:sync             # Sync brand config to apps
pnpm brand:init             # Initialize brand configuration
pnpm brand:apply            # Apply brand settings

# Release & Changelog
pnpm commit                 # Interactive commit (commitizen)
pnpm release                # Create release with changelog
pnpm release:minor          # Minor version bump
pnpm release:major          # Major version bump
pnpm release:patch          # Patch version bump
pnpm changelog              # Generate changelog

# Utilities
pnpm check-env              # Validate environment variables
pnpm clean                  # Clean all build artifacts

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
│   ├── studio/             # Sanity CMS Studio
│   └── api-gateway/        # BFF: rate-limit, circuit breaker, Prisma 7
├── packages/               # Shared libraries
│   ├── ui/                 # shadcn/ui extended components
│   ├── custom-ui/          # Custom UI components (21st.dev)
│   ├── design-system/      # Design tokens, Framer Motion presets
│   ├── brand/              # White-label brand configuration
│   ├── db/                 # Prisma schema and client
│   ├── supabase/           # Supabase client utilities
│   ├── sanity/             # Sanity CMS schemas and client
│   ├── cache/              # Redis strategies (TTL, lock, stampede)
│   ├── rate-limit/         # Multi-tenant token bucket
│   ├── event-bus/          # Cross-service event communication
│   ├── saga/               # Saga pattern for distributed transactions
│   ├── mcp/                # Model Context Protocol integration
│   ├── ai-providers/       # AI provider abstractions
│   ├── billing/            # Stripe billing utilities
│   ├── analytics/          # PostHog, Dub analytics
│   ├── health/             # Health check utilities
│   ├── feature-flags/      # Feature flag management
│   ├── legal/              # Legal document utilities
│   ├── marketing/          # Product Hunt integration, testimonials, social proof, attribution
│   ├── alerting/           # Alert management
│   ├── audit/              # Audit logging
│   ├── captcha/            # CAPTCHA integration
│   ├── config/             # Shared configuration
│   ├── errors/             # Error handling utilities
│   ├── status/             # Status page utilities
│   └── storage/            # File storage utilities
├── services/               # Microservices (deploy to Railway/Docker)
│   ├── ai/                 # Python FastAPI - LLM, embeddings, translate
│   ├── billing/            # Python FastAPI - billing service
│   ├── content/            # Python FastAPI - posts, feed, comments
│   ├── recsys/             # Python - recall/rank pipeline
│   ├── ecommerce/          # Python - Shopify/Shopline sync
│   └── web3/               # Python - blockchain indexer, listeners
├── infra/                  # IaC, observability, deployment configs
│   ├── inngest/            # Workflow definitions (cron jobs)
│   ├── n8n/                # n8n automation workflows
│   ├── observability/      # Logging, tracing, metrics configs
│   ├── openstatus/         # Status page monitoring
│   ├── cloudflare/         # Cloudflare configuration
│   ├── terraform/          # Infrastructure as Code
│   ├── k8s/                # Kubernetes manifests
│   ├── docker/             # Docker configurations
│   ├── railway/            # Railway deployment configs
│   ├── database/           # Database migration scripts
│   └── scripts/            # Infra utility scripts
├── tools/                  # Development tools and scripts
├── docs/                   # Architecture documentation
├── scripts/                # Build and utility scripts
└── changelog/              # Version changelogs
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
- Marketing components in `src/components/marketing/` (Product Hunt, Testimonials, Social Proof)

### `apps/web`

- Route groups: `(auth)/` for Clerk auth, `(dashboard)/` for main features
- Multi-tenant context in `lib/tenant.ts`
- API client wrapper in `lib/api-client.ts`

### `apps/studio`

- Sanity CMS Studio for content management
- Schema types defined in `schemaTypes/`
- Configuration in `sanity.config.ts`
- Deployed to Vercel (see `vercel.json`)

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

**Available services:**

- `ai/` - LLM, embeddings, translation (port 8001)
- `billing/` - Stripe billing, subscriptions (port 8002)
- `content/` - Posts, feed, comments (port 8003)
- `recsys/` - Recall/rank recommendation pipeline (port 8004)
- `ecommerce/` - Shopify/Shopline sync (port 8005)
- `web3/` - Blockchain indexer, listeners (port 8006)

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
- **Supabase Client:** `packages/supabase/`
- **Migration Scripts:** `infra/database/`

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
  { requestId: "req-1", tenantId: "org-1", plan: "PRO" },
);
```

## Marketing Infrastructure (`packages/marketing/`)

Comprehensive marketing toolkit for Product Hunt launches, testimonials, and attribution tracking:

### Components

- **ProductHuntBadge/UpvoteBadge/TextBadge:** PH badges with multiple themes and sizes
- **LaunchBanner:** Top/floating/inline launch announcement banners with countdown
- **TestimonialsWall:** Grid/masonry/marquee layouts for user testimonials
- **SocialProofBar:** Animated stats display (users, rating, upvotes, stars)
- **TrustBadges/FeaturedIn:** Security badges and "as seen in" sections

### Hooks

- `useAttribution` - UTM parsing, source detection, first/last touch attribution
- `useProductHuntSource` - Detect visitors from Product Hunt
- `useLaunchBannerState` - Manage banner dismissal persistence
- `useCountdown` - Launch countdown timer
- `useMarketingEvents` - Track clicks, page views, conversions

### Usage

```typescript
import {
  ProductHuntBadge,
  LaunchBanner,
  TestimonialsWall,
  SocialProofBar,
  useAttribution,
} from "@nebutra/marketing";

// Show PH badge
<ProductHuntBadge postSlug="nebutra" theme="light" size="medium" />

// Launch banner with countdown
<LaunchBanner
  title="We're live on Product Hunt!"
  ctaText="Vote Now"
  ctaLink="https://producthunt.com/posts/nebutra"
  variant="top"
  theme="product-hunt"
  showCountdown
  countdownEndDate="2025-02-01T00:00:00Z"
/>

// Track PH visitors
const { isFromProductHunt, source, campaign } = useAttribution();
```

## Observability

- **Monitoring:** OpenStatus (`/system/status` endpoint, `infra/openstatus/`)
- **Error Tracking:** Sentry
- **Tracing:** OpenTelemetry
- **Analytics:** Dub, PostHog (`packages/analytics/`)
- **Alerting:** `packages/alerting/`
- **Configs:** `infra/observability/`

## White-Label / Brand System

- Brand configuration: `brand.config.example.ts` (copy to `brand.config.ts`)
- Brand package: `packages/brand/`
- Sync command: `pnpm brand:sync`
- Documentation: `WHITELABEL.md`

## Documentation

Key docs in `docs/` directory:

- `INDEX.md` - Documentation index
- `UI-GUIDELINES.md` - UI/UX guidelines
- `COMPONENT-LIBRARY-POLICY.md` - Component library standards
- `TYPOGRAPHY.md` - Typography system
- `MARKETING-INFRASTRUCTURE.md` - Marketing infrastructure
- `DOMAINS.md` - Domain configuration
