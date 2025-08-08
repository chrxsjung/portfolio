import Navbar from "@/components/Navbar";
import "./globals.css";
import { Linkedin, Github, Mail } from "lucide-react";
import {
  ArrowRight,
  ArrowBigRight,
  ArrowBigDown,
  ArrowDown,
} from "lucide-react";
import HorizontalScroll from "@/components/HorizontalScroll";
import HorizontalScrollSkills from "@/components/HorizontalScrollSkills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-start mb-12 w-full px-[5%] md:px-[8%] lg:px-[12%] ">
        <div className="flex flex-col text-left text-gray-200 p-6 md:p-12 w-full md:max-w-[90%] lg:max-w-[80%] container-everything">
          <h1 className="font-bold text-4xl sm:text-6xl typing text-yellow-400 nameblock">
            Hi, I'm Chris.
          </h1>

          <p className="text-xl mt-7">
            I'm a junior majoring in Computer Science at the{" "}
            <span className="text-blue-500">University at Buffalo</span> with a
            strong passion for full-stack web development. I’m always exploring
            new technologies and building projects that help me grow as a
            developer.
          </p>

          <p className="text-xl mt-5">
            I'm currently seeking a software engineering internship for{" "}
            <span className="text-red-400 font-semibold">Summer 2026</span>. If
            you'd like to connect, or just want to chat, feel free to contact
            me. I'd love to hear from you!
          </p>

          <p className="text-xl mt-5">
            I typically work with{" "}
            <span className="text-yellow-400">JavaScript</span> and{" "}
            <span className="text-blue-500">TypeScript</span>, using{" "}
            <span className="text-sky-400">React</span>,{" "}
            <span className="bg-zinc-400 text-black font-semibold px-1 rounded">
              Next.js
            </span>
            , and <span className="text-cyan-400">Tailwind CSS</span> for the
            frontend, and <span className="text-green-500">Supabase</span>{" "}
            (PostgreSQL) with <span className="text-sky-400">Node.js</span> and{" "}
            <span className="text-orange-400">Express</span> for the backend.
            Recently, I’ve been expanding my backend skills by exploring{" "}
            <span className="text-green-500">MongoDB</span>,{" "}
            <span className="text-orange-400">AWS</span>, and{" "}
            <span className="text-sky-400">Docker</span>.
          </p>

          <p className="text-xl mt-5">
            I learn best by doing, so I focus on building things that I’m
            genuinely excited about and sharing them with others.
          </p>

          <p className="text-xl mt-5">
            Outside of coding, I enjoy watching k-dramas, listening to music,
            following soccer, and playing video games like{" "}
            <span className="text-red-500">Valorant</span>,{" "}
            <span className="text-cyan-400">Fortnite</span>, and{" "}
            <span className="text-green-500">FIFA</span>.
          </p>
          <div className="flex flex-row gap-4 justify-start mt-8 text-gray-100 items-center font-bold text-xl">
            Connect with me on:
            <a
              href="https://www.linkedin.com/in/chrxsjung/"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/chrxsjung"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=jungchristopher456@gmail.com"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <div className="flex flex-row gap-2 justify-start items-center mt-8 text-gray-100">
            <ArrowDown className="w-12 h-12 text-blue-500 animate-bounce -rotate-90" />
            <ArrowDown className="w-12 h-12 text-blue-500 animate-bounce -rotate-90" />
            <ArrowDown className="w-12 h-12 text-blue-500 animate-bounce -rotate-90" />

            <p className="text-xl">
              Scroll to the right to see my tech skills and what I'm learning.
            </p>
          </div>

          <HorizontalScrollSkills />

          <div className="flex flex-col justify-start text-left text-gray-300 space-y-4 mt-10">
            <p className="font-bold text-4xl sm:text-6xl mt-8 text-yellow-400">
              Want to see what I’ve worked on?{" "}
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mt-4">
              Scroll down and browse through my recent internship and projects.
            </p>
            <div className="flex flex-row gap-2 justify-start items-center mt-4 text-gray-100">
              <ArrowDown className="w-12 h-12 text-blue-500 animate-bounce mt-4 " />
              <ArrowDown className="w-12 h-12 text-blue-500 animate-bounce mt-4 " />{" "}
              <ArrowDown className="w-12 h-12 text-blue-500 animate-bounce mt-4 " />
            </div>
          </div>

          <h1
            id="work"
            className="font-bold text-4xl sm:text-6xl mt-12 text-yellow-400"
          >
            Work Experience
          </h1>
          <p className="text-xl mt-7">
            <span className="font-bold">Summer 2025</span> - I was a technology
            intern at <span className="text-orange-500">Barbarian</span>. I was
            part of a 10-member intern team called the Horde, and we worked on
            some really cool client projects together. 🔒
          </p>

          <p className="text-xl mt-5">
            I worked on the front end of the{" "}
            <a
              href="https://wearebarbarian.com/"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-500">Barbarian</span>
            </a>{" "}
            website using{" "}
            <span className="text-orange-500 font-semibold">HTML</span>,{" "}
            <span className="text-blue-500 font-semibold">CSS</span>, and{" "}
            <span className="text-yellow-400 font-semibold">JavaScript</span>.
          </p>

          <p className="text-xl mt-5">
            🔒 I also developed and shipped 10+ front-end pages for an internal
            AI powered tool to help streamline work across the company. I used{" "}
            <span className="text-blue-500 font-semibold">TypeScript</span>,{" "}
            <span className="text-sky-400 font-semibold">React</span>,{" "}
            <span className="bg-zinc-400 text-black font-semibold px-1 rounded">
              Next.js
            </span>
            , and{" "}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>.
          </p>

          <p className="text-xl mt-5">
            Overall, the experience helped me grow quickly. I worked with
            insanely talented people, learned agile workflows, picked up new
            technologies fast, and contributed to real, meaningful projects.
          </p>

          <p className="text-xl mt-5">
            I also made great friends and had a blast during the internship.{" "}
            <span className="text-orange-500">#horde2025</span>
          </p>

          <h1
            id="projects"
            className="font-bold text-4xl sm:text-6xl mt-12 text-yellow-400"
          >
            Projects
          </h1>
          <p className="text-xl mt-7">
            I learn best by building. My projects are hosted on{" "}
            <span className="bg-zinc-400 text-black font-semibold px-1 rounded">
              Vercel
            </span>{" "}
            and reflect both the tools I’m confident with and the new ones I’m
            exploring.
          </p>

          <div className="flex flex-row gap-2 justify-start items-center mt-4 text-gray-100">
            <ArrowRight className="w-12 h-12 text-blue-500" />
            <ArrowRight className="w-12 h-12 text-blue-500" />

            <ArrowRight className="w-12 h-12 text-blue-500" />
            <p className="text-xl">Scroll to the right to see more.</p>
          </div>

          <HorizontalScroll />
          <h1
            id="random"
            className="font-bold text-4xl sm:text-6xl text-yellow-400 mt-12"
          >
            get to know me
          </h1>
          <p className="text-xl mt-10">
            I watch all kinds of shows from k-dramas to anime to regular series.
            On the top of my head, my favorites are{" "}
            <span className="italic font-bold">Reply 1988</span>{" "}
            <span className="text-red-500 font-bold">(a MUST watch)</span>,{" "}
            <span className="italic font-bold">The Flash</span>,{" "}
            <span className="italic font-bold">Avatar: The Last Airbender</span>
            , and <span className="italic font-bold">Weak Hero 1 & 2</span>.
          </p>

          <p className="text-xl mt-5">
            I'm also a huge fan of soccer and have been since I was a kid. I
            follow most leagues and tournaments. I'm a big fan of the Korean
            GOAT, Son Heung-Min.
          </p>
          <p className="text-xl mt-5">
            I can't live without music. I like listening to Korean music across
            many genres like ballads, k-pop, and krnb.
          </p>
          <p className="text-xl mt-5">
            Lately, I've been listening to a lot of{" "}
            <span className="text-pink-500">
              <a
                href="https://open.spotify.com/artist/2MtHuR0W2idZdF7x4wddqq"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Giriboy
              </a>
            </span>{" "}
            (you're welcome), and{" "}
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
            has been on repeat. Want to see your own stats? Check out my{" "}
            <a
              href="https://spotify-stats-v2-inky.vercel.app/"
              className="underline text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify Stats App
            </a>{" "}
            (shameless plug).
          </p>
          <p className="text-xl mt-5">
            Video games have always been a huge part of my life. Some of my best
            memories come from late-night gaming and tournaments with friends. I
            usually play <span className="text-red-500">Valorant</span> and{" "}
            <span className="text-cyan-400">Fortnite</span> with my friends.
          </p>

          <p className="text-xl mt-5">
            <span className="font-bold">Fun fact:</span> I’ve rewatched Reply
            1988 more times than I’m willing to admit. No regrets.{" "}
            <span className="text-red-500 font-bold">
              Please please please watch it.
            </span>
          </p>
          <p className="text-xl mt-5">
            Recently, I’ve gotten into golf. I'm absolutely terrible at it, but
            at least the walk’s nice. So on the weekends, when I'm not gaming or
            coding, you'll probably find me on the golf course.
          </p>

          <h1
            id="contact"
            className="font-bold text-4xl sm:text-6xl text-yellow-400 mt-12 "
          >
            Contact Me
          </h1>
          <p className="text-xl mt-7">
            Thanks for stopping by. If you're curious about my work, projects,
            or just want to connect, feel free to reach out on LinkedIn or shoot
            me an email!
          </p>

          <div className="flex flex-row gap-4 justify-start mt-8 text-gray-100">
            <a
              href="https://www.linkedin.com/in/chrxsjung/"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/chrxsjung"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=jungchristopher456@gmail.com"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
