import AdelinaCarousel from "../components/AdelinaCarousel";
import AboutText from "../components/AboutText";
import AboutQuickInfo from "../components/AboutQuickInfo";

export default function About() {
  return (

    <section id="about" className="relative min-h-[calc(100%+2px)] pb-20 pt-10 md:pt-20 border-b-2 flex items-center justify-center">
      <div className="max-w-300 mx-auto px-[clamp(1rem,4vw,2rem)]">

      {/* MOBILE */}
      <div className="flex flex-col md:hidden pb-30">
        {/* IMAGE */}
        <div className="mb-10">
          <div className="aspect-12/10 w-full min-h-66.5 overflow-hidden border-2">
            <AdelinaCarousel />
          </div>
        </div>

        {/* TEXT */}
        <AboutText titleSize="text-3xl" bodySize="text-lg" />

        {/* QUICK INFO */}
        <div className="mt-7 text-lg">
          <AboutQuickInfo />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex md:flex-row md:gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col w-[20rem] shrink-0">
          <div className="aspect-12/10 w-full min-h-66.5 mb-10 overflow-hidden border-2">
            <AdelinaCarousel />
          </div>

          <AboutQuickInfo className="text-lg" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1">
          <AboutText titleSize="text-4xl" bodySize="text-xl" />
        </div>
        </div>

      </div>

    </section>
  );
}