"use client";

import * as React from "react";
import { Combobox4 } from "@nebutra/ui/primitives";

export function Combobox4Demo() {
  return (
    <Combobox
    options={[
      { value: "next", label: "Next.js" },
      { value: "remix", label: "Remix" },
      { value: "astro", label: "Astro" },
      { value: "nuxt", label: "Nuxt" },
    ]}
    error
    placeholder="选择框架..."
  />
  );
}
