"use client";

import { motion } from "framer-motion";
import { splitNarrativeContent } from "@/lib/landing-content";

/**
 * SplitNarrative - Problem/Solution split section with terminal demo
 *
 * @see DESIGN.md Section 3
 */
export function SplitNarrative() {
  const { terminal, headline, subheadline, features, taglines } =
    splitNarrativeContent;

  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-white/40">
                  terminal
                </span>
              </div>
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm">
                <p className="text-[#0BF1C3]">{terminal.command}</p>
                {terminal.lines.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="mt-2 text-white/60"
                  >
                    {line}
                  </motion.p>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-4 inline-block h-4 w-2 animate-pulse bg-[#0BF1C3]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mt-2 text-2xl font-light text-white/60 md:text-3xl">
              {subheadline}
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* Taglines */}
            <div className="mt-8 space-y-1">
              {taglines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-lg font-medium text-[#0BF1C3]"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

SplitNarrative.displayName = "SplitNarrative";
