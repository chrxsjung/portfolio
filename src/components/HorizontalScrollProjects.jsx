import ProjectCard from "./ProjectCard";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

export default function HorizontalScrollProjects() {
  return (
    <HorizontalScrollCarousel
      ariaLabel="Project cards"
      stripClassName="mt-8 gap-10"
      tightArrows
    >
      <ProjectCard
        image="/images/resume.webp"
        status="working on new features"
        title="Internship Hub"
        liveUrl="https://c-internship-tools.vercel.app/"
        githubUrl="https://github.com/chrxsjung/internship_hub"
        description="all the tools you could possibly need for your internship search (resume, project ideas, etc.)"
        techStack="JavaScript, React, Next.js, Tailwind CSS, Supabase, Supabase Auth, Groq"
      />
      <ProjectCard
        image="/images/spotify.jpg"
        status="working on new features"
        liveUrl="https://spotify-stats-v2-inky.vercel.app/"
        githubUrl="https://github.com/chrxsjung/spotify-stats-v2"
        title="Spotify Stats"
        description="web app showing all your spotify listening habits (too bad i switched to apple music lol)"
        techStack="JavaScript, React, Next.js, Tailwind CSS, Spotify API, NextAuth"
      />
      <ProjectCard
        image="/images/epl.jpg"
        status="working on new features"
        liveUrl="https://soccer-stats-taupe.vercel.app/"
        githubUrl="https://github.com/chrxsjung/soccer-stats"
        title="EPL Stats"
        description="my first full-stack project! shows stats for the english premier league (past and present)"
        techStack="JavaScript with Vite, Supabase (PostgreSQL), API-Football"
      />

      <ProjectCard
        image="/images/home-bg.jpg"
        status="working on improvements"
        title="Portfolio"
        githubUrl="https://github.com/chrxsjung/portfolio"
        description="this website! i'm going to continue updating it with new projects and experiences. + make it pretty :)"
        techStack={`JavaScript, React, Next.js\nand Tailwind CSS`}
        hideLive
      />

      <ProjectCard
        image="/images/python.webp"
        status="Completed"
        title="python web server (cse312)"
        description="definetly the best project i've done in college so far. i learned a lot about backend web development."
        techStack="Python, MongoDB, Docker, FFmpeg, Nginx, REST APIs"
        hideGithub
        hideLive
      />

      <ProjectCard
        image="/images/c.jpg"
        status="Completed"
        title="Dynamic Memory Allocator (cse220)"
        description="my own dynamic memory allocator in c. probably the hardest project i've done in college so far."
        techStack="C, UNIX, GDB"
        hideGithub
        hideLive
      />
      <ProjectCard
        image="/images/ocaml.webp"
        status="Completed"
        title="Interpreter Project (cse305)"
        description={
          "built my own interpreter in OCaml for a custom stack-based bytecode language. pretty cool project!"
        }
        techStack="OCaml"
        hideGithub
        hideLive
      />
    </HorizontalScrollCarousel>
  );
}
