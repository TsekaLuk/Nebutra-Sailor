/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Label2Demo() {
  return (
    <>
<div className="space-y-2 w-full max-w-sm">
  <Label htmlFor="name">
    Full name
    <span className="ml-1 text-destructive" aria-hidden="true">*</span>
  </Label>
  <Input id="name" required aria-required="true" />
</div>
    </>
  );
}
