"use client";

import { Building2, Home, Settings, Users } from "lucide-react";

export function SidebarDemo() {
    return (
        <div className="w-full h-[400px] border rounded-xl overflow-hidden bg-background flex">
            {/* Mock Sidebar */}
            <div className="w-64 border-r bg-muted/30 flex flex-col h-full">
                <div className="p-4 border-b flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">N</div>
                    <span className="font-semibold text-sm">Nebutra App</span>
                </div>

                <div className="flex-1 p-3 space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md">
                        <Home className="w-4 h-4" />
                        Dashboard
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-md transition-colors">
                        <Users className="w-4 h-4" />
                        Team
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-md transition-colors">
                        <Building2 className="w-4 h-4" />
                        Projects
                    </button>
                </div>

                <div className="p-3 border-t">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-md transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 bg-muted/10">
                <div className="h-8 w-48 bg-muted rounded-md mb-6 animate-pulse" />
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-24 bg-card border rounded-lg shadow-sm" />
                    <div className="h-24 bg-card border rounded-lg shadow-sm" />
                    <div className="h-24 bg-card border rounded-lg shadow-sm" />
                </div>
                <div className="h-48 w-full bg-card border rounded-lg shadow-sm animate-pulse" />
            </div>
        </div>
    );
}
