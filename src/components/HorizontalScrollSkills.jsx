"use client";
import ScrollContainer from "react-indiana-drag-scroll";
import SkillCard from "./SkillsCard";

export default function HorizontalScrollSkills() {
  return (
    <ScrollContainer
      hideScrollbars={false}
      className="flex flex-row gap-12 mt-10 overflow-x-auto whitespace-nowrap pr-4 cursor-grab active:cursor-grabbing  "
    >
      <SkillCard
        title="Languages"
        skills={["Python", "JavaScript", "TypeScript", "Java", "C", "OCaml"]}
      />
      <SkillCard
        title="Frontend"
        skills={["React", "Next.js", "Vite", "Tailwind CSS", "HTML", "CSS"]}
      />
      <SkillCard
        title="Backend"
        skills={["Node.js", "Express.js", "Supabase", "PostgreSQL", "MongoDB", "REST APIs"]}
      />

      <SkillCard
        title="Tools"
        skills={["Git", "GitHub", "Vercel", "UNIX", "Figma", "Jira"]}
      />
            <SkillCard title="Exploring" skills={["MongoDB", "AWS", "Docker"]} />

    </ScrollContainer>
  );
}
