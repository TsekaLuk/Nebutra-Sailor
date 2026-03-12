import { Link } from "@/i18n/navigation";
import { AnimateIn } from "@nebutra/ui/components";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <AnimateIn preset="fade">
        <p className="font-serif italic text-8xl text-gray-200 dark:text-gray-800">
          404
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Page not found.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gray-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-gray-900 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          Go home
        </Link>
      </AnimateIn>
    </section>
  );
}
