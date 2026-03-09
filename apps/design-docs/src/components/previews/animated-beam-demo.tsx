"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@nebutra/ui/primitives";

export function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="relative flex w-full max-w-[400px] items-center justify-between rounded-xl border p-12"
        >
            <div
                ref={fromRef}
                className="flex size-12 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow"
            >
                A
            </div>
            <div
                ref={toRef}
                className="flex size-12 items-center justify-center rounded-full bg-purple-500 font-bold text-white shadow"
            >
                B
            </div>
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={fromRef}
                toRef={toRef}
            />
        </div>
    );
}
