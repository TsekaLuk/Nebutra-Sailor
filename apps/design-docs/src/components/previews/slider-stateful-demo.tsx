/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { useState } from "react";
import { Slider } from "@nebutra/ui/primitives";

export default function SliderStatefulDemo() {
    const [value, setValue] = useState<number>(50);

    return <Slider onValueChange={setValue} value={value} />;
}
