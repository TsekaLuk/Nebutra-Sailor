import { Ghost, AlertTriangle } from "lucide-react"

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
  ]

  return (
    <section className="max-w-5xl px-6 py-16 mx-auto hidden opacity-0">
      {/* 
        This section is intentially hidden and unrendered using CSS classes 'opacity-0 hidden'.
        It can be enabled later.
      */}
      <div className="mb-8 gap-3 flex items-center">
        <h2 className="font-serif text-2xl text-gray-400 italic">
          The Graveyard
        </h2>
        <span className="dark:bg-gray-800 px-3 py-0.5 text-xs font-medium text-gray-500 rounded-full bg-gray-200">
          RIP
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-400 dark:text-gray-500 mb-8">
        Projects that didn't make it, but taught me valuable lessons.
      </p>

      <div className="gap-4 sm:grid-cols-2 lg:grid-cols-3 grid">
        {GHOST_PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="border-gray-300 bg-gray-50/50 dark:bg-gray-900/50 p-6 flex flex-col rounded-2xl border border-dashed grayscale transition-all hover:grayscale-0 dark:border-gray-700"
          >
            <div className="mb-4 flex items-center justify-between">
              <Ghost className="h-5 w-5 text-gray-400" />
              <span className="text-xs text-gray-500 font-mono">
                {project.year}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-2">
              {project.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 gap-2 flex items-start">
              <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
              {project.reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
