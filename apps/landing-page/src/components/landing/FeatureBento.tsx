"use client";

import { motion } from "framer-motion";
import { Building2, Bot, CreditCard, Globe } from "lucide-react";
import { bentoFeatures } from "@/lib/landing-content";
import { cn } from "@/lib/utils";
import { ThemedSection } from "@nebutra/custom-ui";
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
const VISUALS: Record<string, React.ComponentType> = {
  multiTenant: MultiTenantVisual,
  aiNative: AINativeVisual,
  billing: BillingVisual,
  globalEdge: GlobalEdgeVisual,
};

/**
 * Stagger pop-in animation variants
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/**
 * FeatureBento - Supabase-style bento grid with atomic visualizations
 *
 * Each card has a unique semantic visualization built from atomic components.
 */
export function FeatureBento() {
  const features = Object.entries(bentoFeatures);

  return (
    <ThemedSection theme="features" className="py-24 md:py-32">
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

        {/* Bento Grid - Supabase style layout */}
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map(([key, feature], index) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS] || Building2;
            const Visual = VISUALS[key];
            // First two cards span 2 rows on large screens
            const isLarge = index === 0 || index === 1;

            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className={cn(
                  "group rounded-2xl border border-border/10 bg-card/30 backdrop-blur-sm transition-colors hover:border-border/20",
                  isLarge && "lg:row-span-2",
                )}
              >
                {/* Card Content */}
                <div className="flex h-full flex-col p-6">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/20 bg-card/50">
                      <Icon className="h-4 w-4 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Visual - fills remaining space */}
                  {Visual && (
                    <div className="mt-4 flex-1">
                      <Visual />
                    </div>
                  )}

                  {/* Feature list for billing card */}
                  {"features" in feature && feature.features && !Visual && (
                    <ul className="mt-4 space-y-2">
                      {feature.features.map((item: string) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground/80"
                        >
                          <span className="h-1 w-1 rounded-full bg-[var(--brand-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
    </ThemedSection>
  );
}
FeatureBento.displayName = "FeatureBento";
