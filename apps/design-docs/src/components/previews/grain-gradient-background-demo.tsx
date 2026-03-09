import { GrainGradientBackground } from "@nebutra/ui/primitives";

export function GrainGradientBackgroundDemo() {
    return (
        <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto p-4 min-h-[500px] items-center justify-center">

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border shadow-lg flex items-center justify-center">
                <GrainGradientBackground
                    colors={["#a855f7", "#ec4899", "#f59e0b", "#3b82f6"]}
                    softness={0.8}
                    noise={0.15}
                    speed={0.3}
                    className="opacity-80"
                />

                <div className="z-10 relative bg-background/50 backdrop-blur-md p-8 text-center max-w-md rounded-2xl border border-white/20 shadow-xl">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Dreamy Gradients</h2>
                    <p className="text-foreground/80 mb-6">
                        A beautiful, animated grain gradient background powered by WebGL shaders.
                        Perfect for hero sections and distinctive landing pages.
                    </p>
                    <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        Get Started Focus
                    </button>
                </div>
            </div>

        </div>
    );
}
