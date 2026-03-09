import { Loader } from "@nebutra/ui/primitives";

export function LoaderDemo() {
    return (
        <div className="w-full max-w-sm px-4 py-8 flex items-center justify-center space-x-4">
            <Loader />
            <Loader variant="dots" size="lg" />
            <Loader variant="loading-dots" text="Processing" />
        </div>
    )
}
