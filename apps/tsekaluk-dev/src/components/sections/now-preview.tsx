import Link from "next/link";
import { NowEntry } from "./now-entry";

export function NowPreview() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 border-t border-gray-100">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          What I&apos;m doing <span className="font-serif italic">now</span>
        </h2>
        <Link
          href="/now"
          className="text-sm text-gray-400 transition-colors hover:text-gray-600"
        >
          Full log &rarr;
        </Link>
      </div>

      <NowEntry preview />
    </section>
  );
}
