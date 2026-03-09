import { DottedWorldMap } from "@nebutra/ui/primitives";

export function DottedWorldMapDemo() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-8 min-h-[400px] items-center justify-center">

            <div className="w-full h-auto border rounded-xl overflow-hidden bg-background p-8 relative flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10 text-sm font-medium px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2 bg-background/80 backdrop-blur">
                    Global Reach
                </div>

                <DottedWorldMap
                    className="max-wfull opacity-70"
                    dotColor="currentColor"
                    dotRadius={0.2}
                    backgroundColor="transparent"
                />

                {/* Subtle decorative elements over the map */}
                <div className="absolute top-1/2 left-[25%] size-4 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute top-[40%] right-[30%] size-6 bg-purple-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute bottom-[30%] left-[60%] size-3 bg-green-500 rounded-full blur-xl opacity-50 animate-pulse delay-500"></div>
            </div>

        </div>
    );
}
