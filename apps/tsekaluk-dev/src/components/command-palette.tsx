"use client"

import * as React from "react"
import { Command } from "cmdk"
import { useRouter } from "@/i18n/navigation"
import { useTheme } from "next-themes"
import { useLocale } from "next-intl"
import { useRouter as useNextRouter, usePathname } from "@/i18n/navigation"
import { useAnalytics } from "@/hooks/use-analytics"
import {
  Home,
  Briefcase,
  FileText,
  Clock,
  User,
  Link2,
  Cpu,
  MessageSquare,
  Lock,
  Bot,
  Sun,
  Moon,
  Languages,
  Search,
} from "lucide-react"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const NAV_COMMANDS = [
  { id: "home", label: "Home", href: "/", icon: Home, keywords: "index main" },
  { id: "work", label: "Work", href: "/work", icon: Briefcase, keywords: "projects portfolio" },
  { id: "thinking", label: "Thinking", href: "/thinking", icon: FileText, keywords: "blog articles essays writing" },
  { id: "now", label: "Now", href: "/now", icon: Clock, keywords: "current status update" },
  { id: "about", label: "About", href: "/about", icon: User, keywords: "bio background" },
  { id: "soul", label: "Soul", href: "/soul", icon: Bot, keywords: "ai chat clone digital" },
  { id: "uses", label: "Uses", href: "/uses", icon: Cpu, keywords: "tools stack setup gear" },
  { id: "links", label: "Links", href: "/links", icon: Link2, keywords: "social bookmarks" },
  { id: "guestbook", label: "Guestbook", href: "/guestbook", icon: MessageSquare, keywords: "endorse comments" },
  { id: "privacy", label: "Privacy", href: "/privacy", icon: Lock, keywords: "data policy" },
]

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter()
  const nextRouter = useNextRouter()
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const locale = useLocale()
  const { track } = useAnalytics()

  const navigate = (href: string) => {
    track("command_palette_navigate", { href })
    router.push(href as Parameters<typeof router.push>[0])
    onOpenChange(false)
  }

  const switchLocale = (newLocale: string) => {
    track("command_palette_locale_switch", { from: locale, to: newLocale })
    nextRouter.replace(pathname, { locale: newLocale })
    onOpenChange(false)
  }

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    track("command_palette_theme_toggle", { theme: next })
    setTheme(next)
    onOpenChange(false)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className={`fixed inset-0 z-50 ${open ? "flex" : "hidden"} items-start justify-center pt-[20vh]`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-xl mx-4">
        <Command
          className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-2xl"
          loop
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800/80">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
            <Command.Input
              autoFocus
              placeholder="Search pages, actions..."
              className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-gray-400 outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center rounded border border-gray-200 dark:border-gray-700 px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto overscroll-contain py-2">
            <Command.Empty className="py-10 text-center text-sm text-gray-400">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Pages"
              className="[&>[cmdk-group-heading]]:px-4 [&>[cmdk-group-heading]]:py-1.5 [&>[cmdk-group-heading]]:text-[11px] [&>[cmdk-group-heading]]:font-medium [&>[cmdk-group-heading]]:uppercase [&>[cmdk-group-heading]]:tracking-wider [&>[cmdk-group-heading]]:text-gray-400"
            >
              {NAV_COMMANDS.map(({ id, label, href, icon: Icon, keywords }) => (
                <Command.Item
                  key={id}
                  value={`${label} ${keywords}`}
                  onSelect={() => navigate(href)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 cursor-pointer rounded-none data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                >
                  <Icon className="h-4 w-4 shrink-0 text-gray-400" />
                  {label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="my-1 h-px bg-gray-100 dark:bg-gray-800" />

            <Command.Group
              heading="Actions"
              className="[&>[cmdk-group-heading]]:px-4 [&>[cmdk-group-heading]]:py-1.5 [&>[cmdk-group-heading]]:text-[11px] [&>[cmdk-group-heading]]:font-medium [&>[cmdk-group-heading]]:uppercase [&>[cmdk-group-heading]]:tracking-wider [&>[cmdk-group-heading]]:text-gray-400"
            >
              <Command.Item
                value={`theme toggle ${resolvedTheme === "dark" ? "light" : "dark"}`}
                onSelect={toggleTheme}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 cursor-pointer rounded-none data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4 shrink-0 text-gray-400" />
                ) : (
                  <Moon className="h-4 w-4 shrink-0 text-gray-400" />
                )}
                {resolvedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Command.Item>

              {(["en", "zh", "ja"] as const)
                .filter((l) => l !== locale)
                .map((l) => (
                  <Command.Item
                    key={l}
                    value={`language ${l} ${LOCALE_LABELS[l]}`}
                    onSelect={() => switchLocale(l)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 cursor-pointer rounded-none data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                  >
                    <Languages className="h-4 w-4 shrink-0 text-gray-400" />
                    Switch to {LOCALE_LABELS[l]}
                  </Command.Item>
                ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
