/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Combobox9Demo() {
  return (
    <>
<Combobox
  options={[
    { value: "next", label: "Next.js", group: "React" },
    { value: "remix", label: "Remix", group: "React" },
    { value: "nuxt", label: "Nuxt", group: "Vue" },
    { value: "svelte", label: "SvelteKit", group: "Svelte" },
  ]}
  label="Framework"
  placeholder="Select framework..."
/>
    </>
  );
}
