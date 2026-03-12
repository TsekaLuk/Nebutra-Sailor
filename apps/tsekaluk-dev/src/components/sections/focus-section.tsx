"use client";

import { useTranslations } from "next-intl";
import { AnimateIn } from "@nebutra/ui/components";
import { Zap, Sparkles, Droplet, ShieldCheck, Users, Gem } from "lucide-react";
import { motion } from "framer-motion";

export function FocusSection() {
  const t = useTranslations("focus");

  return (
    <section className="mx-auto max-w-5xl px-6 py-32 relative text-center">
      <AnimateIn preset="fadeUp" inView>
        <h3 className="font-serif italic text-4xl text-gray-400 dark:text-gray-500 mb-8 tracking-tight">
          {t("label")}
        </h3>
      </AnimateIn>

      <AnimateIn preset="fadeUp" delay={0.1} inView>
        <p className="md:text-6xl lg:text-7xl leading-snug z-10 text-5xl font-normal text-gray-900 dark:text-white tracking-tight max-w-full w-full mx-auto relative">
          {t("headline")}{" "}
          <span className="text-gray-400 dark:text-gray-500 font-normal">
            {t("headline_muted")}
          </span>
        </p>
      </AnimateIn>

      {/* Floating Pills Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex flex-wrap justify-center md:justify-between items-center opacity-80 z-0 overflow-hidden px-12">
        <motion.div
          className="absolute top-20 left-10 md:left-20 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 4, delay: 0 }}
        >
          <Zap className="w-5 h-5 text-[var(--color-accent-dark)]" /> {t("pills.ai_agents")}
        </motion.div>
        <motion.div
          className="absolute top-40 right-10 md:right-32 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 5, delay: 0.8 }}
        >
          <Sparkles className="w-5 h-5 text-amber-400" /> {t("pills.ux_engineering")}
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-5 md:left-32 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 3.5, delay: 1.4 }}
        >
          <Droplet className="w-5 h-5 text-blue-500" /> {t("pills.fullstack_architecture")}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 md:right-20 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 4.5, delay: 0.4 }}
        >
          <ShieldCheck className="w-5 h-5 text-indigo-500" /> {t("pills.systems_design")}
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-[20%] flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 3.8, delay: 1.0 }}
        >
          <Users className="w-5 h-5 text-gray-500 dark:text-gray-400" /> {t("pills.open_source")}
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-0 flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 4.2, delay: 1.7 }}
        >
          <Gem className="w-5 h-5 text-emerald-500" /> {t("pills.product_strategy")}
        </motion.div>
      </div>
    </section>
  );
}
