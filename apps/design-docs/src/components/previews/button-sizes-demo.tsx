/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Button } from "@nebutra/ui/primitives";

export function ButtonSizesDemo() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <Button size="icon" className="h-6 px-2 text-xs">Tiny</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
