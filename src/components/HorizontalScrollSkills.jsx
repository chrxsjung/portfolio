import SkillCard from "./SkillsCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

export default function HorizontalScrollSkills() {
  return (
    <HorizontalScrollCarousel ariaLabel="Skills" stripClassName="mt-10 gap-10">
      <SkillCard
        title="Languages"
        skills={["Python", "Java", "TypeScript", "JavaScript"]}
      />
      <SkillCard
        title="Frontend"
        skills={["React", "Next.js", "Tailwind", "Vite"]}
      />
      <SkillCard
        title="Backend"
        skills={[
          "Node.js",
          "Spring Boot",
          "Azure",
          "PostgreSQL",
          "MongoDB",
          "Supabase",
        ]}
      />
      <SkillCard
        title="Testing"
        skills={["JUnit", "Vitest", "Playwright", "Pact"]}
      />
      <SkillCard
        title="Tools"
        skills={[
          "Git",
          "GitHub Actions",
          "Docker",
          "Terraform",
          "Maven",
          "Gradle",
        ]}
      />
    </HorizontalScrollCarousel>
  );
}
