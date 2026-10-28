import { ArrowUpRight } from "lucide-react";

export default function InternshipCard({
  term,
  role,
  company,
  companyUrl,
  companyColor = "text-fg",
  highlights,
}) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-medium tracking-tight text-fg">
          {role} <span className="font-normal text-subtle">at</span>{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-baseline gap-0.5 transition-opacity hover:opacity-75 ${companyColor}`}
          >
            {company}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 self-center opacity-60 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
            />
          </a>
        </h3>
        <p className="shrink-0 font-mono text-xs text-subtle">{term}</p>
      </div>

      <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-line-strong"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
