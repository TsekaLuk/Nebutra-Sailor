/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Button2Demo() {
  return (
    <>
<div className="flex gap-3">
  <Button variant="default">Default</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Delete</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="link">Learn more</Button>
</div>
    </>
  );
}
