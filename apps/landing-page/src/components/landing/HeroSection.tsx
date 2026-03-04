"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn, AnimateInGroup } from "@nebutra/custom-ui/primitives";
import { useTranslations } from "next-intl";
import { heroContent } from "@/lib/landing-content";
import { CommandInstallBox } from "./CommandInstallBox";
import { HeroLottieVisual } from "./HeroLottieVisual";

/**
 * HeroSection - Conversion-first hero with product visual.
 */
export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay" />
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/3 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "var(--brand-gradient-radial)", opacity: 0.22 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimateInGroup stagger="normal" className="space-y-8">
            <AnimateIn preset="fadeUp">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--blue-7)] bg-[color:var(--blue-2)] px-4 py-1.5 text-xs tracking-wide text-[color:var(--blue-11)] dark:border-white/20 dark:bg-white/10 dark:text-white/80">
                {t("badge")}
              </span>
            </AnimateIn>

            <AnimateIn preset="emerge">
              <h1 className="max-w-4xl text-[clamp(2.25rem,8vw,5.25rem)] leading-[1.05] font-bold tracking-tight text-[color:var(--neutral-12)] dark:text-white">
                {t("headline1")}
                <br />
                <span
                  className="text-[color:var(--blue-10)]"
                  style={{
                    background: "var(--brand-gradient)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t("headline2")}
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn preset="fadeUp">
              <p className="max-w-2xl text-lg text-[color:var(--neutral-11)] md:text-xl dark:text-white/70">
                {t("subheadline")}
              </p>
            </AnimateIn>

            <AnimateIn preset="fadeUp">
              <div className="w-full max-w-xl">
                <CommandInstallBox
                  command={heroContent.command}
                  copyLabel={t("copyLabel")}
                  copiedLabel={t("copiedLabel")}
                />
              </div>
            </AnimateIn>

            <AnimateIn preset="fadeUp">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://docs.nebutra.com/sailor/getting-started"
                  className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-medium text-white shadow-[var(--elevation-brand-lg)] transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  {t("ctaGetStarted")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://github.com/TsekaLuk/Nebutra-Sailor"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--neutral-11)] transition-colors hover:text-[color:var(--neutral-12)] dark:text-white/70 dark:hover:text-white"
                >
                  {t("ctaViewGitHub")}
                </a>
              </div>
            </AnimateIn>
          </AnimateInGroup>

          <AnimateIn preset="scale" className="lg:justify-self-end">
            <HeroLottieVisual />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
