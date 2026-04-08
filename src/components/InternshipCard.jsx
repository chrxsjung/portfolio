export default function InternshipCard({
  term,
  role,
  company,
  companyUrl,
  highlights,
}) {
  return (
    <article className="w-full rounded-xl border border-white/15 bg-zinc-900/40 p-5 sm:p-6">
      <p className="text-sm uppercase tracking-wide text-sky-300">{term}</p>
      <h3 className="mt-2 text-xl sm:text-2xl font-semibold">
        <span className="text-white">{role} at</span>{" "}
        <a
          href={companyUrl}
          className="text-orange-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
      </h3>

      <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-200">
        {highlights.map((highlight) => (
          <li key={highlight} className="leading-relaxed">
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
