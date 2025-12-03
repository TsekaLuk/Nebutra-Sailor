"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Zap,
  Globe,
  MessageSquare,
  Flag,
  RefreshCw,
} from "lucide-react";

/**
 * Toolkit features - 2x3 grid
 */
const features = [
  {
    icon: Rocket,
    label: "Serverless deployments",
    title:
      "Automatically handle the demanding needs of AI, without the infrastructure complexity.",
    href: "#",
  },
  {
    icon: Zap,
    label: "Zero-config streaming",
    title:
      "Stream long-running LLM responses, improving user experience and performance.",
    href: "#",
  },
  {
    icon: Globe,
    label: "Edge caching",
    title:
      "Cache LLM responses globally so you can serve data to your users as fast as possible.",
    href: "#",
  },
  {
    icon: MessageSquare,
    label: "Preview comments",
    title:
      "Let everyone on the team provide feedback directly on real deployments with preview comments.",
    href: "#",
  },
  {
    icon: Flag,
    label: "Feature flag management",
    title:
      "Manage feature flags with the Toolbar so you can release new features safely and with confidence.",
    href: "#",
  },
  {
    icon: RefreshCw,
    label: "Skew protection",
    title:
      "Minimize user-facing errors during rollout. Make sure all your deployments stay in sync.",
    href: "#",
  },
];

/**
 * ToolkitGrid - 2x3 feature grid with icons, labels, and arrow links
 *
 * Vercel-style: Section title + 6 feature cards in 2 rows
 */
export function ToolkitGrid() {
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
        <div className="px-6 py-16 md:py-20 border-b border-border/30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-foreground md:text-4xl"
          >
            Your toolkit for SaaS Apps.
          </motion.h2>
        </div>

        {/* Feature grid - 2 rows x 3 columns */}
        <div className="grid md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.a
                key={feature.label}
                href={feature.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="group p-6 md:p-8 border-b border-border/30 md:border-r last:border-r-0 [&:nth-child(3)]:md:border-r-0 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 hover:bg-muted/30 transition-colors"
              >
                {/* Label with icon */}
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{feature.label}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {feature.title}
                </h3>

                {/* Arrow button */}
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" />
    </section>
  );
}

ToolkitGrid.displayName = "ToolkitGrid";
