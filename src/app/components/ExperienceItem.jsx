export default function ExperienceItem({
  title,
  workplace,
  description,
  date,
  gif,
  skills,
}) {

  const skillList = skills ?? [];

  return (
    <div className="mx-auto mt-10 w-full border-2 px-5 py-8 md:px-10 md:py-10 relative">

      {/* GRID LAYOUT */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-[4fr_2fr] md:items-start pb-10 md:pb-0">

        {/* IMAGE / GIF BLOCK */}
        <div className="order-1 md:order-2 flex flex-col">
          <div className="w-full aspect-4/3 border-2 overflow-hidden flex items-center justify-center">
            {gif ? (
              <img src={gif} alt={title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-5xl">GIF</span>
            )}
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="order-2 md:order-1 flex flex-col gap-2">

          {/* Title + workplace */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-relaxed">
              {title}
            </h2>

            <p className="text-base leading-relaxed">
              {workplace}
            </p>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center gap-3 pb-5 pt-3">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 border text-sm hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* DATE - BOTTOM LEFT */}
      <p className="absolute bottom-5 left-5 pl-0 md:pl-5 text-sm italic">
        {date}
      </p>
    </div>
  );
}