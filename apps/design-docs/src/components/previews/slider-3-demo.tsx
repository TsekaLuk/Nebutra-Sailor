/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Slider3Demo() {
  return (
    <>
<div className="flex items-center gap-3 w-full">
  <Volume2 className="h-4 w-4 shrink-0 text-muted-foreground" />
  <Slider defaultValue={[70]} max={100} step={1} />
</div>
    </>
  );
}
