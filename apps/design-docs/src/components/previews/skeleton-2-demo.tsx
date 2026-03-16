/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Skeleton2Demo() {
  return (
    <>
<div className="flex flex-col space-y-4 w-80 p-4 border rounded-xl shadow-sm">
  <Skeleton className="h-40 w-full rounded-lg" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
  </div>
</div>
    </>
  );
}
