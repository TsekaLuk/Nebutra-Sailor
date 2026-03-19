"use client";

import type * as React from "react";

// Temporary mock
function MockDatePicker({
  label,
  variant: _variant,
}: {
  label: React.ReactNode;
  variant?: string;
}) {
  return (
    <div className="px-3 py-2 text-sm rounded-md border border-border text-muted-foreground">
      {label}
    </div>
  );
}

export function DatePickerVariantsDemo() {
  return (
    <div className="gap-4 flex flex-wrap items-center">
      <MockDatePicker label="默认 (Default)" />
      <MockDatePicker label="带边框 (Bordered)" variant="bordered" />
      <MockDatePicker label="带下划线 (Underlined)" variant="underlined" />
      <MockDatePicker label="淡出风格 (Faded)" variant="faded" />
    </div>
  );
}
