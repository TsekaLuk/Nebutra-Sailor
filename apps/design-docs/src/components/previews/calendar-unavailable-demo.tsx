"use client"

import { Calendar, isWeekend } from "@nebutra/ui/primitives"

export default function CalendarUnavailableDemo() {
  return (
    <div className="flex items-center justify-center">
      <Calendar
        isDateUnavailable={(date) => isWeekend(date, "en-US")}
        className="rounded-xl border border-border shadow-sm"
      />
    </div>
  )
}
