"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";

export function ProcessSection() {
    const t = useTranslations("process");

    return (
        <section className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center mb-20">
                <AnimateIn preset="fade" inView>
                    <p className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 mb-4 tracking-tight">{t("label")}</p>
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
                        <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-0 transition-transform hover:-translate-y-1">
                            <span className="text-7xl font-normal text-gray-900 dark:text-white tracking-tight">01</span>
                            <div>
                                <h4 className="text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">{t("step1_title")}</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {t("step1_desc")}
                                </p>
                            </div>
                        </div>
                    </AnimateIn>

                    {/* Step 2 */}
                    <AnimateIn preset="fadeUp" delay={0.1} inView>
                        <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-12 transition-transform hover:-translate-y-1">
                            <span className="text-7xl font-normal text-gray-900 dark:text-white tracking-tight">02</span>
                            <div>
                                <h4 className="text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">{t("step2_title")}</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {t("step2_desc")}
                                </p>
                            </div>
                        </div>
                    </AnimateIn>

                    {/* Step 3 */}
                    <AnimateIn preset="fadeUp" delay={0.2} inView>
                        <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-24 transition-transform hover:-translate-y-1">
                            <span className="text-7xl font-normal text-gray-900 dark:text-white tracking-tight">03</span>
                            <div>
                                <h4 className="text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">{t("step3_title")}</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
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
