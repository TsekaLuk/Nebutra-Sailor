"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { DateRangePicker } from "@nebutra/ui/primitives";

export function DatePickerRangeMinMaxDemo() {
  return (
    <DateRangePicker
      label="时段"
      minValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone()).add({ months: 3 })}
    />
  );
}
