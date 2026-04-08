export default function ArtistCard({
  name,
  genre,
  url = "#",
  nameClassName = "",
}) {
  return (
    <article className="flex w-full min-w-0 flex-1 basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.75rem)] items-center justify-between gap-3 rounded-xl border border-white/15 bg-zinc-900/40 p-5 text-white">
      <div className="min-w-0">
        <h3 className={`text-xl font-semibold leading-tight ${nameClassName}`}>{name}</h3>
        <p className="mt-1 text-base text-gray-300">{genre}</p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center rounded-md border border-red-400 px-3 py-2 text-sm text-red-200 transition hover:border-red-300 hover:bg-red-950/30 hover:text-red-100"
        aria-label={`play ${name} on youtube`}
      >
        play
      </a>
    </article>
  );
}
