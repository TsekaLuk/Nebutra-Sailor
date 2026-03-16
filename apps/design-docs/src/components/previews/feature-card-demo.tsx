/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { FeatureCard, FeatureCardHeader, FeatureCardContent } from "@nebutra/ui/primitives";
import { Zap } from "lucide-react";

export function FeatureCardDemo() {
    return (
        <FeatureCard className="w-80">
            <FeatureCardHeader
                icon={Zap}
                title="Lightning fast"
                description="Sub-second response times worldwide."
            />
            <FeatureCardContent className="p-6">
                <div className="flex h-24 items-center justify-center rounded bg-muted/20 text-sm text-muted-foreground">
                    Visual content area
                </div>
            </FeatureCardContent>
        </FeatureCard>
    );
}
