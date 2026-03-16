/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Gauge } from "@nebutra/ui/primitives";

export function GaugeDemo() {
    return (
        <div className="w-full max-w-sm px-4 py-8 flex items-center justify-center space-x-4">
            <Gauge value={72} size={64} label />
        </div>
    )
}
