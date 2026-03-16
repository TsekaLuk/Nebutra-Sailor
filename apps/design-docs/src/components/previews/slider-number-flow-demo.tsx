/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client"

import { useState } from "react"
import { SliderNumberFlow } from "@nebutra/ui/primitives"

export function SliderNumberFlowDemo() {
    const [value, setValue] = useState([50])

    return (
        <div className="flex w-full items-center justify-center py-8">
            <SliderNumberFlow
                value={value}
                onValueChange={(val) => setValue(Array.isArray(val) ? [...val] : [val])}
                min={0}
                max={100}
                step={1}
                aria-label="Volume"
                className="w-[60%]"
            />
        </div>
    )
}
