/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Input2Demo() {
  return (
    <>
<Input
  prefix={<Search className="h-4 w-4" />}
  clearable
  placeholder="Search…"
/>
    </>
  );
}
