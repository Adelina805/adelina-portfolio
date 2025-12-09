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
        right-[clamp(1.5rem,4.5vw,2.5rem)]
        bottom-[calc(clamp(1.5rem,4.5vw,2.5rem))]
        z-50 px-5 py-3 font-semibold tracking-wide transition hover:scale-105
        ${dark ? "bg-black/80 text-white" : "bg-white/80 text-black"}
      `}
    >
      {label}
    </Link>
  );
}