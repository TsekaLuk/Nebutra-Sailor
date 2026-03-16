/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Button } from "@nebutra/ui/primitives";

export function Button4Demo() {
  return (
    <div className="flex gap-4">
      <Button prefix={<span>✉️</span>}>Login with Email</Button>
      <Button suffix={<span>➔</span>}>Continue</Button>
    </div>
  );
}
