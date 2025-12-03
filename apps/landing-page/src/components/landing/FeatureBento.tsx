"use client";

import { motion } from "framer-motion";
import { Building2, Bot, CreditCard, Globe } from "lucide-react";
import { bentoFeatures } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

const ICONS = {
  "🏢": Building2,
  "🤖": Bot,
  "💳": CreditCard,
  "🌍": Globe,
};

/**
 * FeatureBento - Asymmetric feature grid
 *
 * @see DESIGN.md Section 5
 */
export function FeatureBento() {
  const features = Object.entries(bentoFeatures);

  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Production-ready features, out of the box
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([key, feature], index) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS] || Building2;
            const isLarge = index === 0 || index === 1;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 transition-all hover:border-white/20",
                  isLarge && "lg:col-span-1 lg:row-span-2",
                )}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0033FE]/5 to-[#0BF1C3]/5 opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0033FE]/20 to-[#0BF1C3]/20">
                    <Icon className="h-6 w-6 text-[#0BF1C3]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60">{feature.description}</p>

                  {/* Feature list if available */}
                  {"features" in feature && feature.features && (
                    <ul className="mt-4 space-y-2">
                      {feature.features.map((item: string) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-white/50"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#0BF1C3]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#0033FE]/10 to-transparent blur-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

FeatureBento.displayName = "FeatureBento";
