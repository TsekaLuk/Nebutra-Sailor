"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * HeroSection - Vercel-style hero with grid background
 *
 * Design:
 * - Grid lines background
 * - Large centered headline
 * - Dual CTA buttons (filled black + outline)
 */
export function HeroSection() {
  return (
    <section className="relative w-full bg-background">
      {/* Grid background */}
      <div className="absolute inset-0">
        {/* Vertical lines */}
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="flex-1 border-x border-border/30" />
            <div className="flex-1 border-r border-border/30" />
            <div className="hidden md:block flex-1 border-r border-border/30" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            The platform for building
            <br />
            enterprise-ready SaaS.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Build multi-tenant applications at scale with Nebutra&apos;s
            production-ready infrastructure, AI tooling, and open source
            frameworks.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="https://docs.nebutra.com/sailor/getting-started"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 22,20 2,20" />
              </svg>
              Start Deploying
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get a Demo
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" />
    </section>
  );
}

HeroSection.displayName = "HeroSection";
