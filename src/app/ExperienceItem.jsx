export default function ExperienceItem() {
  return (
    <div className="mx-auto mt-10 w-full max-w-5xl border-2 px-5 py-8 md:px-10 md:py-10 relative">

      {/* Grid layout */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] md:items-start">

        {/* IMAGE / GIF BLOCK */}
        <div className="order-1 md:order-2 flex flex-col">
          <div className="w-full aspect-4/3 border-2 overflow-hidden flex items-center justify-center">
            <span className="text-5xl md:text-7xl tracking-[0.2em]">
              GIF
            </span>
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="order-2 md:order-1 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 md:h-[50px] md:w-[50px] border-2 shrink-0" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold leading-snug tracking-[0.08em]">
                Experience Title 1 Here Could Be Longer Cool Title
              </h2>
              <p className="text-sm md:text-base tracking-[0.08em]">
                Place of Work like workplace name here  |  Job Role
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed tracking-[0.06em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center gap-3">
            {["Figma", "Github", "React", "JSX/TSX", "HTML", "CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 border text-xs md:text-sm tracking-[0.08em]"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* FIXED DATE - ALWAYS BOTTOM RIGHT */}
      <p className="
        absolute
        bottom-3 right-4
        text-sm md:text-base
        tracking-[0.08em]
      ">
        Sep 2025 – Present
      </p>
    </div>
  );
}