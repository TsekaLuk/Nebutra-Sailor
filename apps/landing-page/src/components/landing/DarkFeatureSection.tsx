"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, Server } from "lucide-react";

/**
 * Dark section features
 */
const features = [
  {
    icon: Shield,
    title: "DDoS Mitigation",
    description:
      "Scalable application security and multiple levels of DDoS mitigation blocking incoming traffic if we identify abnormal or suspicious levels of incoming requests.",
  },
  {
    icon: Lock,
    title: "Row-Level Security",
    description:
      "First party security at the database layer. RLS deploys automatically, with no additional routing rules, external tools, or complex integrations required.",
  },
  {
    icon: Server,
    title: "Secure Compute",
    description:
      "Create a secure, isolated bridge from Nebutra to your on-premise backend or Kubernetes services with Secure Compute.",
  },
];

/**
 * DarkFeatureSection - Dark background section with headline + 3 feature cards
 *
 * Vercel-style: Dark bg with white text, 3-column feature cards
 */
export function DarkFeatureSection() {
  return (
    <section className="relative w-full bg-foreground text-background">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="flex-1 border-x border-background/10" />
            <div className="flex-1 border-r border-background/10" />
            <div className="hidden md:block flex-1 border-r border-background/10" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-12 md:py-16 border-b border-background/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              <span className="text-background">
                Protecting your SaaS apps.
              </span>{" "}
              <span className="text-background/60">
                Build, deploy, and secure your applications with confidence.
              </span>
            </h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
          >
            <Shield className="h-4 w-4" />
            Secure by default
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 border-b border-background/10 md:border-b-0 md:border-r last:border-r-0 last:border-b-0"
              >
                <div className="flex items-center gap-2 text-background/60 mb-3">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{feature.title}</span>
                </div>
                <p className="text-sm text-background/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

DarkFeatureSection.displayName = "DarkFeatureSection";
