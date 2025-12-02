"use client";

import { useState, useEffect, useRef } from "react";
import { Move, MoveLeft, MoveRight } from "lucide-react";

export default function AdelinaCarousel() {
  const images = [
    "/adelina/adelina-1.jpg",
    "/adelina/adelina-2.jpg",
    "/adelina/adelina-3.jpg",
    "/adelina/adelina-4.jpg",
    "/adelina/adelina-5.jpg",
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

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

  return (
    <div className="relative aspect-12/10 w-full min-h-66.5 overflow-hidden">
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

    </div>
  );
}