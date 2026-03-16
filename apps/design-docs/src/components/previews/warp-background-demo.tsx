/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { WarpBackground } from "@nebutra/ui/primitives";

export function WarpBackgroundDemo() {
    return (
        <div className="w-full py-12 flex flex-col gap-12 items-center">

            {/* Example 1: Large container */}
            <WarpBackground perspective={200} className="w-full max-w-3xl min-h-[400px] flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-md p-8 rounded-2xl border shadow-xl max-w-md text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Warp Speed</h2>
                    <p className="text-muted-foreground mb-6">
                        Engage your users with immersive 3D perspective grids and animated data beams.
                        Build containers that feel alive and dynamic.
                    </p>
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors">
                        Initialize Sequence
                    </button>
                </div>
            </WarpBackground>

            {/* Example 2: Small cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <WarpBackground
                    perspective={50}
                    beamSize={8}
                    gridColor="rgba(59, 130, 246, 0.3)"
                    className="p-8 h-64 flex flex-col justify-end"
                >
                    <div className="bg-background/90 p-4 rounded-xl border backdrop-blur">
                        <h3 className="font-bold text-lg text-blue-500">Deep Perspective</h3>
                        <p className="text-sm text-muted-foreground mt-1">Lower perspective values create dramatic 3D tunneling effects.</p>
                    </div>
                </WarpBackground>

                <WarpBackground
                    perspective={150}
                    beamsPerSide={5}
                    beamDuration={2}
                    gridColor="rgba(239, 68, 68, 0.2)"
                    className="p-8 h-64 flex flex-col justify-end"
                >
                    <div className="bg-background/90 p-4 rounded-xl border backdrop-blur">
                        <h3 className="font-bold text-lg text-red-500">High Velocity</h3>
                        <p className="text-sm text-muted-foreground mt-1">More beams paired with shorter durations creates hyper-speed motion.</p>
                    </div>
                </WarpBackground>
            </div>

        </div>
    );
}
