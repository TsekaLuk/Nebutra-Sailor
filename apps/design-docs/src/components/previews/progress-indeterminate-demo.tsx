"use client"

import * as React from "react"
import { Progress } from "@nebutra/ui/primitives"

export function ProgressIndeterminateDemo() {
  return (
    <div className="w-full">
      <Progress value={undefined} className="w-full" />
    </div>
  )
}
