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
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-1.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-2.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-3.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-4.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/adelina/adelina-5.jpg"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

        <WorkItem
          title="This is the Title of My Project ahah"
          client="THE NAME OR CLIENT | WEBSITE TYPE OR APP"
          image="/experience/boxing-cat.gif"
          skill={["Tool", "Library", "Skill", "Tech", "Etc"]}
        />

      </div>
    </section>
  );
}