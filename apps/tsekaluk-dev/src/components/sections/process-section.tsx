"use client";

import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";

export function ProcessSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-24">
            <div className="text-center mb-20">
                <AnimateIn preset="fade" inView>
                    <p className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 mb-4 tracking-tight">/ How I work</p>
                </AnimateIn>
                <AnimateIn preset="fadeUp" delay={0.1} inView>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        Path to shipped features
                    </h2>
                </AnimateIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting dashed line - desktop only */}
                <div className="absolute top-1/4 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700 hidden md:block z-0"></div>

                <AnimateInGroup stagger="normal" inView className="md:contents">
                    {/* Step 1 */}
                    <AnimateIn preset="fadeUp" inView>
                        <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-0 transition-transform hover:-translate-y-1">
                            <span className="text-6xl font-black text-gray-200 dark:text-gray-700 tracking-tight">01</span>
                            <div>
                                <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">Architecture</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Mapping out the system constraints, data flow, and UI surface. Deciding exactly what to build and what <em className="italic">not</em> to build.
                                </p>
                            </div>
                        </div>
                    </AnimateIn>

                    {/* Step 2 */}
                    <AnimateIn preset="fadeUp" delay={0.1} inView>
                        <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-12 transition-transform hover:-translate-y-1">
                            <span className="text-6xl font-black text-gray-200 dark:text-gray-700 tracking-tight">02</span>
                            <div>
                                <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">Implementation</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Deep focus engineering. Translating the mental model into solid Next.js and Python code with robust AI integrations.
                                </p>
                            </div>
                        </div>
                    </AnimateIn>

                    {/* Step 3 */}
                    <AnimateIn preset="fadeUp" delay={0.2} inView>
                        <div className="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 shadow-sm dark:shadow-gray-900/30 relative z-10 flex flex-col justify-between min-h-[340px] md:mt-24 transition-transform hover:-translate-y-1">
                            <span className="text-6xl font-black text-gray-200 dark:text-gray-700 tracking-tight">03</span>
                            <div>
                                <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">Refinement</h4>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Polishing the sharp edges. Adding micro-animations, optimizing performance, and listening closely to telemetry and user feedback.
                                </p>
                            </div>
                        </div>
                    </AnimateIn>
                </AnimateInGroup>
            </div>
        </section>
    );
}
