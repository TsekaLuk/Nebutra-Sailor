"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Award, ArrowRight } from "lucide-react";
import { AnimateIn } from "@nebutra/ui/components";
import { DotPattern } from "@nebutra/ui/primitives";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-12 pb-24 w-full flex flex-col items-center overflow-hidden">
      {/* Halftone Sphere Background (Engineering Aesthetic) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        <DotPattern
          width={14}
          height={14}
          cr={1.2}
          className="[mask-image:radial-gradient(600px_circle_at_65%_25%,white,transparent_100%)] md:[mask-image:radial-gradient(800px_circle_at_75%_35%,white,transparent_100%)] opacity-30 dark:opacity-[0.15] text-gray-900 dark:text-white"
        />
      </div>
      {/* Top Badge */}
      <AnimateIn preset="fade">
        <div className="flex items-center gap-2 mb-10 z-20">
          <div className="flex items-center justify-center">
            <Award className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
          <span className="text-base text-gray-900 dark:text-white font-normal tracking-tight">
            {t("status")}
          </span>
        </div>
      </AnimateIn>

      {/* Main Headlines */}
      <div className="z-20 flex flex-col text-center w-full pr-4 pl-4 relative scale-125 items-center">
        <AnimateIn preset="fadeUp" delay={0.1}>
          <h1 className="leading-none md:text-[7vw] text-6xl font-normal text-gray-900 dark:text-white tracking-tighter z-20 my-7 relative">
            {t("greeting")}
          </h1>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.2}>
          <h2 className="text-7xl md:text-[9.5vw] leading-none font-normal italic font-serif text-gray-900 dark:text-white tracking-tighter -mt-3 md:-mt-8 relative z-30">
            {t("tagline")}
          </h2>
        </AnimateIn>
      </div>

      {/* Central Layout Area Area */}
      <div className="md:mt-0 md:h-[650px] flex flex-col md:block w-full h-auto max-w-7xl mt-8 mr-auto ml-auto relative items-center justify-center">

        {/* Center Portrait */}
        <AnimateIn preset="scale" delay={0.3} className="relative z-10 w-full max-w-[85vw] md:max-w-[42vw] lg:max-w-[550px] mx-auto pointer-events-none md:absolute md:-top-12 md:left-1/2 md:-translate-x-1/2">
          <Image
            src="/images/black-nobg.webp"
            alt="Portrait of Tseka Luk"
            width={550}
            height={733}
            priority
            className="w-full h-auto object-contain [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] drop-shadow-2xl contrast-105"
          />
        </AnimateIn>

        {/* Left Mid Badge (Desktop) */}
        <AnimateIn preset="fade" delay={0.4} className="hidden md:flex absolute top-[30%] left-4 lg:left-12 z-30 items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] border border-gray-100 dark:border-gray-800 transition-shadow">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#84cc16]"></span>
          </span>
          <span className="text-lg font-normal text-gray-900 dark:text-white tracking-tight">AI &amp; System Builder</span>
        </AnimateIn>

        {/* Right Mid Text (Desktop) */}
        <AnimateIn preset="fade" delay={0.5} className="hidden md:block absolute top-[35%] right-4 lg:right-12 z-30 max-w-[320px]">
          <p className="text-xl lg:text-2xl text-gray-900 dark:text-white leading-tight tracking-tight font-normal">
            {t("description")}
          </p>
        </AnimateIn>

        {/* Left Bottom Avatars (Desktop) */}
        <AnimateIn preset="fadeUp" delay={0.6} className="hidden md:flex absolute bottom-8 left-4 lg:left-12 z-30 items-center gap-4 max-w-[380px]">
          <div className="flex -space-x-4 shrink-0">
            {['P', 'E', 'O'].map((initial, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white dark:border-gray-900 object-cover shadow-sm bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 font-serif">
                {initial}
              </div>
            ))}
          </div>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-snug">
            {t("social_proof")}
          </p>
        </AnimateIn>

        {/* Right Bottom Button (Desktop) */}
        <AnimateIn preset="fadeUp" delay={0.7} className="hidden md:block absolute bottom-8 right-4 lg:right-12 z-30">
          <div className="p-1.5 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 dark:border-gray-800/60 inline-block">
            <Link href="/now" className="inline-flex items-center justify-center gap-3 bg-[#111] dark:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-normal hover:bg-gray-900 transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-400" /> {t("cta_primary")}
            </Link>
          </div>
        </AnimateIn>

      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-10 md:hidden w-full px-6 mt-0 z-30 relative items-center text-center -mt-16">
        <div className="flex items-center gap-3 px-6 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-sm w-fit mx-auto border border-gray-100 dark:border-gray-800">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#84cc16]"></span>
          </span>
          <span className="text-base font-normal text-gray-900 dark:text-white tracking-tight">AI &amp; System Builder</span>
        </div>

        <p className="text-xl text-gray-900 dark:text-white leading-snug tracking-tight font-normal max-w-sm mx-auto">
          {t("description")}
        </p>

        <div className="p-1.5 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-full border border-white/60 dark:border-gray-800/60 mt-2 shadow-lg inline-block mx-auto">
          <Link href="/now" className="inline-flex items-center justify-center gap-2 bg-[#111] dark:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-normal hover:bg-gray-900">
            <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-400" /> {t("cta_primary")}
          </Link>
        </div>
      </div>

    </section>
  );
}
