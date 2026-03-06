"use client";

import { Button } from "@nebutra/ui/primitives";
import { Mail, ArrowRight } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button prefix={<Mail />}>With Icon</Button>
      <Button suffix={<ArrowRight />}>Continue</Button>
      <Button loading>Loading</Button>
    </div>
  );
}
