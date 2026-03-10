import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { WorkGrid } from "@/components/sections/work-grid";

export const metadata: Metadata = {
  title: "Work — Tseka Luk",
  description: "Products and projects I've built.",
  alternates: {
    canonical: "https://tsekaluk.dev/work",
  },
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Section header */}
      <div className="mb-16">
        <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">
          / What I&apos;ve built
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          Products &amp; Projects
        </h1>
      </div>

      <WorkGrid projects={projects} />
    </section>
  );
}
