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
        skills={["JavaScript", "TypeScript", "Python", "Java", "C", "OCaml"]}
      />
      <SkillCard
        title="Frontend"
        skills={["React", "Next.js", "Vite", "Tailwind CSS", "HTML", "CSS"]}
      />
      <SkillCard
        title="Backend"
        skills={["Node.js", "Express.js", "Supabase", "PostgreSQL", "SQL", "REST APIs"]}
      />
      <SkillCard
        title="Security"
        skills={["NextAuth.js", "Supabase Auth", "OAuth 2.0", "PKCE"]}
      />
      <SkillCard title="Exploring" skills={["MongoDB", "AWS", "Docker"]} />
      <SkillCard
        title="Tools"
        skills={["Git", "GitHub", "Vercel", "UNIX", "Figma", "Jira"]}
      />{" "}
    </ScrollContainer>
  );
}
