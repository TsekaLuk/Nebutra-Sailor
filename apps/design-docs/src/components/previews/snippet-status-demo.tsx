import { SnippetStatus } from "@nebutra/ui/primitives";

export function SnippetStatusDemo() {
  return (
    <div className="max-w-sm px-4 py-8 w-full">
      <SnippetStatus text="npm install @nebutra/ui" />
    </div>
  );
}
