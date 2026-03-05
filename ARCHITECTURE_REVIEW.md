# Nebutra-Sailor Architecture Review

**Date:** 2026-03-05
**Branch:** `claude/review-architecture-best-practices-OeL5c`
**Scope:** Full monorepo architecture audit — dependency graph, apps, UI packages, backend packages

---

## Executive Summary

The monorepo has a **clean dependency graph with no circular dependencies** and a well-defined layering (Foundation → Core → Services → UI → Apps). However, there are several structural issues that need attention:

| Category | Health | Key Issue |
|----------|--------|-----------|
| Dependency graph | **Healthy** | No circular deps; clean layering |
| Apps architecture | **Mixed** | Config inconsistencies across apps |
| UI/Design system | **Fragmented** | 3 competing token/theme systems |
| Backend packages | **Over-provisioned** | ~42% of packages are unused stubs |

---

## 1. Dependency Graph

### Strengths
- No circular dependencies detected
- Clear layering: Foundation (zod, Redis, S3) → Core (db, brand) → Services (contracts, repositories, saga) → UI (ui) → Apps
- All internal dependencies use `workspace:*` protocol

### Issues

| Severity | Issue | Location |
|----------|-------|----------|
| Low | `@nebutra/legal` has runtime hard-dependency on `@nebutra/db` | `packages/legal/package.json` |
| Low | `services/*` configured in pnpm-workspace.yaml but directory doesn't exist | `pnpm-workspace.yaml` |

---

## 2. Apps Architecture

### Overview

| App | Framework | Status |
|-----|-----------|--------|
| landing-page | Next.js 16 + Tailwind v4 + next-intl | Healthy |
| web | Next.js 16 + Tailwind v4 + Clerk | Healthy (minor issues) |
| api-gateway | Hono + OpenAPI | Healthy |
| storybook | Storybook 8 + Vite 6 | Healthy |
| design-docs | Next.js 16 + Fumadocs | Missing security headers |
| studio | Sanity Studio v4 | Healthy |
| docs | Mintlify | Healthy |
| docs-hub | — | **Empty/orphaned directory** |

### Critical Issues

#### 2.1 TypeScript Target Mismatch
- `landing-page`, `api-gateway`: **ES2022**
- `web`, `design-docs`: **ES2017**
- **Recommendation:** Standardize all to ES2022

#### 2.2 Stale Package Reference in Web
`apps/web/tsconfig.json` references `@nebutra/custom-ui/*` — the old package name before the rename to `@nebutra/ui`.
- **Impact:** Path aliases may be broken or pointing to the wrong location
- **Fix:** Update tsconfig paths to `@nebutra/ui/*`

#### 2.3 Missing Security Headers — design-docs
`landing-page` and `web` both have CSP and X-Frame-Options headers configured in `next.config.ts`. `design-docs` has **none**.
- **Fix:** Add security headers to `apps/design-docs/next.config.ts`

#### 2.4 Provider Structure Inconsistency
- `landing-page`: Single `providers.tsx` file
- `web`: Both `providers.tsx` and `providers/` subdirectory
- **Recommendation:** Standardize on one pattern

#### 2.5 Orphaned `docs-hub` Directory
`apps/docs-hub/` exists but contains only a symlinked `design-system/` subdirectory. No `package.json`.
- **Fix:** Remove or populate

---

## 3. UI / Design Token Architecture — **Most Critical Area**

### 3.1 Three Competing Token Systems

This is the single biggest architectural problem in the codebase. Three packages define independent, incompatible token/theme systems:

| Package | Color Space | Themes | Scale |
|---------|------------|--------|-------|
| `@nebutra/tokens` | hex | light, dark | `--nebutra-blue-500` etc. |
| `@nebutra/theme` | oklch() | 6 themes (neon, gradient, dark-dense, minimal, vibrant, ocean) | Tailwind v4 @theme |
| `@nebutra/design-system` | Primer scales | light, dark | 12-step semantic (fg.default, etc.) |

**Problems:**
- Apps cannot use `@nebutra/theme` and `@nebutra/tokens` simultaneously (different color spaces, different theme IDs)
- `@nebutra/ui` defines its own tokens internally and does NOT import from `@nebutra/tokens`
- No single source of truth for brand colors

**Recommendation:** Unify into a single token pipeline:
1. `@nebutra/tokens` as the **single source of truth** (define all scales)
2. `@nebutra/theme` consumes tokens and applies them to Tailwind v4 themes
3. `@nebutra/ui` and `@nebutra/design-system` import from tokens, never define their own
4. Remove duplicate token definitions from `@nebutra/ui/src/theme/tokens.ts` and `@nebutra/design-system/src/theme/`

### 3.2 Non-Existent Exports in @nebutra/ui

`packages/ui/package.json` declares 10+ export paths that don't exist on disk:

```
./primitives     ← does not exist
./patterns       ← does not exist
./marketing      ← does not exist
./layouts/*      ← does not exist
./widgets/*      ← does not exist
./components/*   ← does not exist
./styles/globals.css          ← does not exist
./styles/brand-override.css   ← does not exist
./tailwind.preset             ← does not exist
```

**Impact:** Any import from these paths will fail at runtime. The CLAUDE.md instructions reference `@nebutra/custom-ui/primitives` which maps to these phantom exports.
- **Fix:** Either create the directories/files or remove the exports from package.json

### 3.3 Component Ownership Confusion

