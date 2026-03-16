/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { AnimatedGradientText } from "@nebutra/ui/primitives";

export function AnimatedGradientTextDemo() {
    return (
        <div className="flex w-full items-center justify-center p-8">
            <h1 className="text-4xl font-bold">
                <AnimatedGradientText>Animated Gradient Text</AnimatedGradientText>
            </h1>
        </div>
    );
}
