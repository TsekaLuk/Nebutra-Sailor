"use client";

import { Progress } from "@nebutra/ui/primitives";
import * as React from "react";

export function ProgressIndeterminateDemo() {
  return (
    <div className="w-full">
      <Progress value={undefined} className="w-full" />
    </div>
  );
}
