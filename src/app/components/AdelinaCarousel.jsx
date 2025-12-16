"use client";

import { useState, useEffect, useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function AdelinaCarousel() {
  const images = [
    "/adelina/adelina-1.jpg",
    "/adelina/adelina-2.jpg",
    "/adelina/adelina-3.jpg",
    "/adelina/adelina-4.jpg",
  ];

  const { dark } = useTheme();       // <-- get dark mode status
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Swipe tracking
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const SWIPE_THRESHOLD = 50; // px drag required

  // Go to the previous slide
  const prevSlide = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    resetAutoScroll();
  };

  // Go to the next slide
  const nextSlide = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    resetAutoScroll();
  };

  // Auto-scroll handling
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000); // change slide every 3s
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Handles swipe start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Track swipe movement
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Decide direction
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > SWIPE_THRESHOLD) {
      // swipe left
      nextSlide();
    } else if (distance < -SWIPE_THRESHOLD) {
      // swipe right
      prevSlide();
    }

    // reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative aspect-12/10 w-full min-h-66.5 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* IMAGE */}
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
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

      {/* DOT INDICATORS */}
      {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => {
          const isActive = i === index;
          const dotColor = isActive
            ? dark ? "bg-white/80" : "bg-black/80"
            : dark ? "bg-white/30" : "bg-black/30";

          return (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                resetAutoScroll();
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                isActive ? "scale-110" : ""
              } ${dotColor}`}
            />
          );
        })}
      </div> */}
    </div>
  );
}