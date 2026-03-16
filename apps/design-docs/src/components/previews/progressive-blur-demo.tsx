/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { ProgressiveBlur } from "@nebutra/ui/primitives";

export function ProgressiveBlurDemo() {
    const items = Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
            <div className="space-y-2 flex-grow">
                <div className="h-4 w-1/3 bg-muted rounded" />
                <div className="h-3 w-2/3 bg-muted/60 rounded" />
            </div>
        </div>
    ));

    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">

            {/* Example 1: Bottom Blur */}
            <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Bottom Blur</h3>
                <div className="relative h-[300px] w-full rounded-xl border bg-background overflow-hidden">
                    <div className="absolute inset-0 overflow-y-auto p-4 space-y-4">
                        {items}
                        {items}
                    </div>
                    <ProgressiveBlur position="bottom" height="100px" />
                </div>
            </div>

            {/* Example 2: Top Blur */}
            <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Top & Bottom Blur</h3>
                <div className="relative h-[300px] w-full rounded-xl border bg-background overflow-hidden bg-dot-pattern">
                    <div className="absolute inset-0 overflow-y-auto p-4 space-y-4 pt-16 pb-16">
                        <h4 className="font-bold text-center text-xl mb-4">Terms of Service</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                            Sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <ProgressiveBlur position="both" />
                </div>
            </div>

        </div>
    );
}
