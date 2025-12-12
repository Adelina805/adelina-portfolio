export default function WorkItem({
    title,
    client,
    image,
    skill })
    {
    const skillList = skill ?? [];

  return (
    <div className="w-full border-2 px-5 py-8 md:px-10 md:py-10 relative">

      {/* IMAGE */}
      <div className="w-full aspect-4/3 border-2 flex items-center justify-center overflow-hidden mb-5">
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
      <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
        {title}
      </h2>

      <p className="text-base md:text-lg leading-relaxed mt-2">
        {client}
      </p>

      {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-3 pt-5">
         {skillList.map((skill) => (
            <span
                key={skill}
            className="px-3 py-2 border text-sm md:text-base hover:bg-white/10"
            >
            {skill}
            </span>
         ))}
        </div>

    </div>
  );
}