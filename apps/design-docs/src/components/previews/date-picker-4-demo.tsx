"use client";

import * as React from "react";
import { DatePicker4 } from "@nebutra/ui/primitives";

export function DatePicker4Demo() {
  return (
    <DatePicker label="默认 (Default)" />
  <DatePicker label="带边框 (Bordered)" variant="bordered" />
  <DatePicker label="带下划线 (Underlined)" variant="underlined" />
  <DatePicker label="淡出风格 (Faded)" variant="faded" />
  );
}
