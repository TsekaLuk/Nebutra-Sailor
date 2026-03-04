"use client";
import { useState } from "react";
import { Checkbox } from "@nebutra/custom-ui/primitives";

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Checkbox checked={checked} onChange={(v: boolean) => setChecked(v)}>
        Accept terms and conditions
      </Checkbox>
      <Checkbox checked>Subscribe to newsletter</Checkbox>
      <Checkbox disabled>Disabled option</Checkbox>
    </div>
  );
}
