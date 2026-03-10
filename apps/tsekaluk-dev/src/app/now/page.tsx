import type { Metadata } from "next";
import { NowEntry } from "@/components/sections/now-entry";

export const metadata: Metadata = {
  title: "Now — Tseka Luk",
  description: "What I'm currently working on, thinking about, and shipping.",
  alternates: {
    canonical: "https://tsekaluk.dev/now",
  },
};

export default function NowPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      {/* Section header */}
      <div className="mb-16">
        <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">
          / Updated daily
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          Now
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          This page is updated daily by an AI agent that reviews my work and
          distills the highlights. Think of it as a living changelog for what
          I&apos;m building, thinking, and shipping.
        </p>
      </div>

      <NowEntry />
    </section>
  );
}
