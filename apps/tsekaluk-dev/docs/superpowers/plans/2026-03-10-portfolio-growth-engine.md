# Portfolio Growth Engine Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform tsekaluk.dev from a static English-only portfolio into a dual-language growth engine with SEO, social integration, dark mode, analytics, and content pipeline.

**Architecture:** Next.js 16 app inside Nebutra-Sailor monorepo (`apps/tsekaluk-dev`). Uses `@nebutra/ui`, `@nebutra/tokens`, `@nebutra/brand` shared packages. MDX for content, Tailwind v4 for styling, Framer Motion via AnimateIn for animations. All new features follow existing patterns.

**Tech Stack:** Next.js 16, React 19, next-intl, next-themes, @vercel/og, Plausible Analytics, Tailwind v4, MDX

**Base path:** `/Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor/apps/tsekaluk-dev`

---

## Chunk 1: SEO Foundation

### Task 1: sitemap.xml

**Files:**
- Create: `src/app/sitemap.ts`

- [ ] **Step 1: Create dynamic sitemap**

```typescript
import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://tsekaluk.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/work`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/now`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE_URL}/thinking`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/links`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getArticles().map((a) => ({
    url: `${BASE_URL}/thinking/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
```

- [ ] **Step 2: Verify sitemap generates**

Run: `cd /Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor && pnpm --filter @nebutra/tsekaluk-dev build`
Expected: Build succeeds, `/sitemap.xml` route exists

- [ ] **Step 3: Commit**

```bash
git add apps/tsekaluk-dev/src/app/sitemap.ts
git commit -m "feat(tsekaluk-dev): add dynamic sitemap.xml"
```

---

### Task 2: robots.txt

**Files:**
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create robots.txt handler**

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://tsekaluk.dev/sitemap.xml",
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/tsekaluk-dev/src/app/robots.ts
git commit -m "feat(tsekaluk-dev): add robots.txt"
```

---

### Task 3: JSON-LD Structured Data

**Files:**
- Create: `src/lib/json-ld.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/work/[slug]/page.tsx`

- [ ] **Step 1: Create JSON-LD helper**

```typescript
// src/lib/json-ld.ts
import type { Project } from "./projects";

const BASE_URL = "https://tsekaluk.dev";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tseka Luk",
    url: BASE_URL,
    jobTitle: "CEO & AI-Native Builder",
    worksFor: {
      "@type": "Organization",
      name: "Nebutra Intelligence",
    },
    sameAs: [
      "https://github.com/TsekaLuk",
      "https://x.com/tseka_luk",
      "https://linkedin.com/in/tsekaluk",
    ],
    image: `${BASE_URL}/images/headshot.jpg`,
    description:
      "I design and build AI-powered products from zero to one. Shipping fast and iterating in public.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TsekaLuk.dev",
    url: BASE_URL,
    author: personJsonLd(),
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.tagline,
    url: `${BASE_URL}/work/${project.slug}`,
    author: { "@type": "Person", name: "Tseka Luk" },
    ...(project.github ? { codeRepository: project.github } : {}),
    keywords: project.tags.join(", "),
  };
}

export function articleJsonLd(article: {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    url: `${BASE_URL}/thinking/${article.slug}`,
    datePublished: article.date,
    description: article.excerpt,
    author: { "@type": "Person", name: "Tseka Luk" },
  };
}
```

- [ ] **Step 2: Add JSON-LD script to layout.tsx**

In `src/app/layout.tsx`, add inside `<head>` area (within the `<html>` tag, before `<body>`):

```tsx
import { websiteJsonLd } from "@/lib/json-ld";

// Inside RootLayout, add before <body>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
/>
```

- [ ] **Step 3: Add Person JSON-LD to about page**

In `src/app/about/page.tsx`, add at top of returned JSX:

```tsx
import { personJsonLd } from "@/lib/json-ld";

// Inside AboutPage return, add before first <section>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
/>
```

- [ ] **Step 4: Add CreativeWork JSON-LD to project detail page**

In `src/app/work/[slug]/page.tsx`, add:

```tsx
import { projectJsonLd } from "@/lib/json-ld";

// Inside ProjectDetailPage return, add before first <section>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
/>
```

- [ ] **Step 5: Verify build passes**

