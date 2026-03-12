import { AnimateIn } from "@nebutra/ui/components"
import { projects } from "@/lib/projects"
import { getArticles } from "@/lib/articles"
import { FolderOpen, FileText, MessageSquare, LayoutDashboard } from "lucide-react"

export default async function AdminDashboardPage() {
  const articles = getArticles()
  const projectCount = projects.length
  const articleCount = articles.length

  const stats = [
    {
      label: "Projects",
      value: projectCount,
      icon: FolderOpen,
      href: "/admin/projects",
    },
    {
      label: "Articles",
      value: articleCount,
      icon: FileText,
      href: "/admin/articles",
    },
    {
      label: "Guestbook",
      value: "—",
      icon: MessageSquare,
      href: "/admin/guestbook",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <p className="font-serif italic text-gray-400 dark:text-gray-500 text-sm">
          Overview
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
          Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <AnimateIn key={stat.label} preset="fadeUp">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                    <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
                </div>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </AnimateIn>
          )
        })}
      </div>
    </div>
  )
}
