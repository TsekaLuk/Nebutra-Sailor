/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Label, Checkbox, Input } from "@nebutra/ui/primitives";

export function LabelDemo() {
  return (
    <div className="space-y-6 max-w-sm w-full p-4 border rounded-xl shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
