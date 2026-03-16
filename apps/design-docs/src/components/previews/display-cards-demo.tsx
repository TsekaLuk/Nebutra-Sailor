/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { DisplayCards } from "@nebutra/ui/primitives";
import { Zap, Shield, Rocket } from "lucide-react";

export function DisplayCardsDemo() {
    const cards = [
        {
            title: "Lightning Fast",
            description: "Optimized for speed and performance.",
            date: "Core Feature",
            icon: <Zap className="size-5 text-amber-500" />,
            titleClassName: "text-amber-500",
        },
        {
            title: "Bank-grade Security",
            description: "Your data is encrypted at rest and in transit.",
            date: "Default",
            icon: <Shield className="size-5 text-green-500" />,
            titleClassName: "text-green-500",
        },
        {
            title: "Ready for Scale",
            description: "Built for teams of 1 to 10,000.",
            date: "Enterprise",
            icon: <Rocket className="size-5 text-indigo-500" />,
            titleClassName: "text-indigo-500",
        },
    ];

    return (
        <div className="flex items-center justify-center p-8 w-full min-h-[450px]">
            {/* DisplayCards uses fixed offsets and skewing, center it visually */}
            <div className="relative -ml-32 mt-12">
                <DisplayCards cards={cards} />
            </div>
        </div>
    );
}
