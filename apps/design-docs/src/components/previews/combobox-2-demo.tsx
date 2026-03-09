"use client";

import * as React from "react";
import { Combobox2 } from "@nebutra/ui/primitives";

export function Combobox2Demo() {
  return (
    <Combobox
    options={[
      { value: "next", label: "Next.js" },
      { value: "remix", label: "Remix" },
      { value: "astro", label: "Astro" },
      { value: "nuxt", label: "Nuxt" },
    ]}
    defaultValue="next"
    placeholder="选择框架..."
  />
  );
}
