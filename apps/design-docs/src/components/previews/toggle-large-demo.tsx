/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
;

export function ToggleLargeDemo() {
  return (
    <Toggle aria-pressed="true" defaultPressed size="lg" className="w-[80px]">
    开启 (On)
  </Toggle>
  );
}
