/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Combobox4Demo() {
  return (
    <>
<Combobox
  options={[
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "nuxt", label: "Nuxt" },
  ]}
  label="Framework"
  placeholder="Select framework..."
/>
    </>
  );
}
