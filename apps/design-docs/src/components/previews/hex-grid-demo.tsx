"use client";

import { HexGrid } from "@nebutra/ui/primitives";

export function HexGridDemo() {
    return (
        <div className="w-full mx-auto py-12">
            <div className="flex flex-col gap-12 max-w-4xl mx-auto px-4">

                {/* Example 1: Basic with Glow */}
                <div className="space-y-4">
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold">Animated Glowing Grid</h3>
                        <p className="text-sm text-muted-foreground">Standard wireframe hexagon grid with animated glowing cells.</p>
                    </div>
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl border bg-card overflow-hidden flex items-center justify-center">
                        <HexGrid glow color="hsl(var(--primary))" opacity={0.25} />
                        <div className="relative z-10 bg-background/80 backdrop-blur-md px-6 py-4 rounded-full border shadow-sm">
                            <span className="font-semibold tracking-tight">Core Infrastructure</span>
                        </div>
                    </div>
                </div>

                {/* Example 2: Filled with Radial Mask */}
                <div className="space-y-4">
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold">Filled Grid with Mask</h3>
                        <p className="text-sm text-muted-foreground">Solid filled hexagons masked by a radial gradient.</p>
                    </div>
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl border bg-black overflow-hidden flex items-center justify-center">
                        <HexGrid
                            filled
                            size={32}
                            color="#0BF1C3"
                            opacity={0.15}
                            className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
                        />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mix-blend-overlay">
                                NEBUTRA
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
