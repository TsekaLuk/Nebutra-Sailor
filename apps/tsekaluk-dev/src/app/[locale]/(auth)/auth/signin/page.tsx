"use client";

import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { AnimateIn } from "@nebutra/ui/components";
import { Link } from "@/i18n/navigation";
import { Github, ArrowLeft } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Eye components                                                     */
/* ------------------------------------------------------------------ */

function Pupil({
  size = 12,
  maxDistance = 5,
  color = "#2D2D2D",
}: {
  size?: number;
  maxDistance?: number;
  color?: string;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const pos = (() => {
    if (!ref.current) return { x: 0, y: 0 };
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = mouse.x - cx;
    const dy = mouse.y - cy;
    const d = Math.min(Math.sqrt(dx ** 2 + dy ** 2), maxDistance);
    const a = Math.atan2(dy, dx);
    return { x: Math.cos(a) * d, y: Math.sin(a) * d };
  })();

  return (
    <div
      ref={ref}
      className="rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
}

function EyeBall({
  size = 48,
  pupilSize = 16,
  maxDistance = 10,
  eyeColor = "white",
  pupilColor = "#2D2D2D",
  isBlinking = false,
}: {
  size?: number;
  pupilSize?: number;
  maxDistance?: number;
  eyeColor?: string;
  pupilColor?: string;
  isBlinking?: boolean;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const pos = (() => {
    if (!ref.current) return { x: 0, y: 0 };
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = mouse.x - cx;
    const dy = mouse.y - cy;
    const d = Math.min(Math.sqrt(dx ** 2 + dy ** 2), maxDistance);
    const a = Math.atan2(dy, dx);
    return { x: Math.cos(a) * d, y: Math.sin(a) * d };
  })();

  return (
    <div
      ref={ref}
      className="rounded-full flex items-center justify-center transition-all duration-150"
      style={{
        width: size,
        height: isBlinking ? 2 : size,
        backgroundColor: eyeColor,
        overflow: "hidden",
      }}
    >
      {!isBlinking && (
        <div
          className="rounded-full"
          style={{
            width: pupilSize,
            height: pupilSize,
            backgroundColor: pupilColor,
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Character scene                                                    */
/* ------------------------------------------------------------------ */

function CharacterScene() {
  const [blinkA, setBlinkA] = useState(false);
  const [blinkB, setBlinkB] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const purpleRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Blink loops
  useEffect(() => {
    const schedule = (setter: (v: boolean) => void): ReturnType<typeof setTimeout> => {
      const t = setTimeout(() => {
        setter(true);
        setTimeout(() => {
          setter(false);
          schedule(setter);
        }, 150);
      }, Math.random() * 4000 + 3000);
      return t;
    };
    const tA = schedule(setBlinkA);
    const tB = schedule(setBlinkB);
    return () => {
      clearTimeout(tA);
      clearTimeout(tB);
    };
  }, []);

  const lean = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return 0;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    return Math.max(-6, Math.min(6, -(mouse.x - cx) / 120));
  };

  const faceOffset = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return { x: 0, y: 0 };
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 3;
    return {
      x: Math.max(-15, Math.min(15, (mouse.x - cx) / 20)),
      y: Math.max(-10, Math.min(10, (mouse.y - cy) / 30)),
    };
  };

  const pf = faceOffset(purpleRef);
  const bf = faceOffset(blackRef);
  const of_ = faceOffset(orangeRef);
  const yf = faceOffset(yellowRef);

  return (
    <div className="relative" style={{ width: 460, height: 340 }}>
      {/* Purple — tall back */}
      <div
        ref={purpleRef}
        className="absolute bottom-0 transition-transform duration-700 ease-in-out"
        style={{
          left: 60,
          width: 150,
          height: 340,
          backgroundColor: "var(--color-accent)",
          borderRadius: "10px 10px 0 0",
          zIndex: 1,
          transform: `skewX(${lean(purpleRef)}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="absolute flex gap-7 transition-all duration-200"
          style={{ left: 38 + pf.x, top: 35 + pf.y }}
        >
          <EyeBall size={16} pupilSize={6} maxDistance={4} isBlinking={blinkA} />
          <EyeBall size={16} pupilSize={6} maxDistance={4} isBlinking={blinkA} />
        </div>
      </div>

      {/* Black — medium middle */}
      <div
        ref={blackRef}
        className="absolute bottom-0 transition-transform duration-700 ease-in-out"
        style={{
          left: 200,
          width: 100,
          height: 260,
          backgroundColor: "#2D2D2D",
          borderRadius: "8px 8px 0 0",
          zIndex: 2,
          transform: `skewX(${lean(blackRef)}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="absolute flex gap-5 transition-all duration-200"
          style={{ left: 22 + bf.x, top: 28 + bf.y }}
        >
          <EyeBall size={14} pupilSize={5} maxDistance={4} isBlinking={blinkB} />
          <EyeBall size={14} pupilSize={5} maxDistance={4} isBlinking={blinkB} />
        </div>
      </div>

      {/* Orange — dome front left */}
      <div
        ref={orangeRef}
        className="absolute bottom-0 transition-transform duration-700 ease-in-out"
        style={{
          left: 0,
          width: 200,
          height: 170,
          backgroundColor: "#FF9B6B",
          borderRadius: "100px 100px 0 0",
          zIndex: 3,
          transform: `skewX(${lean(orangeRef)}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="absolute flex gap-7 transition-all duration-200"
          style={{ left: 68 + of_.x, top: 75 + of_.y }}
        >
          <Pupil size={10} maxDistance={5} />
          <Pupil size={10} maxDistance={5} />
        </div>
      </div>

      {/* Yellow — rounded front right */}
      <div
        ref={yellowRef}
        className="absolute bottom-0 transition-transform duration-700 ease-in-out"
        style={{
          left: 260,
          width: 120,
          height: 195,
          backgroundColor: "#E8D754",
          borderRadius: "60px 60px 0 0",
          zIndex: 4,
          transform: `skewX(${lean(yellowRef)}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <div
          className="absolute flex gap-5 transition-all duration-200"
          style={{ left: 40 + yf.x, top: 35 + yf.y }}
        >
          <Pupil size={10} maxDistance={5} />
          <Pupil size={10} maxDistance={5} />
        </div>
        <div
          className="absolute h-[3px] w-16 rounded-full bg-[#2D2D2D] transition-all duration-200"
          style={{ left: 30 + yf.x, top: 75 + yf.y }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Provider icons                                                     */
/* ------------------------------------------------------------------ */

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function LinuxDoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Providers                                                          */
/* ------------------------------------------------------------------ */

const PROVIDERS = [
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    className:
      "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200",
  },
  {
    id: "google",
    label: "Google",
    icon: GoogleIcon,
    className:
      "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700",
  },
  {
    id: "linuxdo",
    label: "Linux DO",
    icon: LinuxDoIcon,
    className:
      "bg-[#0a84ff] text-white hover:bg-[#0070e0] dark:bg-[#0a84ff] dark:hover:bg-[#0070e0]",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SignInPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — animated characters */}
      <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-12">
        <div className="relative z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-white transition-opacity hover:opacity-80">
            <img
              src="/images/logo-mono.svg"
              alt=""
              className="h-6 w-6 invert"
            />
            <span className="font-serif italic">Tseka</span>
          </Link>
        </div>

        <div className="relative z-20 flex items-end justify-center">
          <CharacterScene />
        </div>

        <div className="relative z-20 text-sm text-gray-500">
          <p>Sign in to leave messages, chat with my Soul, and more.</p>
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--color-accent-shadow),transparent_60%)]" />
      </div>

      {/* Right — OAuth buttons */}
      <div className="flex items-center justify-center p-8 bg-[var(--page-bg)]">
        <AnimateIn preset="fade">
          <div className="w-full max-w-sm text-center">
            {/* Mobile logo */}
            <Link href="/" className="lg:hidden inline-flex items-center justify-center gap-2 text-lg font-semibold mb-12 transition-opacity hover:opacity-80">
              <img
                src="/images/logo-mono.svg"
                alt=""
                className="h-6 w-6 dark:invert"
              />
              <span className="font-serif italic">Tseka</span>
            </Link>

            <h1 className="font-serif italic text-4xl text-gray-900 dark:text-white">
              Sign in
            </h1>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Choose a provider to continue.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {PROVIDERS.map(({ id, label, icon: Icon, className }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => signIn(id, { callbackUrl: "/" })}
                  className={`inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 ${className}`}
                >
                  <Icon className="h-4 w-4" />
                  Sign in with {label}
                </button>
              ))}
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
