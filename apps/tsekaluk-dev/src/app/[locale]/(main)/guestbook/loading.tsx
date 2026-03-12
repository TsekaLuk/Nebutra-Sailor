export default function GuestbookLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-16 animate-pulse">
        <div className="h-4 w-24 rounded bg-gray-100 dark:bg-gray-800 mb-3" />
        <div className="h-12 w-64 rounded bg-gray-100 dark:bg-gray-800 mb-4" />
        <div className="h-5 w-80 rounded bg-gray-100 dark:bg-gray-800" />
      </div>
      <div className="columns-1 sm:columns-2 gap-4 space-y-4 animate-pulse">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-2xl border border-gray-100 dark:border-gray-800 p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800" />
              <div>
                <div className="h-3.5 w-24 rounded bg-gray-100 dark:bg-gray-800 mb-1.5" />
                <div className="h-3 w-16 rounded bg-gray-100 dark:bg-gray-800" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-gray-100 dark:bg-gray-800" />
              <div className="h-3 w-4/5 rounded bg-gray-100 dark:bg-gray-800" />
              <div className="h-3 w-3/5 rounded bg-gray-100 dark:bg-gray-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
