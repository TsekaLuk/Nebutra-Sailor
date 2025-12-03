"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/landing-content";

/**
 * HeroSection - Minimal Vercel-style hero
 *
 * Design principles:
 * - Pure black background with subtle glow
 * - Massive headline with extreme whitespace
 * - Single command box
 * - No decorative patterns
 */
export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(heroContent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full bg-background">
      {/* Ambient glow - single centered gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-primary)]/30 to-[var(--brand-accent)]/20 blur-[120px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm text-muted-foreground md:text-base uppercase tracking-widest"
        >
          {heroContent.preHeadline}
        </motion.p>

        {/* Main Headline - massive text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]"
        >
          Ship your SaaS
          <br />
          <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] bg-clip-text text-transparent">
            in weeks, not months.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl text-center text-lg text-muted-foreground md:text-xl"
        >
          Production-ready monorepo with multi-tenancy, AI infrastructure,
          billing, and everything you need to launch.
        </motion.p>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 w-full max-w-xl"
        >
          <div className="group relative flex items-center rounded-xl border border-border/50 bg-card/50 p-1.5 backdrop-blur-sm transition-all hover:border-border">
            <code className="flex-1 px-5 py-3.5 font-mono text-sm text-foreground md:text-base">
              <span className="text-muted-foreground">$</span>{" "}
              {heroContent.command}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://docs.nebutra.com/sailor/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 font-medium transition-all hover:opacity-90 group"
            style={{ color: "white" }}
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/TsekaLuk/Nebutra-Sailor"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
