"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  const effectiveHash = pathname === "/" ? hash || "#intro" : "";

  const navLinkClass = (hrefHash) =>
    `navbar-link ${
      pathname === "/" && effectiveHash === hrefHash
        ? "text-blue-500"
        : "text-white"
    }`;

  return (
    <nav className="text-white mt-2 pt-7 pb-4 md:pt-11 md:pb-8">
      <div className="flex justify-between items-start w-full max-w-5xl mx-auto px-7 md:px-8">
        <h1 className="font-normal text-xl sm:text-2xl md:text-3xl leading-none text-white">
          christopher jung
        </h1>

        <div className="flex flex-col items-end gap-2 md:gap-3 text-base font-normal">
          <Link href="/#work" className={navLinkClass("#work")}>
            work
          </Link>
          <Link href="/#projects" className={navLinkClass("#projects")}>
            projects
          </Link>
          <Link href="/#about" className={navLinkClass("#about")}>
            about
          </Link>
          <a
            href="/resume/ChristopherJung_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link text-white"
          >
            open resume
          </a>
          <span className="text-right text-sm text-gray-400">
            relevant links
          </span>
          <div
            className="flex flex-row items-center justify-end gap-3"
            role="group"
            aria-label="linkedin, github, and email"
          >
            <a
              href="https://www.linkedin.com/in/chrxsjung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" strokeWidth={2} />
            </a>
            <a
              href="https://github.com/chrxsjung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-80"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" strokeWidth={2} />
            </a>
            <a
              href="mailto:jungchristopher456@gmail.com"
              className="text-white transition-opacity hover:opacity-80"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
