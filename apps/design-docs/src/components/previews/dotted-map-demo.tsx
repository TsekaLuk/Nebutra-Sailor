/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { DottedMap } from "@nebutra/ui/primitives";

export function DottedMapDemo() {
    const markers = [
        { lat: 40.7128, lng: -74.006, size: 0.5 },    // New York
        { lat: 51.5074, lng: -0.1278, size: 0.5 },    // London
        { lat: 35.6762, lng: 139.6503, size: 0.5 },   // Tokyo
        { lat: -33.8688, lng: 151.2093, size: 0.5 },  // Sydney
        { lat: 37.7749, lng: -122.4194, size: 0.5 },  // San Francisco
        { lat: 1.3521, lng: 103.8198, size: 0.5 },    // Singapore
        { lat: 48.8566, lng: 2.3522, size: 0.5 },     // Paris
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-8 min-h-[400px] items-center justify-center">

            <div className="w-full h-[400px] border rounded-xl overflow-hidden bg-background p-4 relative">
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur z-10 text-sm font-medium px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Active Datacenters
                </div>
                <DottedMap
                    markers={markers}
                    markerColor="#3b82f6"
                    dotRadius={0.15}
                    mapSamples={8000}
                    width={150}
                    height={75}
                />
            </div>

        </div>
    );
}
