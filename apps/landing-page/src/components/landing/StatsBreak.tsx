"use client";

import { motion } from "framer-motion";
import { statsContent } from "@/lib/landing-content";

/**
 * StatsBreak - Visual breathing room with key metrics
 *
 * @see DESIGN.md Section 6
 */
export function StatsBreak() {
  return (
    <section className="relative w-full border-y border-white/5 bg-gradient-to-r from-[#0033FE]/5 via-black to-[#0BF1C3]/5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsContent.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-2xl font-bold text-white/40 md:text-3xl">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

StatsBreak.displayName = "StatsBreak";
