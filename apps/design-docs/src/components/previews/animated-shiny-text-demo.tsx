"use client";

import { AnimatedShinyText } from "@nebutra/ui/primitives";

export function AnimatedShinyTextDemo() {
    return (
        <div className="flex w-full items-center justify-center p-8">
            <div className="rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm">
                <AnimatedShinyText>✨ Introducing new features</AnimatedShinyText>
            </div>
        </div>
    );
}