Run: `cd /Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor && pnpm --filter @nebutra/tsekaluk-dev build`

- [ ] **Step 6: Commit**

```bash
git add apps/tsekaluk-dev/src/lib/json-ld.ts apps/tsekaluk-dev/src/app/layout.tsx apps/tsekaluk-dev/src/app/about/page.tsx apps/tsekaluk-dev/src/app/work/\[slug\]/page.tsx
git commit -m "feat(tsekaluk-dev): add JSON-LD structured data for SEO"
```

---

### Task 4: RSS Feed

**Files:**
- Create: `src/app/rss.xml/route.ts`

- [ ] **Step 1: Create RSS route handler**

```typescript
import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://tsekaluk.dev";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const articles = getArticles();

  const articleItems = articles.map(
    (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${BASE_URL}/thinking/${a.slug}</link>
      <description>${escapeXml(a.excerpt)}</description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${BASE_URL}/thinking/${a.slug}</guid>
    </item>`
  );

  const projectItems = projects.slice(0, 5).map(
    (p) => `
    <item>
      <title>${escapeXml(p.name)} — ${escapeXml(p.tagline)}</title>
      <link>${BASE_URL}/work/${p.slug}</link>
      <description>${escapeXml(p.description)}</description>
      <guid isPermaLink="true">${BASE_URL}/work/${p.slug}</guid>
    </item>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tseka Luk — AI-Native Builder</title>
    <link>${BASE_URL}</link>
    <description>Essays, projects, and updates from Tseka Luk.</description>
    <language>en</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${articleItems.join("")}
    ${projectItems.join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
```

- [ ] **Step 2: Add RSS link to layout metadata**

In `src/app/layout.tsx` metadata, add:

```typescript
alternates: {
  types: {
    "application/rss+xml": "https://tsekaluk.dev/rss.xml",
  },
},
```

- [ ] **Step 3: Commit**

```bash
git add apps/tsekaluk-dev/src/app/rss.xml/route.ts apps/tsekaluk-dev/src/app/layout.tsx
git commit -m "feat(tsekaluk-dev): add RSS feed"
```

---

### Task 5: Canonical URLs

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/work/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/now/page.tsx`
- Modify: `src/app/thinking/page.tsx`
- Modify: `src/app/work/[slug]/page.tsx`

- [ ] **Step 1: Add canonical to root metadata**

In `src/app/layout.tsx`, add to `metadata`:

```typescript
alternates: {
  canonical: "https://tsekaluk.dev",
  types: {
    "application/rss+xml": "https://tsekaluk.dev/rss.xml",
  },
},
```

- [ ] **Step 2: Add canonical to each page's metadata**

Each page metadata should include its canonical URL. For example in `work/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Work — Tseka Luk",
  description: "Products and projects I've built.",
  alternates: { canonical: "https://tsekaluk.dev/work" },
};
```

Apply the same pattern to `/about`, `/now`, `/thinking`. For `work/[slug]/page.tsx`, add in `generateMetadata`:

```typescript
alternates: { canonical: `https://tsekaluk.dev/work/${slug}` },
```

- [ ] **Step 3: Commit**

```bash
git add apps/tsekaluk-dev/src/app/
git commit -m "feat(tsekaluk-dev): add canonical URLs to all pages"
```

---

## Chunk 2: Dark Mode + Analytics + OG Images

### Task 6: Dark Mode

**Files:**
- Modify: `src/app/layout.tsx` — add ThemeProvider
- Modify: `src/app/globals.css` — add dark mode CSS variables
- Modify: `src/components/header.tsx` — add theme toggle button
- Create: `src/components/theme-toggle.tsx`

- [ ] **Step 1: Add dark mode CSS variables**

In `src/app/globals.css`, add after the existing `:root` block:

```css
.dark,
[data-theme="dark"] {
  --page-bg: #0a0a0a;
  --color-accent: hsl(82 84% 56%);
  --color-accent-dark: hsl(82 84% 65%);
  --color-accent-muted: hsl(82 60% 25%);
  --color-accent-shadow: hsla(82 84% 56% / 0.1);
  color-scheme: dark;
}
```

- [ ] **Step 2: Create theme toggle component**

```tsx
// src/components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-1"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
```

- [ ] **Step 3: Wrap layout with ThemeProvider**

In `src/app/layout.tsx`:

```tsx
import { ThemeProvider } from "next-themes";

