"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { AnimateIn } from "@nebutra/ui/components";

export function CtaSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-[var(--page-bg)] -z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[var(--color-accent-muted)]/40 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="mx-auto max-w-3xl px-6 text-center">
                <AnimateIn preset="fadeUp" inView>
                    <h2 className="text-6xl md:text-8xl font-normal tracking-tight text-gray-900 dark:text-gray-100 mb-6">Let&apos;s build something</h2>
                </AnimateIn>

                <AnimateIn preset="fadeUp" delay={0.1} inView>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
                        I work with teams and founders who see digital presence and AI not just as a duty, but as a strategic growth driver.
                    </p>
                </AnimateIn>

                <AnimateIn preset="fadeUp" delay={0.2} inView>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="mailto:tseka@nebutra.com"
                            className="inline-flex items-center justify-center gap-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg dark:shadow-gray-900/50"
                        >
                            <Mail className="w-5 h-5" /> Start a project
                        </Link>
                        <Link
                            href="https://calendly.com/tsekaluk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 border border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                            Book a call
                        </Link>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
