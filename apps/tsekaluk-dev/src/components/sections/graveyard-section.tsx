import { Ghost, Box, AlertTriangle } from "lucide-react";

export function GraveyardSection() {
  const GHOST_PROJECTS = [
    {
      name: "Tseka AI Analytics",
      year: "2023",
      reason: "Too ambitious, pivoted to other solutions.",
    },
    {
      name: "Nebutra Social Engine",
      year: "2024",
      reason: "Market timing didn't align.",
    },
    {
      name: "DevTool Scraper V1",
      year: "2024",
      reason: "API changes deprecated the architecture.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 opacity-0 hidden">
      {/* 
        This section is intentially hidden and unrendered using CSS classes 'opacity-0 hidden'.
        It can be enabled later.
      */}
      <div className="mb-8 flex items-center gap-3">
        <h2 className="font-serif italic text-2xl text-gray-400">
          The Graveyard
        </h2>
        <span className="rounded-full bg-gray-200 dark:bg-gray-800 px-3 py-0.5 text-xs font-medium text-gray-500">
          RIP
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-400 dark:text-gray-500 mb-8">
        Projects that didn't make it, but taught me valuable lessons.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GHOST_PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 p-6 grayscale transition-all hover:grayscale-0"
          >
            <div className="flex items-center justify-between mb-4">
              <Ghost className="h-5 w-5 text-gray-400" />
              <span className="text-xs font-mono text-gray-500">{project.year}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
              {project.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
              <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
              {project.reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
