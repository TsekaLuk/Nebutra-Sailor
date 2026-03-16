/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Skeleton } from "@nebutra/ui/primitives";

export function SkeletonListDemo() {
  return (
    <div className="space-y-3 w-80 p-4 border rounded-xl shadow-sm">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full shrink-0" />
        <div className="space-y-1.5 flex-1">
          <Skeleton className="h-3.5 w-[140px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
    ))}
  </div>
  );
}
