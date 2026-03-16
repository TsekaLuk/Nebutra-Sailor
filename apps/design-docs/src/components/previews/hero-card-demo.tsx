/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { HeroCard, HeroCardHeader, HeroCardBody, HeroCardFooter } from "@nebutra/ui/primitives";

export function HeroCardDemo() {
    return (
        <HeroCard className="w-72">
            <HeroCardHeader>
                <h4 className="font-semibold">Card Title</h4>
            </HeroCardHeader>
            <HeroCardBody>
                <p className="text-sm text-foreground/80">
                    Make beautiful websites regardless of your design experience.
                </p>
            </HeroCardBody>
            <HeroCardFooter>
                <button className="text-sm text-primary hover:underline">
                    Learn more →
                </button>
            </HeroCardFooter>
        </HeroCard>
    );
}
