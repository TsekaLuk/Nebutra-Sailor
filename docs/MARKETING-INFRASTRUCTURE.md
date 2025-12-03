# Marketing Infrastructure Specification

Complete design and implementation guidelines for landing pages, marketing sites, and conversion-optimized experiences.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Design System Integration](#design-system-integration)
3. [Page Modules Specification](#page-modules-specification)
4. [Motion & Animation System](#motion--animation-system)
5. [Content Management](#content-management)
6. [Internationalization (i18n)](#internationalization-i18n)
7. [Performance & SEO](#performance--seo)
8. [Analytics & Conversion Tracking](#analytics--conversion-tracking)
9. [Accessibility](#accessibility)
10. [Implementation Patterns](#implementation-patterns)

---

## Architecture Overview

### Package vs App Component Relationship (Important)

> **⚠️ Required Reading for Vibe Coding Developers**
>
> Marketing components in this project are split into **two layers** with different responsibilities. Do not confuse them:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Layer 1: Shared Infrastructure (packages/marketing)                         │
│  ──────────────────────────────────────────────────────────────────────────  │
│  📦 @nebutra/marketing                                                       │
│  Location: packages/marketing/                                               │
│  Purpose: Generic, reusable marketing toolkit, decoupled from business       │
│                                                                              │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐             │
│  │ Components       │ │ Hooks            │ │ Utils            │             │
│  │ (Atomic)         │ │ (State Logic)    │ │ (Utilities)      │             │
│  │                  │ │                  │ │                  │             │
│  │ • PHBadge        │ │ • useAttribution │ │ • parseUTMParams │             │
│  │ • LaunchBanner   │ │ • useCountdown   │ │ • trackEvent     │             │
│  │ • Testimonials   │ │ • useLaunchState │ │ • detectSource   │             │
│  │ • SocialProof    │ │ ...              │ │ ...              │             │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘             │
│                                                                              │
│  Traits: No product assumptions, no business config, reusable by all apps   │
└─────────────────────────────────────────────────────────────────────────────┘
                              ▲
                              │ import (consume only, do not modify)
                              │
┌─────────────────────────────────────────────────────────────────────────────┐
│  Layer 2: App Integration (apps/landing-page/src/components/marketing)       │
│  ──────────────────────────────────────────────────────────────────────────  │
│  📁 Landing Page Wrapper Layer                                               │
│  Location: apps/landing-page/src/components/marketing/                       │
│  Purpose: Compose @nebutra/marketing components, add business config         │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ ProductHuntSection.tsx                                                │   │
│  │ - Composes: PHBadge + SocialProofBar                                  │   │
│  │ - Fixed: Nebutra product config, layout styling                       │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │ TestimonialsSection.tsx                                               │   │
│  │ - Composes: TestimonialsWall + title/subtitle                         │   │
│  │ - Provides: sampleTestimonials example data                           │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │
│  │ LaunchBannerWrapper.tsx                                               │   │
│  │ - Wraps: LaunchBanner + useLaunchBannerState                          │   │
│  │ - Adds: show/hide logic, dismissal persistence                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Traits: Business-specific, contains Nebutra config, landing-page only      │
└─────────────────────────────────────────────────────────────────────────────┘
                              ▲
                              │ import
                              │
┌─────────────────────────────────────────────────────────────────────────────┐
│  Layer 3: Pages (apps/landing-page/src/app/)                                 │
│  ──────────────────────────────────────────────────────────────────────────  │
│  Page composition layer, assembles Section components                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### When to Modify Which Layer?

| Scenario                              | Modify                                    | Notes                                |
| ------------------------------------- | ----------------------------------------- | ------------------------------------ |
| Add new marketing component type      | `packages/marketing/`                     | e.g., new PressSection component     |
| Change PH Badge style/behavior        | `packages/marketing/`                     | Affects all apps using the component |
| Adjust landing page PH section layout | `landing-page/components/marketing/`      | Landing page only                    |
| Change landing page product config    | `landing-page/components/marketing/`      | e.g., modify postSlug                |
| Add new UTM tracking logic            | `packages/marketing/`                     | Generic utility function             |
| apps/web needs PH Badge               | Import from `@nebutra/marketing` directly | Or create web-specific wrapper       |

### Frontend vs Backend Layer Relationship

> **⚠️ Important: packages/marketing vs services/third-party**
>
> Marketing infrastructure spans **both frontend and backend**. Understanding this separation is critical.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  FRONTEND: packages/marketing/ (React/TypeScript)                            │
│  ──────────────────────────────────────────────────────────────────────────  │
│  Purpose: UI display + client-side interactions                              │
│  Runs in: Browser (client-side)                                              │
│                                                                              │
│  • React Components (PHBadge, LaunchBanner, Testimonials, SocialProof)       │
│  • React Hooks (useAttribution, useCountdown, useLaunchBannerState)          │
│  • Client-side Utils (UTM parsing, event tracking, source detection)         │
│  • Static config (colors, constants, URL builders)                           │
│                                                                              │
│  Consumers: apps/landing-page, apps/web                                      │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              │ Optional: fetch dynamic data (via api-gateway)
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  BACKEND: services/third-party/ (Python/FastAPI)                             │
│  ──────────────────────────────────────────────────────────────────────────  │
│  Purpose: Third-party API data fetching + caching + sync                     │
│  Runs on: Server (Railway/Docker)                                            │
│                                                                              │
│  • GraphQL/REST API clients (Product Hunt, future: Twitter, HN, GitHub)      │
│  • Redis caching layer (TTL, stale fallback, rate limit protection)          │
│  • Inngest cron jobs (scheduled data sync every 30min/daily)                 │
│  • Data transformation and normalization                                     │
│                                                                              │
│  Consumers: api-gateway, internal services                                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key Differences:**

| Aspect      | packages/marketing          | services/third-party        |
| ----------- | --------------------------- | --------------------------- |
| Language    | TypeScript/React            | Python/FastAPI              |
| Runtime     | Browser (client)            | Server (Railway)            |
| Data Source | Static config, localStorage | External APIs (PH, etc.)    |
| Caching     | Browser (localStorage)      | Redis (Upstash)             |
| Purpose     | Display UI, track events    | Fetch & cache external data |
| API Keys    | None (client-safe)          | Server-side secrets         |

**When to Use Which:**

| Use Case                        | Use                                             |
| ------------------------------- | ----------------------------------------------- |
| Display PH badge/banner on page | `packages/marketing`                            |
| Track UTM params in browser     | `packages/marketing`                            |
| Fetch trending PH products list | `services/third-party`                          |
| Cache PH API responses          | `services/third-party`                          |
| Show testimonials from CMS      | `packages/marketing` + Sanity                   |
| Show live PH upvote counts      | `services/third-party` → api-gateway → frontend |

### Product Hunt Infrastructure: Complete Three-Layer Architecture

> **⚠️ Critical: Understanding the PH Module Separation**
>
> Product Hunt integration spans **three distinct layers** with different purposes. Do not confuse them.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 1: Launch Operations (marketing/producthunt/)                         │
│  ──────────────────────────────────────────────────────────────────────────  │
│  Purpose: Strategy, planning, copywriting, execution checklists              │
│  Type: Documentation & Templates (NOT code)                                  │
│  Audience: Growth team, founders, marketing                                  │
│                                                                              │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐             │
│  │ strategy/        │ │ copy/            │ │ checklists/      │             │
│  │ LAUNCH_PLAN.md   │ │ PRODUCT_COPY.md  │ │ PRE_LAUNCH.md    │             │
│  │ Timeline T-30    │ │ Taglines         │ │ LAUNCH_DAY.md    │             │
│  │ Audience         │ │ Descriptions     │ │ POST_LAUNCH.md   │             │
│  │ Outreach list    │ │ Maker Comment    │ │ Hour-by-hour     │             │
│  └──────────────────┘ │ Social templates │ └──────────────────┘             │
│                       │ FAQ responses    │                                   │
│  ┌──────────────────┐ └──────────────────┘ ┌──────────────────┐             │
│  │ analytics/       │                       │ config/          │             │
│  │ METRICS.md       │                       │ producthunt.ts   │             │
│  │ KPI tracking     │                       │ UTM helpers      │             │
│  │ ROI analysis     │                       │ GraphQL queries  │             │
│  └──────────────────┘                       └──────────────────┘             │
│                                                                              │
│  Traits: Human-readable, version-controlled, no runtime execution            │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              │ References (copy, config values)
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 2: Frontend Components (packages/marketing/)                          │
│  ──────────────────────────────────────────────────────────────────────────  │
│  Purpose: React UI components, client-side hooks, browser utilities          │
│  Type: TypeScript/React library                                              │
│  Runs in: Browser (client-side)                                              │
│                                                                              │
│  • ProductHuntBadge, LaunchBanner, TestimonialsWall, SocialProofBar          │
│  • useAttribution, useCountdown, useProductHuntSource, useLaunchBannerState  │
│  • UTM parsing, event tracking, source detection                             │
│  • Static config (colors, PH URLs, constants)                                │
│                                                                              │
│  Consumers: apps/landing-page, apps/web                                      │
│  Traits: No API keys, client-safe, reusable across apps                      │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              │ fetch() via api-gateway (optional, for live data)
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  LAYER 3: Backend API Service (services/third-party/)                        │
│  ──────────────────────────────────────────────────────────────────────────  │
│  Purpose: External API integration, caching, scheduled sync                  │
│  Type: Python/FastAPI microservice                                           │
│  Runs on: Server (Railway/Docker)                                            │
│                                                                              │
│  • GraphQL client for PH API v2 (with retries, rate limit handling)          │
│  • Redis caching layer (TTL: trending=30min, posts=1h, topics=24h)           │
│  • Inngest cron jobs (trending sync every 30min, topics daily)               │
│  • REST endpoints: /api/v1/producthunt/posts, /trending, /topics             │
│                                                                              │
│  Consumers: api-gateway (proxies to frontend), internal services             │
│  Traits: Server-side secrets, rate limit protection, graceful degradation    │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Layer Comparison:**

| Aspect          | marketing/producthunt/        | packages/marketing/         | services/third-party/         |
| --------------- | ----------------------------- | --------------------------- | ----------------------------- |
| **Type**        | Documentation                 | React library               | Python microservice           |
| **Language**    | Markdown, TypeScript config   | TypeScript/React            | Python/FastAPI                |
| **Runtime**     | None (static docs)            | Browser                     | Server (Railway)              |
| **Purpose**     | Launch planning & execution   | UI display & tracking       | API data fetching & caching   |
| **Audience**    | Growth team, founders         | Developers, apps            | Backend services              |
| **Contains**    | Strategy, copy, checklists    | Components, hooks, utils    | API clients, cron jobs, cache |
| **API Keys**    | Reference only (.env.example) | None (client-safe)          | Server-side secrets           |
| **Data Source** | Manual input                  | Static config, localStorage | External APIs (PH GraphQL)    |

**Decision Matrix: Which Layer to Modify?**

| Scenario                            | Modify                   |
| ----------------------------------- | ------------------------ |
| Write launch day tagline            | `marketing/producthunt/` |
| Prepare Twitter thread copy         | `marketing/producthunt/` |
| Update pre-launch checklist         | `marketing/producthunt/` |
| Change PH badge color/style         | `packages/marketing/`    |
| Add countdown timer hook            | `packages/marketing/`    |
| Track UTM params on landing page    | `packages/marketing/`    |
| Fetch trending products from PH API | `services/third-party/`  |
| Change cache TTL for PH data        | `services/third-party/`  |
| Add new PH API endpoint             | `services/third-party/`  |
| Display live upvote count on site   | All three (end-to-end)   |

**End-to-End Data Flow Example (Live Upvote Count):**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ services/       │    │ apps/           │    │ packages/       │
│ third-party/    │───▶│ api-gateway/    │───▶│ marketing/      │
│                 │    │                 │    │                 │
│ Fetch from PH   │    │ Proxy endpoint  │    │ <SocialProofBar │
│ Cache in Redis  │    │ /api/ph/post    │    │   upvotes={X}>  │
│ Return JSON     │    │ Forward data    │    │ Render count    │
└─────────────────┘    └─────────────────┘    └─────────────────┘

┌─────────────────┐
│ marketing/      │
│ producthunt/    │
│                 │
│ Document where  │
│ to display and  │
│ launch strategy │
└─────────────────┘
```

### Design System Layer Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           apps/landing-page                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Sections   │  │  Components  │  │   Content    │  │   Config     │    │
│  │  (Modules)   │  │  (Shared UI) │  │  (CMS/i18n)  │  │  (Tokens)    │    │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘    │
│         │                 │                 │                 │             │
│         └─────────────────┼─────────────────┼─────────────────┘             │
│                           ▼                 ▼                               │
│              ┌────────────────────────────────────────┐                     │
│              │     @nebutra/design-system (SSOT)      │                     │
│              │     @nebutra/marketing (PH/Social)     │                     │
│              │     @nebutra/custom-ui (Marketing)     │                     │
│              │     @nebutra/custom-ui (Experimental)       │                     │
│              └────────────────────────────────────────┘                     │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Content Sources                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │ @nebutra/    │  │  Static      │  │  API/BFF     │                       │
│  │ sanity (CMS) │  │  JSON/MDX    │  │  (Dynamic)   │                       │
│  └──────────────┘  └──────────────┘  └──────────────┘                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
apps/landing-page/
├── src/
│   ├── app/
│   │   ├── [lang]/                    # Locale-based routing
│   │   │   ├── (marketing)/           # Marketing pages group
│   │   │   │   ├── page.tsx           # Homepage
│   │   │   │   ├── pricing/page.tsx
│   │   │   │   ├── about/page.tsx
│   │   │   │   └── use-cases/[slug]/page.tsx
│   │   │   └── (legal)/               # Legal pages group
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── layout.tsx
│   ├── components/
│   │   ├── sections/                  # Page sections (modules)
│   │   │   ├── Hero/
│   │   │   ├── Features/
│   │   │   ├── Pricing/
│   │   │   ├── Testimonials/
│   │   │   ├── FAQ/
│   │   │   └── CTA/
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── AnnouncementBar.tsx
│   │   └── shared/                    # Shared marketing components
│   │       ├── AnimatedCard.tsx
│   │       ├── GradientText.tsx
│   │       └── ParallaxSection.tsx
│   ├── config/
│   │   ├── pricing.ts                 # Pricing plans config
│   │   ├── features.ts                # Features list
│   │   ├── navigation.ts              # Nav links
│   │   └── social-proof.ts            # Logos, stats, testimonials
│   ├── content/
│   │   ├── [lang]/                    # Static i18n content
│   │   │   ├── hero.json
│   │   │   ├── features.json
│   │   │   └── faq.json
│   │   └── schema.ts                  # Content type definitions
│   ├── lib/
│   │   ├── i18n/
│   │   ├── seo.ts
│   │   ├── analytics.ts
│   │   └── motion.ts                  # Animation presets
│   └── styles/
│       └── marketing.css              # Marketing-specific styles
└── public/
    ├── images/
    ├── videos/
    └── 3d/                            # 3D assets (glTF, etc.)
```

---

## Design System Integration

### Layer Usage for Marketing

| Layer            | Package                  | Use Cases                                   |
| ---------------- | ------------------------ | ------------------------------------------- |
| **Foundation**   | `@nebutra/design-system` | Tokens, primitives, base components         |
| **Marketing UI** | `@nebutra/custom-ui`     | Hero, Feature cards, Pricing tables         |
| **Experimental** | `@nebutra/custom-ui`     | 3D effects, advanced animations, prototypes |
| **External**     | HeroUI, Magic UI         | One-off high-impact visuals                 |

### Token Extensions for Marketing

```typescript
// packages/design-system/src/theme/marketing.ts

export const marketingTokens = {
  // Extended spacing for marketing layouts
  spacing: {
    section: {
      sm: "64px", // 4rem - Mobile section padding
      md: "96px", // 6rem - Tablet
      lg: "128px", // 8rem - Desktop
      xl: "160px", // 10rem - Large screens
    },
    hero: {
      minHeight: "100vh",
      contentMaxWidth: "1200px",
    },
  },

  // Marketing-specific typography
  typography: {
    display: {
      fontSize: ["3rem", "4rem", "5rem", "6rem"], // Responsive
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontWeight: 700,
    },
    headline: {
      fontSize: ["2rem", "2.5rem", "3rem"],
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      fontWeight: 600,
    },
    subheadline: {
      fontSize: ["1.125rem", "1.25rem", "1.5rem"],
      lineHeight: 1.5,
      fontWeight: 400,
      color: "fg.muted",
    },
  },

  // Gradient presets
  gradients: {
    primary: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
    subtle:
      "linear-gradient(180deg, rgba(99,102,241,0.1) 0%, transparent 100%)",
    glass:
      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
    mesh: `
      radial-gradient(at 40% 20%, hsla(280,100%,70%,0.3) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355,100%,93%,0.3) 0px, transparent 50%)
    `,
  },

  // Glass/Blur effects
  effects: {
    glass: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    glassDark: {
      background: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    glow: {
      boxShadow: "0 0 60px rgba(99, 102, 241, 0.3)",
    },
  },

  // Border radius for cards
  radii: {
    card: "16px",
    cardLg: "24px",
    button: "9999px", // Pill buttons for CTAs
  },
};
```

---

## Page Modules Specification

### Module List & Requirements

| Module              | Priority    | Content Source | Animation           |
| ------------------- | ----------- | -------------- | ------------------- |
| **Navbar**          | Required    | Config + i18n  | Scroll-based        |
| **AnnouncementBar** | Optional    | CMS/Config     | Dismissible         |
| **Hero**            | Required    | i18n + CMS     | Entrance + Parallax |
| **BrandStory**      | Optional    | i18n           | Scroll-reveal       |
| **Features**        | Required    | Config + i18n  | Stagger-in          |
| **UseCases**        | Recommended | CMS + i18n     | Tab/Carousel        |
| **SocialProof**     | Required    | Config         | Logo carousel       |
| **InteractiveDemo** | Optional    | Component      | Interactive         |
| **Pricing**         | Required    | Config         | Hover effects       |
| **Testimonials**    | Recommended | CMS            | Carousel            |
| **FAQ**             | Required    | i18n/CMS       | Accordion           |
| **FinalCTA**        | Required    | i18n           | Entrance            |
| **Footer**          | Required    | Config + i18n  | None                |

### Module Interface

```typescript
// src/components/sections/types.ts

import type { Locale } from "@/lib/i18n/locales";

export interface SectionProps {
  /** Current locale for i18n */
  locale: Locale;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** Density mode */
  density?: "compact" | "normal" | "spacious";
}

export interface HeroProps extends SectionProps {
  variant?: "default" | "centered" | "split" | "video" | "3d";
  showAnnouncement?: boolean;
  backgroundType?: "gradient" | "mesh" | "particles" | "video" | "3d";
}

export interface FeaturesProps extends SectionProps {
  layout?: "grid" | "bento" | "alternating" | "tabs";
  columns?: 2 | 3 | 4;
  showIcons?: boolean;
}

export interface PricingProps extends SectionProps {
  billingCycle?: "monthly" | "yearly";
  showComparison?: boolean;
  highlightedPlan?: string;
}
```

### Hero Module Example

```tsx
// src/components/sections/Hero/Hero.tsx

"use client";

import { motion } from "framer-motion";
import { Box, Button, Text } from "@nebutra/design-system";
import { GradientText, ParticleBackground } from "@/components/shared";
import { useTranslation } from "@/lib/i18n/client";
import { marketingTokens } from "@nebutra/design-system/theme";
import { heroVariants, staggerChildren } from "@/lib/motion";
import type { HeroProps } from "../types";

export function Hero({
  locale,
  variant = "default",
  backgroundType = "gradient",
  showAnnouncement = true,
}: HeroProps) {
  const { t } = useTranslation(locale, "hero");

  return (
    <Box
      as="section"
      sx={{
        position: "relative",
        minHeight: marketingTokens.spacing.hero.minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Layer */}
      {backgroundType === "particles" && <ParticleBackground />}
      {backgroundType === "gradient" && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: marketingTokens.gradients.mesh,
            zIndex: 0,
          }}
        />
      )}

      {/* Content Layer */}
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: marketingTokens.spacing.hero.contentMaxWidth,
          padding: "0 24px",
        }}
      >
        {/* Announcement Badge */}
        {showAnnouncement && (
          <motion.div variants={heroVariants.item}>
            <AnnouncementBadge locale={locale} />
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          variants={heroVariants.item}
          style={marketingTokens.typography.display}
        >
          <GradientText>{t("headline")}</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroVariants.item}
          style={{
            ...marketingTokens.typography.subheadline,
            marginTop: "24px",
            maxWidth: "640px",
            marginInline: "auto",
          }}
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={heroVariants.item}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            variant="primary"
            size="large"
            sx={{ borderRadius: marketingTokens.radii.button }}
            data-analytics="hero-cta-primary"
          >
            {t("cta.primary")}
          </Button>
          <Button
            variant="outline"
            size="large"
            sx={{ borderRadius: marketingTokens.radii.button }}
            data-analytics="hero-cta-secondary"
          >
            {t("cta.secondary")}
          </Button>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div variants={heroVariants.item}>
          <SocialProofStrip locale={locale} />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </Box>
  );
}
```

---

## Motion & Animation System

### Animation Principles

1. **Performance First** — Use `transform` and `opacity` only; avoid layout-triggering properties
2. **Respect User Preferences** — Support `prefers-reduced-motion`
3. **Purposeful Motion** — Animation should guide attention, not distract
4. **Consistent Timing** — Use standardized easing and duration tokens

### Motion Tokens

```typescript
// src/lib/motion.ts

import { Variants } from "framer-motion";

// Easing presets
export const easing = {
  default: [0.25, 0.1, 0.25, 1], // Smooth
  emphasized: [0.4, 0, 0.2, 1], // Material emphasized
  decelerate: [0, 0, 0.2, 1], // Enter
  accelerate: [0.4, 0, 1, 1], // Exit
  spring: { type: "spring", stiffness: 300, damping: 30 },
};

// Duration tokens (seconds)
export const duration = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
};

// Stagger delay
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Pre-built variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.default },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.decelerate },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.emphasized },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const heroVariants = {
  container: staggerChildren,
  item: fadeInUp,
};

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.decelerate },
  },
};

// Parallax helper
export const useParallax = (offset: number = 100) => ({
  initial: { y: 0 },
  whileInView: { y: -offset },
  transition: { ease: "linear" },
  viewport: { once: false },
});
```

### Reduced Motion Support

```typescript
// src/lib/motion.ts (continued)

import { useReducedMotion } from "framer-motion";

export function useMotionSafe() {
  const prefersReducedMotion = useReducedMotion();

  return {
    animate: prefersReducedMotion ? false : undefined,
    variants: prefersReducedMotion ? {} : undefined,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : undefined,
  };
}

// Usage in components
export function AnimatedSection({ children }) {
  const motionSafe = useMotionSafe();

  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      {...motionSafe}
    >
      {children}
    </motion.div>
  );
}
```

### 3D & WebGL Guidelines

```typescript
// src/lib/3d.ts

/**
 * 3D Asset Guidelines:
 *
 * 1. File Format: Use glTF 2.0 (.glb) for best compression and compatibility
 * 2. Polygon Budget: < 50k triangles for hero scenes
 * 3. Texture Size: Max 2048x2048, prefer 1024x1024
 * 4. Compression: Use Draco for geometry, KTX2/Basis for textures
 * 5. Fallback: Always provide static image fallback
 */

import { Suspense, lazy } from "react";

// Lazy load 3D components
const Scene3D = lazy(() => import("@/components/3d/HeroScene"));

export function Hero3DWrapper() {
  return (
    <Suspense fallback={<StaticHeroImage />}>
      <Scene3D />
    </Suspense>
  );
}

// WebGL detection
export function supportsWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}
```

---

## Content Management

### Content Sources Hierarchy

```
Priority 1: Sanity CMS (Dynamic, editable content)
   ↓ Fallback
Priority 2: Static JSON/MDX (Version-controlled content)
   ↓ Fallback
Priority 3: Hardcoded defaults (Never empty)
```

### Content Schema

```typescript
// src/content/schema.ts

import { z } from "zod";

// Hero content
export const heroSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
  cta: z.object({
    primary: z.object({
      text: z.string(),
      href: z.string(),
    }),
    secondary: z
      .object({
        text: z.string(),
        href: z.string(),
      })
      .optional(),
  }),
  announcement: z
    .object({
      text: z.string(),
      href: z.string(),
      badge: z.string().optional(),
    })
    .optional(),
  media: z
    .object({
      type: z.enum(["image", "video", "3d"]),
      src: z.string(),
      alt: z.string(),
      poster: z.string().optional(),
    })
    .optional(),
});

// Feature item
export const featureSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(), // Icon name from design-system
  href: z.string().optional(),
  badge: z.string().optional(), // "New", "Beta", etc.
});

// Pricing plan
export const pricingPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.object({
    monthly: z.number(),
    yearly: z.number(),
    currency: z.string().default("USD"),
  }),
  features: z.array(
    z.object({
      text: z.string(),
      included: z.boolean(),
      tooltip: z.string().optional(),
    }),
  ),
  cta: z.object({
    text: z.string(),
    href: z.string(),
    variant: z.enum(["primary", "outline"]).default("outline"),
  }),
  popular: z.boolean().default(false),
  badge: z.string().optional(),
});

// FAQ item
export const faqSchema = z.object({
  question: z.string(),
  answer: z.string(), // Supports markdown
  category: z.string().optional(),
});

// Testimonial
export const testimonialSchema = z.object({
  id: z.string(),
  quote: z.string(),
  author: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
    avatar: z.string().optional(),
  }),
  rating: z.number().min(1).max(5).optional(),
  featured: z.boolean().default(false),
});
```

### Content Fetching Pattern

```typescript
// src/lib/content.ts

import { sanityClient } from "@nebutra/sanity";
import type { Locale } from "@/lib/i18n/locales";

// Generic content fetcher with fallback
export async function getContent<T>(
  type: string,
  locale: Locale,
  fallback: T,
): Promise<T> {
  try {
    // Try CMS first
    const cmsContent = await sanityClient.fetch(
      `*[_type == $type && language == $locale][0]`,
      { type, locale },
    );
    if (cmsContent) return cmsContent;

    // Fallback to static JSON
    const staticContent = await import(`@/content/${locale}/${type}.json`)
      .then((m) => m.default)
      .catch(() => null);
    if (staticContent) return staticContent;

    // Return hardcoded fallback
    return fallback;
  } catch {
    return fallback;
  }
}

// Usage
const heroContent = await getContent("hero", locale, defaultHeroContent);
```

---

## Internationalization (i18n)

### Supported Locales

```typescript
// src/lib/i18n/locales.ts

export const locales = ["en", "zh", "ja", "ko", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<
  Locale,
  {
    name: string;
    nativeName: string;
    direction: "ltr" | "rtl";
    dateFormat: string;
    numberFormat: Intl.NumberFormatOptions;
    fontStack?: string; // Override font for specific locales
  }
> = {
  en: {
    name: "English",
    nativeName: "English",
    direction: "ltr",
    dateFormat: "MM/DD/YYYY",
    numberFormat: { style: "decimal" },
  },
  zh: {
    name: "Chinese",
    nativeName: "中文",
    direction: "ltr",
    dateFormat: "YYYY年MM月DD日",
    numberFormat: { style: "decimal" },
    fontStack: "var(--font-cjk)",
  },
  ja: {
    name: "Japanese",
    nativeName: "日本語",
    direction: "ltr",
    dateFormat: "YYYY年MM月DD日",
    numberFormat: { style: "decimal" },
    fontStack: "var(--font-cjk)",
  },
  // ... other locales
};
```

### Translation Loading

```typescript
// src/lib/i18n/server.ts

import "server-only";
import type { Locale } from "./locales";

const dictionaries: Record<Locale, () => Promise<Record<string, any>>> = {
  en: () => import("@/content/en/messages.json").then((m) => m.default),
  zh: () => import("@/content/zh/messages.json").then((m) => m.default),
  ja: () => import("@/content/ja/messages.json").then((m) => m.default),
  ko: () => import("@/content/ko/messages.json").then((m) => m.default),
  es: () => import("@/content/es/messages.json").then((m) => m.default),
  fr: () => import("@/content/fr/messages.json").then((m) => m.default),
  de: () => import("@/content/de/messages.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

// Nested key access
export function getTranslation(
  dictionary: Record<string, any>,
  key: string,
  params?: Record<string, string | number>,
): string {
  const value = key.split(".").reduce((obj, k) => obj?.[k], dictionary);

  if (typeof value !== "string") {
    console.warn(`Translation missing: ${key}`);
    return key;
  }

  if (!params) return value;

  return Object.entries(params).reduce(
    (str, [k, v]) => str.replace(`{{${k}}}`, String(v)),
    value,
  );
}
```

### AI-Powered Translation (via API Gateway)

```typescript
// src/lib/i18n/translator.ts

import { Locale } from "./locales";

interface TranslateOptions {
  from?: Locale;
  to: Locale;
  context?: string; // e.g., "marketing", "legal", "technical"
}

export async function translateText(
  text: string,
  options: TranslateOptions,
): Promise<string> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ai/translate`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        sourceLang: options.from || "en",
        targetLang: options.to,
        context: options.context || "marketing",
      }),
    },
  );

  if (!response.ok) throw new Error("Translation failed");

  const { translated } = await response.json();
  return translated;
}
```

---

## Performance & SEO

### Performance Budgets

| Metric                         | Target  | Maximum |
| ------------------------------ | ------- | ------- |
| LCP (Largest Contentful Paint) | < 2.0s  | < 2.5s  |
| FID (First Input Delay)        | < 50ms  | < 100ms |
| CLS (Cumulative Layout Shift)  | < 0.05  | < 0.1   |
| TTI (Time to Interactive)      | < 3.0s  | < 3.8s  |
| Total Bundle Size (JS)         | < 150KB | < 200KB |
| First Load JS                  | < 80KB  | < 100KB |

### Image Optimization

```typescript
// src/lib/images.ts

import { getImageProps } from "next/image";

// Responsive image sizes for different use cases
export const imageSizes = {
  hero: {
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
    quality: 85,
  },
  card: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    quality: 80,
  },
  thumbnail: {
    sizes: "120px",
    quality: 75,
  },
  logo: {
    sizes: "200px",
    quality: 90,
  },
};

// Blur placeholder generator
export function getBlurDataURL(width: number, height: number): string {
  const shimmer = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="0%"/>
          <stop stop-color="#edeef1" offset="50%"/>
          <stop stop-color="#f6f7f8" offset="100%"/>
        </linearGradient>
      </defs>
      <rect fill="url(#g)" width="100%" height="100%"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(shimmer)}`;
}
```

### SEO Configuration

```typescript
// src/lib/seo.ts

import { Metadata } from "next";
import type { Locale } from "@/lib/i18n/locales";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata(
  config: SEOConfig,
  locale: Locale,
  path: string = "",
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nebutra.com";
  const url = `${baseUrl}/${locale}${path}`;
  const imageUrl = config.image || `${baseUrl}/og-default.png`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        zh: `${baseUrl}/zh${path}`,
        ja: `${baseUrl}/ja${path}`,
        // ... other locales
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: "Nebutra",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [imageUrl],
    },
    robots: config.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Structured data (JSON-LD)
export function generateStructuredData(
  type: "Organization" | "Product" | "FAQPage",
  data: any,
) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }),
  };
}
```

---

## Analytics & Conversion Tracking

### Event Taxonomy

```typescript
// src/lib/analytics.ts

import { track } from "@nebutra/analytics";

// Event categories
export type EventCategory =
  | "navigation"
  | "engagement"
  | "conversion"
  | "error";

// Standardized event names
export const events = {
  // Navigation
  pageView: "page_view",
  navClick: "nav_click",
  footerClick: "footer_click",

  // Engagement
  scrollDepth: "scroll_depth",
  videoPlay: "video_play",
  demoInteraction: "demo_interaction",
  featureExpand: "feature_expand",
  faqExpand: "faq_expand",
  testimonialView: "testimonial_view",

  // Conversion
  ctaClick: "cta_click",
  pricingView: "pricing_view",
  planSelect: "plan_select",
  signupStart: "signup_start",
  signupComplete: "signup_complete",
  demoRequest: "demo_request",
  newsletterSubscribe: "newsletter_subscribe",

  // Error
  formError: "form_error",
  loadError: "load_error",
} as const;

// Track CTA clicks with context
export function trackCTA(
  ctaId: string,
  location: string,
  metadata?: Record<string, any>,
) {
  track(events.ctaClick, {
    cta_id: ctaId,
    location,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
    ...metadata,
  });
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  // Only track at 25%, 50%, 75%, 100%
  if ([25, 50, 75, 100].includes(percentage)) {
    track(events.scrollDepth, {
      depth_percentage: percentage,
      page_path: window.location.pathname,
    });
  }
}

// Track pricing interaction
export function trackPricing(
  action: "view" | "select" | "compare",
  planId?: string,
) {
  track(action === "view" ? events.pricingView : events.planSelect, {
    action,
    plan_id: planId,
    billing_cycle: "monthly", // or from state
  });
}
```

### Data Attributes Pattern

```tsx
// Use data attributes for automatic tracking
<Button
  data-analytics="cta-hero-primary"
  data-analytics-location="hero"
  data-analytics-variant="signup"
>
  Get Started
</Button>;

// Auto-track via event delegation
useEffect(() => {
  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const analyticsId = target
      .closest("[data-analytics]")
      ?.getAttribute("data-analytics");
    if (analyticsId) {
      trackCTA(
        analyticsId,
        target.getAttribute("data-analytics-location") || "unknown",
      );
    }
  };
  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}, []);
```

---

## Accessibility

### Requirements Checklist

- [ ] **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- [ ] **Focus States**: Visible focus indicators on all interactive elements
- [ ] **Keyboard Navigation**: Full site navigable via keyboard
- [ ] **Screen Reader**: Proper ARIA labels, semantic HTML
- [ ] **Reduced Motion**: Respect `prefers-reduced-motion`
- [ ] **Skip Links**: "Skip to main content" link
- [ ] **Alt Text**: Descriptive alt text for all images
- [ ] **Form Labels**: All form inputs have associated labels
- [ ] **Error Messages**: Clear, accessible error states
- [ ] **Touch Targets**: Minimum 44x44px for touch devices

### Accessibility Utilities

```typescript
// From @nebutra/design-system/primitives/accessibility.ts

export const visuallyHidden: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export const focusRing = {
  outline: "2px solid var(--color-accent-emphasis)",
  outlineOffset: "2px",
};

export const skipLink: React.CSSProperties = {
  ...visuallyHidden,
  "&:focus": {
    position: "fixed",
    top: "8px",
    left: "8px",
    width: "auto",
    height: "auto",
    padding: "8px 16px",
    clip: "auto",
    whiteSpace: "normal",
    background: "var(--color-canvas-default)",
    border: "2px solid var(--color-accent-emphasis)",
    borderRadius: "4px",
    zIndex: 9999,
  },
};
```

### Skip Link Component

```tsx
// src/components/navigation/SkipLink.tsx

export function SkipLink() {
  return (
    <a href="#main-content" style={skipLink} className="skip-link">
      Skip to main content
    </a>
  );
}

// In layout.tsx
<body>
  <SkipLink />
  <Navbar />
  <main id="main-content" tabIndex={-1}>
    {children}
  </main>
  <Footer />
</body>;
```

---

## Implementation Patterns

### Page Composition

```tsx
// src/app/[lang]/(marketing)/page.tsx

import { Suspense } from "react";
import { getDictionary } from "@/lib/i18n/server";
import { generateMetadata as genMeta } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/locales";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

// Loading states
import { HeroSkeleton, SectionSkeleton } from "@/components/skeletons";

interface Props {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: Props) {
  const dict = await getDictionary(params.lang);
  return genMeta(
    {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
    },
    params.lang,
  );
}

export default async function HomePage({ params }: Props) {
  const { lang } = params;

  return (
    <>
      {/* Hero - Critical, no suspense */}
      <Hero locale={lang} />

      {/* Features - Important, light suspense */}
      <Suspense fallback={<SectionSkeleton />}>
        <Features locale={lang} />
      </Suspense>

      {/* Social Proof - Quick load */}
      <SocialProof locale={lang} />

      {/* Use Cases - Can load later */}
      <Suspense fallback={<SectionSkeleton />}>
        <UseCases locale={lang} />
      </Suspense>

      {/* Pricing - Important for conversion */}
      <Pricing locale={lang} />

      {/* Testimonials - Can load later */}
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials locale={lang} />
      </Suspense>

      {/* FAQ */}
      <FAQ locale={lang} />

      {/* Final CTA */}
      <FinalCTA locale={lang} />
    </>
  );
}
```

### Section Base Component

```tsx
// src/components/sections/SectionBase.tsx

"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Box } from "@nebutra/design-system";
import { scrollReveal, useMotionSafe } from "@/lib/motion";
import { marketingTokens } from "@nebutra/design-system/theme";
import type { SectionProps } from "./types";

interface SectionBaseProps extends SectionProps {
  children: React.ReactNode;
  background?: "default" | "muted" | "accent" | "gradient";
  animate?: boolean;
}

export const SectionBase = forwardRef<HTMLElement, SectionBaseProps>(
  (
    {
      children,
      id,
      className,
      density = "normal",
      background = "default",
      animate = true,
    },
    ref,
  ) => {
    const motionSafe = useMotionSafe();

    const paddingY = {
      compact: marketingTokens.spacing.section.sm,
      normal: marketingTokens.spacing.section.md,
      spacious: marketingTokens.spacing.section.lg,
    }[density];

    const bgStyles = {
      default: {},
      muted: { bg: "canvas.subtle" },
      accent: { bg: "accent.subtle" },
      gradient: { background: marketingTokens.gradients.subtle },
    }[background];

    const content = (
      <Box
        as="section"
        ref={ref}
        id={id}
        className={className}
        sx={{
          paddingY,
          ...bgStyles,
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            marginX: "auto",
            paddingX: [3, 4, 5],
          }}
        >
          {children}
        </Box>
      </Box>
    );

    if (!animate) return content;

    return (
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        {...motionSafe}
      >
        {content}
      </motion.div>
    );
  },
);

SectionBase.displayName = "SectionBase";
```

### Config-Driven Pricing

```typescript
// src/config/pricing.ts

import type { z } from "zod";
import type { pricingPlanSchema } from "@/content/schema";

type PricingPlan = z.infer<typeof pricingPlanSchema>;

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for trying out Nebutra",
    price: { monthly: 0, yearly: 0, currency: "USD" },
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "Basic analytics", included: true },
      { text: "Community support", included: true },
      { text: "API access", included: false },
      { text: "Custom domains", included: false },
    ],
    cta: { text: "Get Started", href: "/signup", variant: "outline" },
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams and businesses",
    price: { monthly: 29, yearly: 290, currency: "USD" },
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: true },
      { text: "Custom domains", included: true },
    ],
    cta: {
      text: "Start Free Trial",
      href: "/signup?plan=pro",
      variant: "primary",
    },
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations",
    price: { monthly: 99, yearly: 990, currency: "USD" },
    features: [
      { text: "Everything in Pro", included: true },
      { text: "SSO & SAML", included: true },
      { text: "Dedicated support", included: true },
      { text: "Custom integrations", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: { text: "Contact Sales", href: "/contact", variant: "outline" },
    popular: false,
  },
];

// Price formatting
export function formatPrice(
  amount: number,
  currency: string,
  locale: string,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}
```

---

## Checklist for New Marketing Pages

### Before Development

- [ ] Define page purpose and primary conversion goal
- [ ] List required sections/modules
- [ ] Identify content sources (CMS vs static)
- [ ] Create content brief for copywriting
- [ ] Define analytics events to track

### During Development

- [ ] Use design-system tokens (no hard-coded values)
- [ ] Implement responsive breakpoints
- [ ] Add loading states (Suspense boundaries)
- [ ] Implement animations with reduced-motion support
- [ ] Add `data-analytics` attributes to CTAs
- [ ] Write semantic HTML with proper headings hierarchy
- [ ] Add alt text to all images

### Before Launch

- [ ] Test all breakpoints (mobile, tablet, desktop)
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify all i18n strings
- [ ] Check meta tags and OG images
- [ ] Verify analytics events fire correctly
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## Related Documentation

- [UI Guidelines](./UI-GUIDELINES.md)
- [Typography](./TYPOGRAPHY.md)
- [Component Library Policy](./COMPONENT-LIBRARY-POLICY.md)
- [@nebutra/design-system](../packages/design-system/README.md)
- [@nebutra/analytics](../packages/analytics/README.md)
- [@nebutra/sanity](../packages/sanity/README.md)
