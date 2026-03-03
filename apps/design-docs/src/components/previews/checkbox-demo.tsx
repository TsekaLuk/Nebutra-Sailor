"use client";
import { Checkbox } from "@nebutra/custom-ui/primitives";
export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox />
        <label className="text-sm">Accept terms and conditions</label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultSelected color="primary" />
        <label className="text-sm">Subscribe to newsletter</label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox isDisabled />
        <label className="text-sm text-muted-foreground">Disabled option</label>
      </div>
    </div>
  );
}
