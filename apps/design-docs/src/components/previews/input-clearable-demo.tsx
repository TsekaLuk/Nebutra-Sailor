/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Input } from "@nebutra/ui/primitives";

export function InputClearableDemo() {
  return (
    <Input clearable defaultValue="contact@nebutra.com" placeholder="Type to see the × button…" />
  );
}
