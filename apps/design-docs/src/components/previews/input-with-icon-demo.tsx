"use client";

import { Input } from "@nebutra/ui/primitives";
import { Search, Mail } from "lucide-react";

export function InputWithIconDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Search icon */}
      <Input prefix={<Search className="w-4 h-4 text-muted-foreground" />} placeholder="Search…" />

      {/* Mail icon */}
      <Input prefix={<Mail className="w-4 h-4 text-muted-foreground" />} type="email" placeholder="contact@nebutra.com" />
    </div>
  );
}
