"use client";

import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { finalCtaContent } from "@/lib/landing-content";

/**
 * FinalCTA - Minimal Vercel-style final call to action
 *
 * Design: Large headline, command box, stats in a row, lots of whitespace
 */
export function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const { commandPlaceholder, stats } = finalCtaContent;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commandPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-background py-32 md:py-40">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-primary)]/20 to-[var(--brand-accent)]/15 blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-foreground md:text-5xl lg:text-6xl"
        >
          Ready to ship?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground md:text-xl"
        >
          Get started in under 5 minutes.
        </motion.p>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-xl"
        >
          <div className="group relative flex items-center rounded-xl border border-border/50 bg-card/50 p-1.5 backdrop-blur-sm transition-all hover:border-border">
            <code className="flex-1 px-5 py-3.5 font-mono text-sm text-foreground md:text-base">
              <span className="text-muted-foreground">$</span>{" "}
              {commandPlaceholder}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90"
              style={{ color: "white" }}
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="https://docs.nebutra.com/sailor/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 font-medium transition-all hover:opacity-90 group"
            style={{ color: "white" }}
          >
            Start Building
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-12 text-muted-foreground"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">{stats.stars}</p>
            <p className="mt-1 text-sm">GitHub Stars</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">{stats.forks}</p>
            <p className="mt-1 text-sm">Forks</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">500+</p>
            <p className="mt-1 text-sm">Teams</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

FinalCTA.displayName = "FinalCTA";
