"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { useTheme } from "./ThemeContext";
import gsap from "gsap";

export default function AdelinaCarousel() {
  const images = useMemo(
    () => [
      "/adelina/adelina-1.jpg",
      "/adelina/adelina-2.jpg",
      "/adelina/adelina-3.jpg",
      "/adelina/adelina-4.jpg",
    ],
    []
  );

  const { dark } = useTheme();
  const [index, setIndex] = useState(0);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // interaction / animation guards
  const isDraggingRef = useRef(false);
  const isAnimatingRef = useRef(false);

  // drag state
  const pointerIdRef = useRef(null);
  const startXRef = useRef(0);
  const startTrackXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);
  const velocityRef = useRef(0);

  const getWidth = () => {
    const el = containerRef.current;
    return el ? el.getBoundingClientRect().width : 0;
  };

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const modIndex = (i) => {
    const n = images.length;
    return ((i % n) + n) % n;
  };

  const prevIndex = modIndex(index - 1);
  const nextIndex = modIndex(index + 1);

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      slideBy(1, { source: "auto" });
    }, 3000);
  };

  const resetAutoScroll = () => {
    startAutoScroll();
  };

  // Ensure track is centered whenever layout changes or index changes
  useEffect(() => {
    const w = getWidth();
    if (!w || !trackRef.current) return;
    gsap.set(trackRef.current, { x: -w }); // show middle slide
  }, [index]);

  // Start auto scroll
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-center on resize
  useEffect(() => {
    const onResize = () => {
      if (isDraggingRef.current || isAnimatingRef.current) return;
      const w = getWidth();
      if (!w || !trackRef.current) return;
      gsap.set(trackRef.current, { x: -w });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slideBy = (dir, { source } = {}) => {
    if (!trackRef.current) return;
    if (isAnimatingRef.current || isDraggingRef.current) return;

    const w = getWidth();
    if (!w) return;

    isAnimatingRef.current = true;
    stopAutoScroll();

    // Track positions:
    // centered (current): -w
    // show prev: 0
    // show next: -2w
    const targetX = dir === 1 ? -2 * w : 0;

    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.55,
      ease: "power3.inOut",
      onComplete: () => {
        setIndex((i) => modIndex(i + dir));
        // After state updates, effect re-centers to -w
        isAnimatingRef.current = false;
        if (source !== "auto") resetAutoScroll();
        else startAutoScroll();
      },
    });
  };

  // Pointer events (touch + mouse) — most reliable
  const onPointerDown = (e) => {
    if (!trackRef.current || !containerRef.current) return;
    if (isAnimatingRef.current) return;

    // Only left mouse button
    if (e.pointerType === "mouse" && e.button !== 0) return;

    isDraggingRef.current = true;
    pointerIdRef.current = e.pointerId;

    // capture pointer so moves still come even if leaving the element
    containerRef.current.setPointerCapture(e.pointerId);

    stopAutoScroll();

    const w = getWidth();
    const baseX = -w;

    // kill any in-progress tweens
    gsap.killTweensOf(trackRef.current);

    startXRef.current = e.clientX;
    startTrackXRef.current = typeof gsap.getProperty(trackRef.current, "x") === "number"
      ? gsap.getProperty(trackRef.current, "x")
      : baseX;

    lastXRef.current = e.clientX;
    lastTRef.current = performance.now();
    velocityRef.current = 0;
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    if (pointerIdRef.current !== e.pointerId) return;
    if (!trackRef.current) return;

    const w = getWidth();
    if (!w) return;

    const dx = e.clientX - startXRef.current;

    // resistance (subtle) when pulling too far
    // allow some overscroll but resist beyond a band
    const minX = -2 * w - 0.35 * w;
    const maxX = 0 + 0.35 * w;

    const rawX = startTrackXRef.current + dx;
    const nextX = clamp(rawX, minX, maxX);

    gsap.set(trackRef.current, { x: nextX });

    // velocity estimate
    const now = performance.now();
    const dt = now - lastTRef.current;
    if (dt > 0) {
      const vx = (e.clientX - lastXRef.current) / dt; // px per ms
      // low-pass filter so it's stable
      velocityRef.current = 0.8 * velocityRef.current + 0.2 * vx;
      lastXRef.current = e.clientX;
      lastTRef.current = now;
    }
  };

  const onPointerUpOrCancel = (e) => {
    if (!isDraggingRef.current) return;
    if (pointerIdRef.current !== e.pointerId) return;
    if (!trackRef.current || !containerRef.current) return;

    isDraggingRef.current = false;

    // release capture
    try {
      containerRef.current.releasePointerCapture(e.pointerId);
    } catch {}

    pointerIdRef.current = null;

    const w = getWidth();
    if (!w) {
      resetAutoScroll();
      return;
    }

    const x = gsap.getProperty(trackRef.current, "x");
    const centeredX = -w;

    // Decide based on distance + velocity throw
    const distanceFromCenter = x - centeredX; // >0 means dragged right (toward prev), <0 means dragged left (toward next)
    const absDist = Math.abs(distanceFromCenter);

    // velocity in px/ms -> convert to px over ~200ms feel window
    const throwPx = velocityRef.current * 200;

    const effective = distanceFromCenter + throwPx;

    const DIST_THRESHOLD = 0.22 * w; // how far you must drag
    const VEL_THRESHOLD = 0.55; // px/ms-ish feel threshold

    let decision = 0; // 0 = snap back, -1 = prev, 1 = next

    if (effective > DIST_THRESHOLD || velocityRef.current > VEL_THRESHOLD) {
      decision = -1; // go prev (track moves right to 0)
    } else if (effective < -DIST_THRESHOLD || velocityRef.current < -VEL_THRESHOLD) {
      decision = 1; // go next (track moves left to -2w)
    }

    isAnimatingRef.current = true;

    const targetX = decision === 0 ? centeredX : decision === 1 ? -2 * w : 0;

    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.45,
      ease: "power3.out",
      onComplete: () => {
        if (decision !== 0) {
          setIndex((i) => modIndex(i + decision));
          // index effect re-centers to -w
        } else {
          // ensure perfect center
          gsap.set(trackRef.current, { x: centeredX });
        }

        isAnimatingRef.current = false;
        resetAutoScroll();
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 w-full h-full overflow-hidden select-none"
      style={{ touchAction: "pan-y" }} // allow vertical scroll; we handle horizontal drag
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUpOrCancel}
      onPointerCancel={onPointerUpOrCancel}
    >
      {/* TRACK (Prev / Current / Next) */}
      <div ref={trackRef} className="absolute inset-0 flex">
        <div className="w-full h-full shrink-0">
          <img
            src={images[prevIndex]}
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
            alt=""
          />
        </div>
        <div className="w-full h-full shrink-0">
          <img
            src={images[index]}
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
            alt=""
          />
        </div>
        <div className="w-full h-full shrink-0">
          <img
            src={images[nextIndex]}
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
            alt=""
          />
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => slideBy(-1, { source: "button" })}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute bottom-2.5 left-2 hover:bg-black/10 p-2 transition"
        disabled={isAnimatingRef.current || isDraggingRef.current}
      >
        <MoveLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => slideBy(1, { source: "button" })}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute bottom-2.5 right-2 hover:bg-black/10 p-2 transition"
        disabled={isAnimatingRef.current || isDraggingRef.current}
      >
        <MoveRight size={28} />
      </button>

    </div>
  );
}