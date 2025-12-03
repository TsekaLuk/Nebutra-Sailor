"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Terminal } from "@nebutra/custom-ui/patterns";

/**
 * Feature content for vertical stack layout
 */
const features = [
  {
    id: "multi-tenant",
    title: "Multi-tenancy that actually works.",
    description:
      "Permission boundaries, not table prefixes. One RLS policy protects your entire database. Zero data leaks, 100% isolation.",
    cta: { text: "View architecture", href: "#" },
    code: {
      title: "rls-policy.sql",
      lines: [
        { type: "comment", text: "-- One policy, complete isolation" },
        { type: "code", text: "CREATE POLICY tenant_isolation ON *" },
        { type: "code", text: "USING (tenant_id = auth.jwt()->>'org_id');" },
      ],
    },
  },
  {
    id: "ai-native",
    title: "AI infrastructure, not SDK wrappers.",
    description:
      "Multi-provider failover, rate limiting, cost tracking, and observability. All built-in.",
    cta: { text: "View AI layer", href: "#" },
    code: {
      title: "ai.config.ts",
      lines: [
        { type: "code", text: "export const ai = {" },
        {
          type: "code",
          text: '  providers: ["openai", "anthropic", "google"],',
        },
        { type: "highlight", text: '  fallback: "anthropic",' },
        { type: "code", text: "  rateLimit: { rpm: 60, tpm: 100_000 }," },
        { type: "code", text: "};" },
      ],
    },
  },
  {
    id: "billing",
    title: "Billing that handles edge cases.",
    description:
      "Subscriptions, usage metering, entitlements, and quota enforcement. Stripe-powered, edge-case-proven.",
    cta: { text: "View billing model", href: "#" },
    code: {
      title: "billing.config.ts",
      lines: [
        { type: "code", text: "export const billing = {" },
        { type: "code", text: '  provider: "stripe",' },
        { type: "highlight", text: "  usageMetering: true," },
        { type: "code", text: "  entitlements: true," },
        { type: "code", text: "  quotaEnforcement: true," },
        { type: "code", text: "};" },
      ],
    },
  },
  {
    id: "global",
    title: "Global by default.",
    description:
      "Edge functions, region-aware routing, and sub-30ms latency worldwide. Not just CDN.",
    cta: { text: "View deployment", href: "#" },
    code: {
      title: "vercel.json",
      lines: [
        { type: "code", text: "{" },
        { type: "code", text: '  "regions": ["iad1", "sfo1", "hnd1"],' },
        { type: "highlight", text: '  "framework": "nextjs",' },
        { type: "code", text: '  "functions": { "runtime": "edge" }' },
        { type: "code", text: "}" },
      ],
    },
  },
];

/**
 * FeatureBlock - Single feature with text + code split
 */
function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${
            isEven ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col justify-center ${isEven ? "" : "lg:[direction:ltr]"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
              {feature.title}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
            <a
              href={feature.cta.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground group"
            >
              {feature.cta.text}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className={isEven ? "" : "lg:[direction:ltr]"}
          >
            <Terminal variant="default" className="shadow-2xl">
              <Terminal.Header title={feature.code.title} />
              <Terminal.Body className="text-sm">
                {feature.code.lines.map((line, i) => (
                  <Terminal.Line
                    key={i}
                    prompt=""
                    output={line.type === "comment"}
                    highlight={line.type === "highlight"}
                  >
                    <span
                      className={
                        line.type === "comment"
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }
                    >
                      {line.text}
                    </span>
                  </Terminal.Line>
                ))}
              </Terminal.Body>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/**
 * FeatureStack - Vertical stack of feature blocks
 *
 * Vercel-style layout: alternating left/right text+code splits
 */
export function FeatureStack() {
  return (
    <section className="relative w-full bg-background">
      {/* Subtle separator line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      {features.map((feature, index) => (
        <FeatureBlock key={feature.id} feature={feature} index={index} />
      ))}
    </section>
  );
}

FeatureStack.displayName = "FeatureStack";
