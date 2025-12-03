"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { bentoFeatures, bentoSectionContent } from "@/lib/landing-content";
import {
  MultiTenantVisual,
  AINativeVisual,
  BillingVisual,
  GlobalEdgeVisual,
} from "./feature-visuals";

/** Map feature keys to their visual components */
const VISUALS: Record<string, React.ReactNode> = {
  multiTenant: <MultiTenantVisual />,
  aiNative: <AINativeVisual />,
  billing: <BillingVisual />,
  globalEdge: <GlobalEdgeVisual />,
};

/**
 * Asymmetric Bento Layout:
 *
 * ┌─────────────────┬──────────────────────┐
 * │   Multi-Tenant  │      AI Layer        │
 * │   (col-span-1   │   (col-span-2        │
 * │    row-span-2)  │    row-span-1)       │
 * ├─────────────────┼───────────┬──────────┤
 * │   (continues)   │  Billing  │ Global   │
 * │                 │ (1×1)     │ Edge     │
 * │                 │           │ (1×1)    │
 * └─────────────────┴───────────┴──────────┘
 */
const GRID_CONFIG: Record<
  string,
  { span: string; order: number; minHeight: string }
> = {
  multiTenant: {
    span: "md:col-span-1 md:row-span-2",
    order: 1,
    minHeight: "min-h-[480px]",
  },
  aiNative: {
    span: "md:col-span-2 md:row-span-1",
    order: 2,
    minHeight: "min-h-[280px]",
  },
  billing: {
    span: "md:col-span-1 md:row-span-1",
    order: 3,
    minHeight: "min-h-[280px]",
  },
  globalEdge: {
    span: "md:col-span-1 md:row-span-1",
    order: 4,
    minHeight: "min-h-[280px]",
  },
};

/**
 * MicroLandingBentoCard - Individual card with 5-layer structure
 */
function MicroLandingBentoCard({
  featureKey,
  feature,
}: {
  featureKey: string;
  feature: (typeof bentoFeatures)[keyof typeof bentoFeatures];
}) {
  const config = GRID_CONFIG[featureKey] || {
    span: "",
    order: 99,
    minHeight: "min-h-[280px]",
  };
  const visual = VISUALS[featureKey];
  const isPrimary = featureKey === "multiTenant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: config.order * 0.1 }}
      className={`
        group relative flex flex-col overflow-hidden rounded-xl
        border border-border bg-card
        transition-all duration-300
        hover:border-border/80 hover:shadow-lg hover:shadow-primary/5
        ${config.span} ${config.minHeight}
      `}
      style={{ order: config.order }}
    >
      {/* Hero + Context Layer */}
      <div className="relative z-10 p-5 pb-0">
        <h3
          className={`font-semibold leading-snug text-foreground ${
            isPrimary ? "text-lg md:text-xl" : "text-base md:text-lg"
          }`}
        >
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>

      {/* Proof Layer - Visual Component */}
      <div className="relative z-10 flex-1 mt-4">{visual}</div>

      {/* Action Layer - CTA */}
      <div className="relative z-10 p-5 pt-0">
        <a
          href="#"
          className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {feature.cta}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
        </a>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-primary/[0.02] to-transparent" />
    </motion.div>
  );
}

/**
 * FeatureBento - High-granularity Asymmetric Bento Grid
 *
 * Each card is a "Micro Landing Page" with:
 * - Hero: Opinionated tension statement
 * - Context: Pain point description
 * - Proof: Hard evidence (code, metrics, semantic graphics)
 * - Action: Micro-CTA
 *
 * @see apps/landing-page/DESIGN.md#12-micro-landing-card-design-system
 */
export function FeatureBento() {
  const features = Object.entries(bentoFeatures) as [
    string,
    (typeof bentoFeatures)[keyof typeof bentoFeatures],
  ][];

  // Sort by order
  const sortedFeatures = features.sort(
    (a, b) =>
      (GRID_CONFIG[a[0]]?.order || 99) - (GRID_CONFIG[b[0]]?.order || 99),
  );

  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header - Opinionated, not descriptive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {bentoSectionContent.headline}
          </h2>
          <p className="mt-4 text-xl font-medium text-primary">
            {bentoSectionContent.subheadline}
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-fr">
          {sortedFeatures.map(([key, feature]) => (
            <MicroLandingBentoCard
              key={key}
              featureKey={key}
              feature={feature}
            />
          ))}
        </div>

        {/* Footer - Confidence, not marketing speak */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-lg text-muted-foreground"
        >
          {bentoSectionContent.footer}{" "}
          <span className="text-foreground">
            {bentoSectionContent.footerHighlight}
          </span>
        </motion.p>
      </div>
    </section>
  );
}

FeatureBento.displayName = "FeatureBento";
