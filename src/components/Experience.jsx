import InternshipCard from "./InternshipCard";

const internshipExperiences = [
  {
    term: "summer 2026",
    role: "SWE intern",
    company: "Versana",
    companyUrl: "https://versana.io/",
    // brand mint #6cffc9 is unreadable on white, so light mode uses a deeper shade of it
    companyColor: "text-[#00875a] dark:text-[#6cffc9]",
    highlights: [
      "Built a new /support page + the microservice behind it from scratch. Provisioned Azure infrastructure, and shipped it to clients.",
      "Helped overhaul CI/CD with GitHub Actions workflows and Octopus Deploy, adopted across the organization.",
      "Wrote a pipeline script that turns Markdown into JSON and automatically refreshes it on the app, cutting a manual effort down to under 2 minutes.",
    ],
  },
  {
    term: "summer 2025",
    role: "SWE intern",
    company: "Barbarian",
    companyUrl: "https://wearebarbarian.com/",
    companyColor: "text-[#d93a00] dark:text-[#ff4400]",
    highlights: [
      "Helped develop an AI-powered internal tool using TypeScript, React, Next.js, and Supabase, streamlining employee workflows.",
      "Improved the company website using HTML, CSS, and JavaScript.",
            
    ],
  },
];

export default function Experience() {
  return (
    <ol className="space-y-12">
      {internshipExperiences.map((experience) => (
        <li key={`${experience.company}-${experience.term}`}>
          <InternshipCard {...experience} />
        </li>
      ))}
    </ol>
  );
}
