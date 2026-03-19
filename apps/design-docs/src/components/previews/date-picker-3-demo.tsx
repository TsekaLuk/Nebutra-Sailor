"use client";

import { DatePicker } from "@nebutra/ui/primitives";
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
