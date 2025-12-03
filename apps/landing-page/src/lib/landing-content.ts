/**
 * Landing Page Content Constants
 *
 * All copywriting for the Nebutra Sailor landing page.
 * Reference: DESIGN.md
 *
 * @see apps/landing-page/DESIGN.md
 */

// =============================================================================
// Hero Section
// =============================================================================

export const heroContent = {
  badge: "MIT Licensed · Production-Ready",
  preHeadline: "The SaaS framework for",
  headlineWords: ["builders who ship", "teams who scale", "founders who win"],
  command: "npx create-sailor@latest",
  ctaPrimary: "Get Started",
  ctaSecondary: "Star on GitHub",
  scrollHint: "Scroll to explore",
} as const;

// =============================================================================
// Trust Ribbon (Tech Stack Logos)
// =============================================================================

/**
 * Tech stack logos for the trust ribbon.
 *
 * Primary source: SVGL (https://svgl.app)
 * - MIT licensed, open source
 * - 300+ tech logos with light/dark variants
 * - CDN: https://svgl.app/library/{filename}.svg
 *
 * Fallback source: simple-icons CDN
 * - CDN: https://cdn.simpleicons.org/{slug}/{color}
 *
 * @see https://svgl.app for logo browser
 * @see https://github.com/pheralb/svgl for source
 */

const SVGL_BASE = "https://svgl.app/library";
const SIMPLE_ICONS_BASE = "https://cdn.simpleicons.org";

export interface TechLogo {
  name: string;
  /** SVGL path variants */
  svgl?: {
    light: string;
    dark: string;
  };
  /** Fallback to simple-icons */
  simpleIcons?: {
    slug: string;
    color?: string;
  };
}

/**
 * SVGL naming convention:
 * - `_light.svg` = logo designed for LIGHT backgrounds (dark colored logo)
 * - `_dark.svg` = logo designed for DARK backgrounds (light colored logo)
 *
 * Our config:
 * - `light` property = what to show on LIGHT theme backgrounds
 * - `dark` property = what to show on DARK theme backgrounds
 */
export const techStackLogos: TechLogo[] = [
  {
    name: "Next.js",
    svgl: {
      light: "nextjs_icon_dark.svg", // Black N on light bg
      dark: "nextjs_icon_light.svg", // White N on dark bg
    },
  },
  {
    name: "React",
    svgl: {
      light: "react_dark.svg", // Dark react logo for light bg
      dark: "react_light.svg", // Light react logo for dark bg
    },
  },
  {
    name: "TypeScript",
    svgl: {
      light: "typescript.svg", // Blue TS works on both
      dark: "typescript.svg",
    },
  },
  {
    name: "Prisma",
    svgl: {
      light: "prisma.svg", // Dark prisma for light bg
      dark: "prisma_dark.svg", // White prisma for dark bg
    },
  },
  {
    name: "Supabase",
    svgl: {
      light: "supabase.svg", // Green works on both
      dark: "supabase.svg",
    },
  },
  {
    name: "Stripe",
    svgl: {
      light: "stripe.svg", // Purple stripe works on light
      dark: "stripe_dark.svg", // White stripe for dark bg
    },
  },
  {
    name: "Clerk",
    svgl: {
      light: "clerk-icon-dark.svg", // Dark clerk icon for light bg
      dark: "clerk-icon-light.svg", // Light clerk icon for dark bg
    },
  },
  {
    name: "Vercel",
    svgl: {
      light: "vercel.svg", // Black triangle for light bg
      dark: "vercel_dark.svg", // White triangle for dark bg
    },
  },
  {
    name: "Cloudflare",
    svgl: {
      light: "cloudflare.svg", // Orange CF works on both
      dark: "cloudflare.svg",
    },
  },
  {
    name: "Inngest",
    svgl: {
      light: "inngest-dark.svg", // Dark inngest for light bg
      dark: "inngest-light.svg", // Light inngest for dark bg
    },
  },
  {
    name: "TailwindCSS",
    svgl: {
      light: "tailwindcss.svg", // Cyan TW works on both
      dark: "tailwindcss.svg",
    },
  },
  {
    name: "Redis",
    svgl: {
      light: "redis.svg", // Red redis works on both
      dark: "redis.svg",
    },
  },
  {
    name: "Hono",
    svgl: {
      light: "hono.svg", // Orange flame works on light
      dark: "hono_dark.svg", // Try dark variant if exists
    },
  },
];

