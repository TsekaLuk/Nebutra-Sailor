"use client"

import * as React from "react"
import { Calendar } from "@nebutra/ui/primitives"

export function CalendarMonthYearDemo() {
  return (
    <Calendar
      showMonthAndYearPickers
      className="rounded-xl border border-border shadow-sm"
    />
  )
}
