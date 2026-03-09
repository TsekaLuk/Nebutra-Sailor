"use client";

import { FeatureArrowCard } from "@nebutra/ui/primitives";
import { Zap, Shield, Sparkles } from "lucide-react";

export function FeatureArrowCardDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto p-4 md:p-8">

            <FeatureArrowCard
                icon={Zap}
                title="Performance"
                subtitle="Lightning fast."
                description="Built for speed from the ground up."
                cardContent={
                    <div className="flex h-full w-full items-center justify-center bg-blue-50 dark:bg-blue-950/30">
                        <span className="text-2xl font-bold text-blue-500">99.9%</span>
                    </div>
                }
                onArrowClick={() => console.log('Performance clicked')}
                className="rounded-xl"
            />

            <FeatureArrowCard
                icon={Shield}
                title="Security"
                subtitle="Bank-grade protection."
                description="Your data is safe with us always."
                cardContent={
                    <div className="flex h-full w-full items-center justify-center bg-emerald-50 dark:bg-emerald-950/30">
                        <Shield className="size-8 text-emerald-500" />
                    </div>
                }
                onArrowClick={() => console.log('Security clicked')}
                className="rounded-xl"
            />

            <FeatureArrowCard
                icon={Sparkles}
                title="AI Native"
                subtitle="Smart automation."
                description="Let AI handle the repetitive tasks."
                cardContent={
                    <div className="flex h-full w-full items-center justify-center bg-purple-50 dark:bg-purple-950/30">
                        <div className="flex gap-1">
                            <span className="size-2 rounded-full bg-purple-500 animate-bounce delay-75"></span>
                            <span className="size-2 rounded-full bg-purple-500 animate-bounce delay-150"></span>
                            <span className="size-2 rounded-full bg-purple-500 animate-bounce delay-300"></span>
                        </div>
                    </div>
                }
                onArrowClick={() => console.log('AI clicked')}
                className="rounded-xl md:col-span-2"
            />

        </div>
    );
}
