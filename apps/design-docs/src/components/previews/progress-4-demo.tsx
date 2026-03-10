"use client";

import * as React from "react";
import { Progress } from "@nebutra/ui/primitives";

export function Progress4Demo() {
  return (
    <div className="w-full">
    <Progress
      value={75}
      className="w-full [&>div]:bg-green-500"
    />
  </div>
  );
}
