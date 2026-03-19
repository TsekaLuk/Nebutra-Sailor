"use client";

import { Calendar, getLocalTimeZone, today } from "@nebutra/ui/primitives";

export function CalendarMinMaxDemo() {
  return (
    <Calendar
      minValue={today(getLocalTimeZone()).subtract({ months: 1 })}
      maxValue={today(getLocalTimeZone()).add({ months: 1 })}
      className="rounded-xl shadow-sm border border-border"
    />
  );
}
