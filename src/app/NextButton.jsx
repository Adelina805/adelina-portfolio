"use client";

import Link from "next/link";
import { useTheme } from "./ThemeContext"; // ⬅️ import the hook

export default function NextButton({ href, label }) {
  const { dark } = useTheme();

  return (
    <Link
      href={href}
      className={`
        fixed bottom-10 right-10 z-50
        px-5 py-3 font-semibold tracking-wide
        animate-pulse-subtle transition hover:scale-105 backdrop-blur
        ${dark ? "bg-black/80 text-white" : "bg-white/90 text-black"}
      `}
    >
      {label}
    </Link>
  );
}