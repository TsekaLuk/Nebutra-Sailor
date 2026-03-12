"use client";

import * as React from "react";
import { RangeCalendar } from "@nebutra/ui/primitives";

export function CalendarRangeMultiMonthDemo() {
  return (
    <RangeCalendar visibleMonths={2} className="rounded-xl shadow-sm border border-border p-4 max-w-full" />
  );
}
