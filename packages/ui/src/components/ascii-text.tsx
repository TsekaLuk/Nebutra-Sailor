"use client";

import React from "react";
import { useAsciiText, slant } from "react-ascii-text";

interface AsciiTextProps {
    text: string;
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    font?: any;
}

export function AsciiText({ text, className = "", font = slant }: AsciiTextProps) {
    const asciiTextRef = useAsciiText({
        font: font,
        text: text,
    });

    return (
        <pre
            ref={asciiTextRef as React.RefObject<HTMLPreElement | null>}
            className={`font-mono leading-none m-0 p-0 ${className}`}
        />
    );
}
