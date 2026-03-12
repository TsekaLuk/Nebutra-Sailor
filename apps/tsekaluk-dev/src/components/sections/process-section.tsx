"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import Image from "next/image";

export function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center mb-20">
        <AnimateIn preset="fade" inView>
          <p className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 mb-4 tracking-tight">
            {t("label")}
          </p>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.1} inView>
          <h2 className="text-6xl md:text-7xl font-normal tracking-tight text-gray-900 dark:text-white">
            {t("headline")}
          </h2>
        </AnimateIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting dashed line - desktop only */}
        <motion.div
          className="absolute top-1/4 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700 hidden md:block z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />

        <AnimateInGroup stagger="normal" inView className="md:contents">
          {/* Step 1 */}
          <AnimateIn preset="fadeUp" inView>
            <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-0 transition-transform hover:-translate-y-1 overflow-hidden group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-40 filter grayscale">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
                  alt="Brainstorm"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay to ensure text readability */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-gray-900/90 dark:via-gray-900/50" />

              <div className="relative z-10 flex-1">
                <span className="text-7xl font-normal text-gray-900 dark:text-white tracking-tight">
                  01
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">
                  {t("step1_title")}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {t("step1_desc")}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Step 2 */}
          <AnimateIn preset="fadeUp" delay={0.1} inView>
            <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-12 transition-transform hover:-translate-y-1 overflow-hidden group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-40 filter grayscale">
                <Image
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
                  alt="Coding"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay to ensure text readability */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-gray-900/90 dark:via-gray-900/50" />

              <div className="relative z-10 flex-1">
                <span className="text-7xl font-normal text-gray-900 dark:text-white tracking-tight">
                  02
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">
                  {t("step2_title")}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {t("step2_desc")}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Step 3 */}
          <AnimateIn preset="fadeUp" delay={0.2} inView>
            <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-24 transition-transform hover:-translate-y-1 overflow-hidden group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-40 filter grayscale">
                <Image
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800"
                  alt="Launch"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay to ensure text readability */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-gray-900/90 dark:via-gray-900/50" />

              <div className="relative z-10 flex-1">
                <span className="text-7xl font-normal text-gray-900 dark:text-white tracking-tight">
                  03
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">
                  {t("step3_title")}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {t("step3_desc")}
                </p>
              </div>
            </div>
          </AnimateIn>
        </AnimateInGroup>
      </div>
    </section>
  );
}