| Domain | Package | Foundation |
|--------|---------|-----------|
| Chat/AI UI | `@nebutra/ui` | Lobe UI |
| Dashboard/Admin | `@nebutra/design-system` | Primer |
| Landing/Marketing | ??? | Neither explicitly owns this |

No clear decision matrix exists for which package owns hybrid features (e.g., a settings page that includes both chat and admin UI).
- **Recommendation:** Document ownership boundaries in CLAUDE.md or a dedicated ARCHITECTURE.md

### 3.4 Unused Token Ingestion Infrastructure

`@nebutra/design-system` contains a sophisticated token ingestion system (Figma, Framer, Lottie integrations) with zero active consumers.
- **Recommendation:** Archive until needed

---

## 4. Backend Packages

### Healthy Packages (Keep As-Is) — 10 packages

| Package | Purpose | Lines (approx) |
|---------|---------|----------------|
| db | Prisma layer, 60+ models | Core |
| repositories | Type-safe data access (User, Org, WebhookEvent) | ~300 |
| logger | OpenTelemetry + Pino | ~200 |
| errors | Unified error handling + Hono middleware | ~150 |
| health | K8s probes (liveness, readiness) | ~120 |
| cache | Redis wrapper + 4 strategies (TTL, lock, stampede, lazy) | ~250 |
| rate-limit | Token bucket with plan limits | ~180 |
| alerting | Multi-channel (Slack, Discord) + error rate tracking | ~200 |
| identity | Auth provider adapter (Clerk-first, Auth.js-ready) | ~300 |
| contracts | Canonical type definitions (identity, billing, events) | ~400 |

### Unused / Premature Packages — 8 packages

| Package | Lines | Issue |
|---------|-------|-------|
| **saga** | 159 | Distributed transaction orchestrator — ZERO usage |
| **event-bus** | 113 | In-memory pub/sub — only consumed by saga (also unused) |
| **feature-flags** | 178 | Env/memory providers — ZERO usage |
| **audit** | 325 | In-memory + Prisma storage — ZERO usage |
| **ai-providers** | 1000+ | 3 providers (SiliconFlow, OpenAI, OpenRouter) — ZERO usage |
| **mcp** | — | MCP SDK integration — ZERO usage |
| **captcha** | — | React component — ZERO usage |
| **legal** | — | GDPR/CCPA — no backend consumers |

**Combined:** ~2000+ lines of unused code.
**Recommendation:** Move to a `packages/_archive/` directory or a separate branch. Reduces CI time and cognitive load.

### Disconnected / Misconfigured — 3 packages

| Package | Issue |
|---------|-------|
| **billing** | Listed in api-gateway's package.json but **never imported**. 598-line plan config + Stripe integration sitting idle |
| **config** | Comprehensive Zod schemas for 9 config domains — NOT imported by api-gateway (which uses raw `process.env`) |
| **storage** | Minimal S3 wrapper — no active consumers |

### Build Inconsistency

Mixed compilation strategies with no clear rule:
- **Compiled with tsup (dist/):** identity, contracts, billing, legal, marketing, ai-providers, analytics
- **Source shipped as-is (src/):** db, cache, rate-limit, event-bus, saga, repositories, config, logger, errors, health, feature-flags, audit, supabase, storage, sanity, captcha, status, mcp, alerting

**Recommendation:** Standardize — either all compile with tsup or all ship source (for a monorepo, shipping source with `transpilePackages` is simpler).

---

## 5. Prioritized Action Items

### P0 — Fix Before Next Deploy

1. **Fix `@nebutra/ui` phantom exports** — Remove or implement the 10+ non-existent export paths in package.json
2. **Fix web tsconfig** — Update `@nebutra/custom-ui/*` references to `@nebutra/ui/*`
3. **Wire or unwire billing** — Either import `@nebutra/billing` in api-gateway or remove from its dependencies

### P1 — Address This Sprint

4. **Unify token system** — Designate `@nebutra/tokens` as the single source; remove duplicate definitions from `ui` and `design-system`
5. **Reconcile theme systems** — Decide between 2-theme (tokens) vs 6-theme (theme) approach; unify color spaces
6. **Standardize TypeScript targets** — All apps → ES2022
7. **Add security headers to design-docs**
8. **Remove `apps/docs-hub/`** orphaned directory

### P2 — Address This Quarter

9. **Archive unused packages** — saga, event-bus, feature-flags, audit, ai-providers, mcp, captcha → `_archive/`
10. **Standardize build strategy** — Pick tsup-for-all or source-for-all
11. **Document component ownership** — Which package owns which UI domain
12. **Adopt `@nebutra/config`** — Replace raw `process.env` in api-gateway with the existing config package
13. **Clean up design-system token ingestion** — Archive Figma/Framer/Lottie infrastructure until needed
14. **Remove `services/*`** from pnpm-workspace.yaml (directory doesn't exist)

### P3 — Nice to Have

15. Standardize React version pinning (`19.2.1` vs `^19.2.1`)
16. Standardize provider patterns across apps
17. Document rate-limit and cache as in-memory-only (not production-ready at scale)
18. Address marketing package TODOs before Product Hunt launch

---

## Metrics Summary

| Metric | Value |
|--------|-------|
| Total packages | 26 |
| Healthy packages | 15 (58%) |
| Unused/stub packages | 8 (31%) |
| Misconfigured packages | 3 (11%) |
| Total apps | 8 |
| Healthy apps | 6 (75%) |
| Apps with issues | 2 (25%) |
| Circular dependencies | 0 |
| Token/theme systems | 3 (should be 1) |
| Phantom exports in @nebutra/ui | 10+ |
