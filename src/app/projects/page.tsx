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

      <NextButton href="/contact" label="Don’t be shy, say hello! >>" />
    </section>
  );
}