import Navbar from "@/components/Navbar";
import HorizontalScrollProjects from "@/components/HorizontalScrollProjects";
import HorizontalScrollSkills from "@/components/HorizontalScrollSkills";
import VerticalInternshipExperiences from "@/components/VerticalInternshipExperiences";
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
              My name is Chris, and I'm a junior at the{" "}
              <a
                href="https://www.buffalo.edu/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                University at Buffalo
              </a>{" "}
              majoring in Computer Science. I'm passionate about full-stack
              development, and constantly building / learning new things to
              improve as a developer.
            </p>

            <p className="text-xl mt-7">
              Right now, I'm deep diving into{" "}
              <span className="font-bold text-green-500">Spring Boot</span> and{" "}
              <span className="font-bold text-orange-400">AWS</span>.
            </p>

            <p className="text-xl mt-7">
              Here are some of the technologies I've worked with:
            </p>

            <HorizontalScrollSkills />
          </section>

          <section
            id="work"
            aria-labelledby="work-heading"
            className="mt-12 border-t border-white/10 pt-10 scroll-mt-24"
          >
            <h2 id="work-heading" className="font-bold text-2xl sm:text-3xl">
              Work Experience
            </h2>

            <VerticalInternshipExperiences />
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
              Projects
            </h2>

            <p className="text-xl mt-7">
              I learn best by building, and like to build projects that interest
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
              About Me
            </h2>
            <p className="text-xl mt-10">
              I spend my free time watching tv shows (like k-dramas), exploring
              new music, following soccer, and playing games like Valorant,
              Fortnite, Roblox, and FIFA.
            </p>
            <p className="text-xl mt-5">
              My favorite tv shows are{" "}
              <span className="italic font-bold">Reply 1988</span>,{" "}
              <span className="italic font-bold">The Flash</span>, and{" "}
              <span className="italic font-bold">
                Avatar: The Last Airbender
              </span>
              .
            </p>
            <p className="text-xl mt-5">
              I love soccer and follow most major leagues and tournaments. I'm a
              big fan of the Korean GOAT, Son Heung-Min.
            </p>
            <p className="text-xl mt-5">
              I can't live without music. I like listening to korean music
              across many genres like ballads, k-pop, and krnb. Recently I've
              been exploring more EDM and jazz.
            </p>

            <p className="text-xl mt-5">
              current favorite artists:{" "}
              <a
                href="https://www.youtube.com/@GIRIBOYWORLD/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-red-500 hover:text-red-200"
              >
                Giriboy
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/@KCTHECOMPANY/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-red-500 hover:text-red-200"
              >
                KC (label)
              </a>
              , and{" "}
              <a
                href="https://www.youtube.com/@hearts2hearts.official/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-red-500 hover:text-red-200"
              >
                Hearts2Hearts
              </a>
              .
            </p>
            <p className="text-xl mt-5">
              on repeat:{" "}
              <a
                href="https://www.youtube.com/watch?v=n7kFRxFIPrI"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
              >
                <span>STYLE</span>
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/watch?v=mY29OplGMkY"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
              >
                <span>maybe baby</span>
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/watch?v=uvNbnNVMyIA"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
              >
                <span>SKY PASS</span>
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/watch?v=4R4CG2UUNhA"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
              >
                <span>PUBLIC ENEMIES</span>
              </a>
              , and{" "}
              <a
                href="https://www.youtube.com/watch?v=_Bp6g2JIZg4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
              >
                <span>Ms. Menhera</span>
              </a>
              .
            </p>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="mt-12 border-t border-white/10 pt-10 scroll-mt-24"
          >
            <h2 id="contact-heading" className="font-bold text-2xl sm:text-3xl">
              Contact
            </h2>

            <div className="text-xl mt-8 space-y-4 text-gray-200">
              <p>
                Thanks for stopping by. If you're curious about my work,
                projects, or just want to connect, feel free to reach out! I'm
                always looking for new opportunities to learn and grow.
              </p>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <strong className="shrink-0">find me on:</strong>
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
