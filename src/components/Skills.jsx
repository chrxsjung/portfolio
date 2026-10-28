const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "Vite"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Spring Boot",
      "Azure",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito", "Vitest", "Playwright", "Pact"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "Octopus Deploy",
      "Docker",
      "Terraform",
      "Maven",
      "Gradle",
    ],
  },
];

export default function Skills() {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {SKILL_GROUPS.map(({ title, skills }) => (
        <div
          key={title}
          className="grid gap-3 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6"
        >
          <dt className="text-sm text-subtle sm:pt-1">{title}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-fg/90"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
