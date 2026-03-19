"use client"
import { useState } from "react"
import { Checkbox } from "@nebutra/ui/primitives"

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="gap-3 flex flex-col">
      <Checkbox checked={checked} onChange={(v: boolean) => setChecked(v)}>
        Accept terms and conditions
      </Checkbox>
      <Checkbox checked>Subscribe to newsletter</Checkbox>
      <Checkbox disabled>Disabled option</Checkbox>
    </div>
  )
}
