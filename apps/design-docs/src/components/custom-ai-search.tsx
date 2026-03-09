'use client';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/search';
import { MessageCircleIcon } from 'lucide-react';
import { buttonVariants } from '@nebutra/ui/primitives';
import { cn } from "@/lib/cn";

export function CustomAISearch() {
    return (
        <AISearch>
            <AISearchPanel />
            <AISearchTrigger
                position="float"
                className={cn(
                    buttonVariants({
                        variant: 'secondary',
                        className: 'text-fd-muted-foreground rounded-2xl',
                    }),
                )}
            >
                <MessageCircleIcon className="size-4.5" />
                Ask AI
            </AISearchTrigger>
        </AISearch>
    );
}
