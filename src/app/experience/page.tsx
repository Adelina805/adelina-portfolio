import NextButton from "../NextButton";
import ExperienceCard from "../ExperienceItem";

export default function ExperiencePage() {
  return (
    <section className="relative min-h-[90vh] px-4 pb-30 max-w-255 mx-auto">

    <h1
      className="
        font-bold
        text-[40px]
        line-through
        hover:no-underline
        transition-all
        text-center
        pt-[calc(clamp(1rem,4vw,2rem))]
      "
    >
      EXPERIENCE
    </h1>
    <p className="mt-5 mx-auto text-center text-base">
      Professional work history and achievements
    </p>

    <NextButton href="/work" label="Check out my cool work >>" />

    <ExperienceCard />
    <ExperienceCard />
    <ExperienceCard />
    <ExperienceCard />
    <ExperienceCard />
    <ExperienceCard />
    </section>
  );
}