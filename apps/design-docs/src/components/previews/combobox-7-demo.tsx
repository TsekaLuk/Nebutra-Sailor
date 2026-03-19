"use client";

import { Combobox } from "@nebutra/ui/primitives";
import * as React from "react";
export function Combobox7Demo() {
  return (
    <Combobox
      options={[
        { value: "next", label: "Next.js" },
        { value: "remix", label: "Remix" },
        { value: "astro", label: "Astro" },
        { value: "nuxt", label: "Nuxt" },
      ]}
      error
      placeholder="Select framework..."
    />
  );
}
