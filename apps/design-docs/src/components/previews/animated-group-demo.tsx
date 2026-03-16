/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { AnimatedGroup } from "@nebutra/ui/primitives";

export function AnimatedGroupDemo() {
    return (
        <div className="flex w-full items-center justify-center p-8">
            <AnimatedGroup preset="blur-slide" className="flex flex-col gap-3 w-48">
                {["Item 1", "Item 2", "Item 3", "Item 4"].map((label) => (
                    <div
                        key={label}
                        className="rounded-lg border bg-card p-4 text-sm font-medium"
                    >
                        {label}
                    </div>
                ))}
            </AnimatedGroup>
        </div>
    );
}
