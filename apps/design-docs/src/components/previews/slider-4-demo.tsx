/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Slider4Demo() {
  return (
    <>
<div className="space-y-2 w-full">
  <div className="flex justify-between text-sm">
    <span>$200</span>
    <span>$800</span>
  </div>
  <Slider
    defaultValue={[200, 800]}
    min={0}
    max={1000}
    step={10}
  />
</div>
    </>
  );
}
