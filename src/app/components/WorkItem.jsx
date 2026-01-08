"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { X, MoveLeft, MoveRight } from "lucide-react";

export default function WorkItem({
  title,
  client,
  image,
  skill,
}) {
  const skillList = skill ?? [];
  const [open, setOpen] = useState(false);

  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  /* -------------------------------
     GSAP OPEN + SCROLL LOCK
  -------------------------------- */
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      modalRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* -------------------------------
     CLOSE (ANIMATED)
  -------------------------------- */
  const closeModal = () => {
    gsap.to(modalRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setOpen(false),
    });
  };

  return (
    <>
      {/* CARD */}
      <div
        className="w-full relative cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* IMAGE */}
        <div className="w-full aspect-4/3 border-2 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xl">Project Image</span>
          )}
        </div>

        {/* TEXT */}
        <h2 className="text-xl font-bold leading-relaxed mt-3">{title}</h2>
        <p className="text-sm leading-relaxed mt-2">{client}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-3 mt-3 mb-3">
          {skillList.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 border text-sm hover:bg-white/10"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          ref={backdropRef}
          style={{ backgroundColor: "color-mix(in srgb, var(--fog-b) 70%, transparent)" }}
          className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div style={{ backgroundColor: "var(--fog-b)" }}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full md:w-[770px] md:h-[85vh] md:max-w-4xl flex flex-col relative md:border-2 select-text"
          >
            {/* IMAGE AREA */}
            <div className="relative p-4 pb-0 aspect-4/3 overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-lg">Project Image</span>
              )}

              {/* LEFT ARROW */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-2.5 left-2 hover:bg-black/10 p-2 transition"
              >
                <MoveLeft size={28} />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-2.5 right-2 hover:bg-black/10 p-2 transition"
              >
                <MoveRight size={28} />
              </button>

              {/* CLOSE */}
              <button
                onClick={(e) => { e.stopPropagation(); closeModal();}}
                className="absolute top-2.5 right-2 hover:bg-black/10 p-2 transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm mt-1">{client}</p>

              <div className="flex flex-wrap gap-3 mt-4">
                {skillList.map((s) => (
                  <span key={s} className="px-3 py-1.5 border text-sm">
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-sm mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. 1Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                massa mi. 2Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}