"use client";

import { DatePicker } from "@nebutra/ui/primitives";
import * as React from "react";
export function DatePicker3Demo() {
  return (
    <>
      <DatePicker label="Default" />
      <DatePicker label="Bordered" variant="bordered" />
      <DatePicker label="Underlined" variant="underlined" />
      <DatePicker label="Faded" variant="faded" />
    </>
  );
}
