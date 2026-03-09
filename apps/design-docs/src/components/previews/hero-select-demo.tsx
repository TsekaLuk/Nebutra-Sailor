"use client";

import { HeroSelect, HeroSelectItem, HeroSelectSection } from "@nebutra/ui/primitives";
import { useState } from "react";

export function HeroSelectDemo() {
    const [value, setValue] = useState<Set<string>>(new Set(["cat"]));

    return (
        <div className="flex flex-col gap-12 w-full max-w-sm mx-auto p-4 py-12 min-h-[400px]">

            <div className="flex flex-col gap-2">
                <HeroSelect
                    label="Favorite Animal"
                    placeholder="Select an animal"
                    className="max-w-xs"
                >
                    <HeroSelectItem key="cat">Cat</HeroSelectItem>
                    <HeroSelectItem key="dog">Dog</HeroSelectItem>
                    <HeroSelectItem key="elephant">Elephant</HeroSelectItem>
                    <HeroSelectItem key="lion">Lion</HeroSelectItem>
                    <HeroSelectItem key="tiger">Tiger</HeroSelectItem>
                    <HeroSelectItem key="giraffe">Giraffe</HeroSelectItem>
                </HeroSelect>
            </div>

            <div className="flex flex-col gap-2">
                <HeroSelect
                    label="Favorite Frameworks"
                    selectionMode="multiple"
                    placeholder="Select frameworks"
                    className="max-w-xs"
                >
                    <HeroSelectSection title="React Ecosystem">
                        <HeroSelectItem key="nextjs">Next.js</HeroSelectItem>
                        <HeroSelectItem key="remix">Remix</HeroSelectItem>
                        <HeroSelectItem key="gatsby">Gatsby</HeroSelectItem>
                    </HeroSelectSection>
                    <HeroSelectSection title="Vue Ecosystem">
                        <HeroSelectItem key="nuxt">Nuxt.js</HeroSelectItem>
                        <HeroSelectItem key="vue">Vue CLI</HeroSelectItem>
                    </HeroSelectSection>
                    <HeroSelectSection title="Other">
                        <HeroSelectItem key="svelte">SvelteKit</HeroSelectItem>
                        <HeroSelectItem key="astro">Astro</HeroSelectItem>
                    </HeroSelectSection>
                </HeroSelect>
            </div>

        </div>
    );
}