// Wrap children inside <body>:
<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
  <Header />
  <main id="main-content">{children}</main>
  <Footer />
</ThemeProvider>
```

Also add `suppressHydrationWarning` to `<html>` tag.

- [ ] **Step 4: Add ThemeToggle to header**

In `src/components/header.tsx`, import and add `<ThemeToggle />` next to the desktop nav, before "Let's talk" button. Also add it to mobile nav.

- [ ] **Step 5: Update all components for dark mode**

Systematic updates across components — key patterns:
- `text-gray-900` → `text-gray-900 dark:text-gray-100`
- `text-gray-500` → `text-gray-500 dark:text-gray-400`
- `text-gray-400` → `text-gray-400 dark:text-gray-500`
- `bg-white` → `bg-white dark:bg-gray-900`
- `bg-gray-50` → `bg-gray-50 dark:bg-gray-800`
- `border-gray-100` → `border-gray-100 dark:border-gray-800`
- `border-gray-200` → `border-gray-200 dark:border-gray-700`

Apply to: `hero.tsx`, `header.tsx`, `footer.tsx`, `cta-section.tsx`, `selected-works.tsx`, `work-grid.tsx`, `tech-marquee.tsx`, `focus-section.tsx`, `process-section.tsx`, `now-preview.tsx`, `now-entry.tsx`, about/page.tsx, work/page.tsx, work/[slug]/page.tsx, thinking/page.tsx, now/page.tsx.

- [ ] **Step 6: Verify build and visual check**

Run: `pnpm --filter @nebutra/tsekaluk-dev dev`
Verify: toggle between light/dark, check all pages.

- [ ] **Step 7: Commit**

```bash
git add apps/tsekaluk-dev/src/
git commit -m "feat(tsekaluk-dev): add dark mode with system detection"
```

---

### Task 7: Plausible Analytics

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add Plausible script to layout**

In `src/app/layout.tsx`, add inside `<head>` (before `<body>`):

```tsx
<script
  defer
  data-domain="tsekaluk.dev"
  src="https://plausible.io/js/script.js"
/>
```

Note: Register at plausible.io and add `tsekaluk.dev` as a site.

- [ ] **Step 2: Commit**

```bash
git add apps/tsekaluk-dev/src/app/layout.tsx
git commit -m "feat(tsekaluk-dev): add Plausible analytics"
```

---

### Task 8: Dynamic OG Images

**Files:**
- Create: `src/app/og/route.tsx`
- Modify: `src/app/layout.tsx` — add default OG image
- Modify: `src/app/work/[slug]/page.tsx` — add per-project OG

- [ ] **Step 1: Install @vercel/og**

```bash
cd /Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor
pnpm --filter @nebutra/tsekaluk-dev add @vercel/og
```

- [ ] **Step 2: Create OG image route**

```tsx
// src/app/og/route.tsx
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Tseka Luk";
  const subtitle = searchParams.get("subtitle") ?? "AI-Native Builder";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #fafafa 0%, #e8f5e9 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#666",
            fontStyle: "italic",
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 24,
            color: "#999",
          }}
        >
          tsekaluk.dev
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

- [ ] **Step 3: Add default OG image to layout metadata**

```typescript
openGraph: {
  title: "Tseka Luk — AI-Native Builder",
  description: "I design and build AI-powered products from zero to one.",
  url: "https://tsekaluk.dev",
  siteName: "TsekaLuk.dev",
  type: "website",
  images: [
    {
      url: "https://tsekaluk.dev/og?title=Tseka+Luk&subtitle=AI-Native+Builder",
      width: 1200,
      height: 630,
      alt: "Tseka Luk — AI-Native Builder",
    },
  ],
},
```

- [ ] **Step 4: Add per-project OG to work/[slug]**

In `generateMetadata`:

