"use client";

import { motion } from "framer-motion";
import { statsContent } from "@/lib/landing-content";
import { ThemedSection, AnimatedCounter } from "@nebutra/custom-ui";

/**
 * Parse stat value to extract numeric value if possible.
 * Handles formats like "2-4", "60", "847", "MIT"
 */
function parseStatValue(value: string): {
  isNumeric: boolean;
  numValue: number;
  displayPrefix?: string;
  displaySuffix?: string;
} {
  // Check for range like "2-4"
  if (value.includes("-") && /^\d+-\d+$/.test(value)) {
    const parts = value.split("-");
    return {
      isNumeric: true,
      numValue: parseInt(parts[1], 10),
      displayPrefix: `${parts[0]}-`,
    };
  }
  // Pure number
  const num = parseInt(value, 10);
  if (!isNaN(num) && value === String(num)) {
    return { isNumeric: true, numValue: num };
  }
  // Non-numeric (like "MIT")
  return { isNumeric: false, numValue: 0 };
}

/**
 * StatsBreak - Animated metrics with number burst effect
 *
 * @see DESIGN.md Section 6 & Section 11.4
 */
export function StatsBreak() {
  return (
    <ThemedSection
      theme="stats"
      className="border-y border-border/5 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsContent.map((stat, index) => {
            const parsed = parseStatValue(stat.value);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="text-center"
              >
                <div className="flex items-baseline justify-center gap-1">
                  {parsed.isNumeric ? (
                    <AnimatedCounter
                      value={parsed.numValue}
                      prefix={parsed.displayPrefix}
                      suffix={stat.unit || undefined}
                      duration={2.5}
                      easing="easeOutBack"
                      className="bg-[image:var(--brand-gradient)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
                    />
                  ) : (
                    <>
                      <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-2xl font-bold text-muted-foreground/60 md:text-3xl">
                          {stat.unit}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground/80">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ThemedSection>
  );
}

StatsBreak.displayName = "StatsBreak";
