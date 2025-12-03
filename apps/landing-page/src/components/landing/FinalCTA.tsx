"use client";

import { motion } from "framer-motion";
import { Copy, Github, Star, GitFork, MessageCircle } from "lucide-react";
import { useState } from "react";
import { finalCtaContent } from "@/lib/landing-content";
import { ThemedSection, DotMatrix } from "@nebutra/custom-ui";

/**
 * PulseGlow - Animated pulsing glow effect for CTA emphasis
 * Per DESIGN.md Section 11.4 "Action Climax"
 */
function PulseGlow() {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[var(--brand-primary)]/30 to-[var(--brand-accent)]/30 blur-[120px]" />
    </motion.div>
  );
}

/**
 * FinalCTA - Action climax with pulse and glow effects
 *
 * @see DESIGN.md Section 12 & Section 11.4 "Action Climax"
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
    <ThemedSection theme="cta" className="py-24 md:py-32">
      {/* Animated Pulse Glow */}
      <PulseGlow />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {headline}
            <br />
            <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
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
          <div className="group relative flex items-center rounded-xl border border-border/10 bg-foreground/5 p-1 backdrop-blur-sm transition-all hover:border-border/20 hover:bg-foreground/10">
            <code className="flex-1 px-4 py-3 font-mono text-sm text-foreground/90 md:text-base">
              <span className="text-[var(--brand-accent)]">$</span>{" "}
              {commandPlaceholder}
            </code>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-lg bg-[image:var(--brand-gradient)] px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : ctaPrimary}
            </motion.button>
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
            href="https://github.com/TsekaLuk/Nebutra-Sailor"
            className="inline-flex items-center gap-2 rounded-lg border border-border/20 bg-foreground/5 px-6 py-3 font-medium text-foreground transition-all hover:bg-foreground/10"
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
          <div className="flex items-center gap-2 text-muted-foreground/80">
            <Star className="h-5 w-5" />
            <span>{stats.stars} stars</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground/80">
            <GitFork className="h-5 w-5" />
            <span>{stats.forks} forks</span>
          </div>
          <a
            href="https://discord.gg/nebutra"
            className="flex items-center gap-2 text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{stats.discordLabel}</span>
          </a>
        </motion.div>
      </div>
    </ThemedSection>
  );
}

FinalCTA.displayName = "FinalCTA";
