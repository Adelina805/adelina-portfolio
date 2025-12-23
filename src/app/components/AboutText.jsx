export default function AboutText({
  titleSize = "text-3xl",
  bodySize = "text-lg",
}) {
  return (
    <>
      <h1 className={`font-bold tracking-tight leading-none ${titleSize}`}>
        Hello! my name is{" "}
        <span className="line-through hover:no-underline">
          Adelina Martinez
        </span>
        , a student, designer, and developer based in San Diego, CA
      </h1>

      <h1 className={`mt-10 font-bold tracking-tight leading-none ${titleSize}`}>
        I like to make things for the internet.
      </h1>

      <p className={`mt-10 leading-relaxed ${bodySize}`}>
        I am pursuing my B.A. in <strong>Computer Science</strong> with a minor in
        <strong> Website Design</strong> at <strong>San Diego State University</strong>.
        I am passionate about UX/UI Design, Frontend Development, Graphic Design, and/or{" "}
        <em>
          anything that blends visually creative design with technical
          engineering and user interaction.
        </em>{" "}
        I currently work as an{" "}
        <strong>Instructional Design Student Assistant</strong> for{" "}
        <a href="https://globalcampus.sdsu.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">SDSU Global Campus</a>
        {" "}and a{" "}
        <strong>UX/UI Design and Frontend Researcher</strong> for{" "}
        <a href="https://digitalinnovation.sdsu.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">SDSU Digital Innovation Lab</a>
        . I am a proud wearer of many hats and believe{" "}
        <em>
          the most meaningful innovation happens at the intersection of diverse skill sets.
        </em>
        <br />
        <br />
        When I’m not studying, working, coding, or designing, you can usually
        find me at the beach playing volleyball, surfing, or reading.
        I also love watching movies, thrifting, buying too many houseplants,
        eating tasty food, exploring new places, and pondering.
        Welcome to my corner of the internet, I{" "}
        <a href="https://github.com/Adelina805/adelina-portfolio/commits/main/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent"> made it myself</a>
        {" "}:D
      </p>
    </>
  );
}