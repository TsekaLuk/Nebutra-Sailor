"use client";

import { motion } from "framer-motion";
import { Copy, Github, Star, GitFork, MessageCircle } from "lucide-react";
import { useState } from "react";
import { finalCtaContent } from "@/lib/landing-content";

/**
 * FinalCTA - Final call to action with command and stats
 *
 * @see DESIGN.md Section 12
 */
export function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const {
    headline,
    headlineHighlight,
    commandPlaceholder,
    ctaPrimary,
    ctaSecondary,
    stats,
  } = finalCtaContent;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commandPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0033FE]/10 via-black to-[#0BF1C3]/10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[#0033FE]/20 to-[#0BF1C3]/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {headline}
            <br />
            <span className="bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] bg-clip-text text-transparent">
              {headlineHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-10 max-w-lg"
        >
          <div className="group relative flex items-center rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
            <code className="flex-1 px-4 py-3 font-mono text-sm text-white/90 md:text-base">
              <span className="text-[#0BF1C3]">$</span> {commandPlaceholder}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : ctaPrimary}
            </button>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://github.com/nebutra/sailor"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
            {ctaSecondary}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-white/50">
            <Star className="h-5 w-5" />
            <span>{stats.stars} stars</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <GitFork className="h-5 w-5" />
            <span>{stats.forks} forks</span>
          </div>
          <a
            href="https://discord.gg/nebutra"
            className="flex items-center gap-2 text-white/50 transition-colors hover:text-white"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{stats.discordLabel}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

FinalCTA.displayName = "FinalCTA";
