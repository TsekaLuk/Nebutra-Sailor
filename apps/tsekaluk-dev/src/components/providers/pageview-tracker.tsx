"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import posthog from "posthog-js"

export function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    posthog.capture("$pageview", {
      $current_url: window.location.href,
    })
  }, [pathname, searchParams])

  return null
}
