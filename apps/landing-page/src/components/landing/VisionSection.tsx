"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { visionContent } from "@/lib/landing-content";

/**
 * VisionSection - Company vision and philosophy
 *
 * @see DESIGN.md Section 9
 */
export function VisionSection() {
  const {
    companyName,
    headline,
    headlineHighlight,
    description,
    philosophyCards,
    visionLabel,
    visionStatement,
    closingLines,
    cta,
    ctaHref,
  } = visionContent;

  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-black to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Company Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0BF1C3]/20 bg-[#0BF1C3]/5 px-4 py-2 text-sm font-medium text-[#0BF1C3]">
            Why we built this
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {headline}
            <br />
            <span className="bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] bg-clip-text text-transparent">
              {headlineHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center text-lg text-white/60"
        >
          {description}
        </motion.p>

        {/* Philosophy Cards */}
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 text-center"
            >
              <p className="text-sm italic text-white/70">
                &ldquo;{card.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white/40">
            {visionLabel}
          </p>
          <p className="font-mono text-lg text-[#0BF1C3] md:text-xl">
            {visionStatement}
          </p>
        </motion.div>

        {/* Closing Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.7 }}
          className="mb-8 text-center"
        >
          {closingLines.map((line, index) => (
            <p
              key={index}
              className={
                line ? "text-lg text-white/60" : "h-4" // Empty line spacer
              }
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

VisionSection.displayName = "VisionSection";
