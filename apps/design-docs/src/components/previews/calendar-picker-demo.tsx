"use client"

import React, { useState } from "react"
import { CalendarPicker } from "@nebutra/ui/primitives"

export function CalendarPickerDemo() {
  const [range, setRange] =
    useState<React.ComponentProps<typeof CalendarPicker>["value"]>()

  const presets = {
    today: {
      text: "Today",
      start: new Date(),
      end: new Date(),
    },
    yesterday: {
      text: "Yesterday",
      start: new Date(new Date().setDate(new Date().getDate() - 1)),
      end: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
    last7: {
      text: "Last 7 days",
      start: new Date(new Date().setDate(new Date().getDate() - 7)),
      end: new Date(),
    },
    last30: {
      text: "Last 30 days",
      start: new Date(new Date().setDate(new Date().getDate() - 30)),
      end: new Date(),
    },
  }

  return (
    <div className="gap-6 max-w-sm p-4 py-12 mx-auto flex min-h-[300px] w-full flex-col items-center justify-center">
      <div className="gap-2 flex flex-col">
        <span className="text-sm font-medium">Select Date Range</span>
        <CalendarPicker
          value={range}
          onChange={setRange}
          presets={presets}
          allowClear
        />
      </div>

      <div className="gap-2 flex flex-col">
        <span className="text-sm font-medium">Compact Layout</span>
        <CalendarPicker
          value={range}
          onChange={setRange}
          presets={presets}
          compact
          allowClear
        />
      </div>
    </div>
  )
}
