import NextButton from "../NextButton";

export default function AboutPage() {
  return (
    <section className="relative h-full px-4 flex flex-col">

    {/* left column */}
    // image

    {/* right column */}
    <h1 className="mt-10 font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
      Hello! my name is Adelina Martinez, a student, designer, and developer based in San Diego, CA
    </h1>

    <h1 className="mt-10 font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
      I like to make things for the internet.
    </h1>

    <p className="mt-10 mx-auto text-xl">
      I am currently attending San Diego State University pursuing my B.A. in Computer Science with a minor in Website Design. I am passionate about UX/UI Design, Frontend Development, Web Development, Graphic Design, and/or anything that blends visually creative design with technical engineering and user interaction. I am a proud wearer of many hats and believe the most meaningful innovation happens at the intersection of diverse skill sets.
      <br />
      <br />
      When I’m not studying, working, coding or designing, you can usually find me at the beach 🏖️ playing volleyball 🏐, surfing 🌊, or reading 📚. I also love watching movies 🎬, thrifting 👕, eating tasty food 🌮, exploring new places ✈️, and pondering 🤔.
    </p>

    <NextButton href="/experience" label="View my experiences >>" />
    </section>
  );
}