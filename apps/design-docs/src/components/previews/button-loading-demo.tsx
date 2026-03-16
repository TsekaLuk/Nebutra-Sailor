/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Button } from "@nebutra/ui/primitives";

export function ButtonLoadingDemo() {
  return (
    <Button loading>Saving…</Button>
  );
}
