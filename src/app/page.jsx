import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center mb-12">
        <div className="flex flex-col items-center text-center text-white p-6 md:p-12">
          <h1 className="text-4xl typewriter sm:text-6xl">Hi, I'm Chris</h1>
          <p className="text-lg mt-6">
            a student at UB studying computer science
          </p>
          <div className="flex flex-row gap-4 justify-center p-4 text-base mt-4">
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
              href="https://www.instagram.com/chrxsjung/"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=jungchristopher456@gmail.com"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
