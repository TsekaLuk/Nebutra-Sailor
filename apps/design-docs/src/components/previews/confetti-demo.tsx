"use client";

import { Confetti, ConfettiButton, ConfettiRef } from "@nebutra/ui/primitives";
import { useRef } from "react";

export function ConfettiDemo() {
    const confettiRef = useRef<ConfettiRef>(null);

    return (
        <div className="relative flex w-full flex-col items-center justify-center gap-8 p-12 overflow-hidden rounded-xl border bg-background">
            <Confetti
                ref={confettiRef}
                manualstart
                className="absolute inset-0 z-0 h-full w-full pointer-events-none"
            />

            <div className="z-10 flex flex-col items-center gap-4">
                <button
                    onClick={() =>
                        confettiRef.current?.fire({
                            particleCount: 150,
                            spread: 100,
                            origin: { y: 0.6 },
                        })
                    }
                    className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    Fire Confetti via Ref!
                </button>

                <ConfettiButton variant="outline" className="px-6 py-3 shadow-sm">
                    🎊 Easy ConfettiButton
                </ConfettiButton>
            </div>
        </div>
    );
}
