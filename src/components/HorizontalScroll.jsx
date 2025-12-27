"use client";
import ScrollContainer from "react-indiana-drag-scroll";
import ProjectCard from "./ProjectCard";

export default function HorizontalScroll() {
  return (
    <ScrollContainer
      hideScrollbars={false}
      className="flex flex-row gap-12 mt-10 overflow-x-auto whitespace-nowrap pr-4 cursor-grab active:cursor-grabbing items-stretch "
    >
      <ProjectCard
        image="/images/resume.webp"
        status="WIP! Top Priority."
        title="Internship Hub"
        githubUrl="https://github.com/chrxsjung/internship_hub"
        description="Tools for internship seekers! Resume optimization, project ideas generator, cover letter generator, and more coming soon!"
        techStack="JavaScript, React, Next.js, Tailwind CSS, Supabase, Supabase Auth, Groq"
        hideGithub={false}
        hideLive={true}
      />
      <ProjectCard
        image="/images/spotify.jpg"
        status="working on new features"
        liveUrl="https://spotify-stats-v2-inky.vercel.app/"
        githubUrl="https://github.com/chrxsjung/spotify-stats-v2"
        title="Spotify Stats"
        description="A web app that allows you to view your Spotify stats, including top artists, top songs, recently played, and more."
        techStack="JavaScript, React, Next.js, Tailwind CSS, Spotify API, NextAuth"
      />
      <ProjectCard
        image="/images/epl.jpg"
        status="working on new features"
        liveUrl="https://soccer-stats-taupe.vercel.app/"
        githubUrl="https://github.com/chrxsjung/soccer-stats"
        title="EPL Stats"
        description="A web app that allows you to view stats for the English Premier League. Season toggle, advanced stats, and more."
        techStack="JavaScript with Vite, Supabase (PostgreSQL), API-Football"
      />

      <ProjectCard
        image="/images/home-bg.jpg"
        status="working on improvements"
        title="Portfolio"
        githubUrl="https://github.com/chrxsjung/portfolio"
        description="My portfolio website! I'm going to continue updating it with new projects and experiences. And make it pretty:) "
        techStack={`JavaScript, React, Next.js\nand Tailwind CSS`}
        hideGithub={false}
        hideLive={true}
      />

      <ProjectCard
        image="/images/python.webp"
        status="Completed"
        title="Python HTTP Server (cse312)"
        description="
Built a custom Python HTTP server with routing and cookies, secure authentication (OAuth 2.0, bcrypt, 2FA), MongoDB-backed chat CRUD, and real-time media streaming via WebSockets using Docker and Nginx.

        "
        techStack="Python, MongoDB, Docker, FFmpeg, REST APIs"
        hideGithub={true}
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
