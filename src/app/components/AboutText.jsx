export default function AboutText({
  titleSize = "text-3xl",
  bodySize = "text-lg",
}) {
  return (
    <>
      <h1 className={`font-bold tracking-tight leading-none ${titleSize}`}>
        Hello! I'm{" "}
        <span className="line-through hover:no-underline">
          Adelina Martinez
        </span>
        {" "}, a student, designer, and developer based in San Diego, CA
      </h1>

      <h1 className={`mt-10 font-bold tracking-tight leading-none ${titleSize}`}>
        I like to make things for the internet.
      </h1>

      <p className={`mt-10 leading-relaxed ${bodySize}`}>
        I'm pursuing my B.A. in <strong>Computer Science</strong> with a minor in
        <strong> Website Design</strong> at <strong>San Diego State University</strong>.
        I'm passionate about UX/UI design and frontend development, and currently work as an
        <strong> Instructional Design Student Assistant</strong> at{" "}
        <a href="https://globalcampus.sdsu.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">SDSU Global Campus</a>
        {" "}and a{" "}
        <strong>UX/UI Design and Frontend Researcher</strong> at{" "}
        <a href="https://digitalinnovation.sdsu.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">SDSU Digital Innovation Lab</a>
        . I wear many hats and believe the most meaningful innovation happens at the intersection of diverse skill sets.{" "}
        <em>
          I’m especially interested in roles that bridge design and engineering.
        </em>
        <br />
        <br />
        When I'm not studying, coding, or designing, you can usually
        find me at the beach playing volleyball, reading, buying too many houseplants, or pondering.
        Welcome to my corner of the internet, I{" "}
        <a href="https://github.com/Adelina805/adelina-portfolio/commits/main/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent"> made it myself</a>
        {" "}:)
      </p>
    </>
  );
}