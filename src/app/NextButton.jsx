"use client";

import Link from "next/link";
import { useTheme } from "./ThemeContext";

export default function NextButton({ href, label }) {
  const { dark } = useTheme();

  return (
    <Link
      href={href}
      className={`
        fixed
        right-[clamp(1rem,4vw,2rem)]
        bottom-[calc(clamp(1rem,4vw,2rem))]
        z-50
        px-5 py-3 font-semibold tracking-wide
        animate-pulse-subtle transition hover:scale-105
        ${dark ? "bg-black/20 text-white" : "bg-white/20 text-black"}
      `}
    >
      {label}
    </Link>
  );
}