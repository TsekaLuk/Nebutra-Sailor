# Nebutra Sailor — Landing Page Design Specification

> **Version:** 2.0.0  
> **Last Updated:** 2025-12-03  
> **Design Philosophy:** High-Granularity DOM UI (Vercel / Supabase / OpenAI)

---

## Table of Contents

1. [Product Positioning](#1-product-positioning)
2. [Narrative Strategy](#2-narrative-strategy)
3. [Page Structure & Wireframe](#3-page-structure--wireframe)
4. [Component Mapping](#4-component-mapping)
5. [Motion Design System](#5-motion-design-system)
6. [Design Tokens Usage](#6-design-tokens-usage)
7. [Mental Model](#7-mental-model)
8. [Content Guidelines](#8-content-guidelines)
9. [Implementation Notes](#9-implementation-notes)
10. [High-Granularity UI Architecture](#10-high-granularity-ui-architecture)

---

## 1. Product Positioning

### What Sailor IS

- Open-source enterprise SaaS framework
- Production-ready boilerplate for multi-tenant apps
- The "last 10%" that AI coding can't solve
- Technical embodiment of Nebutra's MVO philosophy

### What Sailor is NOT

- An AI service or API
- A no-code builder
- A managed platform (yet)
- A company services pitch

### Target Users

| Segment                 | Need                | Sailor Value        |
| ----------------------- | ------------------- | ------------------- |
| **Solo Founders**       | Ship MVP fast       | Full stack in weeks |
| **Dev Agencies**        | Reusable foundation | 60% faster delivery |
| **Startup Teams (3-7)** | Enterprise features | 30-70 人生产力      |

### Core Message

```
"AI writes 90% of the code. The other 10% takes 90% of your time.
Sailor handles that 10%."
```

---

## 2. Narrative Strategy

### Story Arc

```
TENSION     → AI 能写代码，但 Demo → Product 仍是鸿沟
SOLUTION    → Sailor = production-ready 基建
PROOF       → Features + Architecture + Testimonials
VISION      → Nebutra 愿景 (MVO, Vibe Entrepreneurship)
ACTION      → Clone / Star / Deploy
```

### Vibe Philosophy

```
Vibe Coding → Vibe Entrepreneurship → Vibe Business
     ↓              ↓                      ↓
  AI writes     Build product         Scale & profit
  the code      (SAILOR CORE)
```

### Tone

- **Confident** but not arrogant
- **Developer-friendly** — code > marketing speak
- **Aspirational** — "small teams with big leverage"
- **International** — minimal culture-specific references

---

## 3. Page Structure & Wireframe

### Section Flow & Rhythm

```
SECTION                  VISUAL WEIGHT    PURPOSE
────────────────────────────────────────────────────
1.  Immersive Hero       ████████████     Impact + Identity
2.  Trust Ribbon         ██               Credibility (tech logos)
3.  Split Narrative      ██████           Problem ↔ Solution
4.  Architecture Show    ██████████       Code Structure (DX Proof)
5.  Asymmetric Bento     ████████         Feature Depth
6.  Stats Break          ███              Breathing + Numbers
7.  Terminal Experience  ██████████       Developer Immersion
8.  Testimonials         ████             Social Proof
9.  Why We Built This    ██████           Company Vision
10. Pricing              ████             Decision Info
11. FAQ                  ██               Objection Handling
12. Final CTA            ████████████     Action Climax
13. Footer               █                Exit
```

### Detailed Wireframe

#### 1. IMMERSIVE HERO (100vh+)

```
┌────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  ░                                                                ░ │
│  ░  [Logo]                                     [GitHub] [Docs]   ░ │
│  ░                                                                ░ │
│  ░                    ╭──────────────────────╮                   ░ │
│  ░                    │  Orbiting Gradient   │                   ░ │
│  ░                    │  Sphere (follows     │                   ░ │
│  ░                    │  cursor)             │                   ░ │
│  ░                    ╰──────────────────────╯                   ░ │
│  ░                                                                ░ │
│  ░           MIT Licensed · Production-Ready                     ░ │
│  ░                                                                ░ │
│  ░                 The SaaS framework for                        ░ │
│  ░               ┌─────────────────────────┐                     ░ │
│  ░               │  builders who ship      │ ← AnimatedHeadline  ░ │
│  ░               │  teams who scale        │   (cycling)         ░ │
│  ░               │  founders who win       │                     ░ │
│  ░               └─────────────────────────┘                     ░ │
│  ░                                                                ░ │
│  ░      ┌────────────────────────────────────────────────┐       ░ │
│  ░      │  $ npx create-sailor@latest ██████████████     │       ░ │
│  ░      └────────────────────────────────────────────────┘       ░ │
│  ░                                                                ░ │
│  ░                      ↓ Scroll to explore                      ░ │
│  ░                                                                ░ │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────────────────────────────────┘

Background: CosmicSpectrum + Mesh Gradient (#0033FE ↔ #0BF1C3)
Motion: SmoothScrollHero (parallax clip-path reveal)
```

#### 2. TRUST RIBBON

```
═══════════════════════════════════════════════════════════════════════
 [Next.js]  [React]  [Prisma]  [Supabase]  [Stripe]  [Clerk]  →→→
═══════════════════════════════════════════════════════════════════════

Component: Marquee (infinite, pauseOnHover)
Motion: 40s duration, grayscale → color on hover
Logo Source: SVGL CDN (https://svgl.app/library/{filename}.svg)
  - See src/lib/landing-content.ts for techStackLogos config
  - Docs: docs/UI-GUIDELINES.md#logo--icon-resources
```

#### 3. SPLIT NARRATIVE

```
┌─────────────────────────────┬─────────────────────────────────────┐
│                             │                                     │
│  ┌───────────────────────┐  │    You write the product.           │
│  │  Terminal Window      │  │                                     │
│  │                       │  │    We wrote everything else.        │
│  │  $ cursor .           │  │                                     │
│  │  > Building app...    │  │    Multi-tenancy. Billing. Auth.    │
│  │  > Generated 847 files│  │    AI. Security. Compliance.        │
│  │  > Done in 3.2s       │  │    Edge. Observability.             │
│  │                       │  │                                     │
│  └───────────────────────┘  │    All production-ready.            │
│                             │    All open source.                 │
│  sticky: true               │                                     │
│                             │                                     │
└─────────────────────────────┴─────────────────────────────────────┘

Layout: 45% / 55% split, left sticky
Component: FeatureSplitSection (variant: sticky-left)
```

#### 4. ARCHITECTURE SHOWCASE (代码/架构展示)

```
╔═════════════════════════════════════════════════════════════════════╗
║                                                                     ║
║       What you get out of the box                                   ║
║                                                                     ║
║   ┌─────────────────────────────────────────────────────────────┐   ║
║   │                                                             │   ║
║   │   Nebutra-Sailor/                                           │   ║
║   │   │                                                         │   ║
║   │   ├── apps/                                                 │   ║
║   │   │   ├── web/              # SaaS Dashboard (Next.js)     │   ║
║   │   │   ├── landing-page/     # Marketing Site               │   ║
║   │   │   ├── api-gateway/      # BFF Layer (Hono)             │   ║
║   │   │   └── studio/           # Sanity CMS                   │   ║
║   │   │                                                         │   ║
║   │   ├── packages/                                             │   ║
║   │   │   ├── db/               # Prisma Schema                │   ║
║   │   │   ├── ui/               # Component Library            │   ║
║   │   │   ├── billing/          # Stripe Integration           │   ║
║   │   │   ├── auth/             # Clerk Multi-tenant           │   ║
║   │   │   └── ...47 more                                        │   ║
║   │   │                                                         │   ║
║   │   └── services/                                             │   ║
║   │       ├── ai/               # LLM + Embeddings             │   ║
║   │       ├── content/          # Feed + Posts                 │   ║
║   │       └── recsys/           # Recommendations              │   ║
║   │                                                             │   ║
║   └─────────────────────────────────────────────────────────────┘   ║
║                                                                     ║
║       847 files · 51 packages · Production-ready                    ║
║                                                                     ║
╚═════════════════════════════════════════════════════════════════════╝

Component: Custom CodeBlock with syntax highlighting
Motion: Lines fade in sequentially, hover highlights folders
Effect: Terminal aesthetic (dark bg, mono font)
Typography: fontFamily.mono, text-sm
```

#### 5. ASYMMETRIC BENTO

```
┌─────────────────────────────────────┐  ┌─────────────────────────┐
│  🏢 Multi-Tenant Architecture       │  │  🤖 AI-Native           │
│                                     │  │                         │
│  ┌─────────────────────────────┐   │  │  Vercel AI SDK          │
│  │  Org A    Org B    Org C    │   │  │  + pgvector + MCP       │
│  │  RLS   │  RLS   │  RLS      │   │  │                         │
│  └─────────────────────────────┘   │  │  ░░░░░░░░░░░░░░░░░░░░  │
│                                     │  │  ░ AI Chat Demo     ░  │
│  Clerk Orgs → Tenant Context → RLS  │  │  ░░░░░░░░░░░░░░░░░░░░  │
│                                     │  │                         │
└─────────────────────────────────────┘  └─────────────────────────┘

┌─────────────────────────┐  ┌─────────────────────────────────────┐
│  💳 Billing             │  │  🌍 Global Edge                     │
│                         │  │                                     │
│  Stripe Integration     │  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ✓ Subscriptions        │  │  ░    World Map with Edge Dots   ░  │
│  ✓ Usage metering       │  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ✓ Feature entitlements │  │                                     │
│                         │  │  Vercel + Cloudflare + Upstash      │
└─────────────────────────┘  └─────────────────────────────────────┘

Layout: 60/40 top row, 40/60 bottom row (asymmetric)
Component: FeaturesBentoSection (custom layout)
Motion: Staggered fadeInUp, internal card animations
```

#### 6. STATS BREAK

```
                        · · ·

    ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐
    │    2-4     │  │    60%     │  │    847     │  │    MIT     │
    │   weeks    │  │   faster   │  │   files    │  │  license   │
    │  to MVP    │  │  delivery  │  │  included  │  │  forever   │
    └────────────┘  └────────────┘  └────────────┘  └────────────┘

                        · · ·

Component: StatsCounter (minimal variant)
Layout: max-w-4xl, py-32 (generous breathing room)
Motion: CountUp on scroll
```

#### 7. TERMINAL EXPERIENCE

```
┌──────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  ░                                                                  ░ │
│  ░   ┌────────────────────────────────────────────────────────────┐ ░ │
│  ░   │ ●  ●  ●                                                    │ ░ │
│  ░   ├────────────────────────────────────────────────────────────┤ ░ │
│  ░   │                                                            │ ░ │
│  ░   │   $ npx create-sailor@latest my-saas                       │ ░ │
│  ░   │                                                            │ ░ │
│  ░   │   ███████████████████████░░░░░░░░░░░░░  67%                │ ░ │
│  ░   │                                                            │ ░ │
│  ░   │   ✓ Scaffolding project structure                          │ ░ │
│  ░   │   ✓ Installing dependencies                                │ ░ │
│  ░   │   ✓ Setting up Prisma                                      │ ░ │
│  ░   │   ● Configuring auth...                                    │ ░ │
│  ░   │                                                            │ ░ │
│  ░   └────────────────────────────────────────────────────────────┘ ░ │
│  ░                                                                  ░ │
│  ░   Zero to running in 5 minutes.                                  ░ │
│  ░                                                                  ░ │
│  ░                [ Copy command ]     [ View on GitHub → ]         ░ │
│  ░                                                                  ░ │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────────────────────────────────────────────────┘

Background: neutral.950 + subtle grid pattern
Motion: Progress bar animates, checkmarks appear sequentially
Typography: fontFamily.mono, text-green-400 for success
```

#### 8. TESTIMONIALS

```
              Builders ship faster with Sailor

        ╭─────────────────────────────────────────────────╮
        │                                                 │
        │   "We went from idea to paying customers        │
        │    in 3 weeks. The multi-tenant setup           │
        │    alone would have taken us months."           │
        │                                                 │
        │   ┌──────┐                                      │
        │   │ 👤   │  Sarah Chen, CTO @ TechStartup       │
        │   └──────┘                                      │
        │                                                 │
        ╰─────────────────────────────────────────────────╯

                  ← prev    ●  ○  ○  ○  ○    next →

Component: TestimonialsRegistry (variant: "carousel3d")
Motion: 3D perspective rotate, depth-of-field blur on sides
```

#### 9. WHY WE BUILT THIS (Company Vision)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                         ◆  NEBUTRA                                   │
│                            Intelligence                              │
│                                                                      │
│                                                                      │
│            We believe the future belongs to                          │
│            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              │
│            ░ small teams with big leverage. ░  ← gradient           │
│            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              │
│                                                                      │
│            Nebutra is an AI-native product accelerator               │
│            helping 3-7 person teams achieve the output               │
│            of 30-70.                                                 │
│                                                                      │
│                                                                      │
│      ════════════════════════════════════════════════════           │
│                                                                      │
│                                                                      │
│    ┌─────────────────────┐      ┌─────────────────────┐             │
│    │  "Software is not   │      │  "AI is not a tool, │             │
│    │   a deliverable—    │      │   it's a teammate." │             │
│    │   it's capability   │      │                     │             │
│    │   itself."          │      │                     │             │
│    └─────────────────────┘      └─────────────────────┘             │
│                                                                      │
│    ┌─────────────────────┐      ┌─────────────────────┐             │
│    │  "Workflows are     │      │  "Going global      │             │
│    │   value engines,    │      │   isn't an exit—    │             │
│    │   not process."     │      │   it's the default."│             │
│    └─────────────────────┘      └─────────────────────┘             │
│                                                                      │
│                                                                      │
│      ════════════════════════════════════════════════════           │
│                                                                      │
│                                                                      │
│                          Our vision:                                 │
│                                                                      │
│   ╔════════════════════════════════════════════════════════════╗    │
│   ║  Vibe Coding → Vibe Entrepreneurship → Vibe Business       ║    │
│   ╚════════════════════════════════════════════════════════════╝    │
│                                                                      │
│                                                                      │
│            Future unicorns will be built by tiny teams               │
│            with extraordinary leverage.                              │
│                                                                      │
│            Sailor is how we give that leverage away.                 │
│                                                                      │
│                                                                      │
│                     [ Learn about Nebutra → ]                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

Background: Subtle gradient (brand colors at 5% opacity)
Layout: Centered, py-24
Mood: Contemplative, aspirational
Motion: Logo float, philosophy cards stagger fadeIn, vision typewriter
```

#### 10. PRICING

```
                    Open source. Free forever.

    ┌─────────────────────────────────┬─────────────────────────────────┐
    │                                 │         ░░░░░░░░░░░░░░░░░░░    │
    │        SELF-HOSTED              │         ░ BorderTrail     ░    │
    │                                 │         ░░░░░░░░░░░░░░░░░░░    │
    │           $0                    │                                 │
    │        forever free             │        CLOUD (Coming Soon)      │
    │                                 │                                 │
    │        ─────────────            │        Starting $49/mo          │
    │                                 │                                 │
    │        ✓ Full source            │        ─────────────            │
    │        ✓ All features           │                                 │
    │        ✓ MIT license            │        ✓ Managed infra          │
    │        ✓ Community              │        ✓ Auto-scaling           │
    │                                 │        ✓ 99.9% SLA              │
    │                                 │        ✓ Priority support       │
    │                                 │                                 │
    │     [ Clone on GitHub ★ ]       │     [ Join waitlist → ]         │
    │                                 │                                 │
    └─────────────────────────────────┴─────────────────────────────────┘

                   Need enterprise support? Contact us →

Component: PricingSection (two-column) + BorderTrail
Layout: max-w-4xl, equal columns
Motion: BorderTrail on Cloud card
```

#### 11. FAQ

```
                              max-w-2xl, centered

    ┌─────────────────────────────────────────────────────────────────┐
    │  ▼  Is it really free?                                          │
    │     Yes, MIT licensed with Commons Clause.                      │
    ├─────────────────────────────────────────────────────────────────┤
    │  ▶  What's the tech stack?                                      │
    ├─────────────────────────────────────────────────────────────────┤
    │  ▶  Can I white-label it?                                       │
    ├─────────────────────────────────────────────────────────────────┤
    │  ▶  How does multi-tenancy work?                                │
    ├─────────────────────────────────────────────────────────────────┤
    │  ▶  What AI providers are supported?                            │
    └─────────────────────────────────────────────────────────────────┘

Component: FAQBlock (minimal variant)
Motion: Accordion expand, icon rotate 180°
```

#### 12. FINAL CTA

```
┌──────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  ░                                                                  ░ │
│  ░              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░            ░ │
│  ░              ░  Mesh Gradient (brand colors)     ░              ░ │
│  ░              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░            ░ │
│  ░                                                                  ░ │
│  ░                                                                  ░ │
│  ░                  Stop building infrastructure.                   ░ │
│  ░                  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░        ░ │
│  ░                  ░ Start building your product. ░ ← gradient    ░ │
│  ░                  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░        ░ │
│  ░                                                                  ░ │
│  ░                                                                  ░ │
│  ░       ┌─────────────────────────────────────────────────────┐   ░ │
│  ░       │ $ npx create-sailor@latest ____________________     │   ░ │
│  ░       └─────────────────────────────────────────────────────┘   ░ │
│  ░                                                                  ░ │
│  ░                                                                  ░ │
│  ░                [ Get Started ]    [ Star on GitHub ★ ]          ░ │
│  ░                                                                  ░ │
│  ░                                                                  ░ │
│  ░              ★ 1.2k       🍴 234       👥 Join Discord           ░ │
│  ░                                                                  ░ │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────────────────────────────────────────────────┘

Component: CTASection + GridPattern + StatsCounter
Background: Mesh gradient + animated grid lines
Height: min-h-[80vh]
Motion: Glow on buttons, CountUp for stats
```

#### 13. FOOTER

```
──────────────────────────────────────────────────────────────────────

Sailor              Product   ·   Docs   ·   GitHub   ·   Discord
by Nebutra

© 2024                                          [X] [GH] [DC]  ● Online

──────────────────────────────────────────────────────────────────────

Component: Footer (minimal variant)
Layout: Single row, subtle border-top
Motion: Status dot pulse
```

---

## 4. Component Mapping

### From `@nebutra/custom-ui/marketing`

| Section      | Component(s)                                             | Variant/Props           |
| ------------ | -------------------------------------------------------- | ----------------------- |
| Hero         | `SmoothScrollHero`, `CosmicSpectrum`, `AnimatedHeadline` | scrollHeight: 1500      |
| Trust        | `Marquee`, `LogoCloudSlider`                             | pauseOnHover, grayscale |
| Split        | `FeatureSplitSection`                                    | sticky-left variant     |
| Architecture | Custom `CodeBlock` / `FileTree`                          | terminal aesthetic      |
| Bento        | `FeaturesBentoSection`, `BentoCards`                     | asymmetric layout       |
| Stats        | `StatsCounter`                                           | minimal variant         |
| Terminal     | Custom `TerminalDemo`                                    | animated progress       |
| Testimonials | `TestimonialsRegistry`                                   | variant: "carousel3d"   |
| Vision       | `GradientText`, Philosophy Cards                         | —                       |
| Pricing      | `PricingSection`, `BorderTrail`                          | two-column              |
| FAQ          | `FAQBlock`                                               | minimal variant         |
| CTA          | `CTASection`, `GridPattern`                              | mesh gradient bg        |
| Footer       | `Footer`, `SystemStatusButton`                           | minimal variant         |

### From `@nebutra/design-system`

| Usage              | Token                                 |
| ------------------ | ------------------------------------- |
| Section padding    | `marketingSpacing.section.lg` (128px) |
| Card radius        | `marketingRadii.cardLg` (24px)        |
| Typography Display | `marketingTypography.display`         |
| Primary Gradient   | `colors.gradient.primary`             |
| Transitions        | `marketingTransitions.smooth` (300ms) |

### From `@nebutra/brand`

| Element       | Asset                                              |
| ------------- | -------------------------------------------------- |
| Logo          | `logoAssets.horizontalEn`                          |
| Primary Color | `colors.primary.500` (#0033FE)                     |
| Accent Color  | `colors.accent.500` (#0BF1C3)                      |
| Gradient      | `colors.gradient.primary`                          |
| Font          | `typography.fontFamily.sans` (Poppins + vivo Sans) |

---

## 5. Motion Design System

### Motion Principles

1. **Purpose > Decoration** — Every animation serves UX
2. **Subtle > Dramatic** — Unicorn aesthetic is restrained
3. **Performance** — Use `will-change`, GPU acceleration
4. **Accessibility** — Respect `prefers-reduced-motion`

### Motion Catalog

#### Entrance Animations

| Name         | CSS/Framer                  | Timing                           | Use Case         |
| ------------ | --------------------------- | -------------------------------- | ---------------- |
| `fadeIn`     | opacity 0→1                 | 300ms ease-out                   | General reveals  |
| `fadeInUp`   | opacity + translateY 20px→0 | 400ms cubic-bezier(0.16,1,0.3,1) | Headlines, cards |
| `scaleIn`    | scale 0.95→1                | spring(120, 14)                  | Badges, buttons  |
| `clipReveal` | clip-path polygon           | 500ms ease-out                   | Hero headline    |

#### Scroll-Driven

| Name              | Behavior                | Use Case           |
| ----------------- | ----------------------- | ------------------ |
| `parallaxY`       | Different scroll speeds | Hero mockup        |
| `scaleOnScroll`   | Scale 1.0→0.95          | Dashboard showcase |
| `opacityOnScroll` | Fade based on position  | Long content       |

#### Micro-interactions

| Name         | Behavior                 | Timing |
| ------------ | ------------------------ | ------ |
| `hoverLift`  | translateY -4px + shadow | 150ms  |
| `hoverTilt`  | rotateX/Y 1-2°           | 200ms  |
| `buttonGlow` | box-shadow glow          | 300ms  |

#### Ambient

| Name            | Behavior             | Duration     |
| --------------- | -------------------- | ------------ |
| `orbFloat`      | Subtle Y oscillation | 8s infinite  |
| `gradientShift` | Hue rotation         | 15s infinite |
| `pulseStatus`   | Scale + opacity      | 2s infinite  |

### Motion Parameters

```css
/* Standard easing */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Spring (Framer) */
--spring-default: mass=1, stiffness=120, damping=18;
```

---

## 6. Design Tokens Usage

### Spacing

```tsx
// Section vertical padding
<section className="py-24 md:py-32" /> // section.lg

// Container width
<div className="mx-auto max-w-7xl px-6" /> // container.wide

// Component gaps
<div className="gap-4 md:gap-6" /> // standard gap
```

### Typography

```tsx
// Hero headline
<h1 className="text-5xl md:text-6xl font-bold tracking-tight" />

// Section title
<h2 className="text-3xl md:text-4xl font-semibold" />

// Body text
<p className="text-lg text-muted-foreground" />

// Mono/Code
<code className="font-mono text-sm" />
```

### Colors

```tsx
// Brand gradient text
<span className="bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] bg-clip-text text-transparent" />

// Muted text
<p className="text-neutral-500 dark:text-neutral-400" />

// Success accent
<span className="text-green-500" />
```

### Shadows & Effects

```tsx
// Card shadow
<div className="shadow-lg hover:shadow-xl transition-shadow" />

// Glass effect
<div className="backdrop-blur-md bg-white/10 border border-white/20" />

// Glow effect
<button className="hover:shadow-[0_0_30px_rgba(0,51,254,0.3)]" />
```

---

## 7. Mental Model

### Attention Flow

```
1. ARRIVAL (0-3s)
   └─ Orb + AnimatedHeadline → Immediate intrigue

2. COMPREHENSION (3-10s)
   └─ Subheadline + Command → "What is this?"

3. TRUST (10-30s)
   └─ Tech logos + Split narrative → "Seems legit"

4. PROOF (30-60s)
   └─ Dashboard + Bento → "What can it do?"

5. VALIDATION (60-90s)
   └─ Testimonials + Company vision → "Who's behind this?"

6. DECISION (90s+)
   └─ Pricing + FAQ → "Should I try it?"

7. ACTION
   └─ Final CTA → "Let's go"
```

### Conversion Paths

**Primary (Developer)**

```
Hero CTA → GitHub → Clone → Build
```

**Secondary (Evaluator)**

```
Features → Docs → FAQ → Clone
```

**Tertiary (Enterprise)**

```
Features → Company Vision → Pricing → Contact
```

### Information Hierarchy

```
L1 ████████████  Hero Headline (Ship Your SaaS)
L2 ████████      Section Titles
L3 ██████        Feature Titles
L4 ████          Body Text
L5 ██            Labels, Metadata
```

---

## 8. Content Guidelines

### Headlines

- **Hero:** Action-oriented, benefit-focused
- **Sections:** Clear, scannable
- **Features:** Technical but accessible

### Body Copy

- Concise — every word earns its place
- Developer-friendly — code > marketing fluff
- Confident — not arrogant

### CTAs

| Location | Primary             | Secondary      |
| -------- | ------------------- | -------------- |
| Hero     | `npx create-sailor` | Star on GitHub |
| Section  | Learn more →        | —              |
| Pricing  | Clone on GitHub     | Join waitlist  |
| Final    | Get Started         | Star on GitHub |

### Testimonials

- Real quotes (or realistic placeholders)
- Include role + company
- Focus on time saved, problems solved

### FAQ Items

1. Is it really free?
2. What's the tech stack?
3. Can I white-label it?
4. How does multi-tenancy work?
5. What AI providers are supported?

---

## 9. Implementation Notes

### File Structure

```
src/
├── app/
│   └── [lang]/
│       └── (marketing)/
│           └── page.tsx          # Main landing page
├── components/
│   ├── landing/                  # Landing-specific components
│   │   ├── HeroSection.tsx
│   │   ├── SplitNarrative.tsx
│   │   ├── DashboardShowcase.tsx
│   │   ├── FeatureBento.tsx
│   │   ├── StatsBreak.tsx
│   │   ├── TerminalDemo.tsx
│   │   ├── VisionSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── FinalCTA.tsx
│   └── marketing/                # Reusable marketing components
│       └── ...existing...
└── lib/
    └── landing-content.ts        # Content constants
```

### Performance Considerations

- Lazy load below-fold sections
- Use `next/image` for all images
- Preload critical fonts
- Use `will-change` sparingly
- Implement `prefers-reduced-motion`

### Responsive Breakpoints

| Breakpoint | Behavior                                    |
| ---------- | ------------------------------------------- |
| < 640px    | Mobile: Stack everything, reduce typography |
| 640-1024px | Tablet: 2-column bento, smaller hero        |
| > 1024px   | Desktop: Full layout                        |

### SEO

- Semantic HTML (h1 → h2 → h3)
- Meta description from `hero.subtitle`
- OG image: Dashboard mockup
- Structured data for software product

### Analytics Events

- `hero_cta_click`
- `github_star_click`
- `pricing_view`
- `faq_expand`
- `final_cta_click`

---

## Appendix: Unsplash Placeholder Keywords

For visual mockups during development:

| Section     | Keyword                    |
| ----------- | -------------------------- |
| Hero Orb    | `abstract,gradient,sphere` |
| Dashboard   | `dashboard,saas,interface` |
| Team/Vision | `team,startup,office`      |
| Global      | `world,map,technology`     |

---

## 10. High-Granularity UI Architecture

> **Goal:** Evolve from "Template-Grade" UI to "Vercel/Supabase-Grade" high-granularity DOM structure.

### 10.1 Atomic Design Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DESIGN SYSTEM LAYERS                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ LAYER 3: ORGANISMS (Section-level)                                  │    │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐    │    │
│  │ │ HeroSection │ │FeatureBento│ │ PricingGrid │ │TestimonialWall│   │    │
│  │ │  Composes   │ │  Composes   │ │  Composes   │ │  Composes   │    │    │
│  │ │  Molecules  │ │  Molecules  │ │  Molecules  │ │  Molecules  │    │    │
│  │ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘ └──────┬──────┘    │    │
│  └────────┼───────────────┼───────────────┼───────────────┼───────────┘    │
│           │               │               │               │                 │
│  ┌────────▼───────────────▼───────────────▼───────────────▼───────────┐    │
│  │ LAYER 2: MOLECULES (Reusable patterns)                             │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │    │
│  │  │CommandBox│ │ Terminal │ │FeatureCard│ │PriceCard │ │QuoteCard │ │    │
│  │  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐             │    │
│  │  │ CTAGroup │ │ StatCard │ │ NavGroup │ │ FAQItem  │             │    │
│  │  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘             │    │
│  └───────┼────────────┼────────────┼────────────┼─────────────────────┘    │
│          │            │            │            │                          │
│  ┌───────▼────────────▼────────────▼────────────▼─────────────────────┐    │
│  │ LAYER 1: ATOMS (Primitive building blocks)                         │    │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │    │
│  │  │ Box │ │Stack│ │Flex │ │Text │ │Icon │ │Badge│ │Button│ │Link │ │    │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ │    │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         │    │
│  │  │Card │ │Input│ │Divider│ │Avatar│ │Pill│ │Glow │ │Grid │         │    │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘         │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ LAYER 0: TOKENS (Design foundation)                                 │    │
│  │  Colors │ Spacing │ Typography │ Shadows │ Radii │ Motion │ Z-index │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.2 Component File Structure

```
packages/custom-ui/src/
├── tokens/
│   ├── spacing.ts          # --space-1 to --space-16
│   ├── colors.ts           # Semantic color tokens
│   ├── typography.ts       # Font scales
│   ├── shadows.ts          # Elevation system
│   ├── radii.ts            # Border radius
│   └── motion.ts           # Animation presets
│
├── primitives/             # ATOMS
│   ├── Box.tsx             # Layout primitive with spacing props
│   ├── Stack.tsx           # Vertical stack (VStack)
│   ├── Flex.tsx            # Horizontal flex (HStack)
│   ├── Text.tsx            # Typography with variants
│   ├── Heading.tsx         # h1-h6 semantic headings
│   ├── Icon.tsx            # Icon wrapper with sizing
│   ├── Button.tsx          # Button variants
│   ├── Badge.tsx           # Status/label badges
│   ├── Pill.tsx            # Rounded tags
│   ├── Divider.tsx         # Horizontal/vertical separator
│   ├── Avatar.tsx          # User avatars
│   ├── Image.tsx           # Optimized image wrapper
│   └── Link.tsx            # Styled anchor
│
├── patterns/               # MOLECULES
│   ├── Card/
│   │   ├── Card.tsx        # Base card container
│   │   ├── CardHeader.tsx  # Card header slot
│   │   ├── CardBody.tsx    # Card body slot
│   │   ├── CardFooter.tsx  # Card footer slot
│   │   └── index.ts        # Compound export
│   ├── Terminal/
│   │   ├── Terminal.tsx    # Terminal container
│   │   ├── TerminalHeader.tsx
│   │   ├── TerminalBody.tsx
│   │   └── TerminalLine.tsx
│   ├── CommandBox.tsx      # Copy-able command input
│   ├── FeatureCard.tsx     # Feature grid card
│   ├── PriceCard.tsx       # Pricing tier card
│   ├── QuoteCard.tsx       # Testimonial card
│   ├── StatCard.tsx        # Metric display
│   ├── CTAGroup.tsx        # Button group for CTAs
│   ├── NavGroup.tsx        # Navigation link group
│   └── FAQItem.tsx         # Accordion FAQ item
│
├── decorations/            # Background/Visual elements
│   ├── GridPattern.tsx     # CSS grid background
│   ├── DotPattern.tsx      # Dot matrix pattern
│   ├── NoiseTexture.tsx    # Noise overlay
│   ├── GradientBlur.tsx    # Ambient glow
│   ├── FloatingOrb.tsx     # Animated orb decoration
│   └── GlowEffect.tsx      # Hover glow effect
│
└── layouts/                # Section containers
    ├── SectionContainer.tsx  # Standard section wrapper
    ├── SplitLayout.tsx       # 50/50 split
    ├── BentoGrid.tsx         # Asymmetric grid
    └── CenteredContent.tsx   # Centered narrow content
```

### 10.3 Compound Card Pattern

```
┌─────────────────────────────────────────────────────────────┐
│ CARD ANATOMY                                                │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │ CardHeader                                           │   │
│  │ ┌─────────────────────────────────────────────────┐ │   │
│  │ │ ┌──────┐                          ┌───────────┐ │ │   │
│  │ │ │ Icon │  Title                   │   Badge   │ │ │   │
│  │ │ └──────┘                          └───────────┘ │ │   │
│  │ │           Subtitle / Meta                       │ │   │
│  │ └─────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                         ↓ gap-4                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ CardBody                                            │   │
│  │   Description text or rich content area             │   │
│  │   Can contain lists, images, or nested components   │   │
│  └─────────────────────────────────────────────────────┘   │
│                         ↓ gap-4                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ CardFooter                                          │   │
│  │ ┌───────────────┐                    ┌───────────┐ │   │
│  │ │  Action Link  │                    │  Button   │ │   │
│  │ └───────────────┘                    └───────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ CardGlow (absolute positioned hover effect)         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Usage Example:**

```tsx
// ❌ BEFORE: Flat structure
<motion.div className="group relative overflow-hidden rounded-2xl border...">
  <div className="mb-4 flex h-12 w-12 items-center justify-center...">
    <Icon className="h-6 w-6 text-accent" />
  </div>
  <h3 className="mb-2 text-xl font-semibold...">{title}</h3>
  <p className="text-sm text-muted-foreground">{description}</p>
</motion.div>

// ✅ AFTER: Compound structure
<Card variant="elevated" size="md" withGlow>
  <Card.Header>
    <Card.Icon icon={Icon} />
    <Badge variant="subtle">New</Badge>
  </Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Body>
  <Card.Footer>
    <Link href="#">Learn more →</Link>
  </Card.Footer>
</Card>
```

### 10.4 Visual Depth Layers

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         VISUAL DEPTH LAYERS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Z-INDEX: 50   OVERLAY       Modal / Dropdown / Tooltip                     │
│                              shadow-2xl + backdrop-blur-xl                   │
│                                          ↑                                   │
│  Z-INDEX: 40   NAVIGATION    Navbar / Floating elements                     │
│                              shadow-lg + backdrop-blur-lg                    │
│                                          ↑                                   │
│  Z-INDEX: 20   ELEVATED      Cards / Interactive elements                   │
│                              shadow-md + bg-card/80                          │
│                                          ↑                                   │
│  Z-INDEX: 10   AMBIENT       Glow effects / Decorative orbs                 │
│                              blur-[100px] + opacity-30                       │
│                                          ↑                                   │
│  Z-INDEX: 1    PATTERN       Grid / Dots / Noise texture                    │
│                              opacity-5 to opacity-20                         │
│                                          ↑                                   │
│  Z-INDEX: 0    BASE          Background gradient                            │
│                              from-background via-card to-background          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Section Background Template:**

```tsx
<section className="relative overflow-hidden">
  {/* Layer 0: Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

  {/* Layer 1: Pattern */}
  <GridPattern className="absolute inset-0 opacity-[0.02]" />

  {/* Layer 2: Ambient glow */}
  <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
  <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px]" />

  {/* Layer 3: Content */}
  <div className="relative z-10">
    <SectionContainer>{/* Elevated cards */}</SectionContainer>
  </div>
</section>
```

### 10.5 Spacing Token System

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SPACING SCALE (4px base)                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  TOKEN        VALUE    USE CASE                                              │
│  ──────────────────────────────────────────────────────────                  │
│  --space-0    0        Reset                                                 │
│  --space-1    4px      Inline spacing, icon gaps                            │
│  --space-2    8px      Tight element spacing                                │
│  --space-3    12px     Compact padding                                      │
│  --space-4    16px     Standard padding (p-4)                               │
│  --space-6    24px     Card padding, form gaps                              │
│  --space-8    32px     Section content gaps                                 │
│  --space-12   48px     Section vertical padding (mobile)                    │
│  --space-16   64px     Section vertical padding (tablet)                    │
│  --space-24   96px     Section vertical padding (desktop)                   │
│  --space-32   128px    Hero section padding                                 │
│                                                                              │
│  SEMANTIC ALIASES:                                                           │
│  ──────────────────────────────────────────────────────────                  │
│  --section-y-sm      py-12 / py-16     (Compact: Trust Ribbon, Stats)       │
│  --section-y-md      py-16 / py-24     (Standard: Most sections)            │
│  --section-y-lg      py-24 / py-32     (Emphasis: Hero, Vision, CTA)        │
│  --card-padding      p-6               (Card internal padding)              │
│  --card-gap          gap-4             (Card content gap)                   │
│  --content-gap       gap-8             (Section content gap)                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.6 Vertical Rhythm Pattern

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SECTION RHYTHM PATTERN                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  HERO                     py: 100vh       Full viewport, immersive          │
│                                                                              │
│  TRUST RIBBON             py: 6 (24px)    Compact, transitional             │
│                                                                              │
│  SPLIT NARRATIVE          py: 16/24       Standard content                  │
│                                                                              │
│  ARCHITECTURE             py: 16/24       Standard content                  │
│                                                                              │
│  FEATURE BENTO            py: 16/24       Standard content                  │
│                                                                              │
│  STATS BREAK              py: 12 (48px)   Visual breather                   │
│                                                                              │
│  TERMINAL DEMO            py: 16/24       Standard content                  │
│                                                                              │
│  TESTIMONIALS             py: 16/24       Standard content                  │
│                                                                              │
│  VISION                   py: 24/32       Larger breathing room             │
│                                                                              │
│  PRICING                  py: 16/24       Standard content                  │
│                                                                              │
│  FAQ                      py: 16/24       Standard content                  │
│                                                                              │
│  FINAL CTA                py: 24/32       Climax emphasis                   │
│                                                                              │
│  FOOTER                   py: 12          Compact                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.7 Typography Scale

```tsx
// packages/custom-ui/src/tokens/typography.ts

export const typography = {
  // Font sizes (rem)
  sizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px - Hero only
  },

  // Semantic text styles
  styles: {
    "display-1": { size: "7xl", weight: "bold", leading: "tight" },
    "display-2": { size: "5xl", weight: "bold", leading: "tight" },
    "heading-1": { size: "4xl", weight: "semibold", leading: "tight" },
    "heading-2": { size: "3xl", weight: "semibold", leading: "snug" },
    "heading-3": { size: "2xl", weight: "semibold", leading: "snug" },
    "heading-4": { size: "xl", weight: "semibold", leading: "normal" },
    "body-lg": { size: "lg", weight: "normal", leading: "relaxed" },
    body: { size: "base", weight: "normal", leading: "relaxed" },
    "body-sm": { size: "sm", weight: "normal", leading: "normal" },
    caption: { size: "xs", weight: "medium", leading: "normal" },
    code: { size: "sm", weight: "normal", leading: "relaxed", font: "mono" },
  },
};
```

### 10.8 Motion Token System

```tsx
// packages/custom-ui/src/tokens/motion.ts

export const motion = {
  // Duration scale
  duration: {
    instant: "0ms",
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },

  // Easing functions
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  // Framer Motion variants
  variants: {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
    staggerContainer: {
      animate: { transition: { staggerChildren: 0.1 } },
    },
  },

  // Interactive states
  interactive: {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
    hoverLift: { y: -4, transition: { duration: 0.2 } },
  },
};
```

### 10.9 Micro-interaction Catalog

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MICRO-INTERACTION CATALOG                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. BUTTON STATES                                                            │
│     Default → Hover (scale:1.02, shadow-lg, translateY:-2)                  │
│            → Active (scale:0.98)                                            │
│            → Loading (spinner animation)                                    │
│            → Disabled (opacity:0.5)                                         │
│                                                                              │
│  2. CARD HOVER                                                               │
│     Default → Hover                                                         │
│     - translateY: -4px                                                      │
│     - shadow-lg → shadow-xl                                                 │
│     - border: 10% → 20% opacity                                             │
│     - Glow overlay fades in                                                 │
│                                                                              │
│  3. LINK UNDERLINE                                                           │
│     Default → Hover                                                         │
│     - Underline slides in from left                                         │
│     - after:scaleX-0 → after:scaleX-100                                     │
│     - transform-origin: left                                                │
│                                                                              │
│  4. COPY BUTTON FEEDBACK                                                     │
│     Click → Success                                                         │
│     - Icon morphs (Copy → Check)                                            │
│     - scale + rotate animation                                              │
│     - Returns after 2s                                                      │
│                                                                              │
│  5. ACCORDION EXPAND                                                         │
│     Collapsed → Expanded                                                    │
│     - Chevron rotates 180°                                                  │
│     - Content height animates from 0                                        │
│     - Background subtly changes                                             │
│                                                                              │
│  6. SCROLL-TRIGGERED REVEAL                                                  │
│     Below viewport → In viewport                                            │
│     - opacity: 0 → 1                                                        │
│     - y: 30px → 0                                                           │
│     - viewport={{ once: true, margin: "-100px" }}                           │
│                                                                              │
│  7. MARQUEE PAUSE                                                            │
│     Normal: Continuous scroll                                               │
│     Hover: Pause + Logo highlight (grayscale-0, opacity-100)                │
│                                                                              │
│  8. NAVBAR SCROLL TRANSFORM                                                  │
│     At top: bg-transparent                                                  │
│     Scrolled: bg-background/80 + backdrop-blur-lg + border-bottom           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.10 Shadow Token System

```tsx
// packages/custom-ui/src/tokens/shadows.ts

export const shadows = {
  // Elevation levels
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

  // Colored shadows for brand elements
  glow: {
    primary: "0 0 40px rgba(var(--primary-rgb), 0.3)",
    accent: "0 0 40px rgba(var(--accent-rgb), 0.3)",
    card: "0 8px 30px rgba(0, 0, 0, 0.12)",
  },

  // Interactive states
  hover: "0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12)",
  active: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
};
```

### 10.11 Container Width System

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CONTAINER WIDTH SYSTEM                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  max-w-3xl    768px    FAQ, focused content                                 │
│  max-w-4xl    896px    Terminal demo, centered                              │
│  max-w-5xl    1024px   Architecture, Pricing, Vision                        │
│  max-w-6xl    1152px   Stats grid                                           │
│  max-w-7xl    1280px   Full width grids, Bento, Feature sections            │
│                                                                              │
│  SEMANTIC ALIASES:                                                           │
│  ──────────────────────────────────────────────────────────                  │
│  --container-narrow   max-w-3xl   (768px)  Copy-focused content             │
│  --container-medium   max-w-5xl   (1024px) Standard sections                │
│  --container-wide     max-w-7xl   (1280px) Full layouts                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.12 Implementation Roadmap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        IMPLEMENTATION ROADMAP                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PHASE 1: Token Foundation (Week 1)                     Priority: CRITICAL  │
│  ────────────────────────────────────────────────────────────────────────── │
│  □ Create tokens/spacing.ts with spacing scale                              │
│  □ Create tokens/typography.ts with text styles                             │
│  □ Create tokens/shadows.ts with elevation system                           │
│  □ Create tokens/motion.ts with animation presets                           │
│  □ Update tailwind.config.ts to consume tokens                              │
│  □ Update globals.css with CSS custom properties                            │
│                                                                              │
│  PHASE 2: Primitives Layer (Week 1-2)                   Priority: CRITICAL  │
│  ────────────────────────────────────────────────────────────────────────── │
│  □ Create primitives/Box.tsx with spacing/padding props                     │
│  □ Create primitives/Stack.tsx (vertical stack)                             │
│  □ Create primitives/Flex.tsx (horizontal flex)                             │
│  □ Create primitives/Text.tsx with typography variants                      │
│  □ Create primitives/Heading.tsx (h1-h6)                                    │
│  □ Create primitives/Badge.tsx, Pill.tsx                                    │
│  □ Create primitives/Icon.tsx wrapper                                       │
│                                                                              │
│  PHASE 3: Pattern Components (Week 2-3)                 Priority: HIGH      │
│  ────────────────────────────────────────────────────────────────────────── │
│  □ Create patterns/Card/ compound component                                 │
│  □ Create patterns/Terminal/ compound component                             │
│  □ Create patterns/CommandBox.tsx                                           │
│  □ Create patterns/FeatureCard.tsx                                          │
│  □ Create patterns/CTAGroup.tsx                                             │
│  □ Create layouts/SectionContainer.tsx                                      │
│                                                                              │
│  PHASE 4: Decoration Layer (Week 3)                     Priority: MEDIUM    │
│  ────────────────────────────────────────────────────────────────────────── │
│  □ Create decorations/GridPattern.tsx                                       │
│  □ Create decorations/DotPattern.tsx                                        │
│  □ Create decorations/GradientBlur.tsx                                      │
│  □ Create decorations/NoiseTexture.tsx                                      │
│  □ Integrate decorations into section backgrounds                           │
│                                                                              │
│  PHASE 5: Section Refactor (Week 3-4)                   Priority: HIGH      │
│  ────────────────────────────────────────────────────────────────────────── │
│  □ Refactor HeroSection using new primitives/patterns                       │
│  □ Refactor FeatureBento using Card compound                                │
│  □ Refactor SplitNarrative using Terminal component                         │
│  □ Refactor all sections with SectionContainer                              │
│  □ Apply consistent vertical rhythm                                         │
│  □ Add section anchor IDs for navigation                                    │
│                                                                              │
│  PHASE 6: Motion & Polish (Week 4)                      Priority: MEDIUM    │
│  ────────────────────────────────────────────────────────────────────────── │
│  □ Implement standardized motion variants                                   │
│  □ Add micro-interactions to all interactive elements                       │
│  □ Add scroll-triggered reveals                                             │
│  □ Performance optimization (code splitting, lazy load)                     │
│  □ Accessibility audit (ARIA, focus states, contrast)                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.13 Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          QUICK REFERENCE CARD                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SPACING (Section padding)                                                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Compact:    py-6 / py-8       (Trust Ribbon, Stats Break)                  │
│  Standard:   py-16 / py-24     (Most content sections)                      │
│  Emphasis:   py-24 / py-32     (Hero, Vision, Final CTA)                    │
│                                                                              │
│  CARD STYLES                                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Base:       border-border/10 bg-card/50                                    │
│  Elevated:   border-border/10 bg-card/80 shadow-lg                          │
│  Glass:      border-white/10 bg-white/5 backdrop-blur-xl                    │
│  Highlight:  border-accent/30 bg-gradient-to-br from-primary/5 to-accent/5  │
│                                                                              │
│  TYPOGRAPHY                                                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Display:    text-5xl md:text-6xl lg:text-7xl font-bold                     │
│  Heading 1:  text-3xl md:text-4xl font-bold                                 │
│  Heading 2:  text-2xl md:text-3xl font-semibold                             │
│  Heading 3:  text-xl font-semibold                                          │
│  Body:       text-base text-muted-foreground                                │
│  Caption:    text-sm text-muted-foreground/80                               │
│                                                                              │
│  MOTION                                                                      │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Reveal:     initial={{ opacity: 0, y: 20 }}                                │
│              whileInView={{ opacity: 1, y: 0 }}                             │
│              viewport={{ once: true, margin: "-100px" }}                    │
│              transition={{ duration: 0.5 }}                                 │
│                                                                              │
│  Stagger:    transition={{ delay: 0.1 * index }}                            │
│                                                                              │
│  Hover:      whileHover={{ y: -4, scale: 1.02 }}                            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

_This design document serves as the single source of truth for the Nebutra Sailor landing page. All implementation should reference this spec._
