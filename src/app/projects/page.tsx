import NextButton from "../NextButton";

export default function ProjectsPage() {
  return (
    <section>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>PROJECTS</h1>
    </div>

      <NextButton href="/contact" label="Don’t be shy, say hello! >>" />
    </section>
  );
}