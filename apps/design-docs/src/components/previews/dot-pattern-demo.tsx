import { DotPattern } from "@nebutra/ui/primitives";
import { cn } from "@nebutra/ui/utils";

export function DotPatternDemo() {
    return (
        <div className="relative flex h-[400px] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-xl border bg-background p-8">
            <h2 className="z-10 text-4xl font-bold tracking-tight text-foreground/80 text-center">
                Dot Pattern <span className="text-primary block mt-2 text-2xl">Interactive Glow</span>
            </h2>
            <DotPattern
                glow
                width={24}
                height={24}
                cr={1.5}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
                    "text-primary/30"
                )}
            />
        </div>
    );
}
