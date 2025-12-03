"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Github, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroContent } from "@/lib/landing-content";
import {
  OrbSystem,
  GridPattern,
  DotMatrix,
  GradientBlur,
  TextSparkline,
  CursorTrail,
} from "@nebutra/custom-ui";

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
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Cursor Trail - follows mouse in hero area */}
      <CursorTrail
        containerOnly
        color="hsl(var(--accent))"
        particleCount={10}
        cursorSize={10}
        particleSize={4}
        stiffness={400}
        damping={35}
      />
      {/* Gradient Background - uses brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 via-background to-[var(--brand-accent)]/10" />

      {/* Grid Pattern Overlay - using custom-ui component */}
      <GridPattern
        className="absolute inset-0 z-0"
        color="currentColor"
        size={64}
        strokeWidth={0.5}
        fade="radial"
      />

      {/* Dot Matrix - subtle micro-density texture */}
      <DotMatrix
        className="absolute inset-0 z-0"
        dotSize={1}
        gap={24}
        color="currentColor"
        opacity={0.03}
      />

      {/* Particle Orb System - evolved from simple radial glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-0">
        <OrbSystem
          size={400}
          primaryColor="hsl(var(--primary))"
          secondaryColor="hsl(var(--accent))"
          showNoise={true}
          showShell={true}
          showParticles={true}
          coreProps={{ breathDuration: 4 }}
          shellProps={{ ringCount: 3, rotationDuration: 25 }}
          particlesProps={{ particleCount: 12 }}
        />
      </div>

      {/* Ambient gradient blur behind orb */}
      <GradientBlur
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        color="primary"
        size="xl"
        blur="xl"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-foreground/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
            {heroContent.badge}
          </span>
        </motion.div>

        {/* Pre-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-lg text-muted-foreground md:text-xl"
        >
          {heroContent.preHeadline}
        </motion.p>

        {/* Main Headline with Animation + TextSparkline effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-center"
        >
          <TextSparkline
            glowColor="hsl(var(--accent))"
            glowIntensity={0.3}
            duration={4}
            delay={1}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <HeadlineAnimator words={[...heroContent.headlineWords]} />
            </h1>
          </TextSparkline>
        </motion.div>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 w-full max-w-lg"
        >
          <div className="group relative flex items-center rounded-xl border border-border/10 bg-foreground/5 p-1 backdrop-blur-sm transition-all hover:border-border/20 hover:bg-foreground/10">
            <code className="flex-1 px-4 py-3 font-mono text-sm text-foreground/90 md:text-base">
              <span className="text-[var(--brand-accent)]">$</span>{" "}
              {heroContent.command}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-foreground/10 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-foreground/20"
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
            className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--brand-gradient)] px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
          >
            {heroContent.ctaPrimary}
          </a>
          <a
            href="https://github.com/TsekaLuk/Nebutra-Sailor"
            className="inline-flex items-center gap-2 rounded-lg border border-border/20 bg-foreground/5 px-6 py-3 font-semibold text-foreground transition-all hover:bg-foreground/10"
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
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
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
 *
 * Uses visibility API to pause animation when tab is not visible,
 * preventing animation desync issues.
 */
function HeadlineAnimator({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Handle visibility change to pause/resume animation
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Auto-cycle through words (only when visible)
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length, isVisible]);

  return (
    <span className="relative inline-block min-h-[1.2em]">
      {words.map((word, index) => {
        const isCurrent = index === currentIndex;
        return (
          <motion.span
            key={word}
            initial={false}
            animate={{
              opacity: isCurrent ? 1 : 0,
              y: isCurrent ? 0 : 20,
              position: isCurrent ? "relative" : "absolute",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "bg-[image:var(--brand-gradient)] bg-clip-text text-transparent whitespace-nowrap",
              !isCurrent && "left-0 top-0 pointer-events-none",
            )}
            style={{
              // Ensure proper stacking
              zIndex: isCurrent ? 1 : 0,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}

HeroSection.displayName = "HeroSection";
