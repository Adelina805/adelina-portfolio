import Home from "@/app/sections/home";
import About from "@/app/sections/about";
import Work from "@/app/sections/work";
import Experience from "@/app/sections/experience";
import Contact from "@/app/sections/contact";

export default function MainScrollPage() {
  return (
    <main className="relative h-full">
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}