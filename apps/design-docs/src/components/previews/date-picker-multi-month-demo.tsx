"use client";

import { DateRangePicker } from "@nebutra/ui/primitives";
import * as React from "react";

export function DatePickerMultiMonthDemo() {
  return <DateRangePicker label="住宿时间" visibleMonths={2} />;
}
