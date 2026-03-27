import SkillCard from "./SkillsCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

export default function HorizontalScrollSkills() {
  return (
    <HorizontalScrollCarousel ariaLabel="Skills" stripClassName="mt-10 gap-10">
      <SkillCard
        title="Languages"
        skills={["python", "javascript", "typescript", "java", "c"]}
      />
      <SkillCard
        title="Frontend"
        skills={["react", "next.js", "vite", "tailwind", "html", "css"]}
      />
      <SkillCard
        title="Backend"
        skills={[
          "node.js",
          "express.js",
          "supabase",
          "postgresql",
          "mongodb",
          "rest APIs",
        ]}
      />
      <SkillCard
        title="Tools"
        skills={["git", "github", "vercel", "docker", "unix", "figma", "jira"]}
      />
      <SkillCard
        title="Exploring"
        skills={["spring boot", "aws", "cloudflare"]}
      />
    </HorizontalScrollCarousel>
  );
}
