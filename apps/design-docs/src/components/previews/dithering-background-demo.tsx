/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { DitheringBackground } from "@nebutra/ui/primitives";
import { useState } from "react";

export function DitheringBackgroundDemo() {
    const [theme, setTheme] = useState<"system" | "light" | "dark">("dark");

    return (
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden border flex flex-col items-center justify-center">
            <DitheringBackground
                themeMode={theme}
                intensity={0.65}
                shape="swirl"
                type="8x8"
                parallax={true}
                parallaxStrength={15}
                className="rounded-xl"
            />

            <div className="z-10 relative flex flex-col items-center bg-background/50 backdrop-blur-md p-6 rounded-2xl border shadow-lg max-w-sm text-center gap-4">
                <h3 className="text-2xl font-bold tracking-tight">Dithering Shader</h3>
                <p className="text-muted-foreground text-sm">
                    A WebGL-powered shader background featuring retro dithering patterns and interactive parallax.
                </p>

                <div className="flex gap-2 mt-2">
                    <button
                        className={`px-3 py-1 text-xs rounded-full border ${theme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
                        onClick={() => setTheme('dark')}
                    >
                        Dark
                    </button>
                    <button
                        className={`px-3 py-1 text-xs rounded-full border ${theme === 'light' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-muted'}`}
                        onClick={() => setTheme('light')}
                    >
                        Light
                    </button>
                </div>
            </div>
        </div>
    );
}
