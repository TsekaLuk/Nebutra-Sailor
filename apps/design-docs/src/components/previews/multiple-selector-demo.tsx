import { MultipleSelector } from "@nebutra/ui/primitives";

export function MultipleSelectorDemo() {
    const OPTIONS = [
        { label: "next.js", value: "nextjs" },
        { label: "Vue", value: "vue" },
        { label: "Nuxt", value: "nuxt" },
        { label: "Svelte", value: "svelte" },
        { label: "SvelteKit", value: "sveltekit" },
        { label: "Remix", value: "remix" },
        { label: "Astro", value: "astro" },
        { label: "Angular", value: "angular" },
    ];

    return (
        <div className="w-full max-w-sm mx-auto p-8 flex flex-col gap-6 h-[400px]">
            <div className="space-y-2">
                <span className="text-sm font-medium">Frameworks</span>
                <MultipleSelector
                    defaultOptions={OPTIONS}
                    placeholder="Select frameworks..."
                    emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                            No results found.
                        </p>
                    }
                />
            </div>

            <div className="space-y-2">
                <span className="text-sm font-medium">Creatable Frameworks</span>
                <MultipleSelector
                    creatable
                    defaultOptions={OPTIONS}
                    placeholder="Select or create..."
                    emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                            No results found.
                        </p>
                    }
                />
            </div>
        </div>
    );
}
