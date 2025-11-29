import NextButton from "../NextButton";

export default function ExperiencePage() {
  return (
    <section>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>EXPERIENCE</h1>
    </div>

      <NextButton href="/projects" label="Look at my cool projects >>" />
    </section>
  );
}