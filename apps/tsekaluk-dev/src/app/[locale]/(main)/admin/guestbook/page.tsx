"use client"

import { useState, useEffect, useCallback } from "react"
import { Trash2, RefreshCw, MessageSquare, Check, X } from "lucide-react"

interface GuestbookEntry {
  id: string
  authorName: string
  authorImage: string | null
  nickname: string
  relationship: string
  message: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

const STATUS_STYLES = {
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
  approved: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400",
  rejected: "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400",
}

export default function AdminGuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [actionId, setActionId] = useState<string | null>(null)

  const fetchEntries = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/guestbook?all=true")
      const json = await res.json()
      if (!json.success) throw new Error(json.error ?? "Failed to fetch")
      setEntries(json.data ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load entries.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  const handleModerate = async (id: string, status: "approved" | "rejected") => {
    setActionId(id)
    try {
      const res = await fetch("/api/guestbook", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.error ?? "Update failed")
      setEntries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status } : e)),
      )
    } catch (err) {
      alert(err instanceof Error ? err.message : "Action failed.")
    } finally {
      setActionId(null)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this endorsement permanently?")) return
    setActionId(id)
    try {
      const res = await fetch(`/api/guestbook?id=${id}`, { method: "DELETE" })
      const json = await res.json()
      if (!json.success) throw new Error(json.error ?? "Delete failed")
      setEntries((prev) => prev.filter((e) => e.id !== id))
    } catch (err) {
      alert(err instanceof Error ? err.message : "Delete failed.")
    } finally {
      setActionId(null)
    }
  }

  const pendingCount = entries.filter((e) => e.status === "pending").length

  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="font-serif italic text-gray-400 dark:text-gray-500 text-sm">
            Moderate endorsements
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
            Guestbook
            {pendingCount > 0 && (
              <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-300">
                {pendingCount} pending
              </span>
            )}
          </h1>
        </div>
        <button
          type="button"
          onClick={fetchEntries}
          disabled={loading}
          aria-label="Refresh entries"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {loading && !error && (
        <div className="flex items-center justify-center py-16 text-gray-400">
          <RefreshCw className="h-5 w-5 animate-spin mr-2" />
          <span className="text-sm">Loading...</span>
        </div>
      )}

      {!loading && !error && entries.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-800 p-12 text-center">
          <MessageSquare className="mx-auto h-10 w-10 text-gray-300 dark:text-gray-700 mb-3" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No endorsements yet.
          </p>
        </div>
      )}

      {!loading && entries.length > 0 && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Author
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Message
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Relationship
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Date
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {entries.map((entry) => (
                <tr
                  key={entry.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {entry.authorImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={entry.authorImage}
                          alt={entry.nickname}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                          {entry.nickname.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="font-medium text-gray-900 dark:text-white">
                        {entry.nickname}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300 max-w-xs">
                    <p className="line-clamp-2">{entry.message}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {entry.relationship}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[entry.status]}`}
                    >
                      {entry.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {new Date(entry.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      {entry.status === "pending" && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleModerate(entry.id, "approved")}
                            disabled={actionId === entry.id}
                            aria-label={`Approve endorsement from ${entry.nickname}`}
                            className="rounded-md p-1.5 text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors disabled:opacity-50"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleModerate(entry.id, "rejected")}
                            disabled={actionId === entry.id}
                            aria-label={`Reject endorsement from ${entry.nickname}`}
                            className="rounded-md p-1.5 text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors disabled:opacity-50"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(entry.id)}
                        disabled={actionId === entry.id}
                        aria-label={`Delete endorsement from ${entry.nickname}`}
                        className="rounded-md p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-2.5 text-xs text-gray-400">
            {entries.length} entr{entries.length !== 1 ? "ies" : "y"}
            {pendingCount > 0 && ` · ${pendingCount} awaiting review`}
          </div>
        </div>
      )}
    </div>
  )
}
