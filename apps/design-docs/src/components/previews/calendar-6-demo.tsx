"use client"

import * as React from "react"

import { RangeCalendar } from "@nebutra/ui/primitives"
export function Calendar6Demo() {
  return (
    <RangeCalendar
      visibleMonths={2}
      className="p-4 max-w-full rounded-xl border border-border shadow-sm"
    />
  )
}
