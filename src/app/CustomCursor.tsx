"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
        pointer-events-none fixed top-0 left-0 z-[9999]
        w-6 h-6 rounded-full bg-white
        mix-blend-difference
        backdrop-grayscale
        transition-transform duration-75 ease-linear
      "
      style={{
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
      }}
    />
  );
}