"use client";

import { useState, useEffect, useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { useTheme } from "./ThemeContext";
import gsap from "gsap";

export default function AdelinaCarousel() {
  const images = [
    "/adelina/adelina-1.jpg",
    "/adelina/adelina-2.jpg",
    "/adelina/adelina-3.jpg",
    "/adelina/adelina-4.jpg",
  ];

  const { dark } = useTheme();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // GSAP refs
  const currentImgRef = useRef(null);
  const nextImgRef = useRef(null);
  const directionRef = useRef(1);

  // Drag refs
  const startX = useRef(0);
  const deltaX = useRef(0);
  const isDragging = useRef(false);

  const SWIPE_THRESHOLD = 80;

  const prevSlide = () => {
    directionRef.current = -1;
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    resetAutoScroll();
  };

  const nextSlide = () => {
    directionRef.current = 1;
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    resetAutoScroll();
  };

  // Auto-scroll
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      directionRef.current = 1;
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Slide animation (after commit)
  useEffect(() => {
    if (isDragging.current) return;

    const dir = directionRef.current;
    const width = currentImgRef.current.offsetWidth;

    gsap.set(nextImgRef.current, { x: dir * width });

    gsap.to(currentImgRef.current, {
      x: -dir * width,
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(nextImgRef.current, {
      x: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(currentImgRef.current, { x: 0 });
      },
    });
  }, [index]);

  // Drag handlers
  const handleStart = (x) => {
    isDragging.current = true;
    startX.current = x;
    deltaX.current = 0;
    clearInterval(intervalRef.current);
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;

    deltaX.current = x - startX.current;
    const width = currentImgRef.current.offsetWidth;
    const dir = deltaX.current < 0 ? 1 : -1;
    directionRef.current = dir;

    gsap.set(currentImgRef.current, { x: deltaX.current });
    gsap.set(nextImgRef.current, {
      x: deltaX.current + dir * width,
    });
  };

  const handleEnd = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    const width = currentImgRef.current.offsetWidth;

    if (Math.abs(deltaX.current) > SWIPE_THRESHOLD) {
      deltaX.current < 0 ? nextSlide() : prevSlide();
    } else {
      // snap back
      gsap.to([currentImgRef.current, nextImgRef.current], {
        x: (i) => (i === 0 ? 0 : directionRef.current * width),
        duration: 0.4,
        ease: "power3.out",
      });
      resetAutoScroll();
    }
  };

  const nextIndex =
    (index + directionRef.current + images.length) % images.length;

  return (
    <div
      className="relative aspect-12/10 w-full min-h-66.5 overflow-hidden select-none"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      {/* CURRENT IMAGE */}
      <img
        ref={currentImgRef}
        src={images[index]}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* NEXT IMAGE */}
      <img
        ref={nextImgRef}
        src={images[nextIndex]}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute bottom-2.5 left-2 hover:bg-black/10 p-2 transition"
      >
        <MoveLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute bottom-2.5 right-2 hover:bg-black/10 p-2 transition"
      >
        <MoveRight size={28} />
      </button>
    </div>
  );
}