"use client";

import { Link } from "@/i18n/navigation";
import { AnimateIn } from "@nebutra/ui/components";

export default function LocaleError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto grid min-h-[100dvh] max-w-3xl place-items-center px-6 py-32 text-center">
      <AnimateIn preset="fade">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulse-gentle { 0%,100% { opacity: 0.4; } 50% { opacity: 0.2; } }
        `}} />
        <div className="w-16 h-16 mx-auto mb-4" style={{ animation: "pulse-gentle 3s ease-in-out infinite" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-gray-300 dark:text-gray-700">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <circle cx="12" cy="16" r="0.5" fill="currentColor" />
          </svg>
        </div>
        <p className="font-serif italic text-8xl text-gray-200 dark:text-gray-800">
          Error
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Something went wrong.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-block rounded-full border border-gray-300 dark:border-gray-700 px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block rounded-full bg-gray-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-gray-900 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Go home
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
