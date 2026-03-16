/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Label, RadioGroup, RadioGroupItem } from "@nebutra/ui/primitives";

export function RadioGroupBillingDemo() {
  return (
    <RadioGroup defaultValue="monthly">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="monthly" id="monthly" />
      <Label htmlFor="monthly">Monthly billing</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="annually" id="annually" />
      <Label htmlFor="annually">Annual billing (save 20%)</Label>
    </div>
  </RadioGroup>
  );
}
