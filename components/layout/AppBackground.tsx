"use client";

/**
 * AppBackground Component
 *
 * A clean, reusable background layer that sits behind all content.
 * Uses React Bits components with fallback to Tailwind gradients.
 *
 * Features:
 * - Full screen coverage (fixed positioning)
 * - Non-interactive (pointer-events-none)
 * - Behind content (z-0)
 * - Smooth animations
 * - Performance optimized
 */

import React from "react";

// React Bits Component Import (Optional)
// Uncomment dan sesuaikan dengan komponen yang Anda pilih:
// import Noise from "@/components/react-bits/Noise-TS-TW";
// import MetaBalls from "@/components/react-bits/MetaBalls-TS-TW";

interface AppBackgroundProps {
  variant?: "gradient" | "dots" | "grid" | "noise" | "glow";
  opacity?: number;
  className?: string;
}

export function AppBackground({
  variant = "gradient",
  opacity = 0.5,
  className = "",
}: AppBackgroundProps) {
  // Jika Anda sudah install komponen React Bits, uncomment ini:
  // if (variant === "noise") {
  //   return <Noise className="fixed inset-0 -z-10 pointer-events-none" />;
  // }

  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {variant === "gradient" && <GradientBackground />}
      {variant === "dots" && <DotsBackground />}
      {variant === "grid" && <GridBackground />}
      {variant === "glow" && <GlowBackground />}
      {variant === "noise" && <NoiseBackground />}
    </div>
  );
}

// ============================================
// Background Variants (Tailwind Fallbacks)
// ============================================

function GradientBackground() {
  return (
    <div className="absolute inset-0">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-100 via-purple-50 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 animate-gradient-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-teal-100 via-transparent to-transparent dark:from-teal-950 opacity-70 animate-gradient-slower" />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-3xl" />
    </div>
  );
}

function DotsBackground() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 dark:opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(100, 100, 100, 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_100%)]" />
    </div>
  );
}

function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg h-128 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Overlay to reduce intensity */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-3xl" />
    </div>
  );
}

function NoiseBackground() {
  return (
    <div className="absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* CSS noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
