"use client";

import { AnimatedList } from "@nebutra/ui/primitives";

const notifications = [
    { id: "1", emoji: "👤", title: "New signup", body: "john@example.com joined" },
    { id: "2", emoji: "💳", title: "Payment received", body: "$49/mo plan activated" },
    { id: "3", emoji: "🚀", title: "Deploy completed", body: "v2.1.0 is live in production" },
];

export function AnimatedListDemo() {
    return (
        <div className="flex h-[300px] w-full items-center justify-center overflow-hidden p-8">
            <AnimatedList delay={1500} className="w-72 bottom-0 absolute">
                {notifications.map((n) => (
                    <div key={n.id} className="flex items-center gap-3 rounded-xl border bg-background px-4 py-3 shadow-sm w-72">
                        <span className="text-xl">{n.emoji}</span>
                        <div>
                            <p className="text-sm font-medium">{n.title}</p>
                            <p className="text-xs text-muted-foreground">{n.body}</p>
                        </div>
                    </div>
                ))}
            </AnimatedList>
        </div>
    );
}
