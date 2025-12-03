# Nebutra Sailor — Landing Page Design Specification

> **Version:** 1.0.0  
> **Last Updated:** 2024-12-03  
> **Design Philosophy:** Silicon Valley Unicorn Aesthetic (Vercel / Linear / Cursor)

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

_This design document serves as the single source of truth for the Nebutra Sailor landing page. All implementation should reference this spec._
