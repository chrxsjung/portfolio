import Navbar from "@/components/Navbar";

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col text-center text-white px-12 max-w-3xl mb-16">
          <h1 className="text-4xl typewriter sm:text-6xl">tech skills</h1>
          <p className="text-lg mt-10">
            programming languages: javascript, typescript, python, java, c,
            ocaml
          </p>
          <p className="text-lg mt-8">
            frontend: react, next.js, vite, tailwind css, html, css
          </p>
          <p className="text-lg mt-8">
            backend: node.js, express, supabase (postgreSQL), rest apis
          </p>
          <p className="text-lg mt-8">
            auth / security: next-auth, oauth 2.0, pkce, env variables
          </p>
          <p className="text-lg mt-8">
            tools: git, github, vercel, unix, jira, figma
          </p>

          <p className="text-lg mt-8">
            i'm always learning and growing. currently focused on improving my
            skills in node.js, express, and mongodb.
          </p>
        </div>
      </div>
    </div>
  );
}
