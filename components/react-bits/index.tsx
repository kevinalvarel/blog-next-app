/**
 * React Bits Components Wrapper
 *
 * File ini mengumpulkan semua import dari React Bits registry.
 * Jika komponen tidak tersedia, fallback akan digunakan.
 *
 * CATATAN PENTING:
 * - Nama komponen React Bits mungkin berbeda di project Anda
 * - Sesuaikan import sesuai dengan nama yang ada di registry
 * - Contoh nama umum: Aurora-TS-TW, Silk-TS-TW, DarkVeil-TS-TW, etc.
 */

import React from "react";

// ============================================
// 1. ANIMATED TEXT COMPONENT (untuk Hero)
// ============================================
// Coba import dari React Bits - sesuaikan nama jika berbeda
// Contoh komponen yang cocok: shimmer-text, gradient-text, animated-text
const AnimatedTextComponent: React.ComponentType<{
  children: React.ReactNode;
  className?: string;
}> | null = null;

// Uncomment dan sesuaikan dengan nama komponen Anda:
// try {
//   const { default: Component } = require("@/components/react-bits/shimmer-text");
//   AnimatedTextComponent = Component;
// } catch (_error) {
//   // Import gagal, akan pakai fallback
// }

// Fallback: Gradient Text dengan Tailwind
export const AnimatedHeroText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  if (AnimatedTextComponent) {
    const Component = AnimatedTextComponent as React.ComponentType<{
      children: React.ReactNode;
      className?: string;
    }>;
    return <Component className={className}>{children}</Component>;
  }

  // Fallback: Beautiful gradient text
  return (
    <h1
      className={`text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-gradient ${className}`}
    >
      {children}
    </h1>
  );
};

// ============================================
// 2. BACKGROUND COMPONENT (untuk Hero Section)
// ============================================
// Coba import dari React Bits
// Contoh komponen yang cocok: Aurora, DarkVeil, Silk, Dither
const BackgroundComponent: React.ComponentType<{ className?: string }> | null =
  null;

// Uncomment dan sesuaikan dengan nama komponen Anda:
// try {
//   const { default: Component } = require("@/components/react-bits/Aurora-TS-TW");
//   BackgroundComponent = Component;
// } catch (_error) {
//   // Import gagal, akan pakai fallback
// }

// Fallback: Subtle animated gradient background
export const AnimatedBackground: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  if (BackgroundComponent) {
    const Component = BackgroundComponent as React.ComponentType<{
      className?: string;
    }>;
    return <Component className={className} />;
  }

  // Fallback: CSS gradient animation
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 animate-gradient-slow" />
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

// ============================================
// 3. CARD GLOW EFFECT (untuk PostCard hover)
// ============================================
// Coba import glow/highlight effect dari React Bits
const CardGlowComponent: React.ComponentType<{
  children: React.ReactNode;
  className?: string;
}> | null = null;

// Uncomment dan sesuaikan dengan nama komponen Anda:
// try {
//   const { default: Component } = require("@/components/react-bits/card-glow");
//   CardGlowComponent = Component;
// } catch (_error) {
//   // Import gagal, akan pakai fallback
// }

// Wrapper untuk card dengan hover effect
export const GlowCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  if (CardGlowComponent) {
    const Component = CardGlowComponent as React.ComponentType<{
      children: React.ReactNode;
      className?: string;
    }>;
    return <Component className={className}>{children}</Component>;
  }

  // Fallback: Tailwind hover effect dengan border glow
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
      <div className="relative">{children}</div>
    </div>
  );
};

// ============================================
// CATATAN UNTUK MENGAKTIFKAN REACT BITS:
// ============================================
// 1. Cek komponen yang tersedia dengan: npx shadcn@latest view @react-bits
// 2. Install komponen yang diinginkan dengan: npx shadcn@latest add @react-bits/[component-name]
// 3. Uncomment dan sesuaikan import di atas dengan nama yang benar
// 4. Contoh komponen populer:
//    - Aurora-TS-TW (flowing aurora gradient)
//    - DarkVeil-TS-TW (subtle dark background)
//    - Silk-TS-TW (smooth waves background)
//    - Dither-TS-TW (retro dithered noise)
