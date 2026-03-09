"use client";

import * as React from "react";
import { Calendar6 } from "@nebutra/ui/primitives";

export function Calendar6Demo() {
  return (
    <RangeCalendar visibleMonths={2} className="rounded-xl shadow-sm border border-border p-4 max-w-full" />
  );
}
