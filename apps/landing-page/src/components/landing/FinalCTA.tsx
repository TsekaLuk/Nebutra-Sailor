"use client";

import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { heroContent } from "@/lib/landing-content";
import { useTranslations } from "next-intl";

/**
 * FinalCTA - Minimal closing call to action
 */
export function FinalCTA() {
  const t = useTranslations("cta");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(heroContent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-white py-32 md:py-40 dark:bg-black">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500/15 to-indigo-400/10 blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          {t("heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-gray-500 md:text-xl dark:text-white/50"
        >
          {t("subheading")}
        </motion.p>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-xl"
        >
          <div className="group relative flex items-center rounded-xl border border-gray-200 bg-gray-50 p-1.5 transition-all hover:border-gray-300 dark:border-white/8 dark:bg-white/4 dark:hover:border-white/15">
            <code className="flex-1 px-5 py-3.5 font-mono text-sm text-gray-800 md:text-base dark:text-white">
              <span className="text-gray-400 dark:text-white/40">$</span>{" "}
              {heroContent.command}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 cursor-pointer dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
            >
              <Copy className="h-4 w-4" />
              {copied ? t("copiedLabel") : t("copyLabel")}
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
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-3.5 font-medium text-white transition-colors hover:bg-indigo-400 group"
          >
            {t("startBuilding")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

FinalCTA.displayName = "FinalCTA";
