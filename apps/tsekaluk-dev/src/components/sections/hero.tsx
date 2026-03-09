"use client";

import Link from "next/link";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";

const CONTEXT_PILLS = [
  { label: "Full-stack AI Engineer", position: "top-32 left-8 lg:left-16" },
  { label: "TypeScript + Python", position: "top-48 right-8 lg:right-16" },
  { label: "Wuxi, China", position: "bottom-48 left-8 lg:left-20" },
  { label: "Building in Public", position: "bottom-32 right-8 lg:right-20" },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-[var(--color-accent)]/60 via-[var(--color-accent)]/15 to-[var(--page-bg)]"
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-muted), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        {/* Status badge */}
        <AnimateIn preset="fade">
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-sm text-gray-600 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for select collaborations
            </div>
          </div>
        </AnimateIn>

        {/* Headlines */}
        <div className="text-center">
          <AnimateIn preset="fadeUp" delay={0.1}>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-[6vw] md:leading-[1.1]">
              Hi, I&apos;m Tseka
            </h1>
          </AnimateIn>

          <AnimateIn preset="fadeUp" delay={0.2}>
            <h2 className="mt-2 font-serif italic text-6xl tracking-tight text-gray-800 md:text-[8vw] md:leading-[1.1]">
              AI-Native Builder
            </h2>
          </AnimateIn>

          <AnimateIn preset="fadeUp" delay={0.35}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
              I design and build AI-powered products from zero to one. Focused
              on making complex technology feel simple, useful, and
              beautiful&mdash;shipping fast and iterating in public.
            </p>
          </AnimateIn>
        </div>

        {/* CTAs */}
        <AnimateIn preset="fadeUp" delay={0.5}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              See my work
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/now"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
            >
              What I&apos;m doing now
            </Link>
          </div>
        </AnimateIn>

        {/* Floating context pills — desktop only */}
        <AnimateInGroup stagger="normal" className="hidden md:block">
          {CONTEXT_PILLS.map((pill) => (
            <AnimateIn key={pill.label} preset="fade">
              <div
                className={`absolute ${pill.position} rounded-full border border-gray-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-gray-500 shadow-sm backdrop-blur-sm`}
              >
                {pill.label}
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>
    </section>
  );
}