/**
 * Get logo URL for a tech stack item
 * @param logo - TechLogo object
 * @param theme - "light" | "dark" (default: "dark" for dark landing page bg)
 */
export const getLogoUrl = (
  logo: TechLogo,
  theme: "light" | "dark" = "dark",
): string => {
  if (logo.svgl) {
    return `${SVGL_BASE}/${logo.svgl[theme]}`;
  }
  if (logo.simpleIcons) {
    return `${SIMPLE_ICONS_BASE}/${logo.simpleIcons.slug}/${logo.simpleIcons.color ?? "white"}`;
  }
  return "";
};

/**
 * Get all logo URLs for a specific theme
 */
export const getAllLogoUrls = (theme: "light" | "dark" = "dark") =>
  techStackLogos.map((logo) => ({
    name: logo.name,
    url: getLogoUrl(logo, theme),
  }));

// =============================================================================
// Split Narrative Section
// =============================================================================

export const splitNarrativeContent = {
  terminal: {
    command: "$ cursor .",
    lines: ["> Building app...", "> Generated 847 files", "> Done in 3.2s"],
  },
  headline: "You write the product.",
  subheadline: "We wrote everything else.",
  features: [
    "Multi-tenancy",
    "Billing",
    "Auth",
    "AI",
    "Security",
    "Compliance",
    "Edge",
    "Observability",
  ],
  taglines: ["All production-ready.", "All open source."],
} as const;

// =============================================================================
// Architecture Showcase
// =============================================================================

export const architectureContent = {
  headline: "What you get out of the box",
  tagline: "847 files · 51 packages · Production-ready",
  structure: [
    {
      name: "apps/",
      description: "Deployable applications",
      children: [
        { name: "web/", comment: "SaaS Dashboard (Next.js)" },
        { name: "landing-page/", comment: "Marketing Site" },
        { name: "api-gateway/", comment: "BFF Layer (Hono)" },
        { name: "studio/", comment: "Sanity CMS" },
      ],
    },
    {
      name: "packages/",
      description: "Shared libraries",
      children: [
        { name: "db/", comment: "Prisma Schema" },
        { name: "ui/", comment: "Component Library" },
        { name: "billing/", comment: "Stripe Integration" },
        { name: "auth/", comment: "Clerk Multi-tenant" },
        { name: "...47 more", comment: "" },
      ],
    },
    {
      name: "services/",
      description: "Microservices",
      children: [
        { name: "ai/", comment: "LLM + Embeddings" },
        { name: "content/", comment: "Feed + Posts" },
        { name: "recsys/", comment: "Recommendations" },
      ],
    },
  ],
} as const;

// =============================================================================
// Feature Bento Grid
// =============================================================================

export const bentoFeatures = {
  multiTenant: {
    icon: "🏢",
    title: "Multi-Tenant by Default",
    description:
      "Clerk Orgs + Supabase RLS. Tenant context middleware. Scoped caching & rate-limiting.",
    visual: "architecture", // indicates which visualization to show
  },
  aiNative: {
    icon: "🤖",
    title: "AI-Native Architecture",
    description:
      "Vercel AI SDK + pgvector + MCP Agents. Multi-provider support out of the box.",
    visual: "chat", // AI chat demo
  },
  billing: {
    icon: "💳",
    title: "Billing Out of the Box",
    description:
      "Stripe subscriptions. Usage-based metering. Feature entitlements. Invoice generation.",
    features: [
      "Subscriptions",
      "Usage metering",
      "Feature entitlements",
      "Invoice generation",
    ],
  },
  globalEdge: {
    icon: "🌍",
    title: "Global Edge",
    description:
      "Vercel + Cloudflare + Upstash. Deploy worldwide, cache at the edge.",
    visual: "worldMap", // world map with edge dots
  },
} as const;

