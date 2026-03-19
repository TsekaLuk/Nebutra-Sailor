"use client";

import { Calendar, isWeekend } from "@nebutra/ui/primitives";

export function CalendarUnavailableDemo() {
  return (
    <Calendar
      isDateUnavailable={(date) => isWeekend(date, "en-US")}
      className="rounded-xl shadow-sm border border-border"
    />
  );
}
