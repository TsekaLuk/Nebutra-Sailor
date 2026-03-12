"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { AnimateIn } from "@nebutra/ui/components";
import {
  Code,
  Bot,
  Palette,
  TrendingUp,
  Calculator,
  Telescope,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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

const SERVICE_ICONS = [Code, Bot, Palette, TrendingUp, Calculator, Telescope];
const SERVICE_KEYS = [
  "engineering",
  "ai",
  "design",
  "growth",
  "consulting",
  "strategy",
] as const;

const TIER_KEYS = ["chat", "coffee", "hire", "partner"] as const;

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

  const features = t.raw(`tiers.${tierKey}.features`) as string[];
  const href = t(`tiers.${tierKey}.href`);

  return (
    <AnimateIn preset="fadeUp" delay={index * 0.08} inView>
      <a
        href={href}
        className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 h-full ${
          isAccent
            ? "border-[var(--color-accent)] dark:border-[var(--color-accent-dark)] shadow-[0_8px_30px_var(--color-accent-shadow)] bg-white dark:bg-gray-900"
            : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 opacity-80 hover:opacity-100 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
        }`}
      >
        <div>
          {/* Name & Price */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t(`tiers.${tierKey}.name`)}
            </h3>
            <p
              className={`mt-1 text-2xl font-bold tracking-tight ${
                isAccent
                  ? "text-[var(--color-accent)] dark:text-[var(--color-accent-dark)]"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {t(`tiers.${tierKey}.price`)}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {t(`tiers.${tierKey}.description`)}
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-2">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <span className="mt-0.5 text-[var(--color-accent)]">·</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className={`mt-6 text-center rounded-lg py-2 text-sm font-medium transition-colors ${
            isAccent
              ? "bg-[var(--color-accent)] text-gray-900 group-hover:brightness-110"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
          }`}
        >
          {t(`tiers.${tierKey}.cta`)}
        </div>
      </a>
    </AnimateIn>
  );
}

/* ------------------------------------------------------------------ */
/*  Radar chart                                                        */
/* ------------------------------------------------------------------ */

function CapabilityRadar() {
  const t = useTranslations("pricing");

  return (
    <div className="flex items-center justify-center">
      <ResponsiveContainer width="100%" height={360}>
        <RadarChart data={CAPABILITY_DATA} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid stroke="var(--color-accent-muted)" strokeOpacity={0.3} />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: "currentColor", fontSize: 12 }}
            className="text-gray-500 dark:text-gray-400"
          />
          <Radar
            name={t("radar_title")}
            dataKey="score"
            stroke="var(--color-accent)"
            fill="var(--color-accent)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-accent)",
              border: "none",
              borderRadius: "8px",
              color: "#111",
              fontSize: 13,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service lines list                                                 */
/* ------------------------------------------------------------------ */

function ServiceLines() {
  const t = useTranslations("pricing");

  return (
    <div className="space-y-6">
      {SERVICE_KEYS.map((key, idx) => {
        const Icon = SERVICE_ICONS[idx];

        const items = t.raw(`services.${key}.items`) as string[];

        return (
          <AnimateIn key={key} preset="fadeUp" delay={idx * 0.06} inView>
            <div className="flex gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {t(`services.${key}.name`)}
                </h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {items.join(" · ")}
                </p>
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      {/* Header */}
      <div className="text-center mb-16">
        <AnimateIn preset="fade" inView>
          <p className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 mb-4 tracking-tight">
            {t("label")}
          </p>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.1} inView>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </AnimateIn>
      </div>

      {/* Tier cards — 4-col grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TIER_KEYS.map((key, i) => (
          <TierCard key={key} tierKey={key} index={i} />
        ))}
      </div>

      {/* Capability showcase — RadarChart + Service lines */}
      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <AnimateIn preset="fade" delay={0.1} inView>
          <CapabilityRadar />
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.2} inView>
          <ServiceLines />
        </AnimateIn>
      </div>
    </section>
  );
}
