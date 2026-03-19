"use client";

import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { useTranslations } from "next-intl";

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
          <h2 className="text-[clamp(3.5rem,7vw,6rem)] font-normal tracking-[-0.03em] leading-none text-gray-900 dark:text-white">
            {t("headline")}
          </h2>
        </AnimateIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative mt-16 md:mt-32">
        <AnimateInGroup stagger="normal" inView className="md:contents">
          {/* Step 1 */}
          <AnimateIn preset="fadeUp" inView>
            <div className="relative z-10 flex flex-col pt-12 border-t-2 border-gray-900 dark:border-white transition-opacity group">
              <div className="absolute -top-16 left-0 opacity-10 dark:opacity-5 transform origin-top-left transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                <span className="text-[12rem] md:text-[14rem] font-bold tracking-tighter leading-none select-none text-gray-900 dark:text-white">
                  01
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 uppercase">
                  {t("step1_title")}
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                  {t("step1_desc")}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Step 2 */}
          <AnimateIn preset="fadeUp" delay={0.1} inView>
            <div className="relative z-10 flex flex-col pt-12 border-t-2 border-gray-900 dark:border-white md:mt-24 transition-opacity group">
              <div className="absolute -top-16 left-0 opacity-10 dark:opacity-5 transform origin-top-left transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                <span className="text-[12rem] md:text-[14rem] font-bold tracking-tighter leading-none select-none text-gray-900 dark:text-white">
                  02
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 uppercase">
                  {t("step2_title")}
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                  {t("step2_desc")}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Step 3 */}
          <AnimateIn preset="fadeUp" delay={0.2} inView>
            <div className="relative z-10 flex flex-col pt-12 border-t-2 border-gray-900 dark:border-white md:mt-48 transition-opacity group">
              <div className="absolute -top-16 left-0 opacity-10 dark:opacity-5 transform origin-top-left transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                <span className="text-[12rem] md:text-[14rem] font-bold tracking-tighter leading-none select-none text-gray-900 dark:text-white">
                  03
                </span>
              </div>
              <div className="relative z-10">
                <h4 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-6 uppercase">
                  {t("step3_title")}
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
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
