import { ColorBadge } from "@nebutra/ui/primitives";
import { Shield, CheckCircle2, AlertTriangle, XCircle, Info, Zap } from "lucide-react";

export function ColorBadgeDemo() {
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto p-6 items-center justify-center min-h-[400px]">

            <div className="flex flex-col items-center gap-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Standard Variants</h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <ColorBadge variant="gray">Draft</ColorBadge>
                    <ColorBadge variant="blue">In Progress</ColorBadge>
                    <ColorBadge variant="purple">Review</ColorBadge>
                    <ColorBadge variant="amber">Pending</ColorBadge>
                    <ColorBadge variant="green">Shipped</ColorBadge>
                    <ColorBadge variant="red">Failed</ColorBadge>
                    <ColorBadge variant="pink">Marketing</ColorBadge>
                    <ColorBadge variant="teal">Engineering</ColorBadge>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Subtle Variants</h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <ColorBadge variant="gray-subtle">Archived</ColorBadge>
                    <ColorBadge variant="blue-subtle">Info</ColorBadge>
                    <ColorBadge variant="purple-subtle">Design</ColorBadge>
                    <ColorBadge variant="amber-subtle">Warning</ColorBadge>
                    <ColorBadge variant="green-subtle">Success</ColorBadge>
                    <ColorBadge variant="red-subtle">Error</ColorBadge>
                    <ColorBadge variant="pink-subtle">Brand</ColorBadge>
                    <ColorBadge variant="teal-subtle">Data</ColorBadge>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">With Icons & Special Variants</h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <ColorBadge variant="green" icon={<CheckCircle2 />}>Healthy</ColorBadge>
                    <ColorBadge variant="amber-subtle" icon={<AlertTriangle />}>Degraded</ColorBadge>
                    <ColorBadge variant="red" icon={<XCircle />}>Outage</ColorBadge>
                    <ColorBadge variant="blue-subtle" icon={<Info />}>Maintenance</ColorBadge>
                    <ColorBadge variant="purple" icon={<Shield />}>Protected</ColorBadge>
                    <ColorBadge variant="turbo" icon={<Zap />}>v2.0 Beta</ColorBadge>
                    <ColorBadge variant="trial">14 days left</ColorBadge>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Sizes</h3>
                <div className="flex items-center justify-center gap-4">
                    <ColorBadge variant="blue" size="sm">Small</ColorBadge>
                    <ColorBadge variant="blue" size="md">Medium</ColorBadge>
                    <ColorBadge variant="blue" size="lg">Large</ColorBadge>
                </div>
            </div>

        </div>
    );
}
