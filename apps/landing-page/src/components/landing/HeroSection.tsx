"use client";

import { motion } from "framer-motion";
import { Copy, Github, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { heroContent } from "@/lib/landing-content";

/**
 * HeroSection - Immersive hero with gradient background and command box
 *
 * @see DESIGN.md Section 1
 */
export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(heroContent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0033FE]/20 via-black to-[#0BF1C3]/10" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[#0033FE]/30 to-[#0BF1C3]/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#0BF1C3]" />
            {heroContent.badge}
          </span>
        </motion.div>

        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-lg text-white/60 md:text-xl"
        >
          {heroContent.preHeadline}
        </motion.p>

        {/* Main Headline with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            <HeadlineAnimator words={[...heroContent.headlineWords]} />
          </h1>
        </motion.div>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 w-full max-w-lg"
        >
          <div className="group relative flex items-center rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
            <code className="flex-1 px-4 py-3 font-mono text-sm text-white/90 md:text-base">
              <span className="text-[#0BF1C3]">$</span> {heroContent.command}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://docs.nebutra.com/sailor/getting-started"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
          >
            {heroContent.ctaPrimary}
          </a>
          <a
            href="https://github.com/nebutra/sailor"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
            {heroContent.ctaSecondary}
          </a>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-sm">{heroContent.scrollHint}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Animated headline word cycler
 */
function HeadlineAnimator({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through words
  useState(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <span className="relative inline-block">
      {words.map((word, index) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className={cn(
            "bg-gradient-to-r from-[#0033FE] to-[#0BF1C3] bg-clip-text text-transparent",
            index !== currentIndex && "absolute inset-0",
          )}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

HeroSection.displayName = "HeroSection";
