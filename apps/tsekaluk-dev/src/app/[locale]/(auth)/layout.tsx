"use client";

import { DotPattern } from "@nebutra/ui/primitives";
import { Link } from "@/i18n/navigation";
import { Logo } from "@nebutra/brand";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center p-4 sm:p-8 bg-gray-50/50 dark:bg-[#0a0a0a]">
      {/* Background styling */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <DotPattern
          width={24}
          height={24}
          cr={0.8}
          className="text-gray-400/20 dark:text-gray-500/10 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
        />
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)]/10 blur-[120px]" />
        <div className="absolute top-[80%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Header Logo */}
      <div className="absolute top-8 left-8 z-20">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-6 w-auto" />
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
