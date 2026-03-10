/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

// Temporary mock
function MockDatePicker({ label, variant: _variant }: { label: React.ReactNode; variant?: string }) {
  return <div className="border border-border px-3 py-2 rounded-md text-sm text-muted-foreground">{label}</div>;
}

export function DatePicker4Demo() {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <MockDatePicker label="默认 (Default)" />
      <MockDatePicker label="带边框 (Bordered)" variant="bordered" />
      <MockDatePicker label="带下划线 (Underlined)" variant="underlined" />
      <MockDatePicker label="淡出风格 (Faded)" variant="faded" />
    </div>
  );
}
