import { AvatarWithIcon } from "@nebutra/ui/primitives";
import { ArrowDownCircle, CheckCircle2, Clock } from "lucide-react";

export function AvatarWithIconDemo() {
    return (
        <div className="flex flex-col items-start justify-start gap-4">
            <AvatarWithIcon
                src="https://avatar.vercel.sh/user1"
                alt="user1"
                size="sm"
                icon={<ArrowDownCircle className="h-full w-full text-[var(--neutral-11)]" strokeWidth={2.5} />}
                iconBackground="bg-background"
            />
            {/* ... */}
        </div>
    );
}
