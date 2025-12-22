import AdelinaCarousel from "../components/AdelinaCarousel";

import {
  GraduationCap,
  Laptop,
  MapPin,
  Home,
  Headphones,
  BookOpen,
  Star
} from "lucide-react";

export default function About() {
  return (

    <section id="about" className="relative min-h-svh px-4 pb-20 pt-10 md:pt-20 border-b-2 flex items-center justify-center">
      <div className="max-w-300 mx-auto">

      {/* ---------------------- */}
      {/*        MOBILE          */}
      {/* ---------------------- */}
      <div className="flex flex-col md:hidden pb-30">

        {/* IMAGE (mobile order 1) */}
        <div className="mb-10">
          <div className="aspect-12/10 w-full min-h-66.5 overflow-hidden border-2">
            <AdelinaCarousel />
          </div>
        </div>

        {/* TEXT (mobile order 2) */}
          <h1 className="font-bold tracking-tight leading-none text-3xl">
            Hello! my name is{" "}
            <span className="line-through hover:no-underline">
              Adelina Martinez
            </span>
            , a student, designer, and developer based in San Diego, CA
          </h1>

          <h1 className="mt-10 font-bold tracking-tight leading-none text-3xl">
            I like to make things for the internet.
          </h1>

          <p className="mt-10 text-lg leading-relaxed">
            I am currently attending <strong>San Diego State University</strong>{" "}
            pursuing my B.A. in <strong>Computer Science</strong> with a minor in{" "}
            <strong>Website Design</strong>. I am passionate about UX/UI Design,
            Frontend Development, Web Development, Graphic Design, and/or{" "}
            <em>
              anything that blends visually creative design with technical
              engineering and user interaction.
            </em>{" "}
              I currently work as an <strong>Instructional Design Student Assistant</strong> for SDSU’s Global Campus
              and a <strong>UX/UI Design and Frontend Development Researcher</strong> for SDSU DILabs.
              I am a proud wearer of many hats and believe <em>the most meaningful
              innovation happens at the intersection of diverse skill sets.</em>
            <br />
            <br />
            When I’m not studying, working, coding, or designing, you can usually
            find me at the beach playing volleyball, surfing, or reading.
            I also love watching movies, thrifting, buying too many houseplants,
            eating tasty food, exploring new places, and pondering.
            Welcome to my corner of the internet, I made it myself :D
          </p>

        {/* QUICK INFO (mobile order 3) */}
        <div className="mt-10 text-lg leading-loose">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 shrink-0 mt-2" />
              Computer Science, Web Design
            </div>

            <div className="flex items-start gap-4">
              <Laptop className="w-5 h-5 shrink-0 mt-2" />
              UX/UI Designer & Frontend Dev
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 shrink-0 mt-2" />
              Currently located: San Diego, CA
            </div>

            <div className="flex items-start gap-4">
              <Home className="w-5 h-5 shrink-0 mt-2" />
              Hometown: Port Hueneme, CA
            </div>

            <div className="flex items-start gap-4">
              <Headphones className="w-5 h-5 shrink-0 mt-2" />
              Listening to: alternative, rock
            </div>

            <div className="flex items-start gap-4">
              <BookOpen className="w-5 h-5 shrink-0 mt-2" />
              Reading: most likely bell hooks
            </div>

            <div className="flex items-start gap-4">
              <Star className="w-5 h-5 shrink-0 mt-2" />
              <span>
                Values: Curiosity, Innovation, Equity
              </span>
            </div>

          </div>
      </div>

      {/* ---------------------- */}
      {/*        DESKTOP         */}
      {/* ---------------------- */}
      <div className="hidden md:flex md:flex-row md:gap-10">

        {/* LEFT COLUMN = image + quick info */}
        <div className="flex flex-col w-[20rem] shrink-0">

          {/* IMAGE */}
          <div className="aspect-12/10 w-full min-h-66.5 mb-10 overflow-hidden border-2">
            <AdelinaCarousel />
          </div>

          {/* QUICK INFO */}
          <div className="text-lg leading-loose">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 shrink-0 mt-2" />
              Computer Science, Web Design
            </div>

            <div className="flex items-start gap-4">
              <Laptop className="w-5 h-5 shrink-0 mt-2" />
              UX/UI Designer & Frontend Dev
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 shrink-0 mt-2" />
              Currently located: San Diego, CA
            </div>

            <div className="flex items-start gap-4">
              <Home className="w-5 h-5 shrink-0 mt-2" />
              Hometown: Port Hueneme, CA
            </div>

            <div className="flex items-start gap-4">
              <Headphones className="w-5 h-5 shrink-0 mt-2" />
              Listening to: alternative, rock
            </div>

            <div className="flex items-start gap-4">
              <BookOpen className="w-5 h-5 shrink-0 mt-2" />
              Reading: most likely bell hooks
            </div>

            <div className="flex items-start gap-4">
              <Star className="w-5 h-5 shrink-0 mt-2" />
              <span>
                Values: Curiosity, Innovation, Equity
              </span>
            </div>

          </div>

          </div>

        {/* RIGHT COLUMN = text */}
        <div className="flex-1">
          <h1 className="font-bold tracking-tight leading-none text-4xl">
            Hello! my name is{" "}
            <span className="line-through hover:no-underline">
              Adelina Martinez
            </span>
            , a student, designer, and developer based in San Diego, CA
          </h1>

          <h1 className="mt-10 font-bold tracking-tight leading-none text-4xl">
            I like to make things for the internet.
          </h1>

          <div className="mt-10 text-xl">
            <p className="leading-relaxed mt-2">
              I am currently attending <strong>San Diego State University</strong>{" "}
              pursuing my B.A. in <strong>Computer Science</strong> with a minor in{" "}
              <strong>Website Design</strong>. I am passionate about UX/UI Design,
              Frontend Development, Web Development, Graphic Design, and/or{" "}
              <em>
                anything that blends visually creative design with technical
                engineering and user interaction.
              </em>{" "}
              I currently work as an <strong>Instructional Design Student Assistant</strong> for SDSU’s Global Campus
              and a <strong>UX/UI Design and Frontend Development Researcher</strong> for SDSU DILabs.
              I am a proud wearer of many hats and believe <em>the most meaningful
              innovation happens at the intersection of diverse skill sets.</em>
              <br />
            </p>

            <p className="leading-relaxed mt-3">
              When I’m not studying, working, coding, or designing, you can usually
              find me at the beach playing volleyball, surfing, or reading.
              I also love watching movies, thrifting, buying too many houseplants,
              eating tasty food, exploring new places, and pondering.
              Welcome to my corner of the internet, I made it myself :D
            </p>
        </div>
      </div>

      </div>

    </div>
    </section>
  );
}