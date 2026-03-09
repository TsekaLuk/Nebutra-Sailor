"use client";

import * as React from "react";
import { Combobox7 } from "@nebutra/ui/primitives";

export function Combobox7Demo() {
  return (
    <Combobox
    options={[
      { value: "next", label: "Next.js" },
      { value: "remix", label: "Remix" },
      { value: "astro", label: "Astro" },
      { value: "nuxt", label: "Nuxt" },
    ]}
    width="w-96"
    placeholder="选择框架..."
  />
  );
}
