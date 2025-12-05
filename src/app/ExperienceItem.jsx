export default function ExperienceItem() {
  return (
    <div className="mx-auto mt-10 w-full border-2 px-5 py-8 md:px-10 md:py-10 relative">

      {/* GRID LAYOUT */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] md:items-start pb-10 md:pb-0">

        {/* IMAGE / GIF BLOCK */}
        <div className="order-1 md:order-2 flex flex-col">
          <div className="w-full aspect-4/3 border-2 overflow-hidden flex items-center justify-center">
            <span className="text-5xl">GIF</span>
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="order-2 md:order-1 flex flex-col gap-6">

          {/* Title + workplace */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-relaxed">
              Experience Title 1 Here Could Be Longer Cool Title
            </h2>

            <p className="text-base leading-relaxed">
              Place of Work like workplace name here | Job Role
            </p>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center gap-3">
            {["Figma", "Github", "React", "JSX/TSX", "HTML", "CSS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 border text-base"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* FIXED DATE - BOTTOM RIGHT */}
      <p className="absolute bottom-5 right-5 text-base">
        Sep 2025 – Present
      </p>
    </div>
  );
}