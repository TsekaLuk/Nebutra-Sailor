import { SnippetStatus } from "@nebutra/ui/primitives";

export function SnippetStatusDemo() {
    return (
        <div className="w-full max-w-sm px-4 py-8">
            <SnippetStatus text="npm install @nebutra/ui" />
        </div>
    )
}
