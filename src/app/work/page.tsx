import NextButton from "../components/NextButton";
import WorkItem from "../components/WorkItem";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-[90vh] px-4 pb-30 max-w-275 mx-auto">

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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <WorkItem
          title="Fullstack Ecommerce Website"
          client="GROUNDWORK BOOKS COLLECTIVE | WEBSITE"
          image="/work/Groundworks.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Commercial HVAC Website"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/PallanCoolingandHeating.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Photography Portfolio Website"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/DaveCastro.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="AI Career Mentorship Platform"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Music and Concert Ticketing App"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/LUMI.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Book Review and Blog Website"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/BookFein.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="AI Course Planner for SDSU"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Instructional Design and Dev"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Three.js Website Development"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/ThreeJS.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="3D and 2D Game Development"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/work/GameDev.png"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Local Sustainability Connector"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

        <WorkItem
          title="Adelina’s Awesome Art Archive"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech"]}
        />

      </div>
    </section>
  );
}