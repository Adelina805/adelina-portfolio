"use client";

import { useEffect, useState, useRef } from "react";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import FogBackground from "./FogBackground";
import { usePathname } from "next/navigation";

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  console.log("NavItem", { href, pathname });

  const isRoot = href === "/";
  const isActive = isRoot
    ? pathname === "/"
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-bold hover:line-through ${
        isActive ? "line-through" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // --- calculate box height ---
  const borderRef = useRef<HTMLDivElement>(null);
  const [railLength, setRailLength] = useState(0);

  useEffect(() => {
    function updateSize() {
      if (borderRef.current) {
        setRailLength(borderRef.current.offsetHeight);
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  // -------------

  function toggleDark(isDark: boolean) {
    setDark(isDark);
  }

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div
      className={`
        h-dvh p-[clamp(1rem,4vw,2rem)] relative overflow-hidden
        ${dark ? "text-white" : "text-black"}
      `}
    >

      {/* SHADER BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas>
          <FogBackground dark={dark} />
        </Canvas>
      </div>

      {/* CROSSFADE BACKGROUNDS */}
      <div
        className={`
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_center,#295DAA,#ffffff)]
          transition-opacity duration-700 ease-in-out
          ${dark ? "opacity-0" : "opacity-100"}
        `}
      />

      <div
        className={`
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_center,#295DAA,#000000)]
          transition-opacity duration-700 ease-in-out
          ${dark ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Wrapper */}
      <div className="relative h-full w-full">

        {/* border box */}
        <div
          ref={borderRef}
          className="relative h-full w-full border-2 overflow-hidden"
        >
          <main className="relative h-full overflow-auto">
            {children}
          </main>
        </div>

        {/* Vertical Side Rail */}
        <div
          className="absolute origin-left -left-2 flex flex-row -rotate-90 justify-between text-sm select-none z-50 pointer-events-auto px-7 py-4 gap-8"
          style={{ width: railLength + 50 }}
        >

          {/* Bottom Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleDark(false)}
              className={`${!dark ? "font-bold line-through" : "opacity-60"}`}
            >
              LIGHT
            </button>
            <button
              onClick={() => toggleDark(true)}
              className={`${dark ? "font-bold line-through" : "opacity-60"}`}
            >
              DARK
            </button>
          </div>

          {/* Top Nav */}
          <div className="flex items-center gap-4">
            <NavItem href="/">HOME</NavItem>
            <NavItem href="/about">ABOUT</NavItem>
            <NavItem href="/experience">EXPERIENCE</NavItem>
            <NavItem href="/projects">PROJECTS</NavItem>
            <NavItem href="/contact">CONTACT</NavItem>
          </div>

        </div>
      </div>
    </div>
  );
}