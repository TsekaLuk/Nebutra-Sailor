/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Combobox } from "@nebutra/ui/primitives";

export function ComboboxDisabledDemo() {
  return (
    <Combobox
    options={[
      { value: "next", label: "Next.js" },
      { value: "remix", label: "Remix" },
      { value: "astro", label: "Astro" },
      { value: "nuxt", label: "Nuxt" },
    ]}
    defaultValue="remix"
    disabled
    placeholder="选择框架..."
  />
  );
}
