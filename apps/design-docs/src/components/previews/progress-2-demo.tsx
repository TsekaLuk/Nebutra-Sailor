"use client";

import * as React from "react";
import { Progress } from "@nebutra/ui/primitives";

export function Progress2Demo() {
  return (
    <div className="space-y-1 w-full">
    <div className="flex justify-between text-sm">
      <span>正在上传 (Uploading...)</span>
      <span>65%</span>
    </div>
    <Progress value={65} />
  </div>
  );
}
