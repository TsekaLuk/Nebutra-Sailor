"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import type { Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group cursor-pointer block">
      {/* Image Container */}
      <div className="relative bg-gray-100 dark:bg-white/5 rounded-[2.5rem] p-6 md:p-10 mb-6 overflow-hidden aspect-[4/3] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.name} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out grayscale mix-blend-luminosity dark:mix-blend-screen opacity-90 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-400">
            <span className="font-serif italic text-2xl">{project.name}</span>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start gap-3 mt-4 px-2">
        <h3 className="text-3xl font-normal tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <AnimateInGroup
      stagger="normal"
      inView
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
    >
      {projects.map((project) => (
        <AnimateIn key={project.slug} preset="fadeUp" inView>
          <ProjectCard project={project} />
        </AnimateIn>
      ))}
    </AnimateInGroup>
  );
}
