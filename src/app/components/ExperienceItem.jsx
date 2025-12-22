"use client";

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
    <div className="relative grid grid-cols-1 md:grid-cols-[1.3fr_0.5fr] gap-10 md:gap-16 items-start w-full">

      {/* IMAGE */}
      <div
        className="w-full md:row-start-1 flex md:col-start-2 md:justify-start"
      >
        {gif && (
          <div className="w-full md:max-w-sm aspect-4/3 border-2 overflow-hidden">
            <img
              src={gif}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* TEXT */}
      <div
        className="w-full md:row-start-1 flex md:col-start-1 md:justify-end"
      >
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-bold leading-relaxed">{title}</h2>

          <p className="text-base leading-relaxed">{workplace}</p>

          <p className="text-base leading-relaxed">{description}</p>

          <div className="flex flex-wrap items-center gap-3 pt-3 pb-4">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 border text-sm hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-sm italic">{date}</p>
        </div>
      </div>
    </div>
  );
}