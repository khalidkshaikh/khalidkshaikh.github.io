"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  scheme?: "default" | "electric" | "hot" | "cyberpunk" | "gold" | "minimal";
  className?: string;
}

const schemes = {
  default: { start: "#8B5CF6", end: "#0ABFBC" },
  electric: { start: "#6366F1", end: "#22D3EE" },
  hot: { start: "#EC4899", end: "#F97316" },
  cyberpunk: { start: "#00FF88", end: "#FF0080" },
  gold: { start: "#F59E0B", end: "#EF4444" },
  minimal: { start: "#374151", end: "#1F2937" },
};

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <Image 
      src="/ks-logo.png" 
      alt="KS Logo" 
      width={size} 
      height={size} 
      className={className}
    />
  );
}

// Usage examples:
// <Logo /> - Default purple-cyan
// <Logo scheme="hot" /> - Pink to orange
// <Logo scheme="cyberpunk" /> - Neon green to magenta
// <Logo scheme="gold" /> - Gold to red
// <Logo scheme="minimal" /> - Dark with white K