```typescript
openGraph: {
  title: `${project.name} — Tseka Luk`,
  description: project.tagline,
  images: [
    {
      url: `https://tsekaluk.dev/og?title=${encodeURIComponent(project.name)}&subtitle=${encodeURIComponent(project.tagline)}`,
      width: 1200,
      height: 630,
    },
  ],
},
```

- [ ] **Step 5: Commit**

```bash
git add apps/tsekaluk-dev/src/app/og/ apps/tsekaluk-dev/src/app/layout.tsx apps/tsekaluk-dev/src/app/work/\[slug\]/page.tsx apps/tsekaluk-dev/package.json
git commit -m "feat(tsekaluk-dev): add dynamic OG image generation"
```

---

## Chunk 3: Social Hub & Conversion

### Task 9: Links Page (`/links`)

**Files:**
- Create: `src/app/links/page.tsx`

- [ ] **Step 1: Create links page**

```tsx
// src/app/links/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Rss,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Links — Tseka Luk",
  description: "Find me across the internet.",
  alternates: { canonical: "https://tsekaluk.dev/links" },
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const INTERNATIONAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/TsekaLuk",
    icon: <Github className="h-5 w-5" />,
    description: "Open source projects & contributions",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/tseka_luk",
    icon: <XIcon className="h-5 w-5" />,
    description: "Building in public, daily updates",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tsekaluk",
    icon: <Linkedin className="h-5 w-5" />,
    description: "Professional network & career",
  },
  {
    name: "Product Hunt",
    url: "https://producthunt.com/@tsekaluk",
    icon: <ExternalLink className="h-5 w-5" />,
    description: "Product launches",
  },
  {
    name: "RSS Feed",
    url: "/rss.xml",
    icon: <Rss className="h-5 w-5" />,
    description: "Subscribe to updates",
  },
];

const CHINA_LINKS = [
  {
    name: "WeChat Official Account",
    description: "Nebutra 星云智航",
    qrImage: "/images/qr-wechat-official.png",
  },
  {
    name: "WeChat Personal",
    description: "Add me directly",
    qrImage: "/images/qr-wechat-personal.png",
  },
  {
    name: "Xiaohongshu",
    url: "#",
    description: "Product insights & tutorials",
  },
  {
    name: "Jike",
    url: "#",
    description: "Tech thoughts & daily builds",
  },
  {
    name: "Zsxq (Knowledge Planet)",
    description: "Deep dives & community",
    qrImage: "/images/qr-zsxq.png",
  },
];

export default function LinksPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-lg dark:border-gray-800">
          <Image
            src="/images/headshot.jpg"
            alt="Tseka Luk"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Tseka Luk
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          AI-Native Builder &middot; CEO @ Nebutra Intelligence
        </p>
      </div>

      {/* International */}
      <div className="mb-12 space-y-3">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
          International
        </h2>
        {INTERNATIONAL_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target={link.url.startsWith("/") ? undefined : "_blank"}
            rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-[var(--color-accent)]/40"
          >
            <span className="text-gray-600 dark:text-gray-400">
              {link.icon}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {link.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {link.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* China */}
      <div className="space-y-3">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
          China / 国内
        </h2>
        {CHINA_LINKS.map((link) => (
          <div
            key={link.name}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {link.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {link.description}
              </p>
            </div>
            {"url" in link && link.url ? (
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-accent-dark)] hover:underline"
              >
                Visit
              </Link>
            ) : null}
          </div>
        ))}
      </div>

      {/* Email CTA */}
      <div className="mt-12 text-center">
        <Link
          href="mailto:tseka@nebutra.com"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <Mail className="h-4 w-4" />
          tseka@nebutra.com
        </Link>
      </div>
    </section>
  );
}
```

Note: User needs to add QR code images to `public/images/` — `qr-wechat-official.png`, `qr-wechat-personal.png`, `qr-zsxq.png`. Placeholder URLs (`#`) for Xiaohongshu and Jike should be replaced with real profile URLs.

- [ ] **Step 2: Add Links to header nav**

In `src/components/header.tsx`, add to `NAV_ITEMS`:

```typescript
{ label: "Links", href: "/links" },
```

- [ ] **Step 3: Commit**

```bash
git add apps/tsekaluk-dev/src/app/links/ apps/tsekaluk-dev/src/components/header.tsx
git commit -m "feat(tsekaluk-dev): add social links hub page"
```

---

### Task 10: Enhanced Footer with Social + Newsletter

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Enhance footer with all social links and newsletter CTA**

