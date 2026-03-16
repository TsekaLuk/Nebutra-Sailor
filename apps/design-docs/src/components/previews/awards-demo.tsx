/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Awards } from "@nebutra/ui/primitives";

export function AwardsDemo() {
    return (
        <div className="w-full flex-col gap-12 flex items-center justify-center p-8 bg-muted/20 border rounded-xl overflow-hidden">

            <div className="scale-90 flex md:scale-100 items-center justify-center">
                <Awards
                    title="Top Contributor"
                    subtitle="Community Award"
                    date="2026 Season"
                    recipient="Nebutra Engineer"
                    level="platinum"
                    variant="award"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl items-center">
                <Awards
                    title="Certified"
                    subtitle="Frontend Engineer"
                    date="Oct 2026"
                    recipient="Jane Doe"
                    level="gold"
                    variant="certificate"
                />

                <Awards
                    title="Verified"
                    subtitle="Top Seller"
                    date="Store Badge"
                    level="bronze"
                    variant="stamp"
                />
            </div>
        </div>
    );
}
