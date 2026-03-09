"use client";

import Link from "next/link";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { cn } from "@nebutra/ui/utils";
import {
  Ship,
  FileText,
  Pickaxe,
  Plane,
  Brain,
  Leaf,
  Radar,
  Droplets,
  BarChart3,
  Flame,
  TrendingUp,
  FileOutput,
  Megaphone,
  Scan,
  ScanLine,
  Search,
  Video,
  LineChart,
  Box,
} from "lucide-react";
import type { Project } from "@/lib/projects";

const ICON_MAP: Record<string, React.ReactNode> = {
  ship: <Ship className="h-5 w-5" />,
  "file-text": <FileText className="h-5 w-5" />,
  pickaxe: <Pickaxe className="h-5 w-5" />,
  plane: <Plane className="h-5 w-5" />,
  brain: <Brain className="h-5 w-5" />,
  leaf: <Leaf className="h-5 w-5" />,
  radar: <Radar className="h-5 w-5" />,
  droplets: <Droplets className="h-5 w-5" />,
  "bar-chart-3": <BarChart3 className="h-5 w-5" />,
  flame: <Flame className="h-5 w-5" />,
  "trending-up": <TrendingUp className="h-5 w-5" />,
  "file-output": <FileOutput className="h-5 w-5" />,
  megaphone: <Megaphone className="h-5 w-5" />,
  scan: <Scan className="h-5 w-5" />,
  "scan-line": <ScanLine className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  "line-chart": <LineChart className="h-5 w-5" />,
  box: <Box className="h-5 w-5" />,
};

const STATUS_STYLES: Record<Project["status"], { label: string; dot: string }> =
  {
    live: { label: "Live", dot: "bg-green-500" },
    building: { label: "Building", dot: "bg-amber-500" },
    shipped: { label: "Shipped", dot: "bg-blue-500" },
  };

function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_STYLES[project.status];

  return (
    <Link href={`/work/${project.slug}`} className="block">
      <article
        className={cn(
          "group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8",
          "transition-all duration-300",
          "hover:border-[var(--color-accent-dark)] hover:shadow-[0_4px_24px_var(--color-accent-shadow)]",
        )}
      >
        {/* Icon + Status row */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-[var(--color-accent)]/10 group-hover:text-[var(--color-accent-dark)]">
            {ICON_MAP[project.icon]}
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} />
            {status.label}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="mt-1 font-serif italic text-base text-gray-500">
          {project.tagline}
        </p>

        {/* Key metric */}
        {project.metric && (
          <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--color-accent)]/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-dark)]" />
            <span className="text-xs font-semibold text-[var(--color-accent-dark)]">
              {project.metric}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-100 bg-gray-50/70 px-3 py-1 text-xs font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <AnimateInGroup
      stagger="normal"
      inView
      className="grid gap-6 sm:grid-cols-2"
    >
      {projects.map((project) => (
        <AnimateIn key={project.slug} preset="fadeUp" inView>
          <ProjectCard project={project} />
        </AnimateIn>
      ))}
    </AnimateInGroup>
  );
}
