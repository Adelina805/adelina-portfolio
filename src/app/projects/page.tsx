import NextButton from "../NextButton";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-[90vh] px-4">

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
      PROJECTS
    </h1>
    <p className="mt-5 mx-auto text-center text-base">
      Cool stuff i’ve designed and developed
    </p>

      <NextButton href="/contact" label="Don’t be shy, say hello! >>" />
    </section>
  );
}