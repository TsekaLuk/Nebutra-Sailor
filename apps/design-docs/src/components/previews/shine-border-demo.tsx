/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ShineBorder } from "@nebutra/ui/primitives";

export function ShineBorderDemo() {
    return (
        <div className="flex w-full items-center justify-center p-8">
            <ShineBorder
                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderRadius={16}
                borderWidth={2}
                className="w-full max-w-sm bg-background"
            >
                <div className="text-center p-8">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">Shine Card</h2>
                    <p className="text-sm text-muted-foreground">Animated gradient border effect</p>
                </div>
            </ShineBorder>
        </div>
    );
}
