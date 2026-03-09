"use client";

import { XPostCard } from "@nebutra/ui/primitives";

export function XPostCardDemo() {
    return (
        <div className="w-full py-12 flex flex-col md:flex-row gap-8 items-center justify-center bg-muted/20 border-y">

            {/* Real Post */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
                <h3 className="text-sm font-medium text-muted-foreground ml-1">Embedded Post</h3>
                <XPostCard
                    id="1744047805177266619" // Next.js related tweet
                    className="w-full"
                />
            </div>

            {/* Mocked/Fallback/Different Post */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
                <h3 className="text-sm font-medium text-muted-foreground ml-1">Light Theme Preview</h3>
                <div className="light bg-white p-4 rounded-xl border border-zinc-200">
                    <XPostCard
                        id="1612501538392551424" // Another popular tech tweet
                        className="w-full border-0 shadow-none bg-transparent"
                    />
                </div>
            </div>

        </div>
    );
}
