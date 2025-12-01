"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper
 * Includes HeroUI for component library support
 */
export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
