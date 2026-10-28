import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { EMAIL, LINKS } from "@/lib/links";
import { SITE_URL } from "@/lib/site";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "in/chrxsjung",
    href: LINKS.linkedin,
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "github.com/chrxsjung",
    href: LINKS.github,
    Icon: Github,
  },
  { label: "Email", handle: EMAIL, href: LINKS.email, Icon: Mail },
];

const ARTISTS = [
  { name: "Giriboy", href: "https://www.youtube.com/@GIRIBOYWORLD/releases" },
  { name: "KC (label)", href: "https://www.youtube.com/@KCTHECOMPANY/videos" },
  {
    name: "Hearts2Hearts",
    href: "https://www.youtube.com/@hearts2hearts.official/releases",
  },
  { name: "Clairo", href: "https://www.youtube.com/@clairo/releases" },
  {
    name: "wave to earth",
    href: "https://www.youtube.com/@wavetoearth/releases",
  },
];

const SONGS = [
  { name: "STYLE", href: "https://www.youtube.com/watch?v=n7kFRxFIPrI" },
  { name: "maybe baby", href: "https://www.youtube.com/watch?v=mY29OplGMkY" },
  { name: "SKY PASS", href: "https://www.youtube.com/watch?v=uvNbnNVMyIA" },
  { name: "Bags", href: "https://www.youtube.com/watch?v=CeA92xqw-QI" },
  { name: "Beaches", href: "https://www.youtube.com/watch?v=nNXSSfSmbao" },
];

function ExternalLink({ href, className = "", children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className}`}
    >
      {children}
    </a>
  );
}

// renders "a, b, and c" with each item as a link
function LinkList({ items }) {
  return items.map((item, i) => (
    <span key={item.href}>
      {i > 0 && (i === items.length - 1 ? ", and " : ", ")}
      <ExternalLink href={item.href}>{item.name}</ExternalLink>
    </span>
  ));
}

// only facts that appear on the page itself; no invented titles or credentials
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Christopher Jung",
      alternateName: "Chris Jung",
      url: SITE_URL,
      email: LINKS.email,
      sameAs: [LINKS.linkedin, LINKS.github],
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "University at Buffalo",
        url: "https://www.buffalo.edu/",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Chris Jung",
      url: SITE_URL,
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // static object serialized at build time; "<" is escaped so the json can never close the script tag
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
      >
        skip to content
      </a>

      <Navbar />

      <main id="main" className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <section
          id="intro"
          aria-labelledby="intro-heading"
          className="pt-16 pb-16 md:pt-28 md:pb-24"
        >
          <h1
            id="intro-heading"
            className="rise text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
          >
            Christopher Jung
          </h1>

          <p
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed"
            style={{ "--i": 1 }}
          >
            <span className="text-fg">Hi!</span> My name is Chris, and I'm a
            senior at the{" "}
            <ExternalLink
              href="https://www.buffalo.edu/"
              className="text-blue-600 decoration-blue-600/30 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
            >
              University at Buffalo
            </ExternalLink>{" "}
            majoring in Computer Science. I'm passionate about full-stack
            development, and constantly trying to build / learn new things to
            improve as a developer. I have multiple internships and projects under my belt and I'm currently looking for a full-time software engineering role starting in{" "}
            <strong className="font-semibold text-fg">Summer 2027</strong>.
          </p>

          {/* <p
            className="rise mt-8 inline-flex items-center gap-2.5 rounded-lg border sm:rounded-full border-line bg-surface py-1.5 pr-4 pl-3 text-sm text-muted"
            style={{ "--i": 2 }}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
            />
            <span>
              Right now, I'm deep diving into{" "}
              <span className="font-medium text-fg">Spring Boot</span> and{" "}
              <span className="font-medium text-fg">AWS</span>.
            </span>
          </p> */}

          <div
            className="rise mt-10 flex flex-wrap items-center gap-3"
            style={{ "--i": 3 }}
            role="group"
            aria-label="relevant links"
          >
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-fg/85"
            >
              open resume
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
              />
            </a>
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-3.5 py-2 text-sm text-muted transition-colors hover:border-subtle hover:bg-surface hover:text-fg"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </section>

        <Section id="skills" title="Skills">
          <p className="mb-8 text-base leading-relaxed text-muted">
            Here are some of the technologies I've worked with:
          </p>
          <Skills />
        </Section>

        <Section id="work" title="Work Experience">
          <Experience />
        </Section>

        <Section id="projects" title="Projects">
          <Projects
            intro={
              <>
                <p className="text-base leading-relaxed text-muted">
                  I learn best by building, and like to build projects that
                  interest me.
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-subtle">
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  academic work toward the end
                </p>
              </>
            }
          />
        </Section>

        <Section id="about" title="About Me">
          <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-muted sm:text-[17px] sm:leading-relaxed">
            <p>
              I like to spend my free time watching tv shows, exploring new music, following soccer, and playing games like Valorant, League of Legends,
              Fortnite, Roblox, and FIFA. 
            </p>
            <p>
              My favorite tv shows are{" "}
              <cite className="text-fg">Reply 1988</cite>,{" "}
              <cite className="text-fg">The Flash</cite>, and{" "}
              <cite className="text-fg">Avatar: The Last Airbender</cite>.
            </p>
            <p>
              I love soccer and follow most major leagues and tournaments. I'm a
              big fan of the Korean GOAT, Son Heung-Min.
            </p>
            <p>
              I can't live without music. Recently I've
              been exploring more EDM and Jazz, and playing music I love on the guitar.
            </p>
            <p>
              current favorite artists: <LinkList items={ARTISTS} />.
            </p>
            <p>
              favorite songs / performances: <LinkList items={SONGS} />.
            </p>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-[60ch] text-base leading-relaxed text-muted sm:text-[17px] sm:leading-relaxed">
            Thanks for stopping by. If you're curious about my work, projects,
            or just want to connect, feel free to reach out! I'm always looking
            for new opportunities to learn and grow.
          </p>

          <p className="mt-10 text-sm text-subtle">find me on:</p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {SOCIALS.map(({ label, handle, href, Icon }) => {
              const isMail = href.startsWith("mailto:");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 py-4 transition-colors sm:gap-4"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-subtle transition-colors group-hover:text-fg"
                    />
                    <span className="w-16 shrink-0 text-sm text-fg sm:w-20">
                      {label}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-mono text-xs text-subtle transition-colors group-hover:text-muted sm:text-sm">
                      {handle}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8 text-sm text-subtle md:px-8">
          <p>© {new Date().getFullYear()} Christopher Jung</p>
          <a
            href="#intro"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            back to top
            <ArrowUp
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
