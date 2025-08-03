import Navbar from "@/components/Navbar";
import "../globals.css";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col text-center text-white px-12 max-w-3xl mb-16">
          <h1 className="text-4xl typewriter sm:text-6xl">about me</h1>

          <p className="text-lg mt-10">
            i'm a junior studying computer science at ub. i'm really interested
            in full-stack web development and always looking to learn & grow as
            a developer.
          </p>

          <p className="text-lg mt-8">
            check out the skills section and my resume for more details.
          </p>

          <p className="text-lg mt-8">
            i've been building web apps with javascript, react, next.js, and
            tailwind css — and deploying them with vercel.
          </p>

          <p className="text-lg mt-8">
            i like building stuff that i see myself using and sharing them with
            others, check out my projects section for more details. i'm
            constantly learning by building and sharing my projects.
          </p>

          <p className="text-lg mt-8">
            outside of coding, i enjoy watching kdramas, listening to music,
            following soccer, and playing games like valorant, fortnite, and
            fifa.
          </p>
        </div>
      </div>
    </div>
  );
}
