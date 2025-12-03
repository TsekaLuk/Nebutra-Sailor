"use client";

import { motion } from "framer-motion";
import { Building2, Bot, CreditCard, Globe } from "lucide-react";
import { bentoFeatures, bentoSectionContent } from "@/lib/landing-content";
import { BentoGrid, BentoCard } from "@nebutra/custom-ui";
import {
  MultiTenantVisual,
  AINativeVisual,
  BillingVisual,
  GlobalEdgeVisual,
} from "./feature-visuals";

const ICONS = {
  "🏢": Building2,
  "🤖": Bot,
  "💳": CreditCard,
  "🌍": Globe,
};

/** Map feature keys to their visual components */
const VISUALS: Record<string, React.ReactNode> = {
  multiTenant: <MultiTenantVisual />,
  aiNative: <AINativeVisual />,
  billing: <BillingVisual />,
  globalEdge: <GlobalEdgeVisual />,
};

/** Grid span classes for Micro-Landing Card layout */
const GRID_SPANS: Record<string, string> = {
  multiTenant: "lg:col-span-2 lg:row-span-2", // Primary card (2x2)
  aiNative: "lg:row-span-2", // Tall card (1x2)
  billing: "lg:col-span-1", // Standard card (1x1)
  globalEdge: "lg:col-span-2", // Wide card (2x1)
};

/**
 * FeatureBento - Micro-Landing Card grid
 *
 * Each card follows the Micro-Landing design pattern:
 * - Hero (Tension): Opinionated hook in title
 * - Context: Problem statement in description
 * - Proof: Visual demonstration using audited primitives
 * - CTA: Specific action
 *
 * @see apps/landing-page/DESIGN.md#12-micro-landing-card-design-system
 */
export function FeatureBento() {
  const features = Object.entries(bentoFeatures);

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

        {/* Bento Grid - Micro-Landing Cards */}
        <BentoGrid className="lg:grid-cols-3">
          {features.map(([key, feature]) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS] || Building2;
            const background = VISUALS[key];
            const gridSpan = GRID_SPANS[key] || "";

            return (
              <BentoCard
                key={key}
                name={feature.title}
                description={feature.description}
                Icon={Icon}
                background={background}
                className={gridSpan}
                href="#"
                cta={feature.cta}
              />
            );
          })}
        </BentoGrid>

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
