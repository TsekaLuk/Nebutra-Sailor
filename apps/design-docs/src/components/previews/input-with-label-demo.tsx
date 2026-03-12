"use client";

import * as React from "react";
import { Label, Input } from "@nebutra/ui/primitives";

export function InputWithLabelDemo() {
  return (
    <div className="flex flex-col gap-1.5 w-full">
    <Label htmlFor="email">
      Email address
    </Label>
    <Input id="email" type="email" placeholder="contact@nebutra.com" />
  </div>
  );
}
