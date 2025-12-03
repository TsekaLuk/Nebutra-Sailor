"use client";

import { motion } from "framer-motion";
import { Building2, Bot, CreditCard, Globe } from "lucide-react";
import { bentoFeatures } from "@/lib/landing-content";
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

/** Grid span classes for bento layout */
const GRID_SPANS: Record<string, string> = {
  multiTenant: "lg:col-span-2 lg:row-span-2",
  aiNative: "lg:row-span-2",
  billing: "lg:col-span-1",
  globalEdge: "lg:col-span-2",
};

/**
 * FeatureBento - Feature grid using audited BentoGrid/BentoCard components
 *
 * Each card uses the primitives library's BentoCard with:
 * - Background slot for atomic visualizations
 * - Icon with hover animation
 * - Hover-reveal CTA
 */
export function FeatureBento() {
  const features = Object.entries(bentoFeatures);

  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Production-ready features, out of the box
          </p>
        </motion.div>

        {/* Bento Grid using audited component */}
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
                cta="Learn more"
              />
            );
          })}
        </BentoGrid>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-lg text-muted-foreground"
        >
          Use one or all.{" "}
          <span className="text-foreground">
            Best of breed products. Integrated as a platform.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

FeatureBento.displayName = "FeatureBento";
