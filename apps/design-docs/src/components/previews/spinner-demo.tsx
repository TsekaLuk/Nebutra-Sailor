import { Spinner } from "@nebutra/ui/primitives";

export function SpinnerDemo() {
    return (
        <div className="w-full max-w-sm px-4 py-8 flex items-center justify-center space-x-4">
            <Spinner />
            <Spinner variant="ring" size={32} />
            <Spinner variant="infinite" className="text-primary" />
        </div>
    )
}
