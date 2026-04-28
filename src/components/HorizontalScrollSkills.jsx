import SkillCard from "./SkillsCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

export default function HorizontalScrollSkills() {
  return (
    <HorizontalScrollCarousel ariaLabel="Skills" stripClassName="mt-10 gap-10">
      <SkillCard
        title="Languages"
        skills={["Python", "JavaScript", "TypeScript", "Java", "C"]}
      />
      <SkillCard
        title="Frontend"
        skills={["HCI Principles", "React", "Next.js", "Vite", "Tailwind", "HTML", "CSS"]}
      />
      <SkillCard
        title="Backend"
        skills={[
          "Node.js",
          "Express.js",
          "Supabase",
          "PostgreSQL",
          "MongoDB",
          "REST APIs",
        ]}
      />
      <SkillCard
        title="Tools"
        skills={["Git", "GitHub", "Vercel", "Docker", "UNIX", "Figma", "Jira"]}
      />
      <SkillCard
        title="Exploring"
        skills={["Spring Boot", "AWS", "Cloudflare"]}
      />
    </HorizontalScrollCarousel>
  );
}
