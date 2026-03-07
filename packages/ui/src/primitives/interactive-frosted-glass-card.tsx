"use client";

import React, { useRef, useState } from "react";
import { MoveUpRight } from "lucide-react";

interface InteractiveFrostedGlassCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
}

export function InteractiveFrostedGlassCard({
    title,
    description,
    icon,
    className = "",
}: InteractiveFrostedGlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] ${className}`}
            style={{
                transform: isHovered
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 20}deg) rotateY(${-(mousePosition.x - 150) / 20}deg)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                transition: "transform 0.1s ease-out, border 0.3s ease",
            }}
        >
            {/* Noise Texture */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
                    <filter id="cardNoise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#cardNoise)" />
                </svg>
            </div>

            {/* Mouse Follow Glow */}
            <div
                className="pointer-events-none absolute -inset-px z-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
                <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-inner">
                        {icon}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                        <MoveUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                </div>

                <div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                        {title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
