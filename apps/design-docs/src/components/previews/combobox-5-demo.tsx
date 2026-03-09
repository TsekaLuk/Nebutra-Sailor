"use client";

import * as React from "react";
import { Combobox5 } from "@nebutra/ui/primitives";

export function Combobox5Demo() {
  return (
    <Combobox options={[{ value: "1", label: "选项 1" }]} size="sm" placeholder="小尺寸 (Small)" />
  <Combobox options={[{ value: "1", label: "选项 1" }]} size="default" placeholder="默认 (Default)" />
  <Combobox options={[{ value: "1", label: "选项 1" }]} size="lg" placeholder="大尺寸 (Large)" />
  );
}
