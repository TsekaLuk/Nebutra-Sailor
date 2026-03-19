"use client";

import { Input } from "@nebutra/ui/primitives";
import * as React from "react";

export function InputClearableDemo() {
  return (
    <Input clearable defaultValue="contact@nebutra.com" placeholder="Type to see the × button…" />
  );
}
