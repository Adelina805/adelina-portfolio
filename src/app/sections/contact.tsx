
export default function Contact() {
  return (
    <section id="contact" className="relative h-full flex flex-col">

      {/* Middle email container */}
      <div className="flex-1 flex items-center justify-center pb-20">
        <div className="mx-auto text-center">

        <p className="text-base pb-5">
          Let’s connect and build something epic
        </p>
        <a
          href="mailto:adelina.martinez805@gmail.com"
          className="font-bold tracking-tight leading-none underline hover:no-underline text-[clamp(1.25rem,5vw,2.5rem)]"
        >
          adelina.martinez805@gmail.com
        </a>

        </div>
      </div>

    </section>
  );
}