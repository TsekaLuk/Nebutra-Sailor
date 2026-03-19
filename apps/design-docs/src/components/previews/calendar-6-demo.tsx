"use client";

import { RangeCalendar } from "@nebutra/ui/primitives";
import * as React from "react";
export function Calendar6Demo() {
  return (
    <RangeCalendar
      visibleMonths={2}
      className="p-4 max-w-full rounded-xl border border-border shadow-sm"
    />
  );
}
