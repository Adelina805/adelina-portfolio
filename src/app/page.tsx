import Home from "@/app/sections/home";
import About from "@/app/sections/about";
import Work from "@/app/sections/work";
import Experience from "@/app/sections/experience";
import Contact from "@/app/sections/contact";

export default function MainScrollPage() {
  return (
    <main className="relative h-full overflow-auto snap-start snap-y snap-mandatory">
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}