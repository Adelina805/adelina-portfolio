import NextButton from "../NextButton";

export default function AboutPage() {
  return (
    <section>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>ABOUT</h1>
    </div>

      <NextButton href="/experience" label="View my experiences >>" />
    </section>
  );
}