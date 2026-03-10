"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { AnimateIn } from "@nebutra/ui/components";

const TIMELINE: { year: string; label: string }[] = [
  { year: "2020", label: "Self-taught, Web + Marketing" },
  { year: "2023", label: "AI-Native Engineer, Vibe Coding" },
  { year: "2024", label: "Founder, Wuxi Yunyu Intelligent Technology" },
  { year: "2025", label: "CEO, Nebutra Intelligence" },
  { year: "Now", label: "Building, AI-native unicorn products" },
];

function TimelineItem({ year, label }: { year: string; label: string }) {
  return (
    <AnimateIn preset="fadeUp" inView>
      <div className="flex items-start justify-between gap-6 border-t border-gray-200 py-4">
        <span className="font-mono text-sm text-gray-400">{year}</span>
        <span className="text-right text-base text-gray-700">{label}</span>
      </div>
    </AnimateIn>
  );
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      {/* Header */}
      <div className="mb-16">
        <AnimateIn preset="fade">
          <p className="font-serif italic text-lg text-gray-400">/ Who I am</p>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.1}>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Building intelligent systems,{" "}
            <span className="font-serif italic text-gray-400">
              not just products.
            </span>
          </h1>
        </AnimateIn>
      </div>

      {/* Two-column grid */}
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left — Bio */}
        <AnimateIn preset="fadeUp" delay={0.2}>
          <div className="space-y-6 text-base leading-relaxed text-gray-600">
            <p>
              I&apos;m Tseka Luk, CEO of Nebutra Intelligence, based in Wuxi,
              China. I build AI-native products designed for global
              markets&mdash;tools that are not just technically sophisticated
              but genuinely useful and beautifully simple.
            </p>
            <p>
              My philosophy is what I call <em>Vibe Business</em>: build with
              taste, ship with speed, and let the product speak louder than any
              pitch deck. Every project starts from a real itch, and every
              feature earns its place.
            </p>
            <p>
              I&apos;m an INTP who ships. I think in systems, obsess over
              details, and believe the best way to predict the future is to
              build it&mdash;one commit at a time.
            </p>
          </div>
        </AnimateIn>

        {/* Right — Timeline */}
        <div>
          {TIMELINE.map((entry) => (
            <TimelineItem
              key={entry.year}
              year={entry.year}
              label={entry.label}
            />
          ))}
        </div>
      </div>

      {/* Contact anchor */}
      <div
        id="contact"
        className="mt-24 border-t border-gray-200 pt-12 text-center"
      >
        <AnimateIn preset="fadeUp" inView>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Let&apos;s build something
          </h2>

          <div className="mt-8">
            <Link
              href="mailto:tseka@nebutra.com"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              <Mail className="h-4 w-4" />
              tseka@nebutra.com
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
