"use client";

import { RangeCalendar } from "@nebutra/ui/primitives";

export function CalendarRangeMultiMonthDemo() {
  return (
    <RangeCalendar
      visibleMonths={2}
      className="p-4 max-w-full rounded-xl border border-border shadow-sm"
    />
  );
}
