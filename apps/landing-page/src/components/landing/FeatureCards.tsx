"use client";

import { motion } from "framer-motion";
import { Server, Zap, CreditCard } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Multi-tenant from day one",
    description:
      "Row-level security, org isolation, and tenant routing built into every layer. No bolted-on afterthoughts.",
    code: [
      "-- Every query scoped to org",
      "ALTER TABLE resources ENABLE ROW LEVEL SECURITY;",
      "",
      "CREATE POLICY tenant_isolation ON resources",
      "  USING (org_id = current_setting('app.org_id')::uuid);",
    ],
  },
  {
    icon: Zap,
    title: "AI-native infrastructure",
    description:
      "Provider abstraction over OpenAI, Anthropic, and Gemini. Swap models without changing your application code.",
    code: [
      "// One interface, any provider",
      "const ai = createAI({",
      "  provider: env.AI_PROVIDER,  // 'openai' | 'anthropic'",
      "  model: env.AI_MODEL,",
      "});",
      "",
      "const result = await ai.complete(prompt);",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing wired up",
    description:
      "Stripe subscriptions, usage meters, and webhook handlers — production-ready, not demo-ware.",
    code: [
      "// Protect routes by plan",
      "export const config = {",
      "  plans: {",
      "    starter: { seats: 5, api: 10_000 },",
      "    pro: { seats: 25, api: 100_000 },",
      "  },",
      "};",
    ],
  },
] as const;

/**
 * FeatureCards - 3 glass cards with inline code previews
 */
export function FeatureCards() {
  return (
    <section id="features" className="w-full bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Built for production from day one.
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.15]"
              >
                <Icon className="mb-4 h-5 w-5 text-indigo-400" />
                <h3 className="mb-2 font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>

                {/* Code preview */}
                <div className="mt-auto rounded-xl border border-white/[0.06] bg-black/40 p-4">
                  <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-white/60">
                    {feature.code.map((line, j) => (
                      <span key={j} className="block">
                        {line || "\u00a0"}
                      </span>
                    ))}
                  </pre>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

FeatureCards.displayName = "FeatureCards";
