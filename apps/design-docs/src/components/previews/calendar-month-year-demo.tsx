/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Calendar } from "@nebutra/ui/primitives";

export function CalendarMonthYearDemo() {
  return (
    <Calendar showMonthAndYearPickers className="rounded-xl shadow-sm border border-border" />
  );
}
