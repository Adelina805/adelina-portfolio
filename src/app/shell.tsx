"use client";

import { useState } from "react";
import Link from "next/link";

function NavItem({ href, children }: { href: string; children: any }) {
  return (
    <Link href={href} className="font-bold text-[1.3rem] hover:line-through">
      {children}
    </Link>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} h-dvh p-8 relative`}>

      {/* Dark/Light toggle */}
      <div className="absolute bottom-9 left-8 origin-bottom-left -rotate-90 flex items-center gap-2 text-sm select-none">
        <button
          onClick={() => setDark(false)}
          className={`${!dark ? "font-bold underline" : "opacity-60"} cursor-pointer`}
        >
          Light
        </button>

        <span>|</span>

        <button
          onClick={() => setDark(true)}
          className={`${dark ? "font-bold underline" : "opacity-60"} cursor-pointer`}
        >
          Dark
        </button>
      </div>

      {/* border box */}
      <div className="h-full w-full border-2 overflow-hidden">
        <div className="grid h-full grid-rows-[2rem_1fr]">

          {/* HEADER */}
          <header className={`relative h-10 flex items-center justify-end px-4 sm:px-10 border-b-2 ${ dark ? "bg-black" : "bg-white"}`}>
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
              <div className={`absolute top-full right-0 w-full border-b-2 px-4 flex flex-col sm:hidden ${dark ? "bg-black" : "bg-white"}`}>
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

    </div>
  );
}