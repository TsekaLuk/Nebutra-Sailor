"use client";

import { Mail, ArrowRight } from "lucide-react"

<div className="flex gap-3">
  <Button prefix={<Mail className="w-4 h-4" />}>Login with Email</Button>
  <Button suffix={<ArrowRight className="w-4 h-4" />}>Continue</Button>
</div>

export function Button3Demo() {
  return (
    <Button prefix={<span>✉️</span>}>Login with Email</Button>
  <Button suffix={<span>➔</span>}>Continue</Button>
  );
}
