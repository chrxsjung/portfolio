import InternshipCard from "./InternshipCard";

const internshipExperiences = [
  {
    term: "summer 2025",
    role: "SWE intern",
    company: "Barbarian",
    companyUrl: "https://wearebarbarian.com/",
    highlights: [
      "Helped develop an AI-powered internal tool using TypeScript, React, Next.js, and Supabase, streamlining employee workflows.",
      "Improved the company website using HTML, CSS, and JavaScript.",
    ],
  },
  
];

export default function VerticalInternshipExperiences() {
  return (
    <div className="mt-8 flex flex-col gap-5">
      {internshipExperiences.map((experience, index) => (
        <InternshipCard key={`${experience.company}-${index}`} {...experience} />
      ))}
    </div>
  );
}
