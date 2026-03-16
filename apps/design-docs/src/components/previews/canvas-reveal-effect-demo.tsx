/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { CanvasRevealEffect } from "@nebutra/ui/primitives";

export function CanvasRevealEffectDemo() {
    return (
        <div className="flex w-full items-center justify-center p-4">
            <div className="h-[300px] w-full max-w-2xl overflow-hidden rounded-xl border">
                <CanvasRevealEffect
                    animationSpeed={0.5}
                    colors={[
                        [59, 130, 246],
                        [139, 92, 246],
                    ]}
                    dotSize={3}
                    containerClassName="bg-slate-950"
                />
            </div>
        </div>
    );
}
