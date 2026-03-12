"use client";

import * as React from "react";
import { Calendar } from "@nebutra/ui/primitives";

export function CalendarMultiMonthDemo() {
  return (
    <Calendar visibleMonths={2} className="rounded-xl shadow-sm border border-border p-4 max-w-full" />
  );
}
