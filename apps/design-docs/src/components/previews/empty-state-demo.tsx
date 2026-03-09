import { EmptyState } from "@nebutra/ui/primitives";
import { Activity } from "lucide-react";

export function EmptyStateDemo() {
    return (
        <div className="w-full max-w-md mx-auto border rounded-xl p-8 bg-background my-8">
            <EmptyState.Root
                icon={<EmptyState.Icon icon={<Activity size={20} />} />}
                title="Title"
                description="A message conveying the state of the product."
            />
        </div>
    )
}
