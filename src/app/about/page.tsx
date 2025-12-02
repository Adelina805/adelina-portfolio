import NextButton from "../NextButton";

export default function AboutPage() {
  return (
    <section
      className="
        relative h-full md:h-auto px-4 pt-10 md:pt-25 max-w-255 mx-auto

        /* Mobile: stacked flex with order */
        flex flex-col

        /* Desktop: switch to 2-column grid */
        md:grid md:grid-cols-[20rem_2fr] md:gap-10 md:content-start
      "
    >
      {/* IMAGE — mobile order 1, desktop left column top */}
      <div className="order-1 md:order-0 md:col-start-1 md:row-start-1">
        <div className="aspect-12/10 w-full min-h-66.5 mb-10 md:mb-0 overflow-hidden border-2">
          <img src="/adelina/adelina-1.jpg" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* QUICK INFO — mobile order 3, desktop left column bottom */}
      <div className="
          order-3 md:order-0 md:col-start-1 md:row-start-2 text-base leading-relaxed pb-20"
      >
        <div>🎓 Computer Science, Web Design @SDSU</div>
        <div>💻 UX/UI Designer & Frontend Developer</div>
        <div>📍 Currently located in San Diego, CA</div>
        <div>🏠 Place of origin: Port Hueneme, CA</div>
        <div>🎧 Listening to: indie rock, alternative</div>
        <div>📚 Reading: probably bell hooks</div>
        <div>
          ⭐ Current Role(s): Instructional Design Student Assistant • Research
          Assistant • Groundwork Books Developer
        </div>
      </div>

      {/* TEXT — mobile order 2, desktop full right column */}
      <div className="order-2 md:order-0 md:col-start-2 md:row-span-2">
        <h1 className="font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
          Hello! my name is <span className="line-through hover:no-underline">Adelina Martinez</span>,
          a student, designer, and developer based in San Diego, CA
        </h1>

        <h1 className="mt-10 font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
          I like to make things for the internet.
        </h1>

        <p className="mt-10 text-xl leading-relaxed">
          I am currently attending <strong>San Diego State University</strong>{" "}
          pursuing my B.A. in <strong>Computer Science</strong> with a minor in{" "}
          <strong>Website Design</strong>. I am passionate about UX/UI Design,
          Frontend Development, Web Development, Graphic Design, and/or <em>anything
          that blends visually creative design with technical engineering and
          user interaction.</em> I am a proud <u>wearer of many hats</u> and
          believe the most meaningful innovation happens at the intersection of
          diverse skill sets.
          <br />
          <br />
          When I’m not studying, working, coding, or designing, you can usually
          find me at the beach 🏖️ playing volleyball 🏐, surfing 🌊, or reading 📚.
          I also love watching movies 🎬, thrifting 👕, eating tasty food 🌮,
          exploring new places ✈️, and pondering 🤔.
        </p>

        <div className="mt-10">
          <NextButton href="/experience" label="View my experiences >>" />
        </div>
      </div>
    </section>
  );
}