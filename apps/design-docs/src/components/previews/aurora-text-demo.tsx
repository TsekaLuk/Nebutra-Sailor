/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { AuroraText } from "@nebutra/ui/primitives";

export function AuroraTextDemo() {
    return (
        <div className="flex w-full items-center justify-center p-12 text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Build <AuroraText>beautiful</AuroraText> apps
            </h1>
        </div>
    );
}
