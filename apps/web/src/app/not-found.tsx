// Simple 404 page for Next.js (App Router)
"use client";
import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-wide text-gray-500">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-sm text-gray-600">
          The page you are looking for doesn&apos;t exist or was moved.
        </p>
      </div>
    </main>
  );
}
