/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Slider2Demo() {
  return (
    <>
<div className="w-full">
  <Slider
    defaultValue={[20, 80]}
    min={0}
    max={100}
    step={5}
  />
</div>
    </>
  );
}
