"use client";

import { Search, Mail } from "lucide-react"

<div className="flex flex-col gap-4">
  {/* Search icon */}
  <Input prefix={<Search className="w-4 h-4 text-muted-foreground" />} placeholder="Search…" />

  {/* Mail icon */}
  <Input prefix={<Mail className="w-4 h-4 text-muted-foreground" />} type="email" placeholder="contact@nebutra.com" />
</div>

export function Input5Demo() {
  return (
    {/* Search icon */}
  <Input prefix={<span className="text-xs">🔍</span>} placeholder="Search…" />

  {/* Mail icon */}
  <Input prefix={<span className="text-xs">✉️</span>} type="email" placeholder="contact@nebutra.com" />
  );
}
