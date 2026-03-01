"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/landing-content";
import { useTranslations } from "next-intl";

/**
 * HeroSection - Full-viewport hero with pure black background
 *
 * Design principles:
 * - #000 base with subtle grid overlay + indigo ambient glow
 * - Badge → massive headline → sub → command box → CTAs
 * - Framer Motion entrance stagger (no per-element animations below)
 */
export function HeroSection() {
  const t = useTranslations("hero");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(heroContent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-overlay pointer-events-none" />

      {/* Indigo ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500/20 to-indigo-400/10 blur-[140px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-1.5 text-xs text-white/60 tracking-wide">
            {t("badge")}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-center text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]"
        >
          {t("headline1")}
          <br />
          <span className="bg-linear-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
            {t("headline2")}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl text-center text-lg text-white/50 md:text-xl"
        >
          {t("subheadline")}
        </motion.p>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 w-full max-w-xl"
        >
          <div className="group relative flex items-center rounded-xl border border-white/8 bg-white/4 p-1.5 transition-all hover:border-white/15">
            <code className="flex-1 px-5 py-3.5 font-mono text-sm text-white md:text-base">
              <span className="text-white/40">$</span> {heroContent.command}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-white/8 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/12 cursor-pointer"
            >
              <Copy className="h-4 w-4" />
              {copied ? t("copiedLabel") : t("copyLabel")}
            </button>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://docs.nebutra.com/sailor/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-3.5 font-medium text-white transition-colors hover:bg-indigo-400 group"
          >
            {t("ctaGetStarted")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://github.com/TsekaLuk/Nebutra-Sailor"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
          >
            {t("ctaViewGitHub")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
