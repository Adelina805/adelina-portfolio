import NextButton from "../components/NextButton";

export default function HomePage() {
  return (
    <section className="relative z-10 h-full flex items-center justify-center">

      <div className="relative z-10 w-fit text-center">
        <p className="font-semibold text-[clamp(1rem,2vw,1.3rem)]">
          Hello! my name is
        </p>

        <h1 className="mt-12 font-bold tracking-tight leading-none text-[clamp(3.6rem,10vw,9rem)]">
          ADELINA
        </h1>

        <h2 className="font-normal tracking-tight leading-none text-[clamp(3.3rem,9vw,8.1rem)]">
          MARTINEZ
        </h2>

        <p className="mt-12 font-semibold text-[clamp(1rem,2vw,1.3rem)]">
          a designer who develops and<br />
          a developer who designs.
        </p>
      </div>

      <NextButton href="/about" label="Get to know me better >>" />
    </section>
  );
}