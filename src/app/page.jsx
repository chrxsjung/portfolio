import Navbar from "@/components/Navbar";
import "./globals.css";
import { Linkedin, Github, Mail } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex justify-start mb-12 w-full px-[5%] md:px-[8%] lg:px-[12%]">
        <div className="flex flex-col text-left text-gray-200 p-6 md:p-12 w-full md:max-w-[90%] lg:max-w-[80%]">
          <h1 className="font-bold text-4xl sm:text-6xl typing text-yellow-400">
            Hi, I'm Chris.
          </h1>

          <p className="text-lg mt-10">
            i'm a junior studying computer science at the{" "}
            <span className="text-blue-500">University at Buffalo</span>. i'm
            really interested in full-stack web development and always looking
            for opportunities to learn and grow as a developer.
          </p>

          <p className="text-lg mt-5">
            i use <span className="text-yellow-400">javascript</span>,{" "}
            <span className="text-sky-400">react</span>,{" "}
            <span className="bg-white text-black font-semibold px-1 rounded">
              next.js
            </span>
            , <span className="text-cyan-400">tailwind css</span>, and{" "}
            <span className="text-emerald-500">supabase</span> to build my
            projects. i also used this same tech stack during my internship at{" "}
            <span className="text-orange-500">Barbarian</span>.
          </p>

          <p className="text-lg mt-5">
            i'm constantly learning by building projects that i'm passionate
            about and sharing it with others.
          </p>

          <p className="text-lg mt-5">
            outside of coding, i enjoy watching k-dramas, listening to music,
            following soccer, and playing games like{" "}
            <span className="text-red-500">valorant</span>,{" "}
            <span className="text-cyan-400">fortnite</span>, and{" "}
            <span className="text-green-500">fifa</span>.
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

          <h1
            id="work"
            className="font-bold text-4xl sm:text-6xl mt-12 text-yellow-400"
          >
            work experience
          </h1>
          <p className="text-lg mt-10">
            <span className="font-bold">summer 2025</span> - i was a technology
            intern at <span className="text-orange-500">Barbarian</span>. i was
            part of a 10-member intern team called the horde. we worked on some
            cool 🔒 client projects.
          </p>

          <p className="text-lg mt-5">
            for the tech department, i worked on the frontend of the{" "}
            <a
              href="https://wearebarbarian.com/"
              className="text-white underline "
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-500">Barbarian</span>
            </a>{" "}
            website using{" "}
            <span className="text-orange-500 font-semibold">html</span>,{" "}
            <span className="text-blue-500 font-semibold">css</span>, and{" "}
            <span className="text-yellow-400 font-semibold">javascript</span>.
          </p>
          <p className="text-lg mt-5">
            🔒 i also developed 10+ front end pages for a tool / web app to make
            work easier for the whole company using{" "}
            <span className="text-blue-500 font-semibold">typescript</span>,{" "}
            <span className="text-sky-400 font-semibold">react</span>,{" "}
            <span className="bg-white text-black font-semibold px-1 rounded">
              next.js
            </span>
            , and{" "}
            <span className="text-cyan-400 font-semibold">tailwind css</span>.
          </p>
          <p className="text-lg mt-5">
            all in all, the experience helped me grow fast — i learned agile
            workflows, picked up new tech stacks quickly, and contributed to
            real, meaningful projects.
          </p>
          <p className="text-lg mt-5">
            i also made many friends and had a blast during this internship.{" "}
            <span className="text-orange-500">#horde2025</span>
          </p>

          <h1
            id="projects"
            className="font-bold text-4xl sm:text-6xl mt-12 text-yellow-400"
          >
            projects
          </h1>
          <p className="text-lg mt-10">
            i learn best by building. i mostly use{" "}
            <span className="text-yellow-400">javascript</span>,{" "}
            <span className="text-sky-400">react</span>,{" "}
            <span className="bg-white text-black font-semibold px-1 rounded">
              next.js
            </span>
            , <span className="text-cyan-400">tailwind css</span>, and{" "}
            <span className="text-emerald-500">supabase</span> to build my
            projects — and host them on{" "}
            <span className="bg-white text-black font-semibold px-1 rounded">
              vercel
            </span>
            .
          </p>
          <div className="flex flex-col lg:flex-row gap-12 mt-10">
            <ProjectCard
              image="/images/epl.jpg"
              liveUrl="https://soccer-stats-taupe.vercel.app/"
              githubUrl="https://github.com/chrxsjung/soccer-stats"
              title="premier league stats"
              description="a web app that allows you to view stats for the premier league. season toggle, advanced stats, and more."
              techStack="javascript (vite) supabase, api-football"
            />
            <ProjectCard
              image="/images/spotify.jpg"
              liveUrl="https://spotify-stats-v2-inky.vercel.app/"
              githubUrl="https://github.com/chrxsjung/spotify-stats-v2"
              title="spotify stats"
              description="a web app that allows you to view your spotify listening history. top artists, top songs, recently played, and more."
              techStack="javascript, react, next.js, tailwind css, spotify api, next-auth"
            />
          </div>

          <h1 className="font-bold text-4xl sm:text-6xl text-yellow-400">
            random stuff
          </h1>
          <p className="text-lg mt-10">
            i watch a lot of k-dramas. i'm currently watching{" "}
            <span className="text-blue-500">hospital playlist 2</span>. if you
            have any recs, please do let me know.
          </p>
          <p className="text-lg mt-5">
            i'm also a big fan of soccer, i follow most leagues and i'm a big
            Son Heung-Min fan.
          </p>
          <p className="text-lg mt-5">
            i love listening to music and discovering new artists. my favorite
            artist right now is{" "}
            <span className="text-pink-500 ">
              {" "}
              <a
                href="https://open.spotify.com/artist/2MtHuR0W2idZdF7x4wddqq"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                giriboy
              </a>
            </span>
            . maybe i just put you on. my favorite song right now is{" "}
            <span className="text-pink-500">
              <a
                href="https://www.youtube.com/watch?v=XShaIZs7J7M"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                really like you - babymonster
              </a>
            </span>
            .
          </p>
          <h1
            id="contact"
            className="font-bold text-4xl sm:text-6xl text-yellow-400 mt-12"
          >
            contact me
          </h1>
          <p className="text-lg mt-10">
            i'm currently seeking a software engineering internship for summer
            2026. if you'd like to reach out, or just want to chat, feel free to
            contact me. i'm always happy to connect.
          </p>

          <div className="flex flex-row gap-4 justify-start text-base mt-5">
            <a
              href="https://www.linkedin.com/in/chrxsjung/"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://github.com/chrxsjung"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=jungchristopher456@gmail.com"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              gmail
            </a>
          </div>
          <h1 className="font-bold text-4xl sm:text-6xl text-yellow-400 mt-12">
            thanks for visiting!
          </h1>
          <p className="text-lg mt-10">
            i'm always happy to connect. feel free to contact me.
          </p>
        </div>
      
      </main>
    </div>
  );
}
