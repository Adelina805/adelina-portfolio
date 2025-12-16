"use client";

import { useEffect, useState, useRef } from "react";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import FogBackground from "./components/FogBackground";
import CustomCursor from "./components/CustomCursor";
import ThemeContext from "./components/ThemeContext";
import { Perf } from "r3f-perf";

/* --------------------------
     NAV ITEM
   -------------------------- */
function NavItem({ href, children }: { href: string; children: ReactNode }) {
  const targetId = href.replace("/", "") || "home";

  const [activeSection, setActiveSection] = useState("home");

  // Observe scroll position and update active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // section must be 50% in view
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  const isActive = activeSection === targetId;

  return (
    <button
      onClick={handleClick}
      className={`
        opacity-60 hover:line-through transition-all
        ${isActive ? "font-bold line-through opacity-100" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 0);
    const removeTimer = setTimeout(() => setIsLoading(false), 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

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
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <div
        className={`
          h-dvh p-[clamp(1rem,4vw,2rem)] relative overflow-hidden
          ${dark ? "text-white" : "text-black"}
        `}
      >
        {/* LOADING SCREEN */}
        {isLoading && (
          <div
            className={`
              fixed inset-0 z-9999 flex flex-col items-center justify-center
              bg-white text-black
              transition-opacity duration-300
              ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
          >
            <h1 className="text-xl mb-6 tracking-widest">
              ADELINA MARTINEZ
            </h1>

            <div className="w-55 h-1 bg-black/20 overflow-hidden">
              <div className="h-full bg-black animate-loading-bar"></div>
            </div>
          </div>
        )}

        {/* CUSTOM CURSOR */}
        <CustomCursor />

        {/* SHADER BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <Canvas>
            {/* <Perf position="top-left" minimal /> */}
            <FogBackground dark={dark} />
          </Canvas>
        </div>

        {/* Wrapper */}
        <div className="relative h-full w-full">
          {/* border box */}
          <div
            ref={borderRef}
            className="relative h-full w-full border-2 overflow-hidden"
          >
            {/* --------------------------
                MAIN WRAPPER
               -------------------------- */}
            <main
              className="
                relative h-full overflow-auto
                snap-y snap-mandatory
                fade-enter
              "
            >
              {children}
            </main>
          </div>

          {/* Vertical Side Rail LEFT */}
          <div
            className="absolute origin-left -left-2 flex flex-row -rotate-90 justify-between text-sm select-none z-50 pointer-events-auto px-7 py-4 gap-8"
            style={{ width: railLength + 50 }}
          >
            {/* Bottom Toggle */}
            <div className="flex items-center gap-4 hover:line-through">
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
              <NavItem href="/contact">CONTACT</NavItem>
              <NavItem href="/work">WORK</NavItem>
              <NavItem href="/experience">EXPERIENCE</NavItem>
              <NavItem href="/about">ABOUT</NavItem>
              <NavItem href="/">HOME</NavItem>
            </div>
          </div>

          {/* Vertical Side Rail RIGHT */}
          <div
            className="absolute origin-right -right-2 flex flex-row rotate-90 justify-between text-sm select-none z-50 pointer-events-auto px-7 py-4 gap-8"
            style={{ width: railLength + 50 }}
          >
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="opacity-60 hover:line-through line-through"
              >
                ADELINA MARTINEZ
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:adelina.martinez805@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:line-through"
              >
                MAIL
              </a>
              <a
                href="https://www.linkedin.com/in/adelina-martinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:line-through"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/Adelina805"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:line-through"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}