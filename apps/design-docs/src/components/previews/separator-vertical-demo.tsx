/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Separator } from "@nebutra/ui/primitives";

export function SeparatorVerticalDemo() {
  return (
    <div className="flex items-center gap-3 h-5 text-sm">
    <span>Home</span>
    <Separator orientation="vertical" />
    <span>About</span>
    <Separator orientation="vertical" />
    <span>Contact</span>
  </div>
  );
}
