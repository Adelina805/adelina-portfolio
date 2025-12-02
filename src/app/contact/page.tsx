import NextButton from "../NextButton";

export default function ContactPage() {
  return (
    <section className="relative min-h-[90vh] px-4 flex flex-col">

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
      CONTACT
    </h1>
    <p className="mt-5 mx-auto text-center text-base">
      Let’s connect and build something awesome
    </p>

      {/* Middle email container */}
      <div className="flex-1 flex items-center justify-center pb-30">
        <a
          href="mailto:adelina.martinez805@gmail.com"
          className="font-bold tracking-tight leading-none underline hover:no-underline text-[clamp(1.25rem,5vw,2.5rem)]"
        >
          adelina.martinez805@gmail.com
        </a>
      </div>

    <NextButton href="/" label="That was fun! Do it again >>" />
    </section>
  );
}