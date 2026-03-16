/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Label4Demo() {
  return (
    <>
<div className="space-y-2 w-full max-w-sm">
  <Label htmlFor="disabled-input" className="opacity-50 cursor-not-allowed">
    Disabled field
  </Label>
  <Input id="disabled-input" disabled />
</div>
    </>
  );
}
