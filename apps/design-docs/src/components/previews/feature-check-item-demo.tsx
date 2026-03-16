/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { FeatureCheckItem } from "@nebutra/ui/primitives";
import { Star, ShieldCheck } from "lucide-react";

export function FeatureCheckItemDemo() {
    return (
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto p-8 rounded-xl border bg-background my-8 shadow-sm">

            <div>
                <h3 className="text-lg font-semibold mb-4">Pricing Plan Includes</h3>
                <div className="flex flex-col gap-4">
                    <FeatureCheckItem
                        title="Unlimited Projects"
                        description="Create as many projects as you need without any limits."
                    />
                    <FeatureCheckItem
                        title="Custom Domains"
                        description="Connect your own domains with automated SSL generation."
                    />
                    <FeatureCheckItem
                        title="Team Collaboration"
                        description="Invite unlimited team members with role-based access control."
                    />
                    <FeatureCheckItem
                        title="Advanced Analytics"
                    />
                </div>
            </div>

            <div className="pt-6 border-t mt-2">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Custom Icons</h3>
                <div className="flex flex-col gap-4">
                    <FeatureCheckItem
                        icon={Star}
                        iconClassName="text-amber-500"
                        title="Premium Support"
                        description="24/7 priority support via email and Slack."
                    />
                    <FeatureCheckItem
                        icon={ShieldCheck}
                        iconClassName="text-emerald-500"
                        title="Enterprise Security"
                        description="SSO, audit logs, and compliance reporting."
                    />
                </div>
            </div>

        </div>
    );
}
