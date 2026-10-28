import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/images/resume.webp",
    status: "working on new features",
    title: "SWE Career Toolkit",
    liveUrl: "https://c-internship-tools.vercel.app/",
    githubUrl: "https://github.com/chrxsjung/internship_hub",
    description:
      "all the tools you could possibly need for your internship search (resume, project ideas, etc.)",
    techStack:
      "JavaScript, React, Next.js, Tailwind CSS, Supabase, Supabase Auth, Groq",
  },
  {
    image: "/images/spotify.jpg",
    status: "completed",
    liveUrl: "https://spotify-stats-v2-inky.vercel.app/",
    githubUrl: "https://github.com/chrxsjung/spotify-stats-v2",
    title: "Spotify Stats",
    description:
      "web app showing all your spotify listening habits (too bad i switched to apple music lol)",
    techStack:
      "JavaScript, React, Next.js, Tailwind CSS, Spotify API, NextAuth",
  },
  {
    image: "/images/epl.jpg",
    status: "working on new features",
    liveUrl: "https://soccer-stats-taupe.vercel.app/",
    githubUrl: "https://github.com/chrxsjung/soccer-stats",
    title: "EPL Stats",
    description:
      "my first full-stack project! shows stats for the english premier league (past and present)",
    techStack: "JavaScript with Vite, Supabase (PostgreSQL), API-Football",
  },
  {
    image: "/images/home-bg.jpg",
    status: "working on improvements",
    title: "Portfolio",
    githubUrl: "https://github.com/chrxsjung/portfolio",
    description:
      "this website! i'm going to continue updating it with new projects and experiences. + make it pretty :)",
    techStack: "JavaScript, React, Next.js and Tailwind CSS",
    hideLive: true,
  },
  {
    image: "/images/python.webp",
    status: "completed",
    title: "python web server (cse312)",
    description:
      "definitely the best project i've done in college so far. i learned a lot about backend web development.",
    techStack: "Python, MongoDB, Docker, FFmpeg, Nginx, REST APIs",
    hideGithub: true,
    hideLive: true,
  },
  {
    image: "/images/c.jpg",
    status: "completed",
    title: "Dynamic Memory Allocator (cse220)",
    description:
      "my own dynamic memory allocator in c. probably the hardest project i've done in college so far.",
    techStack: "C, UNIX, GDB",
    hideGithub: true,
    hideLive: true,
  },
  {
    image: "/images/ocaml.webp",
    status: "completed",
    title: "Interpreter Project (cse305)",
    description:
      "built my own interpreter in OCaml for a custom stack-based bytecode language. pretty cool project!",
    techStack: "OCaml",
    hideGithub: true,
    hideLive: true,
  },
];

export default function Projects({ intro }) {
  return (
    <Carousel label="projects" intro={intro}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Carousel>
  );
}
