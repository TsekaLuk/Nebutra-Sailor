"use client";
import { Input } from "@nebutra/ui/components";
export function InputDemo() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
    </div>
  );
}
