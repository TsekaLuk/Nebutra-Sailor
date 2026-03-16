/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { AspectRatio } from "@nebutra/ui/primitives";

export function AspectRatioDemo() {
    return (
        <div className="w-full max-w-sm">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden ring-1 ring-border">
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop"
                    alt="Example landscape from Unsplash"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
