/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Combobox8Demo() {
  return (
    <>
<div className="flex flex-col gap-4 justify-center items-center">
  <Combobox options={[{ value: "1", label: "Option 1" }]} size="sm" placeholder="Small" />
  <Combobox options={[{ value: "1", label: "Option 1" }]} size="default" placeholder="Default" />
  <Combobox options={[{ value: "1", label: "Option 1" }]} size="lg" placeholder="Large" />
</div>
    </>
  );
}
