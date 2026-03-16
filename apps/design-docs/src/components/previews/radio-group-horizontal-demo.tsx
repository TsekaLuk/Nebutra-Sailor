/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Label, RadioGroup, RadioGroupItem } from "@nebutra/ui/primitives";

export function RadioGroupHorizontalDemo() {
  return (
    <RadioGroup defaultValue="card" className="flex gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="card" />
        <Label htmlFor="card">Card</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="paypal" />
        <Label htmlFor="paypal">PayPal</Label>
      </div>
    </RadioGroup>
  );
}
