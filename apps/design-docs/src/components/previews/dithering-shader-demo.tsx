/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { DitheringShader } from "@nebutra/ui/primitives";

export function DitheringShaderDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto p-4">

            <div className="flex flex-col gap-2 relative">
                <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur text-xs font-mono px-2 py-1 rounded border">
                    shape="wave" type="4x4"
                </div>
                <div className="border rounded-xl overflow-hidden w-full h-[300px]">
                    <DitheringShader
                        shape="wave"
                        type="4x4"
                        width={800}
                        height={600}
                        colorBack="#000000"
                        colorFront="#4338ca"
                        pxSize={3}
                        speed={0.8}
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 relative">
                <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur text-xs font-mono px-2 py-1 rounded border">
                    shape="sphere" type="8x8"
                </div>
                <div className="border rounded-xl overflow-hidden w-full h-[300px]">
                    <DitheringShader
                        shape="sphere"
                        type="8x8"
                        width={800}
                        height={600}
                        colorBack="#000000"
                        colorFront="#db2777"
                        pxSize={4}
                        speed={1.2}
                        className="w-full h-full"
                    />
                </div>
            </div>

        </div>
    );
}
