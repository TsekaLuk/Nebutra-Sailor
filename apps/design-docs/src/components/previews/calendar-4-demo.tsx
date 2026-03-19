"use client";

import { Calendar } from "@nebutra/ui/primitives";
export function Calendar4Demo() {
  return (
    <Calendar
      visibleMonths={2}
      className="p-4 max-w-full rounded-xl border border-border shadow-sm"
    />
  );
}
