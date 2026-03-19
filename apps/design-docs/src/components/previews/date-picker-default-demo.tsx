"use client"

import { DatePicker, parseDate } from "@nebutra/ui/primitives"

export default function DatePickerDefaultDemo() {
  return (
    <div className="max-w-sm flex w-full items-center justify-center">
      <DatePicker label="Date" defaultValue={parseDate("2024-04-04")} />
    </div>
  )
}
