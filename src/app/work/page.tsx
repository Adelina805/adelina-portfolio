import NextButton from "../components/NextButton";
import WorkItem from "../components/WorkItem";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-[90vh] px-4 pb-30 max-w-255 mx-auto">

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
        WORK
      </h1>

      <p className="mt-5 mx-auto text-center text-base">
        Cool stuff i’ve designed and developed
      </p>

      <NextButton href="/contact" label="Don’t be shy, say hello! >>" />

      {/* GRID FOR WORK ITEMS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        <WorkItem
          title="Fullstack Ecommerce Website"
          client="GROUNDWORK BOOKS COLLECTIVE | WEBSITE"
          image="/work/Groundworks.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Commercial HVAC Website"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/PallanCoolingandHeating.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Photography Portfolio Website"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/DaveCastro.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="B2B AI Career Mentorship Platform"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Music and Concert Ticketing App"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/LUMI.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Book Review and Blog Website"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/BookFein.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="AI Powered Course Planner for SDSU"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Instructional Design and Development"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Three.js Website Development"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/ThreeJS.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="3D and 2D Game Development"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/GameDev.png"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Local Sustainability Connector App"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="Adelina’s Awesome Art Archive"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

      </div>
    </section>
  );
}