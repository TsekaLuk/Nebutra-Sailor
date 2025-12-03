"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow, Flag, Globe } from "lucide-react";

/**
 * Feature cards data
 */
const features = [
  {
    icon: Workflow,
    title: "Build with the AI SDK.",
    description:
      "Ship AI products faster with a framework built to eliminate boilerplate code and standardize integrating model providers.",
    href: "#",
  },
  {
    icon: Flag,
    title: "Iterate on ideas faster.",
    description:
      "Stay in the flow by managing feature flags and preview comments from within the dashboard on preview URLs.",
    href: "#",
  },
  {
    icon: Globe,
    title: "Deploy to AI-ready infra.",
    description:
      "Industry leading managed infrastructure lets you launch performant AI projects at scale instantly.",
    href: "#",
  },
];

/**
 * FeatureCard - Single feature with icon, title, description and arrow link
 */
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.a
      href={feature.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col p-6 md:p-8 border-b border-border/30 md:border-b-0 md:border-r last:border-r-0 last:border-b-0 hover:bg-muted/30 transition-colors"
    >
      {/* Placeholder for illustration */}
      <div className="mb-6 h-40 w-full rounded-lg bg-muted/50 flex items-center justify-center">
        <Icon className="h-12 w-12 text-muted-foreground/50" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
        {feature.description}
      </p>

      {/* Arrow link */}
      <div className="mt-6">
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}

/**
 * FeatureGrid - 3-column feature cards with grid lines
 *
 * Vercel-style layout: title + subtitle + 3 cards in a row
 */
export function FeatureGrid() {
  return (
    <section className="relative w-full bg-background">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="flex-1 border-x border-border/30" />
            <div className="flex-1 border-r border-border/30" />
            <div className="hidden md:block flex-1 border-r border-border/30" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="px-6 py-16 md:py-20 text-center border-b border-border/30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-foreground md:text-4xl"
          >
            The future of SaaS is on Nebutra.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Nebutra provides the tools and infrastructure to build and deploy
            robust, secure, and performant applications quickly.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" />
    </section>
  );
}

FeatureGrid.displayName = "FeatureGrid";
