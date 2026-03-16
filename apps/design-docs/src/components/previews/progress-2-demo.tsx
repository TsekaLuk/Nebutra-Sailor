/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Progress2Demo() {
  return (
    <>
<div className="space-y-1 w-full">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>65%</span>
  </div>
  <Progress value={65} />
</div>
    </>
  );
}
