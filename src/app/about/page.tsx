import NextButton from "../NextButton";

export default function AboutPage() {
  return (
    <section className="relative h-auto px-4 pt-10 md:pt-25 max-w-255 mx-auto">

      {/* ---------------------- */}
      {/*        MOBILE          */}
      {/* ---------------------- */}
      <div className="flex flex-col md:hidden pb-20">

        {/* IMAGE (mobile order 1) */}
        <div className="mb-10">
          <div className="aspect-12/10 w-full min-h-66.5 overflow-hidden border-2">
            <img
              src="/adelina/adelina-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT (mobile order 2) */}
          <h1 className="font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
            Hello! my name is{" "}
            <span className="line-through hover:no-underline">
              Adelina Martinez
            </span>
            , a student, designer, and developer based in San Diego, CA
          </h1>

          <h1 className="mt-10 font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
            I like to make things for the internet.
          </h1>

          <p className="mt-10 text-xl leading-relaxed">
            I am currently attending <strong>San Diego State University</strong>{" "}
            pursuing my B.A. in <strong>Computer Science</strong> with a minor in{" "}
            <strong>Website Design</strong>. I am passionate about UX/UI Design,
            Frontend Development, Web Development, Graphic Design, and/or{" "}
            <em>
              anything that blends visually creative design with technical
              engineering and user interaction.
            </em>{" "}
            I am a proud <u>wearer of many hats</u> and believe the most meaningful
            innovation happens at the intersection of diverse skill sets.
            <br />
            <br />
            When I’m not studying, working, coding, or designing, you can usually
            find me at the beach 🏖️ playing volleyball 🏐, surfing 🌊, or reading 📚.
            I also love watching movies 🎬, thrifting 👕, eating tasty food 🌮,
            exploring new places ✈️, and pondering 🤔.
          </p>

        {/* QUICK INFO (mobile order 3) */}
        <div className="mt-10 text-base leading-relaxed">
          <div>🎓 Computer Science, Web Design <span className="text-sm">@SDSU</span></div>
          <div>💻 UX/UI Designer & Frontend Developer</div>
          <div>📍 Currently located in San Diego, CA</div>
          <div>🏠 Place of origin: Port Hueneme, CA</div>
          <div>🎧 Listening to: alternative, indie rock</div>
          <div>📚 Reading: probably bell hooks</div>
          <div>
            ⭐ Current Role(s): Instructional Design Student Assistant • Research
            Assistant • Groundwork Books Developer
          </div>
        </div>
      </div>

      <NextButton href="/experience" label="View my experiences >>" />


      {/* ---------------------- */}
      {/*        DESKTOP         */}
      {/* ---------------------- */}
      <div className="hidden md:flex md:flex-row md:gap-10">

        {/* LEFT COLUMN = image + quick info */}
        <div className="flex flex-col w-[20rem] flex-shrink-0">

          {/* IMAGE */}
          <div className="aspect-12/10 w-full min-h-66.5 mb-10 overflow-hidden border-2">
            <img
              src="/adelina/adelina-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* QUICK INFO */}
          <div className="text-base leading-relaxed pb-20">
            <div>🎓 Computer Science, Web Design <span className="text-sm">@SDSU</span></div>
            <div>💻 UX/UI Designer & Frontend Developer</div>
            <div>📍 Currently located in San Diego, CA</div>
            <div>🏠 Place of origin: Port Hueneme, CA</div>
            <div>🎧 Listening to: alternative, indie rock</div>
            <div>📚 Reading: probably bell hooks</div>
            <div>
              ⭐ Current Role(s): Instructional Design Student Assistant • Research
              Assistant • Groundwork Books Developer
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN = text */}
        <div className="flex-1">
          <h1 className="font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
            Hello! my name is{" "}
            <span className="line-through hover:no-underline">
              Adelina Martinez
            </span>
            , a student, designer, and developer based in San Diego, CA
          </h1>

          <h1 className="mt-10 font-bold tracking-tight leading-none text-[clamp(2rem,5vw,2.5rem)]">
            I like to make things for the internet.
          </h1>

          <p className="mt-10 text-xl leading-relaxed">
            I am currently attending <strong>San Diego State University</strong>{" "}
            pursuing my B.A. in <strong>Computer Science</strong> with a minor in{" "}
            <strong>Website Design</strong>. I am passionate about UX/UI Design,
            Frontend Development, Web Development, Graphic Design, and/or{" "}
            <em>
              anything that blends visually creative design with technical
              engineering and user interaction.
            </em>{" "}
            I am a proud <u>wearer of many hats</u> and believe the most meaningful
            innovation happens at the intersection of diverse skill sets.
            <br />
            <br />
            When I’m not studying, working, coding, or designing, you can usually
            find me at the beach 🏖️ playing volleyball 🏐, surfing 🌊, or reading 📚.
            I also love watching movies 🎬, thrifting 👕, eating tasty food 🌮,
            exploring new places ✈️, and pondering 🤔.
          </p>

          <NextButton href="/experience" label="View my experiences >>" />

        </div>
      </div>

    </section>
  );
}