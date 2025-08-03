"use client";

export default function ProjectCard({
  title,
  description,
  techStack,
  image,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="flex flex-col items-center text-white px-6 mb-16 max-w-md">
      <img
        src={image}
        alt={`${title} preview`}
        className="rounded-2xl shadow-lg mb-8 "
      />

      <h1 className="text-4xl md:text-5xl font-semibold text-center">
        {title}
      </h1>

      <p className="text-lg mt-6 text-center">{description}</p>
      <p className="text-lg mt-4 text-center">{techStack}</p>

      {/* buttons */}
      <div className="flex gap-6 mt-6">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          view site
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          github
        </a>
      </div>
    </div>
  );
}
