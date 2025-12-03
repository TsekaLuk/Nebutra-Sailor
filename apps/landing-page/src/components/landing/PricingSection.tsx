"use client";

import { motion } from "framer-motion";
import { Check, Github } from "lucide-react";
import { pricingContent } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

/**
 * PricingSection - Pricing plans comparison
 *
 * @see DESIGN.md Section 10
 */
export function PricingSection() {
  const { headline, plans, enterpriseNote, enterpriseCta, enterpriseHref } =
    pricingContent;

  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {headline}
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className={cn(
                "relative overflow-hidden rounded-2xl border p-8",
                plan.highlighted
                  ? "border-[var(--brand-accent)]/50 bg-gradient-to-br from-[var(--brand-primary)]/10 to-[var(--brand-accent)]/10"
                  : "border-border/10 bg-card/50",
              )}
            >
              {/* Badge */}
              {"badge" in plan && plan.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--brand-accent)]/20 px-3 py-1 text-xs font-medium text-[var(--brand-accent)]">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground/80">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/70"
                  >
                    <Check className="h-4 w-4 text-[var(--brand-accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all",
                  plan.highlighted
                    ? "bg-[image:var(--brand-gradient)] text-white hover:opacity-90"
                    : "border border-border/20 bg-foreground/5 text-foreground hover:bg-foreground/10",
                )}
              >
                {"ctaIcon" in plan && plan.ctaIcon === "github" && (
                  <Github className="h-5 w-5" />
                )}
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground/80">
            {enterpriseNote}{" "}
            <a
              href={enterpriseHref}
              className="text-[var(--brand-accent)] transition-colors hover:underline"
            >
              {enterpriseCta}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

PricingSection.displayName = "PricingSection";
