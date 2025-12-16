import HomeSection from "@/app/sections/HomeSection";
import AboutSection from "@/app/sections/AboutSection";
import WorkSection from "@/app/sections/WorkSection";
import ExperienceSection from "@/app/sections/ExperienceSection";
import ContactSection from "@/app/sections/ContactSection";

export default function MainScrollPage() {
  return (
    <main className="relative h-full overflow-auto snap-start snap-y snap-mandatory">
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}