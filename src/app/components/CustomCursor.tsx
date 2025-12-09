"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const update = () => {
      cursor.style.transform = `translate(${mouseX - 16}px, ${mouseY - 16}px)`;
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none fixed top-0 left-0 z-9999
        w-6 h-6 rounded-full bg-white
        mix-blend-difference backdrop-grayscale
      "
    />
  );
}