// =============================================================================
// Stats Section
// =============================================================================

export const statsContent = [
  { value: "2-4", unit: "weeks", label: "to MVP" },
  { value: "60", unit: "%", label: "faster delivery" },
  { value: "847", unit: "", label: "files included" },
  { value: "MIT", unit: "", label: "license forever" },
] as const;

// =============================================================================
// Terminal Demo Section
// =============================================================================

export const terminalDemoContent = {
  headline: "Zero to running in 5 minutes.",
  command: "npx create-sailor@latest my-saas",
  steps: [
    { text: "Scaffolding project structure", status: "done" },
    { text: "Installing dependencies", status: "done" },
    { text: "Setting up Prisma", status: "done" },
    { text: "Configuring auth...", status: "loading" },
  ],
  ctaPrimary: "Copy command",
  ctaSecondary: "View on GitHub →",
} as const;

// =============================================================================
// Testimonials
// =============================================================================

export const testimonialsContent = {
  headline: "Builders ship faster with Sailor",
  items: [
    {
      quote:
        "We went from idea to paying customers in 3 weeks. The multi-tenant setup alone would have taken us months.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechStartup",
      avatar: "/avatars/sarah.jpg",
    },
    {
      quote:
        "Finally, multi-tenancy that actually works. No more reinventing the wheel for every client project.",
      author: "Alex Rivera",
      role: "Founder",
      company: "DevAgency",
      avatar: "/avatars/alex.jpg",
    },
    {
      quote:
        "The billing integration saved us 2 months of development time. Stripe subscriptions, usage metering, all handled.",
      author: "Mike Johnson",
      role: "Solo Founder",
      company: "IndieHacker",
      avatar: "/avatars/mike.jpg",
    },
    {
      quote:
        "As a 5-person team, we shipped what would normally require 30 engineers. Sailor is our secret weapon.",
      author: "Emma Liu",
      role: "Engineering Lead",
      company: "StartupCo",
      avatar: "/avatars/emma.jpg",
    },
  ],
} as const;

// =============================================================================
// Company Vision Section
// =============================================================================

export const visionContent = {
  companyName: "Nebutra Intelligence",
  headline: "We believe the future belongs to",
  headlineHighlight: "small teams with big leverage.",
  description:
    "Nebutra is an AI-native product accelerator helping 3-7 person teams achieve the output of 30-70.",
  philosophyCards: [
    {
      quote: "Software is not a deliverable—it's capability itself.",
    },
    {
      quote: "AI is not a tool, it's a teammate.",
    },
    {
      quote: "Workflows are value engines, not process.",
    },
    {
      quote: "Going global isn't an exit—it's the default.",
    },
  ],
  visionLabel: "Our vision:",
  visionStatement: "Vibe Coding → Vibe Entrepreneurship → Vibe Business",
  closingLines: [
    "Future unicorns will be built by tiny teams",
    "with extraordinary leverage.",
    "",
    "Sailor is how we give that leverage away.",
  ],
  cta: "Learn about Nebutra →",
  ctaHref: "https://nebutra.com",
} as const;

// =============================================================================
// Pricing Section
// =============================================================================

export const pricingContent = {
  headline: "Open source. Free forever.",
  plans: [
    {
      name: "Self-Hosted",
      price: "$0",
      period: "forever free",
      features: [
        "Full source code",
        "All features",
        "MIT license",
        "Community support",
      ],
      cta: "Clone on GitHub",
      ctaHref: "https://github.com/nebutra/sailor",
      ctaIcon: "github",
      highlighted: false,
    },
    {
      name: "Cloud",
      badge: "Coming Soon",
      price: "$49",
      period: "/mo",
      features: [
        "Managed infrastructure",
        "Auto-scaling",
        "99.9% SLA",
        "Priority support",
      ],
      cta: "Join waitlist →",
      ctaHref: "/waitlist",
      highlighted: true,
    },
  ],
  enterpriseNote: "Need enterprise support?",
  enterpriseCta: "Contact us →",
  enterpriseHref: "/contact",
} as const;

