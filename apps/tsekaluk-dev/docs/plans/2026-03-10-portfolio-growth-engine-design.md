# Portfolio Growth Engine Design

## Context

tsekaluk.dev is a personal portfolio built with Next.js 16 + React 19 + Tailwind v4 inside the Nebutra-Sailor monorepo. It has 17 projects with detailed stories/metrics/architecture diagrams, 5 pages (home, work, thinking, now, about), and clean design.

## Goals

- **Dual-track traffic**: English for international dev community (GitHub, LinkedIn, X, Product Hunt), Chinese for domestic market (WeChat, Xiaohongshu, Jike, Zsxq)
- **Content mode**: Deep articles written manually, daily updates automated
- **China access**: Lightweight — Vercel + Cloudflare CDN, no ICP filing
- **Social platforms**: GitHub, LinkedIn, X, Product Hunt, WeChat Official Account, Xiaohongshu, Jike, Zsxq, WeChat personal/enterprise

## Current Gaps

1. No sitemap.xml, robots.txt, JSON-LD structured data, RSS feed
2. No i18n — only `lang="en"`, no Chinese content
3. `/thinking` page is empty — no blog content
4. No dark mode (tokens exist but unused)
5. No analytics (GA/Plausible)
6. Only mailto CTA — no newsletter, no WeChat QR, no Calendly
7. No social proof (testimonials, GitHub stats, client logos)
8. Vercel region iad1 only — slow for China
9. No canonical URLs, no hreflang tags

## Design — 4 Phases

### P1: Infrastructure (SEO + i18n + Dark Mode + Analytics)

#### 1.1 SEO Foundation
- `app/sitemap.ts` — dynamic sitemap covering all routes + project slugs + future articles
- `app/robots.ts` — allow all crawlers, reference sitemap
- JSON-LD structured data on every page:
  - Home: `Person` + `WebSite` schema
  - Work: `ItemList` of `CreativeWork`
  - Work/[slug]: `CreativeWork` with metrics
  - About: `Person` with awards, credentials
  - Thinking: `Blog` + `BlogPosting` per article
- Canonical URLs via `metadata.alternates.canonical`
- Hreflang tags for i18n (`en` + `zh`)

#### 1.2 i18n Architecture
- Use Next.js 16 middleware-based i18n with `[locale]` route group
- Structure: `app/[locale]/(pages)/...`
- Translation files: `messages/en.json`, `messages/zh.json`
- Library: `next-intl` (lightweight, RSC-compatible)
- Default locale: `en`, supported: `en`, `zh`
- Project data: keep in TS but add `nameZh`, `taglineZh`, `descriptionZh`, `storyZh` fields
- URL structure: `tsekaluk.dev/en/work`, `tsekaluk.dev/zh/work`

#### 1.3 Dark Mode
- Already have `next-themes` as dependency
- Add `ThemeProvider` wrapper in layout
- Add theme toggle in header
- CSS: use existing `@nebutra/tokens` dark mode variables
- Key changes: `globals.css` dark variant overrides for accent colors

#### 1.4 Analytics
- Plausible Analytics (privacy-first, no cookie banner needed)
- Script tag in layout, respects DNT
- Custom events: project view, CTA click, theme toggle, locale switch

#### 1.5 Cloudflare CDN
- Add Cloudflare proxy in front of Vercel
- Enable Auto Minify, Brotli, Polish (image optimization)
- Edge caching for static assets
- This alone cuts China latency from ~3s to ~1.5s

### P2: Content Engine

#### 2.1 Blog System (`/thinking`)
- MDX-based articles in `content/thinking/` directory
- Frontmatter: title, titleZh, date, tags, excerpt, excerptZh, locale, draft
- `lib/articles.ts` already exists — extend to support bilingual
- Article detail page: `app/[locale]/thinking/[slug]/page.tsx`
- Code syntax highlighting via `rehype-pretty-code`
- Reading time calculation
- Previous/Next article navigation

#### 2.2 RSS Feed
- `app/rss.xml/route.ts` — generate RSS 2.0 feed
- Include articles + project updates
- Dual feeds: `/en/rss.xml`, `/zh/rss.xml`

#### 2.3 Automated Content Pipeline
- `/now` page already has AI agent updates — extend this pattern
- GitHub webhook or cron: pull recent commits, generate weekly changelog
- Content format: structured MDX with frontmatter
- Future: connect to Notion API for draft management

### P3: Social Hub & Conversion

#### 3.1 Links Page (`/links`)
- Grid of all social platform links with icons
- WeChat QR code (modal on click)
- Zsxq QR code
- Structured for both Chinese and international audiences
- Shareable URL for bio links across platforms

#### 3.2 Newsletter Signup
- Email capture component in footer + CTA section + article pages
- Provider: Resend or Buttondown (developer-friendly)
- Double opt-in, GDPR compliant
- Welcome email with top 3 projects

#### 3.3 Calendly Integration
- "Book a call" button in header CTA and about page
- Embedded Calendly widget or link
- Replaces/supplements mailto

#### 3.4 WeChat Integration
- WeChat Official Account QR in footer + links page
- WeChat personal/enterprise QR with modal
- Mini-program card preview meta tags (wx:share)

#### 3.5 Platform-Specific Meta
- LinkedIn article meta tags
- Xiaohongshu share image generation (OG image with Chinese text)
- Jike share card optimization

### P4: Trust & Social Proof

#### 4.1 GitHub Stats Widget
- Real-time GitHub contribution graph or stats on about page
- Total stars, repos, contributions
- API: GitHub GraphQL API, cached with ISR

#### 4.2 Testimonials Section
- Quote cards on home page
- Source: collect from collaborators, clients, open source users
- Structured data: `Review` schema

#### 4.3 Case Study Enhancement
- Before/after comparisons for key projects
- Video demos or GIF walkthroughs
- User impact metrics with visual charts

#### 4.4 Dynamic OG Images
- `app/og/route.tsx` using `@vercel/og`
- Auto-generate branded OG images for each page
- Include project metrics, article titles in the image
- Bilingual OG images based on locale

## Technical Decisions

- **i18n**: `next-intl` over `next-i18next` — better RSC support, lighter
- **Analytics**: Plausible over GA4 — privacy-first, no cookie consent needed
- **Newsletter**: Resend — developer-friendly, good free tier
- **RSS**: Native route handler, no external dependency
- **OG images**: `@vercel/og` — native Vercel, edge-rendered
- **CDN**: Cloudflare free tier in front of Vercel

## Success Metrics

- P1: Google Search Console indexing all pages within 2 weeks
- P2: First 5 bilingual articles published, RSS subscribers > 0
- P3: Social link clicks tracked, newsletter signups > 0
- P4: OG images rendering correctly across all platforms
