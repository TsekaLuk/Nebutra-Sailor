"use client";

import * as React from "react";
import { DateRangePicker } from "@nebutra/ui/primitives";
import { getLocalTimeZone, today } from "@internationalized/date";

export function DatePickerRangeMinMaxDemo() {
  return (
    <DateRangePicker
      label="时段"
      minValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone()).add({ months: 3 })}
    />
  );
}
