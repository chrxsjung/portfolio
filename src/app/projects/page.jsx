import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import "../globals.css";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-12 text-center text-white px-12 max-w-6xl mt-8 lg:mt-0">
          <ProjectCard
            image="/images/epl.jpg"
            liveUrl="https://soccer-stats-taupe.vercel.app/"
            githubUrl="https://github.com/chrxsjung/soccer-stats"
            title="premier league stats"
            description="a web app that allows you to view stats for the premier league."
            techStack="javascript (vite) supabase, api-football"
          />
          <ProjectCard
            image="/images/spotify.jpg"
            liveUrl="https://spotify-stats-v2-inky.vercel.app/"
            githubUrl="https://github.com/chrxsjung/spotify-stats-v2"
            title="spotify stats"
            description="a web app that allows you to view stats for your spotify listening history."
            techStack="react, next.js, tailwind css, spotify api, next-auth"
          />
        </div>
      </div>
    </div>
  );
}
