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
    <section className="relative w-full bg-black py-32 md:py-40">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/15 to-indigo-400/10 blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          {t("heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-white/50 md:text-xl"
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
          <div className="group relative flex items-center rounded-xl border border-white/[0.08] bg-white/[0.04] p-1.5 transition-all hover:border-white/[0.15]">
            <code className="flex-1 px-5 py-3.5 font-mono text-sm text-white md:text-base">
              <span className="text-white/40">$</span> {heroContent.command}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.12] cursor-pointer"
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
