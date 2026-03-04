"use client";
import { HeroSelect, HeroSelectItem } from "@nebutra/custom-ui/primitives";
export function SelectDemo() {
  return (
    <div className="max-w-xs">
      <HeroSelect label="Framework" placeholder="Select a framework">
        <HeroSelectItem key="react">React</HeroSelectItem>
        <HeroSelectItem key="vue">Vue</HeroSelectItem>
        <HeroSelectItem key="svelte">Svelte</HeroSelectItem>
        <HeroSelectItem key="angular">Angular</HeroSelectItem>
      </HeroSelect>
    </div>
  );
}
