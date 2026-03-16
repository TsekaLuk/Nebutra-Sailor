/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { AvatarCircles } from "@nebutra/ui/primitives";

const sampleAvatars = [
    {
        imageUrl: "https://avatars.githubusercontent.com/u/20110627",
        profileUrl: "https://github.com/rdev",
        alt: "User 1",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/4211028",
        profileUrl: "https://github.com/user2",
        alt: "User 2",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/583231",
        profileUrl: "https://github.com/octocat",
        alt: "Octocat",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/9919",
        profileUrl: "https://github.com/user4",
        alt: "User 4",
    },
];

export function AvatarCirclesDemo() {
    return (
        <div className="flex w-full items-center justify-center p-8">
            <div className="flex items-center gap-4">
                <AvatarCircles avatarUrls={sampleAvatars} numPeople={1200} />
                <div>
                    <p className="text-sm font-semibold">Join 1,200+ developers</p>
                    <p className="text-xs text-muted-foreground">
                        Building with Nebutra today
                    </p>
                </div>
            </div>
        </div>
    );
}
