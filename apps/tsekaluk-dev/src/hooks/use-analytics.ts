"use client"

import { usePostHog } from "posthog-js/react"
import { useCallback } from "react"

export function useAnalytics() {
  const posthog = usePostHog()

  const track = useCallback(
    (event: string, properties?: Record<string, unknown>) => {
      posthog?.capture(event, properties)
    },
    [posthog],
  )

  return { track }
}
