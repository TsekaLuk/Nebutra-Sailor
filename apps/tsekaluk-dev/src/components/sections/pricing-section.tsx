"use client";

import * as React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimateIn } from "@nebutra/ui/components";
import { DotPattern } from "@nebutra/ui/primitives";
import {
  Message,
  Sparkles,
  Target,
  Code,
  Brain,
  Layers,
  Globe,
  Briefcase,
  Compass,
  CheckCircleFill,
  ArrowRight,
  type IconProps,
} from "@nebutra/icons";
import { Coffee, ChevronDown } from "lucide-react";
import {
  Anthropic,
  OpenAI,
  Midjourney,
  Flux,
  Cursor as CursorIcon,
  LangChain,
  ComfyUI,
  OpenClaw,
  N8n,
  Dify,
  Figma,
  Adobe,
  V0,
  Google,
  Notion,
  Zapier,
  Vercel,
} from "@lobehub/icons";
import { NumberTicker } from "@/components/ui/number-ticker";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const CAPABILITY_DATA = [
  { dimension: "Engineering", score: 92 },
  { dimension: "AI", score: 95 },
  { dimension: "Design", score: 88 },
  { dimension: "Growth", score: 85 },
  { dimension: "Consulting", score: 90 },
  { dimension: "Strategy", score: 82 },
];

const SERVICE_ICONS: React.ComponentType<IconProps>[] = [
  Code,
  Brain,
  Layers,
  Globe,
  Briefcase,
  Compass,
];

const SERVICE_KEYS = [
  "engineering",
  "ai",
  "design",
  "growth",
  "consulting",
  "strategy",
] as const;

const TIER_KEYS = ["chat", "coffee", "hire", "partner"] as const;

const TIER_ICONS: Record<
  (typeof TIER_KEYS)[number],
  React.ComponentType<IconProps | { className?: string; size?: number }>
> = { chat: Message, coffee: Coffee, hire: Sparkles, partner: Target };

/* ------------------------------------------------------------------ */
/*  Tech stack data                                                    */
/* ------------------------------------------------------------------ */

interface TechItem {
  name: string;
  slug?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: React.ComponentType<any>;
}

