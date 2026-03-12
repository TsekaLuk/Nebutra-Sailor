"use client";

import * as React from "react";
import { Progress } from "@nebutra/ui/primitives";

export function Progress1Demo() {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(65), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full">
            <Progress value={progress} className="w-full" />
        </div>
    );
}
