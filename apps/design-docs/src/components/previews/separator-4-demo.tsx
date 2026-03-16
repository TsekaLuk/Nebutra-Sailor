/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Separator4Demo() {
  return (
    <>
<div className="relative w-full">
  <Separator />
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-fd-background px-2 text-xs text-muted-foreground">
    OR
  </span>
</div>
    </>
  );
}
