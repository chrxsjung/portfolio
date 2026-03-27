export default function SkillCard({ title, skills }) {
  return (
    <div className="mb-12 flex h-[328px] min-h-[328px] w-[220px] min-w-[208px] max-w-[220px] shrink-0 flex-col rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow-md transition hover:shadow-lg">
      <div className="flex min-h-0 flex-1 flex-col text-white">
        <h2 className="mb-2 text-lg font-bold text-yellow-400">{title}</h2>
        <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto text-base text-gray-300">
          {skills.map((skill) => (
            <li key={skill}>• {skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
