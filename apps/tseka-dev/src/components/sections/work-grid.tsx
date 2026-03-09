"use client";

import Link from "next/link";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { cn } from "@nebutra/ui/utils";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

const STATUS_STYLES: Record<
  Project["status"],
  { label: string; color: string }
> = {
  live: { label: "Live", color: "text-green-600" },
  building: { label: "Building", color: "text-amber-600" },
  shipped: { label: "Shipped", color: "text-blue-600" },
};

function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_STYLES[project.status];

  return (
    <article
      className={cn(
        "group flex flex-col rounded-3xl border border-gray-100 bg-white p-8",
        "transition-all duration-300",
        "hover:border-[var(--color-accent-dark)] hover:shadow-[0_4px_24px_var(--color-accent-shadow)]",
      )}
    >
      {/* Status label */}
      <span
        className={cn(
          "mb-4 text-[11px] font-semibold uppercase tracking-widest",
          status.color,
        )}
      >
        {status.label}
      </span>

      {/* Name */}
      <h3 className="text-xl font-bold tracking-tight text-gray-900">
        {project.name}
      </h3>

      {/* Tagline */}
      <p className="mt-1 font-serif italic text-base text-gray-500">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.url || project.github) && (
        <div className="mt-6 flex items-center gap-4 border-t border-gray-50 pt-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-700"
            >
              <Github className="h-4 w-4" />
              Source
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-700"
            >
              <ExternalLink className="h-4 w-4" />
              Visit
            </Link>
          )}
        </div>
      )}
    </article>
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
