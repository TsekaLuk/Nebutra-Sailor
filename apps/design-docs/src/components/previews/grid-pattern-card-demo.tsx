import { GridPatternCard, GridPatternCardBody } from "@nebutra/ui/primitives";
import { Button } from "@nebutra/ui/primitives";

export function GridPatternCardDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto p-4 md:p-8">

            <GridPatternCard gradientClassName="from-blue-50/90 via-blue-50/40 to-blue-50/10 dark:from-sky-950/90 dark:via-sky-950/40 dark:to-sky-950/10">
                <GridPatternCardBody className="flex flex-col gap-4 h-[250px] justify-between">
                    <div>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-semibold mb-4 border border-blue-200 dark:border-blue-800">
                            New Output
                        </span>
                        <h3 className="text-xl font-bold tracking-tight mb-2">Build faster with AI</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Generate entire applications, UI components, and API routes using natural language.
                        </p>
                    </div>
                    <div>
                        <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur">
                            Try it out
                        </Button>
                    </div>
                </GridPatternCardBody>
            </GridPatternCard>

            <GridPatternCard>
                <GridPatternCardBody className="flex flex-col gap-4 h-[250px] items-center justify-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Financial Dashboard</h3>
                    <p className="text-muted-foreground text-sm max-w-[250px]">
                        Connect your bank accounts and manage your expenses with intelligent insights.
                    </p>
                </GridPatternCardBody>
            </GridPatternCard>

        </div>
    );
}
