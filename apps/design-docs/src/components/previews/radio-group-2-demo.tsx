"use client";

import * as React from "react";
import { RadioGroup2 } from "@nebutra/ui/primitives";

export function RadioGroup2Demo() {
  return (
    <RadioGroup defaultValue="card" orientation="horizontal" className="flex gap-4">
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
