"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";

const TIMELINE: { year: string; label: string }[] = [
  { year: "2020", label: "Self-taught web development & digital marketing" },
  { year: "2022", label: "CS undergrad, Jiangsu Ocean University" },
  { year: "2023", label: "AI-native engineering, competitive programming" },
  { year: "2024", label: "Founded Wuxi Yunyu Intelligent Technology" },
  {
    year: "2025",
    label: "CEO, Nebutra Intelligence \u2014 building for global markets",
  },
  { year: "Now", label: "Shipping AI-native products, one commit at a time" },
];

const AWARDS: { title: string; level: string; year: string }[] = [
  {
    title: "MCM/ICM Mathematical Modeling",
    level: "Honorable Mention (International)",
    year: "2025",
  },
  {
    title: "Lanqiao Cup C/C++ (Jiangsu)",
    level: "First Prize (Provincial)",
    year: "2025",
  },
  {
    title: "Market Research \u2014 TAM-SEM Low-Altitude Economy",
    level: "First Prize (Provincial)",
    year: "2025",
  },
  {
    title: "APMCM Mathematical Modeling",
    level: "First Prize (International)",
    year: "2024",
  },
  {
    title: "Shuwei Cup Mathematical Modeling",
    level: "First Prize + Grand Innovation Award",
    year: "2024",
  },
  {
    title: "Business Elite Brand Strategy (National)",
    level: "Second Prize",
    year: "2025",
  },
  {
    title: "Global AI Algorithm Elite (National Final)",
    level: "Third Prize",
    year: "2024",
  },
  {
    title: "National Math Modeling (Jiangsu)",
    level: "Second Prize (Provincial)",
    year: "2024",
  },
  {
    title: "Electronic Design Competition (TI Cup)",
    level: "Second Prize (Provincial)",
    year: "2024",
  },
  {
    title: "Translation Competition (National Final)",
    level: "Grand Prize",
    year: "2023",
  },
];

const CERTS: string[] = [
  "Columbia University \u2014 Numerical Models & Applications (Grade A)",
  "Huawei HCIA-Datacom Certified Network Engineer",
  "HarmonyOS Advanced Developer Certification",
  "Utility Patent: Communication Cable Distribution Equipment",
  "3 Software Copyrights (Power System Optimization, OD Classification, Graph Solver)",
  "CET-6: 543 \u00b7 CET-4: 575",
  "Macau UST \u2014 Innovation & Entrepreneurship Leadership Program",
  "Prompt Engineer Certification (Datawhale \u00d7 iFLYTEK)",
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

      {/* Photo + Bio */}
      <div className="mb-20 grid gap-12 md:grid-cols-[280px_1fr]">
        <AnimateIn preset="fade" delay={0.15}>
          <div className="relative mx-auto w-56 md:mx-0 md:w-full">
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <Image
                src="/images/portrait.jpg"
                alt="Tseka Luk"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </AnimateIn>

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
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400">
            / Timeline
          </h2>
        </AnimateIn>
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

      {/* Awards */}
      <div className="mb-20">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-2 font-serif italic text-2xl text-gray-400">
            / Awards
          </h2>
          <p className="mb-8 text-sm text-gray-400">
            10 competition awards across math modeling, AI, brand strategy &amp;
            translation
          </p>
        </AnimateIn>

        <AnimateInGroup stagger="normal" inView className="space-y-0">
          {AWARDS.map((award) => (
            <AnimateIn key={award.title} preset="fadeUp" inView>
              <div className="flex items-start justify-between gap-4 border-t border-gray-100 py-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {award.title}
                  </p>
                  <p className="text-xs text-[var(--color-accent-dark)]">
                    {award.level}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-400">
                  {award.year}
                </span>
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>

      {/* Certifications */}
      <div className="mb-20">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400">
            / Credentials
          </h2>
        </AnimateIn>

        <AnimateInGroup
          stagger="normal"
          inView
          className="grid gap-3 sm:grid-cols-2"
        >
          {CERTS.map((cert) => (
            <AnimateIn key={cert} preset="fadeUp" inView>
              <div className="rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3">
                <p className="text-sm text-gray-600">{cert}</p>
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>

      {/* Contact anchor */}
      <div id="contact" className="border-t border-gray-200 pt-12 text-center">
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
