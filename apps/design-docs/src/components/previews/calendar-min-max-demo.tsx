"use client"

import { Calendar, today, getLocalTimeZone } from "@nebutra/ui/primitives"

export default function CalendarMinMaxDemo() {
  return (
    <div className="flex items-center justify-center">
      <Calendar
        minValue={today(getLocalTimeZone()).subtract({ months: 1 })}
        maxValue={today(getLocalTimeZone()).add({ months: 1 })}
        className="rounded-xl border border-border shadow-sm"
      />
    </div>
  )
}
