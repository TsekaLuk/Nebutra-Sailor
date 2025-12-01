"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, BaseStyles } from "@primer/react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { lightTheme, darkTheme, type ThemeMode } from "../theme";

// Filter function for styled-components to prevent unknown props from being passed to DOM
const shouldForwardProp = (propName: string, target: unknown) => {
  // Always allow valid HTML attributes
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  // For custom components, forward all props
  return true;
};

// ============================================
// Context
// ============================================

interface DesignSystemContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  resolvedMode: "light" | "dark";
}

const DesignSystemContext = createContext<DesignSystemContextValue | null>(null);

// ============================================
// Hook
// ============================================

export function useDesignSystem() {
  const context = useContext(DesignSystemContext);
  if (!context) {
    throw new Error("useDesignSystem must be used within DesignSystemProvider");
  }
  return context;
}

// ============================================
// Provider Props
// ============================================

export interface DesignSystemProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
  storageKey?: string;
  enableSystemPreference?: boolean;
}

// ============================================
// Provider Component
// ============================================

export function DesignSystemProvider({
  children,
  defaultMode = "auto",
  storageKey = "nebutra-theme-mode",
  enableSystemPreference = true,
}: DesignSystemProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);
  const [systemPreference, setSystemPreference] = useState<"light" | "dark">("light");

  // Detect system preference
  useEffect(() => {
    if (typeof window === "undefined" || !enableSystemPreference) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPreference(mediaQuery.matches ? "dark" : "light");

    const handler = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [enableSystemPreference]);

  // Load from storage
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(storageKey);
    if (stored && ["light", "dark", "auto"].includes(stored)) {
      setModeState(stored as ThemeMode);
    }
  }, [storageKey]);

  // Resolve actual mode
  const resolvedMode = useMemo(() => {
    if (mode === "auto") {
      return systemPreference;
    }
    return mode;
  }, [mode, systemPreference]);

  // Set mode with persistence
  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, newMode);
    }
  };

  // Toggle between light and dark
  const toggleMode = () => {
    setMode(resolvedMode === "light" ? "dark" : "light");
  };

  // Select theme based on resolved mode
  const theme = resolvedMode === "dark" ? darkTheme : lightTheme;

  // Context value
  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode,
      resolvedMode,
    }),
    [mode, resolvedMode]
  );

  // Apply data attribute for CSS
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", resolvedMode);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(resolvedMode);
    }
  }, [resolvedMode]);

  return (
    <DesignSystemContext.Provider value={contextValue}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider
          colorMode={resolvedMode === "dark" ? "night" : "day"}
          dayScheme="light"
          nightScheme="dark"
        >
          <BaseStyles>{children}</BaseStyles>
        </ThemeProvider>
      </StyleSheetManager>
    </DesignSystemContext.Provider>
  );
}
