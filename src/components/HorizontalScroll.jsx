"use client";
import ScrollContainer from "react-indiana-drag-scroll";
import ProjectCard from "./ProjectCard";

export default function HorizontalScroll() {
  return (
    <ScrollContainer
      hideScrollbars={false}
      className="flex flex-row gap-12 mt-12 overflow-x-auto whitespace-nowrap pr-4 cursor-grab active:cursor-grabbing "
    >
      <ProjectCard
        image="/images/spotify.jpg"
        status="working on improvements"
        liveUrl="https://spotify-stats-v2-inky.vercel.app/"
        githubUrl="https://github.com/chrxsjung/spotify-stats-v2"
        title="Spotify Stats"
        description="A web app that allows you to view your Spotify listening history. Top artists, top songs, recently played, and more."
        techStack="JavaScript, React, Next.js, Tailwind CSS, Spotify API, NextAuth"
      />
      <ProjectCard
        image="/images/epl.jpg"
        status="working on improvements"
        liveUrl="https://soccer-stats-taupe.vercel.app/"
        githubUrl="https://github.com/chrxsjung/soccer-stats"
        title="EPL Stats"
        description="A web app that allows you to view stats for the English Premier League. Season toggle, advanced stats, and more. "
        techStack="JavaScript with Vite, Supabase (PostgreSQL), API-Football"
      />

      <ProjectCard
        image="/images/home-bg.jpg"
        status="working on improvements"
        title="Portfolio"
        githubUrl="https://github.com/chrxsjung/portfolio"
        description="My portfolio website! It's good practice for me to apply new front end related skills to this website. "
        techStack={`JavaScript, React, Next.js\nand Tailwind CSS`}
        hideGithub={false}
        hideLive={true}
      />
      <ProjectCard
        image="/images/c.jpg"
        status="Completed"
        title="Dynamic Memory Allocator (cse220)"
        description="I developed my own dynamic memory allocator in C. It's probably the hardest project I've done in college so far."
        techStack="C, UNIX, GDB"
        hideGithub={true}
        hideLive={true}
      />
      <ProjectCard
        image="/images/ocaml.webp"
        status="Completed"
        title="Interpreter Project (cse305)"
        description={
          "Built my own interpreter in OCaml for a custom stack-based bytecode language. Part 3 of the project was where noobs turn into pros."
        }
        techStack="OCaml"
        hideGithub={true}
        hideLive={true}
      />
    </ScrollContainer>
  );
}
