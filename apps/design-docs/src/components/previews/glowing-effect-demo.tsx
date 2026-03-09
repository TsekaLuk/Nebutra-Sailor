import { GlowingEffect } from "@nebutra/ui/primitives";

export function GlowingEffectDemo() {
    return (
        <div className="flex w-full items-center justify-center p-12">
            <div className="relative rounded-xl border bg-background p-8 w-64 shadow-sm">
                <GlowingEffect
                    spread={40}
                    glow={false}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.7}
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <p className="font-bold">Hover Card</p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Move mouse to see glow effect
                    </p>
                </div>
            </div>
        </div>
    );
}
