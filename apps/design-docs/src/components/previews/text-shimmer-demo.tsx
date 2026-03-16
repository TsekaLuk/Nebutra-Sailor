/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { TextShimmer } from "@nebutra/ui/primitives";

export default function TextShimmerDemo() {
    return (
        <div className="flex h-[300px] flex-col items-center justify-center gap-8 bg-zinc-950">
            <div className="flex flex-col items-center justify-center gap-4">
                <TextShimmer className="text-xl" duration={2}>
                    Generating code...
                </TextShimmer>

                <TextShimmer
                    as="h1"
                    className="text-4xl font-bold [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)]"
                    duration={3}
                >
                    Premium Feature
                </TextShimmer>
            </div>
        </div>
    );
}
