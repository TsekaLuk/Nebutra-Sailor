"use client";

import { Progress } from "@nebutra/ui/primitives";
import * as React from "react";
export function Progress4Demo() {
  return (
    <div className="w-full">
      <Progress value={75} className="[&>div]:bg-green-500 w-full" />
    </div>
  );
}
