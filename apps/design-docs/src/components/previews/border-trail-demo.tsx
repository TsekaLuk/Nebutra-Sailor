"use client";

import { BorderTrail } from "@nebutra/ui/primitives";

export function BorderTrailDemo() {
    return (
        <div className="flex w-full items-center justify-center p-12">
            <div className="relative flex h-40 w-72 flex-col items-center justify-center rounded-xl border bg-background p-6">
                <BorderTrail
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    size={120}
                />
                <p className="font-bold">Premium Card</p>
                <p className="text-sm text-muted-foreground">With gradient trail</p>
            </div>
        </div>
    );
}
