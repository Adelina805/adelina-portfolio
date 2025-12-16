import ExperienceItem from "../components/ExperienceItem";

export default function ExperiencePage() {
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
      EXPERIENCE
    </h1>
    <p className="mt-5 mx-auto text-center text-base">
      Professional work history and achievements
    </p>

    <div className="space-y-10">

      <ExperienceItem
        title="UX/UI Designer and Frontend Developer Researcher"
        workplace="DiLab @SDSU  |  Digital Innovation Research Lab"
        description="I designed interfaces for a B2B AI mentorship platform, built responsive React features, refined Figma prototypes, and collaborated with backend engineers on frontend integration."
        date="Sep 2025 – Present • Part-Time"
        gif="/experience/cat-computer.gif"
        skills={["Figma", "Github", "React", "JavaScript", "HTML/CSS"]}
      />

      <ExperienceItem
        title="Instructional Design and Academic Media Production Assistant"
        workplace="SDSU Global Campus  |  Instructional Design Team"
        description="I redesigned Canvas courses with custom HTML/CSS, produced instructional media and lecture videos, and audited courses for accessibility to improve clarity and engagement for 27k+ learners."
        date="Feb 2025 – Present • Part-Time"
        gif="/experience/cat-small-computer.gif"
        skills={["Canvas LMS", "HTML/CSS", "Adobe Suite", "Accessibility"]}
      />

      <ExperienceItem
        title="UX/UI Designer and Frontend Developer Volunteer"
        workplace="UCSD Groundwork Books Collective  |  Development Team"
        description="I co-led the redesign of Groundwork Books’ e-commerce site using React, Next.js, and Firebase, creating Figma prototypes and building a responsive UI with improved performance and mobile usability."
        date="May 2024 – Present • Volunteer"
        gif="/experience/cat-tapping.gif"
        skills={["Figma", "React", "Next.js", "Firebase", "Square API"]}
      />

      <ExperienceItem
        title="Freelance Website Designer and Developer - 2 Client Websites"
        workplace="Dave Castro Photography | Pallan Cooling and Heating"
        description="I built a photography portfolio with custom galleries and SEO, and developed a responsive, SEO-optimized site for a local HVAC business, boosting both clients’ visibility and user engagement."
        date="Mar 2025 – Aug 2025 • Freelance"
        gif="/experience/cat-mouse.gif"
        skills={["Webflow", "WordPress", "SEO", "Accessibility", "Design"]}
      />

      <ExperienceItem
        title="Instructional Technology Services Student Analyst"
        workplace="SDSU Information Technology Services  |  IT Division"
        description="I delivered IT support via phone, chat, email, Zoom, and in-person, resolving 400+ monthly issues and collaborating with teams to troubleshoot hardware, software, and network problems on campus."
        date="Jan 2024 – May 2025 • Part-Time"
        gif="/experience/cat-telephone-call.gif"
        skills={["ServiceNow", "Zoom", "Gmail", "Slack", "Office 365"]}
      />

      <ExperienceItem
        title="Ocean Lifeguard and Junior Lifeguard Instructor"
        workplace="City of Port Hueneme Lifeguard Association"
        description="I responded to emergencies with first aid and CPR, led training and educational programs for junior lifeguards, and ensured beach safety through constant monitoring and clear communication with visitors."
        date="Jun 2021 – May 2025 • Seasonal"
        gif="/experience/boxing-cat.gif"
        skills={["Fins", "Buoy", "Sunscreen", "Sunglasses", "Binoculars"]}
      />

    </div>
    </section>
  );
}