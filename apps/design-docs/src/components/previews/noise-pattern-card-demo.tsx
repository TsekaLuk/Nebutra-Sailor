/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { NoisePatternCard, NoisePatternCardBody } from "@nebutra/ui/primitives";
import { Sparkles } from "lucide-react";

export function NoisePatternCardDemo() {
    return (
        <div className="w-full max-w-2xl mx-auto p-4 md:p-8">
            <NoisePatternCard className="shadow-lg">
                <NoisePatternCardBody className="flex flex-col md:flex-row gap-6 items-center md:items-start min-h-[250px] p-8">

                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner border border-primary/20">
                        <Sparkles className="w-8 h-8" />
                    </div>

                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">
                                Organic Grain Texture
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Add depth and vintage feel to your interfaces with this animated SVG noise pattern.
                                Perfect for premium cards, feature highlights, and section backgrounds that need that
                                extra touch of analog warmth in a digital world.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">SVG Filters</span>
                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">Animated</span>
                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">Tailwind CSS</span>
                        </div>
                    </div>

                </NoisePatternCardBody>
            </NoisePatternCard>
        </div>
    );
}
