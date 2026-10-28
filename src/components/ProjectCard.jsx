import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function ProjectLink({ href, project, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-0.5 text-fg transition-colors hover:text-accent"
    >
      {children}
      <span className="sr-only">, {project}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5 text-subtle transition-all group-hover/link:-translate-y-px group-hover/link:translate-x-px group-hover/link:text-accent"
      />
    </a>
  );
}

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
  const completed = status === "completed";

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 640px) 288px, 80vw"
          quality={75}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="mt-4 text-base font-medium tracking-tight text-fg">
        {title}
      </h3>

      {status && (
        <p className="mt-1.5 inline-flex items-center gap-2 font-mono text-xs text-subtle">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              completed ? "bg-emerald-500" : "bg-amber-500"
            }`}
          />
          {status}
        </p>
      )}

      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {description}
      </p>

      <p className="mt-3 font-mono text-xs leading-relaxed text-subtle">
        {techStack}
      </p>

      {(!hideLive || !hideGithub) && (
        <div className="mt-auto flex gap-5 pt-4 text-sm">
          {!hideLive && (
            <ProjectLink href={liveUrl} project={title}>
              live
            </ProjectLink>
          )}
          {!hideGithub && (
            <ProjectLink href={githubUrl} project={title}>
              github
            </ProjectLink>
          )}
        </div>
      )}
    </article>
  );
}
