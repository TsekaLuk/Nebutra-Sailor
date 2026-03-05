"use client";

import { useEffect } from "react";
import { AnimateIn } from "@nebutra/ui/components";
import { ErrorState } from "@nebutra/design-system/components";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AnalyticsError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Forward to error reporting service when available
    console.error("[Analytics] Page error:", error);
  }, [error]);

  return (
    <section
      className="mx-auto w-full max-w-7xl"
      role="alert"
      aria-label="Analytics error"
    >
      <AnimateIn preset="fadeUp">
        <ErrorState
          title="Failed to load analytics"
          description={
            error.message || "An unexpected error occurred. Please try again."
          }
          action={{ label: "Try again", onClick: reset }}
        />
      </AnimateIn>
    </section>
  );
}
