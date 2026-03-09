"use client";

import { MessageWithReactions } from "@nebutra/ui/primitives";
import { Avatar, AvatarFallback, AvatarImage } from "@nebutra/ui/primitives";

export function MessageWithReactionsDemo() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center w-full min-h-[400px] p-8 bg-muted/20">

            <div className="flex gap-4 items-start w-full max-w-md">
                <Avatar className="mt-1">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-sm">Designer Bob</span>
                        <span className="text-xs text-muted-foreground">11:34 AM</span>
                    </div>
                    <MessageWithReactions
                        text="I just updated the Figma file with the new hero section designs. Everyone, please take a look!"
                        reactionOptions={["👀", "🔥", "🙌", "❤️", "👍"]}
                    />
                </div>
            </div>

        </div>
    );
}