// =============================================================================
// FAQ Section
// =============================================================================

export const faqContent = {
  items: [
    {
      question: "Is it really free?",
      answer:
        "Yes, Sailor is MIT licensed with Commons Clause. You can use it freely for your own products. The only restriction is you can't sell Sailor itself as a competing product. See our LICENSE file for details.",
    },
    {
      question: "What's the tech stack?",
      answer:
        "Next.js 17, React 19, TypeScript 5.9+, Prisma 7, Supabase (Postgres + pgvector), Clerk (Auth), Stripe (Billing), Vercel (Deployment), Cloudflare (CDN/WAF), and more. Check the docs for the full stack.",
    },
    {
      question: "Can I white-label it?",
      answer:
        "Absolutely. Sailor includes a brand configuration system. Run `pnpm brand:init` to set up your own brand, logos, colors, and copy. See WHITELABEL.md for details.",
    },
    {
      question: "How does multi-tenancy work?",
      answer:
        "Sailor uses Clerk Organizations for auth/team management, combined with Supabase Row Level Security (RLS) for data isolation. Tenant context is extracted via middleware and propagated throughout the request lifecycle.",
    },
    {
      question: "What AI providers are supported?",
      answer:
        "Out of the box: OpenAI, Anthropic, Google AI, and any OpenRouter-compatible provider. The AI provider abstraction layer makes it easy to add new providers or switch between them.",
    },
  ],
} as const;

// =============================================================================
// Final CTA Section
// =============================================================================

export const finalCtaContent = {
  headline: "Stop building infrastructure.",
  headlineHighlight: "Start building your product.",
  commandPlaceholder: "npx create-sailor@latest",
  ctaPrimary: "Get Started",
  ctaSecondary: "Star on GitHub",
  stats: {
    stars: "1.2k",
    forks: "234",
    discordLabel: "Join Discord",
  },
} as const;

// =============================================================================
// Footer
// =============================================================================

export const footerContent = {
  brand: {
    name: "Sailor",
    byline: "by Nebutra",
  },
  links: [
    { label: "Product", href: "/features" },
    { label: "Docs", href: "https://docs.nebutra.com/sailor" },
    { label: "GitHub", href: "https://github.com/nebutra/sailor" },
    { label: "Discord", href: "https://discord.gg/nebutra" },
  ],
  social: [
    { platform: "x", href: "https://x.com/nebutra" },
    { platform: "github", href: "https://github.com/nebutra" },
    { platform: "discord", href: "https://discord.gg/nebutra" },
  ],
  copyright: "© 2024 Nebutra Intelligence",
  status: {
    label: "Online",
    href: "https://status.nebutra.com",
  },
} as const;

// =============================================================================
// Metadata / SEO
// =============================================================================

export const seoContent = {
  title: "Nebutra Sailor — The Open-Source Enterprise SaaS Framework",
  description:
    "Ship your SaaS in weeks, not months. Multi-tenancy, billing, auth, and AI built in. Production-ready, MIT licensed.",
  keywords: [
    "saas framework",
    "multi-tenant",
    "next.js boilerplate",
    "enterprise saas",
    "open source",
    "startup framework",
  ],
  ogImage: "/og-image.png",
  twitterHandle: "@nebutra",
} as const;

// =============================================================================
// Type Exports
// =============================================================================

export type HeroContent = typeof heroContent;
export type TechStackLogo = (typeof techStackLogos)[number];
export type ArchitectureFolder = (typeof architectureContent.structure)[number];
export type BentoFeature = (typeof bentoFeatures)[keyof typeof bentoFeatures];
export type Stat = (typeof statsContent)[number];
export type Testimonial = (typeof testimonialsContent.items)[number];
export type PricingPlan = (typeof pricingContent.plans)[number];
export type FAQItem = (typeof faqContent.items)[number];
