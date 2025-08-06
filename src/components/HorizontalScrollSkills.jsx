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
        skills={["JavaScript", "TypeScript", "Python", "Java", "C"]}
      />
      <SkillCard
        title="Frontend"
        skills={["React", "Next.js", "Vite", "Tailwind CSS", "HTML", "CSS"]}
      />
      <SkillCard
        title="Backend"
        skills={["Node.js", "Express", "Supabase (PostgreSQL)", "REST APIs"]}
      />
      <SkillCard
        title="Security"
        skills={["NextAuth.js", "Supabase Auth", "OAuth 2.0", "PKCE", "JWT"]}
      />
      <SkillCard title="Exploring" skills={["MongoDB", "AWS", "Docker"]} />
      <SkillCard
        title="Tools"
        skills={["Git", "GitHub", "Vercel", "Unix", "Figma", "Jira"]}
      />{" "}
    </ScrollContainer>
  );
}
