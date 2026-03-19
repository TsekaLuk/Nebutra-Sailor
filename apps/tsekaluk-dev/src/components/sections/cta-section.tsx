"use client";

import { AnimateIn } from "@nebutra/ui/components";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-[var(--page-bg)] -z-10 pointer-events-none"></div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[var(--color-accent-muted)]/40 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay">
        <svg aria-hidden="true" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimateIn preset="fadeUp" inView>
          <h2 className="text-6xl md:text-8xl font-normal tracking-tight text-gray-900 dark:text-white mb-6">
            {t("headline")}
          </h2>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.1} inView>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            {t("description")}
          </p>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.2} inView>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:contact@tsekaluk.dev"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-10 py-5 rounded-full text-lg font-normal hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg dark:shadow-gray-900/50"
            >
              <Mail className="w-5 h-5" /> {t("email")}
            </a>
            <a
              href="https://calendly.com/tsekaluk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-normal hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {t("calendar")}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
