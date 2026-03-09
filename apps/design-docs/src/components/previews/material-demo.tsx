import { Material } from "@nebutra/ui/primitives";
import { User, Settings, LogOut, Bell } from "lucide-react";

export function MaterialDemo() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-12 flex flex-col md:flex-row gap-8 items-start bg-secondary/30 rounded-xl min-h-[400px]">

            {/* Card Material */}
            <Material type="card" className="flex-1 w-full p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-lg">Card Elevation</h3>
                <p className="text-sm text-muted-foreground w-full">
                    Used for page sections and standard container surfaces. Has a subtle lift from the background.
                </p>
                <div className="h-32 bg-muted/50 rounded-md border border-dashed flex items-center justify-center text-muted-foreground mt-4">
                    Content Area
                </div>
            </Material>

            {/* Menu Material */}
            <Material type="menu" className="w-64 flex-shrink-0 flex flex-col py-2 border">
                <div className="px-4 py-3 border-b">
                    <h3 className="font-medium text-sm">Menu Elevation</h3>
                    <p className="text-xs text-muted-foreground mt-1">Used for dropdowns</p>
                </div>
                <div className="flex flex-col p-2 space-y-1">
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        <User className="w-4 h-4" /> Profile
                    </button>
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        <Settings className="w-4 h-4" /> Settings
                    </button>
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        <Bell className="w-4 h-4" /> Notifications
                    </button>
                    <div className="h-px bg-border my-1 mx-2" />
                    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-left text-destructive hover:bg-destructive/10 rounded-md transition-colors">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </Material>

            {/* Modal Material */}
            <div className="flex-1 w-full space-y-4 hidden lg:block">
                <div className="text-sm font-medium">Modal Elevation</div>
                <p className="text-xs text-muted-foreground">Used for dialogs and floating focus areas.</p>
                <Material type="modal" className="w-full p-6 border shadow-2xl relative z-10">
                    <div className="w-full space-y-4">
                        <h3 className="font-bold text-lg">Confirm Action</h3>
                        <p className="text-sm text-muted-foreground">
                            Are you sure you want to proceed with this action? This cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3 pt-4">
                            <button className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-accent transition-colors">Cancel</button>
                            <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Confirm</button>
                        </div>
                    </div>
                </Material>
            </div>

        </div>
    );
}
