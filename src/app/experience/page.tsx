import NextButton from "../NextButton";
import ExperienceItem from "../ExperienceItem";

export default function ExperiencePage() {
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
      EXPERIENCE
    </h1>
    <p className="mt-5 mx-auto text-center text-base">
      Professional work history and achievements
    </p>

    <NextButton href="/work" label="Check out my cool work >>" />

    <div className="space-y-10">

      <ExperienceItem
        title="UX/UI Designer & Frontend Developer Research Assistant"
        workplace="DiLab @SDSU  |  Digital Innovation Research Lab"
        description="I designed and optimized intuitive, user-centered interfaces for an AI-powered career mentorship platform, developing responsive React front-end features, producing and iterating on Figma prototypes, and collaborating with backend engineers to integrate real-time chat, scalable APIs, and AI-driven interactions that improved usability, reliability, and engagement for B2B clients."
        date="[Sep 2025 – Present]  •  Current  •  Part-Time"
        gif="/adelina/tempGIF.gif"
        skills={["Figma", "Github", "React", "JavaScript", "HTML/CSS"]}
      />

      <ExperienceItem
        title="Instructional Design & Academic Media Production Assistant"
        workplace="SDSU Global Campus  |  Instructional Design Team"
        description="I redesigned and structured Canvas learning environments using custom HTML/CSS, guided data-driven updates through user analytics, produced instructional media aligned with UX/UI and learning experience principles, and audited course content for accessibility and clarity—resulting in significantly improved navigation, engagement, and compliance for over 1,200 learners."
        date="[Feb 2025 – Present]  •  Current  •  Part-Time"
        gif="/adelina/tempGIF.gif"
        skills={["Canvas LMS", "HTML/CSS", "Adobe Suite", "Accessibility"]}
      />

      <ExperienceItem
        title="UX/UI Designer & Frontend Developer - Groundwork Books"
        workplace="UCSD Groundwork Books Collective  |  Development Team"
        description="I co-led the redesign and redevelopment of Groundwork Books’ e-commerce platform using React, Next.js, and Firebase, designing and iterating Figma prototypes through user testing and engineering a responsive, component-driven UI integrated with Firebase Auth and the Square API, resulting in faster load times, improved mobile usability, and higher user satisfaction and task completion."
        date="[May 2024 – Present]  •  Current  •  Volunteer"
        gif="/adelina/tempGIF.gif"
        skills={["Figma", "React", "Next.js", "Firebase", "Square API"]}
      />

      <ExperienceItem
        title="Freelance Website Designer & Developer - 2 Client Websites"
        workplace="Dave Castro Photography | Pallan Cooling and Heating"
        description="I designed and launched a visually engaging photography portfolio (davecastrophotography.com) on GoDaddy with custom galleries and SEO optimization, and developed a responsive, SEO-optimized WordPress site with custom scheduling tools for a local HVAC company (pallancoolingandheating.com) significantly boosting online visibility, search ranking, and user engagement for both clients."
        date="[Mar 2025 – Aug 2025]  •  6 mos  •  Freelance"
        gif="/adelina/tempGIF.gif"
        skills={["Webflow", "GoDaddy", "SEO", "Accessibility", "Design"]}
      />

      <ExperienceItem
        title="Instructional Technology Services Student Analyst"
        workplace="SDSU Information Technology Services  |  IT Division"
        description="Executed multi-channel IT support through ServiceNow, phone, Zoom, email, chat, and in-person, delivering exceptional user experience and efficiently resolving 400+ technical inquiries monthly. Collaborated with cross-functional teams to troubleshoot and resolve complex hardware, software, and network issues, enhancing system reliability and user satisfaction across campus."
        date="[Jan 2024 – May 2024]  •  1yr 5mos  •  Part-Time"
        gif="/adelina/tempGIF.gif"
        skills={["ServiceNow", "Zoom", "Gmail", "Slack", "Office 365"]}
      />

      <ExperienceItem
        title="Ocean Lifeguard & Junior Lifeguard Instructor"
        workplace="City of Port Hueneme Lifeguard Association"
        description="Led emergency response efforts with critical first aid and CPR while also managing daily fitness training and educational programs for junior lifeguards (ages 9–15), promoting safety, teamwork, and personal growth. Consistently ensured beach safety through vigilant monitoring, proactive hazard identification, and effective communication with beachgoers, contributing to a secure and enjoyable coastal environment."
        date="[Jun 2021 – May 2025]  •  4 yrs  •  Seasonal"
        gif="/adelina/tempGIF.gif"
        skills={["Fins", "Buoy", "Sunscreen", "Sunglasses", "Binoculars"]}
      />

    </div>
    </section>
  );
}