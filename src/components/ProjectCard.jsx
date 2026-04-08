export default function ProjectCard({
  title,
  description,
  techStack,
  image,
  liveUrl,
  githubUrl,
  status,
  hideGithub = false,
  hideLive = false,
}) {
  return (
    <div className="mb-0 flex h-[544px] min-w-[296px] max-w-[320px] shrink-0 flex-col items-center text-white">
      <img
        src={image}
        alt={`${title} preview`}
        className="mb-6 h-[168px] w-full rounded-xl object-cover aspect-video shadow-lg"
      />

      <h3 className="text-center text-2xl font-semibold break-normal whitespace-normal md:text-3xl">
        {title}
      </h3>

      <div className="mt-3 min-h-[24px]">
        {status && (
          <div
            className={`rounded-full px-3 py-0.5 text-[13px] leading-snug ${
              status === "Completed"
                ? "bg-green-700 text-green-200"
                : "bg-yellow-300 text-yellow-950"
            }`}
          >
            {status}
          </div>
        )}
      </div>

      <div className="flex min-h-0 w-full flex-1 flex-col items-center">
        <div className="flex w-full flex-col items-center">
          <p className="mt-6 text-center text-base break-normal whitespace-pre-line">
            {description}
          </p>
          <div className="mt-4 flex w-full flex-col items-center gap-0">
            <p className="text-center text-base break-normal whitespace-pre-line text-[#94a3b8]">
              {techStack}
            </p>
            {(!hideLive || !hideGithub) && (
              <div className="mt-6 flex gap-5 text-sm">
                {!hideLive && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link underline"
                  >
                    live
                  </a>
                )}
                {!hideGithub && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link underline"
                  >
                    github
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="min-h-0 w-full flex-1" aria-hidden="true" />
      </div>
    </div>
  );
}
