"use client";
import { Switch } from "@nebutra/ui/components";
export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch />
        <span className="text-sm">Default (off)</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultSelected />
        <span className="text-sm">Default (on)</span>
      </div>
      <div className="flex items-center gap-3">
        <Switch color="primary" defaultSelected />
        <span className="text-sm">Primary</span>
      </div>
    </div>
  );
}
