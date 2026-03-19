"use client";

import { Calendar } from "@nebutra/ui/primitives";
import * as React from "react";

export function CalendarMultiMonthDemo() {
  return (
    <Calendar
      visibleMonths={2}
      className="p-4 max-w-full rounded-xl border border-border shadow-sm"
    />
  );
}
