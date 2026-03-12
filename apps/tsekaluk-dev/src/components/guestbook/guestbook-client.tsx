"use client"

import * as React from "react"
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components"
import { EndorsementDialog } from "./endorsement-dialog"

interface Endorsement {
  id: string
  authorName: string
  authorImage: string | null
  nickname: string
  relationship: string
  message: string
  createdAt: string
}

const RELATIONSHIP_LABELS: Record<string, { en: string; zh: string }> = {
  friend: { en: "Friend", zh: "朋友" },
  colleague: { en: "Colleague", zh: "同事" },
  client: { en: "Client", zh: "客户" },
  partner: { en: "Partner", zh: "合作伙伴" },
  classmate: { en: "Classmate", zh: "同学" },
  mentor: { en: "Mentor", zh: "导师" },
  fan: { en: "Fan", zh: "粉丝" },
  other: { en: "Other", zh: "其他" },
}

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)

  if (diffSeconds < 60) return "just now"
  if (diffMinutes < 60) return `${diffMinutes}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffWeeks < 5) return `${diffWeeks}w ago`
  if (diffMonths < 12) return `${diffMonths}mo ago`
  return `${diffYears}y ago`
}

function EndorsementCard({ entry }: { entry: Endorsement }) {
  const initial = entry.nickname.charAt(0).toUpperCase()
  const rel = RELATIONSHIP_LABELS[entry.relationship]

  return (
    <AnimateIn preset="fadeUp" inView>
      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition-shadow hover:shadow-md">
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 break-words">
          &ldquo;{entry.message}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-3">
          {entry.authorImage ? (
            <img
              src={entry.authorImage}
              alt={entry.nickname}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full shrink-0 object-cover"
            />
          ) : (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-serif italic text-gray-500">
              {initial}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {entry.nickname}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {rel ? `${rel.en} / ${rel.zh}` : entry.relationship}
              {" · "}
              {formatRelativeTime(entry.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}

export function GuestbookClient() {
  const [entries, setEntries] = React.useState<Endorsement[]>([])
  const [loading, setLoading] = React.useState(true)
  const [submitted, setSubmitted] = React.useState(false)

  const fetchEntries = React.useCallback(async () => {
    try {
      const res = await fetch("/api/guestbook")
      const json = await res.json()
      if (json.success) {
        setEntries(json.data ?? [])
      }
    } catch {
      // show empty state
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  function handleSubmitted() {
    setSubmitted(true)
  }

  return (
    <div className="space-y-10">
      {/* CTA */}
      <AnimateIn preset="fade">
        <div className="flex flex-col items-center gap-4 text-center">
          {submitted ? (
            <p className="text-sm text-green-600 dark:text-green-400">
              Thanks! Your endorsement is under review and will appear soon.
            </p>
          ) : (
            <EndorsementDialog onSubmitted={handleSubmitted} />
          )}
        </div>
      </AnimateIn>

      {/* Endorsement wall */}
      {loading ? (
        <AnimateIn preset="fade">
          <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-12">
            Loading endorsements...
          </p>
        </AnimateIn>
      ) : entries.length === 0 ? (
        <AnimateIn preset="fade">
          <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-12">
            No endorsements yet. Be the first to leave one!
          </p>
        </AnimateIn>
      ) : (
        <AnimateInGroup stagger="normal" className="columns-1 gap-4 sm:columns-2">
          {entries.map((entry) => (
            <div key={entry.id} className="mb-4 break-inside-avoid">
              <EndorsementCard entry={entry} />
            </div>
          ))}
        </AnimateInGroup>
      )}
    </div>
  )
}
