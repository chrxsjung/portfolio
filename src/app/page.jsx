import Navbar from "@/components/Navbar";
import HorizontalScrollProjects from "@/components/HorizontalScrollProjects";
import HorizontalScrollSkills from "@/components/HorizontalScrollSkills";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 mb-12 w-full">
        <div className="flex flex-col text-left text-gray-200 w-full max-w-5xl mx-auto px-7 md:px-8 pt-1 pb-6 md:pt-2 md:pb-10 container-everything">
          <section
            id="intro"
            aria-labelledby="intro-heading"
            className="scroll-mt-24"
          >
            <h2
              id="intro-heading"
              className="font-bold text-2xl sm:text-3xl mt-4"
            >
              hi!
            </h2>

            <p className="text-xl mt-7">
              my name is chris, and i'm a junior at the{" "}
              <a
                href="https://www.buffalo.edu/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                University at Buffalo
              </a>{" "}
              majoring in CS. i'm passionate about full-stack development, and
              i'm constantly building / learning new things to improve as a
              developer.
            </p>

            <p className="text-xl mt-7">
              as of right now, i'm learning spring boot by building a project with it.
            </p>

            <p className="text-xl mt-7">
              here are some of the technologies i've worked with:
            </p>

            <HorizontalScrollSkills />
          </section>

          <section
            id="work"
            aria-labelledby="work-heading"
            className="mt-12 border-t border-white/10 pt-10 scroll-mt-24"
          >
            <h2 id="work-heading" className="font-bold text-2xl sm:text-3xl">
              work
            </h2>


            <p className="text-xl mt-7">
              <span className="font-bold">Summer 2025</span> - SWE intern at{" "}
              <a
                href="https://wearebarbarian.com/"
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-orange-500">Barbarian</span>
              </a>{" "}
            </p>

            <p className="text-xl mt-5">
              - i mainly worked on an ai powered internal tool using TypeScript,
              React, Next.js, and Supabase. <br />- i also helped maintain and
              improve the company website using HTML, CSS, and JavaScript.
            </p>
          </section>

          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="mt-12 border-t border-white/10 pt-10 scroll-mt-24"
          >
            <h2
              id="projects-heading"
              className="font-bold text-2xl sm:text-3xl"
            >
              projects
            </h2>

            <p className="text-xl mt-7">
              i learn best by building, and like to build projects that interest
              me.
            </p>

            <div className="flex flex-row flex-wrap gap-2 items-center mt-4 text-gray-300 text-sm">
              <ArrowDown
                aria-hidden="true"
                className="w-5 h-5 text-blue-400 -rotate-90 shrink-0"
              />
              <span>academic work toward the end</span>
            </div>

            <HorizontalScrollProjects />
          </section>

          <section
            id="about"
            aria-labelledby="about-heading"
            className="mt-12 border-t border-white/10 pt-10 scroll-mt-24"
          >
            <h2 id="about-heading" className="font-bold text-2xl sm:text-3xl">
              more about me
            </h2>

            <p className="text-xl mt-10">
              outside of coding, i like watching tv, exploring new music,
              following soccer, and playing video games like valorant, fortnite,
              roblox, and fifa.
            </p>

            <p className="text-xl mt-5">
              my favorite tv shows are{" "}
              <span className="italic font-bold">Reply 1988</span>,{" "}
              <span className="italic font-bold">The Flash</span>, and{" "}
              <span className="italic font-bold">
                Avatar: The Last Airbender
              </span>
            </p>

            <p className="text-xl mt-5">
              i love soccer and follow most major leagues and tournaments. i'm a
              big fan of the korean GOAT, Son Heung-Min.
            </p>

            <p className="text-xl mt-5">
              i can't live without music. i like listening to korean music
              across many genres like ballads, k-pop, and krnb. and recently
              i've been listening to a lot of EDM and house music.
            </p>

            <p className="text-xl mt-5">
              my favorite artist is{" "}
              <span className="text-pink-500">
                <a
                  href="https://open.spotify.com/artist/2MtHuR0W2idZdF7x4wddqq"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Giriboy
                </a>
              </span>
              , and{" "}
              <span className="text-gray-400">
                <a
                  href="https://www.youtube.com/watch?v=iRNxBLK_PVk"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alone (Feat. SOLE, Dvwn)
                </a>
              </span>{" "}
              by{" "}
              <span className="text-cyan-500">
                <a
                  href="https://open.spotify.com/artist/305pg6Bs6Mz9Tm2zK66psY"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cosmic Boy
                </a>
              </span>{" "}
              has been on repeat.
            </p>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="mt-12 border-t border-white/10 pt-10 scroll-mt-24"
          >
            <h2 id="contact-heading" className="font-bold text-2xl sm:text-3xl">
              contact
            </h2>

            <div className="text-xl mt-8 space-y-4 text-gray-200">
              <p>
                thanks for stopping by. if you're curious about my work,
                projects, or just want to connect, feel free to reach out! i'm
                always looking for new opportunities to learn and grow.
              </p>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <strong className="shrink-0">connect with me at:</strong>
                <a
                  href="https://www.linkedin.com/in/chrxsjung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href="https://github.com/chrxsjung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="mailto:jungchristopher456@gmail.com"
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
