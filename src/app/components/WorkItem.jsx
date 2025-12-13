export default function WorkItem({
    title,
    client,
    image,
    skill })
    {
    const skillList = skill ?? [];

  return (
    <div className="w-full relative">

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
      <h2 className="text-lg md:text-xl font-bold leading-relaxed mt-3">
        {title}
      </h2>

      <p className="text-xs md:text-sm leading-relaxed mt-2">
        {client}
      </p>

      {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
         {skillList.map((skill) => (
            <span
                key={skill}
            className="px-3 py-1.5 border text-xs md:text-sm hover:bg-white/10"
            >
            {skill}
            </span>
         ))}
        </div>

    </div>
  );
}