"use client";

import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group cursor-pointer block w-full h-full relative overflow-hidden rounded-2xl"
    >
      {/* Image Container */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.name} cover`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-400">
            <span className="font-serif italic text-2xl">{project.name}</span>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-20 pointer-events-none">
        <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
          {project.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white tracking-wide"
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
    <div className="flex flex-col gap-4 md:gap-8 max-w-screen-2xl mx-auto px-4 md:px-8 mt-12 md:mt-24">
      <AnimateInGroup stagger="normal" inView className="flex flex-col gap-4 md:gap-8">
        {projects.map((project, index) => {
          // Create an asymmetric grid structure based on index
          const isFullWidth = index % 3 === 0;
          const containerClass = isFullWidth
            ? "w-full aspect-video md:aspect-[21/9]"
            : "w-full aspect-[4/5] md:aspect-square";

          const wrapperClass = isFullWidth
            ? "flex-col w-full"
            : "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8";

          // If it's the second item in a 2-col layout, we skip wrapping it (it's handled by CSS Grid)
          if (!isFullWidth && index % 3 === 2) {
            return null; // The previous item rendered both
          }

          if (!isFullWidth && index % 3 === 1) {
            const nextProject = projects[index + 1];
            return (
              <div key={`row-${index}`} className={wrapperClass}>
                <AnimateIn preset="fadeUp" inView className={containerClass}>
                  <ProjectCard project={project} />
                </AnimateIn>
                {nextProject && (
                  <AnimateIn preset="fadeUp" delay={0.1} inView className={containerClass}>
                    <ProjectCard project={nextProject} />
                  </AnimateIn>
                )}
              </div>
            );
          }

          // Full width item
          return (
            <AnimateIn key={project.slug} preset="fadeUp" inView className={containerClass}>
              <ProjectCard project={project} />
            </AnimateIn>
          );
        })}
      </AnimateInGroup>
    </div>
  );
}
