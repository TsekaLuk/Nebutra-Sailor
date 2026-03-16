/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { InfiniteSlider } from "@nebutra/ui/primitives";
import { Cpu, Cloud, Database, Network, Shield, Zap, Lock, Code } from "lucide-react";

export function InfiniteSliderDemo() {
    const icons = [
        { icon: <Cpu className="size-8" />, label: "Compute" },
        { icon: <Cloud className="size-8" />, label: "Storage" },
        { icon: <Database className="size-8" />, label: "Database" },
        { icon: <Network className="size-8" />, label: "Network" },
        { icon: <Shield className="size-8" />, label: "Security" },
        { icon: <Zap className="size-8" />, label: "Serverless" },
        { icon: <Lock className="size-8" />, label: "IAM" },
        { icon: <Code className="size-8" />, label: "DevTools" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto py-12 flex flex-col gap-16 overflow-hidden">

            <div className="space-y-4">
                <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
                    Trusted by top cloud infrastructure providers
                </h3>

                {/* Fast right-to-left */}
                <InfiniteSlider gap={24} speed={60}>
                    {icons.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground">
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                </InfiniteSlider>

                {/* Slow left-to-right on hover */}
                <InfiniteSlider gap={24} speed={40} speedOnHover={10} reverse className="mt-8">
                    {icons.reverse().map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border bg-card text-card-foreground shadow-sm hover:border-primary transition-colors cursor-pointer">
                            <div className="text-primary mb-3">
                                {item.icon}
                            </div>
                            <span className="font-medium text-sm">{item.label}</span>
                        </div>
                    ))}
                </InfiniteSlider>
            </div>

        </div>
    );
}
