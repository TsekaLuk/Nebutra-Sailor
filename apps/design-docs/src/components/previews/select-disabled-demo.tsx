/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { SelectValue, SelectContent, Select, SelectTrigger, SelectItem } from "@nebutra/ui/primitives";

export function SelectDisabledDemo() {
  return (
    <Select>
    <SelectTrigger className="w-48">
      <SelectValue placeholder="选择计划 (Select plan)" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="free">免费版 (Free)</SelectItem>
      <SelectItem value="pro">专业版 (Pro)</SelectItem>
      <SelectItem value="enterprise" disabled>企业版 (Enterprise) - 联系销售</SelectItem>
    </SelectContent>
  </Select>
  );
}
