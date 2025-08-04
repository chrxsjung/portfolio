export default function SkillCard({ title, skills }) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-xs shadow-md hover:shadow-lg transition">
      <div className="flex flex-col  text-white mb-16 min-w-[200px] max-w-[200px]">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">{title}</h2>
        <ul className="text-gray-300 space-y-1 ">
          {skills.map((skill, index) => (
            <li key={index}>• {skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
