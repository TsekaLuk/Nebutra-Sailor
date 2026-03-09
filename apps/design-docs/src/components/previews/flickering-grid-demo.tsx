import { FlickeringGrid } from "@nebutra/ui/primitives";

export function FlickeringGridDemo() {
    return (
        <div className="relative h-[400px] w-full max-w-3xl overflow-hidden rounded-xl bg-slate-950 border">
            <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                color="#60A5FA"
                maxOpacity={0.5}
                flickerChance={0.1}
            />
            <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
                <h2 className="text-4xl font-bold text-white tracking-tight">
                    Flickering Grid
                </h2>
            </div>
        </div>
    );
}