Replace `src/components/footer.tsx` with an enhanced version including:
- GitHub, X, LinkedIn, RSS icons in the social row
- "Subscribe via RSS" text link
- WeChat / Xiaohongshu text links for Chinese audience
- Copyright with current year

```tsx
// src/components/footer.tsx
import Link from "next/link";
import { Rss } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Left: built with + copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Built with{" "}
              <Link
                href="https://github.com/Nebutra/Nebutra-Sailor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Nebutra Sailor
              </Link>
            </p>
            <p className="mt-1 text-xs text-gray-300 dark:text-gray-600">
              &copy; {new Date().getFullYear()} Tseka Luk
            </p>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            <Link href="/rss.xml" aria-label="RSS Feed" className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <Rss className="h-4 w-4" />
            </Link>
            <Link href="https://github.com/TsekaLuk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <GitHubIcon className="h-4 w-4" />
            </Link>
            <Link href="https://x.com/tseka_luk" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <XIcon className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com/in/tsekaluk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
              <LinkedInIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/tsekaluk-dev/src/components/footer.tsx
git commit -m "feat(tsekaluk-dev): enhance footer with social links and copyright"
```

---

### Task 11: Enhanced CTA Section

**Files:**
- Modify: `src/components/sections/cta-section.tsx`

- [ ] **Step 1: Add Calendly + WeChat alongside email CTA**

Update `cta-section.tsx` to include 3 CTAs:
1. Email (existing)
2. Book a Call (Calendly link)
3. WeChat QR (modal or link to /links)

```tsx
// Add alongside the existing mailto link:
<Link
  href="https://calendly.com/tsekaluk"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
>
  Book a call
</Link>
```

Note: User needs to set up Calendly account and replace URL.

- [ ] **Step 2: Commit**

```bash
git add apps/tsekaluk-dev/src/components/sections/cta-section.tsx
git commit -m "feat(tsekaluk-dev): add Calendly CTA to homepage"
```

---

## Chunk 4: i18n Framework (Future — Design Only)

> i18n is the largest architectural change. This chunk documents the approach for a follow-up plan.

### Task 12: i18n Architecture Setup

**Approach:** `next-intl` with `[locale]` route segment.

**Files to create:**
- `src/i18n/request.ts` — locale detection config
- `src/i18n/routing.ts` — routing config
- `src/middleware.ts` — locale redirect middleware
- `messages/en.json` — English UI strings
- `messages/zh.json` — Chinese UI strings

**Files to modify:**
- `src/app/layout.tsx` → `src/app/[locale]/layout.tsx`
- All page files move under `src/app/[locale]/`
- `src/lib/projects.ts` — add `nameZh`, `taglineZh`, `storyZh` fields
- `src/lib/articles.ts` — support locale-specific articles

**URL structure:**
- `tsekaluk.dev/en/work` (English)
- `tsekaluk.dev/zh/work` (Chinese)
- `tsekaluk.dev/` → redirects to browser locale

**Key decisions:**
- Default locale: `en` (no prefix for English URLs to avoid breaking existing links)
- Project data stays in TypeScript with bilingual fields
- Articles: separate MDX files per locale (`thinking/en/`, `thinking/zh/`)
- UI strings: JSON message files for navigation, labels, CTAs

> This task is documented but NOT implemented in this plan. Execute as a separate plan after P1-P3 are complete and stable.

---

## Execution Notes

**Parallel execution opportunities:**
- Tasks 1-5 (SEO) are independent — can run in parallel
- Task 6 (dark mode) depends on nothing — can run in parallel with SEO
- Task 7 (analytics) is independent
- Task 8 (OG images) depends on layout changes from earlier tasks
- Tasks 9-11 (social hub) are independent of each other

**Recommended subagent grouping:**
- Group A: Tasks 1-5 (SEO foundation) — one agent
- Group B: Task 6 (dark mode) — one agent (touches many files)
- Group C: Tasks 7-8 (analytics + OG) — one agent
- Group D: Tasks 9-11 (social hub + conversion) — one agent

**User action required (before or after deploy):**
1. Add QR code images to `public/images/`
2. Register Plausible Analytics account
3. Set up Calendly account
4. Fill in real Xiaohongshu/Jike profile URLs in links page
5. Set up Cloudflare DNS proxy in front of Vercel
6. Register Google Search Console and submit sitemap