const TECH_STACKS: Record<(typeof SERVICE_KEYS)[number], TechItem[]> = {
  engineering: [
    { name: "Next.js", slug: "nextdotjs" },
    { name: "React", slug: "react" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Prisma", slug: "prisma" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Vercel", Icon: Vercel },
    { name: "Turborepo", slug: "turborepo" },
  ],
  ai: [
    { name: "Claude", Icon: Anthropic },
    { name: "OpenAI", Icon: OpenAI },
    { name: "Midjourney", Icon: Midjourney },
    { name: "Flux", Icon: Flux },
    { name: "Cursor", Icon: CursorIcon },
    { name: "LangChain", Icon: LangChain },
    { name: "ComfyUI", Icon: ComfyUI },
    { name: "OpenClaw", Icon: OpenClaw },
    { name: "n8n", Icon: N8n },
    { name: "Dify", Icon: Dify },
  ],
  design: [
    { name: "Figma", Icon: Figma },
    { name: "Adobe CC", Icon: Adobe },
    { name: "v0", Icon: V0 },
    { name: "Framer", slug: "framer" },
    { name: "Storybook", slug: "storybook" },
    { name: "Radix UI", slug: "radixui" },
  ],
  growth: [
    { name: "Google Analytics", Icon: Google },
    { name: "PostHog", slug: "posthog" },
    { name: "Product Hunt", slug: "producthunt" },
    { name: "Notion", Icon: Notion },
    { name: "Zapier", Icon: Zapier },
    { name: "Mixpanel", slug: "mixpanel" },
    { name: "X", slug: "x" },
    { name: "WeChat OA", slug: "wechat" },
  ],
  consulting: [
    { name: "Notion", Icon: Notion },
    { name: "Linear", slug: "linear" },
    { name: "Jira", slug: "jira" },
    { name: "LaTeX", slug: "latex" },
    { name: "Python", slug: "python" },
  ],
  strategy: [
    { name: "Y Combinator", slug: "ycombinator" },
    { name: "Notion", Icon: Notion },
    { name: "Google Sheets", slug: "googlesheets" },
    { name: "Stripe", slug: "stripe" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Tech badge                                                         */
/* ------------------------------------------------------------------ */

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 transition-colors hover:border-[var(--color-accent-muted)]">
      {item.Icon ? (
        <item.Icon size={14} />
      ) : item.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}`}
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5 brightness-0 dark:invert"
          loading="lazy"
        />
      ) : null}
      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats strip                                                        */
/* ------------------------------------------------------------------ */

function StatsStrip() {
  const t = useTranslations("pricing");
  const stats = t.raw("stats") as {
    value: number;
    suffix: string;
    label: string;
  }[];

  return (
    <AnimateIn preset="fadeUp" delay={0.1} inView>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="flex items-baseline justify-center gap-0.5">
              <NumberTicker
                value={stat.value}
                className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              />
              <span className="text-3xl font-bold text-[var(--color-accent-fg)]">
                {stat.suffix}
              </span>
            </div>
            <p className="mt-1 font-mono text-xs text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </AnimateIn>
  );
}

/* ------------------------------------------------------------------ */
/*  Tier card                                                          */
/* ------------------------------------------------------------------ */

function TierCard({
  tierKey,
  index,
}: {
  tierKey: (typeof TIER_KEYS)[number];
  index: number;
}) {
  const t = useTranslations("pricing");
  const isAccent = tierKey === "hire";
  const TierIcon = TIER_ICONS[tierKey];
  const features = t.raw(`tiers.${tierKey}.features`) as string[];
  const href = t(`tiers.${tierKey}.href`);

  return (
    <AnimateIn preset="fadeUp" delay={index * 0.1} inView>
      <a
        href={href}
        className={`group relative flex flex-col justify-between rounded-3xl border p-8 lg:p-10 transition-all duration-500 h-full ${
          isAccent
            ? "border-[var(--color-accent)] bg-gray-900 dark:bg-gray-900 shadow-[0_20px_60px_var(--color-accent-shadow)] scale-[1.02] hover:scale-[1.04]"
            : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950/80 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Hire card internal glow */}
        {isAccent && (
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 30% 0%, hsla(82 84% 56% / 0.12) 0%, transparent 70%)",
            }}
          />
        )}

        <div className="relative z-[1]">
          {/* Icon */}
          <div
            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
              isAccent
                ? "bg-[var(--color-accent)]/15"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <TierIcon
              size={24}
              className={
                isAccent
                  ? "text-[var(--color-accent-fg)]"
                  : "text-gray-600 dark:text-gray-300"
              }
            />
          </div>

          {/* Name */}
          <h3
            className={`text-xl font-bold ${
              isAccent ? "text-white" : "text-gray-900 dark:text-white"
            }`}
          >
            {t(`tiers.${tierKey}.name`)}
          </h3>

          {/* Price */}
          <p
            className={`mt-3 text-4xl font-extrabold tracking-tight ${
              isAccent
                ? "text-white"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {t(`tiers.${tierKey}.price`)}
          </p>

          {/* Description */}
          <p
            className={`mt-2 text-sm leading-relaxed ${
              isAccent ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {t(`tiers.${tierKey}.description`)}
          </p>

          {/* Availability (hire card only) */}
          {isAccent && (
            <div className="mt-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs text-gray-300">{t("availability")}</span>
            </div>
          )}

          {/* Divider */}
          <div
            className={`my-6 h-px ${
              isAccent ? "bg-gray-700" : "bg-gray-100 dark:bg-gray-800"
            }`}
          />

          {/* Features */}
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 text-sm ${
                  isAccent
                    ? "text-gray-300"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                <CheckCircleFill
                  size={16}
                  className={`mt-0.5 shrink-0 ${
                    isAccent
                      ? "text-[var(--color-accent-fg)]"
                      : "text-[var(--color-accent-dark)]"
                  }`}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className={`relative z-[1] mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all duration-300 ${
            isAccent
              ? "bg-[var(--color-accent)] text-gray-900 group-hover:brightness-110 group-hover:shadow-[0_8px_24px_var(--color-accent-shadow)]"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
          }`}
        >
          {t(`tiers.${tierKey}.cta`)}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </a>
    </AnimateIn>
  );
}

/* ------------------------------------------------------------------ */
/*  Typographic Capability Matrix                                      */
/* ------------------------------------------------------------------ */

function CapabilityMatrix() {
  const t = useTranslations("pricing");

  return (
    <div className="flex flex-col justify-center h-full rounded-3xl border border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/40 p-8 md:p-12 shadow-sm backdrop-blur-sm transition-all duration-300">
      <h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white mb-10">
        {t("radar_title")}
      </h3>
      <div className="space-y-6">
        {CAPABILITY_DATA.map((item, i) => (
          <div key={i} className="group relative w-full">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {item.dimension}
              </span>
              <span className="text-2xl font-normal leading-none text-gray-900 dark:text-white">
                {item.score}
              </span>
            </div>
            <div className="h-0.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-accent)] rounded-full origin-left transition-transform duration-1000 ease-out"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service line card (expandable)                                     */
/* ------------------------------------------------------------------ */

function ServiceLineCard({
  serviceKey,
  index,
}: {
  serviceKey: (typeof SERVICE_KEYS)[number];
  index: number;
}) {
  const t = useTranslations("pricing");
  const [expanded, setExpanded] = useState(false);
  const Icon = SERVICE_ICONS[index];
  const items = t.raw(`services.${serviceKey}.items`) as string[];
  const techStack = TECH_STACKS[serviceKey];

  return (
    <AnimateIn preset="fadeUp" delay={index * 0.05} inView className="h-full">
      <div
        className={`group h-full flex flex-col justify-center rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${expanded ? "border-[var(--color-accent-muted)] bg-white dark:bg-gray-900/40 shadow-sm" : "border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-gray-950/40 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-gray-900/60"}`}
        onClick={() => setExpanded((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded((v) => !v);
          }
        }}
      >
        <div className="flex gap-4 p-5">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${expanded ? "bg-[var(--color-accent)]/15" : "bg-gray-100 dark:bg-gray-800/80 group-hover:bg-[var(--color-accent)]/10"}`}>
            <Icon size={20} className={expanded ? "text-[var(--color-accent-dark)]" : "text-gray-500 dark:text-gray-400 group-hover:text-[var(--color-accent-dark)]"} />
          </div>
          <div className="flex-1 min-w-0 py-0.5">
            <div className="flex items-center justify-between gap-2">
              <h4 className={`text-sm font-bold transition-colors ${expanded ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"}`}>
                {t(`services.${serviceKey}.name`)}
              </h4>
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${expanded ? "bg-gray-100 dark:bg-gray-800" : "bg-transparent group-hover:bg-gray-100 dark:group-hover:bg-gray-800"}`}>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                    expanded ? "rotate-180 text-gray-700 dark:text-gray-300" : "group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  }`}
                />
              </div>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400/80 truncate">
              {items.join(" · ")}
            </p>
          </div>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-800/60 mx-5">
              <div className="flex flex-wrap gap-2 mt-3">
                {techStack.map((tech) => (
                  <TechBadge key={tech.name} item={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

/* ------------------------------------------------------------------ */
/*  Service lines grid                                                 */
/* ------------------------------------------------------------------ */

function ServiceLines() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full lg:content-start">
      {SERVICE_KEYS.map((key, idx) => (
        <ServiceLineCard key={key} serviceKey={key} index={idx} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      {/* Header */}
      <div className="text-center mb-20">
        <AnimateIn preset="fade" inView>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4">
            {t("label")}
          </p>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.1} inView>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            {t("headline")}
          </h2>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.15} inView>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </AnimateIn>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
        {TIER_KEYS.map((key, i) => (
          <TierCard key={key} tierKey={key} index={i} />
        ))}
      </div>

      {/* Stats strip */}
      <div className="relative mt-16 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
        <DotPattern
          width={24}
          height={24}
          cr={0.8}
          className="text-gray-400/15 dark:text-gray-500/10 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_75%)]"
        />
        <StatsStrip />
      </div>

      {/* Capability showcase */}
      <div className="mt-24 lg:mt-32">
        <AnimateIn preset="fade" inView>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="hidden sm:block h-px w-12 bg-gray-200 dark:bg-gray-800" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 text-center m-0">
              {t("capabilities_label")}
            </p>
            <div className="hidden sm:block h-px w-12 bg-gray-200 dark:bg-gray-800" />
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5 h-full">
            <AnimateIn preset="fadeUp" delay={0.1} inView className="h-full">
              <CapabilityMatrix />
            </AnimateIn>
          </div>
          <div className="lg:col-span-7 h-full">
            <AnimateIn preset="fadeUp" delay={0.2} inView className="h-full">
              <ServiceLines />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
