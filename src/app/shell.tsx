"use client";

import { useEffect, useState } from "react";
import React, { ReactNode } from "react";
import Link from "next/link";

function NavItem({ href, children }: { href: string; children: ReactNode}) {
  return (
    <Link href={href} className="font-bold text-[1.3rem] hover:line-through">
      {children}
    </Link>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // no more fading state – just flip dark
  function toggleDark(isDark: boolean) {
    setDark(isDark);
  }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div
      className={`
        h-dvh p-[clamp(1rem,4vw,2rem)] relative overflow-hidden
        ${dark ? "text-white" : "text-black"}
      `}
    >
      {/* CROSSFADE BACKGROUNDS */}
      {/* Light background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,#295DAA,#ffffff)]
          transition-opacity duration-500 ease-in-out
          ${dark ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* Dark background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,#295DAA,#000000)]
          transition-opacity duration-500 ease-in-out
          ${dark ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* border box */}
      <div className="relative h-full w-full border-2 overflow-hidden">
        {/* content … */}
        <div className="grid h-full grid-rows-[2rem_1fr]">
          {/* HEADER */}
          <header className={`relative h-10 flex items-center justify-end px-4 sm:px-10 border-b-2`}>
            {/* Mobile button */}
            <button
              className="sm:hidden p-2 pr-0 focus:outline-none"
              aria-label="Open menu"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            {/* Desktop nav */}
            <nav className="hidden sm:flex w-full items-center justify-between">
              <NavItem href="/">HOME</NavItem>
              <NavItem href="/about">ABOUT</NavItem>
              <NavItem href="/experience">EXPERIENCE</NavItem>
              <NavItem href="/projects">PROJECTS</NavItem>
              <NavItem href="/contact">CONTACT</NavItem>
            </nav>

            {/* Mobile dropdown */}
            {open && (
              <div className={`absolute top-full right-0 w-full border-b-2 px-4 flex flex-col sm:hidden z-50`} >
                <NavItem href="/">HOME</NavItem>
                <NavItem href="/about">ABOUT</NavItem>
                <NavItem href="/experience">EXPERIENCE</NavItem>
                <NavItem href="/projects">PROJECTS</NavItem>
                <NavItem href="/contact">CONTACT</NavItem>
              </div>
            )}
          </header>

          {/* PAGE CONTENT */}
          <main className="relative h-full overflow-auto">
            {children}
          </main>
        </div>
      </div>

      {/* Dark/Light toggle */}
      <div className="absolute left-[clamp(1.1rem,4vw,2rem)] bottom-[clamp(1.1rem,4vw,2rem)] origin-bottom-left -rotate-90 flex items-center gap-2 text-sm select-none z-50">
        <button
          onClick={() => toggleDark(false)}
          className={`${!dark ? "font-bold underline" : "opacity-60"}`}
        >
          Light
        </button>

        <button
          onClick={() => toggleDark(true)}
          className={`${dark ? "font-bold underline" : "opacity-60"}`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}