/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { LightRays, Card } from "@nebutra/ui/primitives";
import { Sparkles } from "lucide-react";

export function LightRaysDemo() {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 md:p-8">
            <Card className="relative overflow-hidden w-full h-[400px] border flex flex-col items-center justify-center p-8 text-center bg-black dark:bg-black/90">

                {/* The light rays component in the background */}
                <LightRays
                    count={12}
                    color="rgba(125, 211, 252, 0.3)" // soft blue
                    speed={15}
                    blur={24}
                />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                        <Sparkles className="w-8 h-8 text-blue-400" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Illuminate Your Data
                    </h2>

                    <p className="text-blue-100/60 max-w-md text-lg">
                        Discover insights previously hidden in the dark. Our advanced analytics engine brings everything to light.
                    </p>

                    <button className="mt-8 px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-blue-50 transition-colors">
                        Get Started
                    </button>
                </div>
            </Card>
        </div>
    );
}
