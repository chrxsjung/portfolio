"use client";

export default function ProjectCard({
  title,
  description,
  techStack,
  image,
  liveUrl,
  githubUrl,
  descriptionClass,
  status,
  hideGithub,
  hideLive,
}) {
  return (
    <div className="flex flex-col items-center text-white mb-16 min-w-[320px] max-w-[360px] h-[620px]">
      <img
        src={image}
        alt={`${title} preview`}
        className="rounded-2xl shadow-lg mb-8 w-full object-cover h-[200px] aspect-video"
      />

      <h1 className="text-3xl md:text-4xl font-semibold text-center break-normal whitespace-normal">
        {title}
      </h1>

      <div className="mt-4 min-h-[28px]">
        {status && (
          <div
            className={`text-sm px-4 py-1 rounded-full ${
              status === "Completed"
                ? "bg-green-700 text-green-200"
                : "bg-yellow-700 text-yellow-200"
            }`}
          >
            {status}
          </div>
        )}
      </div>

      <p
        className={`text-lg mt-6 text-center break-normal whitespace-pre-line ${descriptionClass}`}
      >
        {description}
      </p>

      <div className="mt-auto flex flex-col items-center">
        <p className="text-lg mt-4 text-center break-normal whitespace-pre-line text-[#94a3b8]">
          {techStack}
        </p>

        {(!hideLive || !hideGithub) && (
          <div className="flex gap-6 mt-6">
            {!hideLive && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline navbar-link"
              >
                View Site
              </a>
            )}
            {!hideGithub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline navbar-link"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
