"use client";

import { useId } from "react";
import {
    Puzzle,
    Component,
    Workflow,
    BrainCircuit,
    Database,
    Settings
} from "lucide-react";

const TECHNOLOGIES = [
    { name: "Next.js", icon: <Puzzle className="h-5 w-5" /> },
    { name: "React 19", icon: <Component className="h-5 w-5" /> },
    { name: "Tailwind v4", icon: <Settings className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Workflow className="h-5 w-5" /> },
    { name: "Python", icon: <Database className="h-5 w-5" /> },
    { name: "PyTorch", icon: <BrainCircuit className="h-5 w-5" /> },
];

export function TechMarquee() {
    const id = useId();

    return (
        <section className="mx-auto max-w-7xl px-6 py-12 relative z-30">
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-white/40 dark:bg-gray-900/40 border-gray-200/60 dark:border-gray-700/60 border rounded-3xl p-4 md:p-6 backdrop-blur-md relative">
                <div className="flex flex-col md:flex-row gap-4 items-stretch">

                    <div className="flex md:w-64 rounded-xl p-4 items-center justify-center text-center md:text-left bg-white/50 dark:bg-gray-900/50 border border-gray-100/50 dark:border-gray-800/50 shrink-0">
                        <p className="text-base md:text-lg leading-snug font-normal text-gray-800 dark:text-gray-200 tracking-tight">
                            Technologies &amp; <br className="hidden md:block" /> Platforms
                        </p>
                    </div>

                    <div
                        className="flex-1 overflow-hidden bg-gray-50/50 dark:bg-gray-800/50 border-gray-100/80 dark:border-gray-700/80 border rounded-2xl py-6 px-0 shadow-inner relative"
                        style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
                    >
                        <style dangerouslySetInnerHTML={{
                            __html: `
              @keyframes scrollLogos-${id} {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 1rem)); }
              }
              .logo-scroll-container-${id} {
                display: flex;
                width: max-content;
                animation: scrollLogos-${id} 25s linear infinite;
                will-change: transform;
              }
              .logo-scroll-container-${id}:hover {
                animation-play-state: paused;
              }
            `}} />

                        <div className={`logo-scroll-container-${id}`}>
                            {/* Set 1 */}
                            <div className="flex gap-4 shrink-0 pl-4 pr-4">
                                {TECHNOLOGIES.map((tech) => (
                                    <div key={`${tech.name}-1`} className="rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900 p-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.1)] w-56 flex items-center gap-4 hover:border-lime-200 dark:hover:border-lime-700 transition-colors cursor-default">
                                        <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/80 w-10 h-10 flex items-center justify-center shrink-0 text-gray-900 dark:text-gray-100">
                                            {tech.icon}
                                        </div>
                                        <span className="text-base font-normal tracking-tight text-gray-900 dark:text-gray-100">{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Set 2 (Duplicate for loop) */}
                            <div className="flex gap-4 shrink-0 pr-4">
                                {TECHNOLOGIES.map((tech) => (
                                    <div key={`${tech.name}-2`} className="rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900 p-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(0,0,0,0.1)] w-56 flex items-center gap-4 hover:border-lime-200 dark:hover:border-lime-700 transition-colors cursor-default">
                                        <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/80 w-10 h-10 flex items-center justify-center shrink-0 text-gray-900 dark:text-gray-100">
                                            {tech.icon}
                                        </div>
                                        <span className="text-base font-normal tracking-tight text-gray-900 dark:text-gray-100">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
