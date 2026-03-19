"use client"

import {
  HeroSelect,
  HeroSelectItem,
  HeroSelectSection,
} from "@nebutra/ui/primitives"
import { useState } from "react"

export function HeroSelectDemo() {
  const [_value, _setValue] = useState<Set<string>>(new Set(["cat"]))

  return (
    <div className="gap-12 max-w-sm p-4 py-12 mx-auto flex min-h-[400px] w-full flex-col">
      <div className="gap-2 flex flex-col">
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

      <div className="gap-2 flex flex-col">
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
  )
}
