"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-6 mt-2">
      <div className="ml-2 flex justify-start items-center w-full px-[5%] md:px-[8%] lg:px-[12%]">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex gap-6 text-base font-medium ml-6 ">
          <a href="#work" className="underline navbar-link">
            work experience
          </a>

          <a href="#projects" className="underline navbar-link">
            projects
          </a>
          <a href="#random" className="underline navbar-link">
            about me
          </a>

          <a
            href="/resume/ChristopherJung_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline navbar-link"
          >
            open resume
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 text-base font-medium md:hidden items-start pl-10">
          {" "}
          <a href="#work" className="underline navbar-link">
            work experience
          </a>
          <a href="#projects" className="underline navbar-link">
            projects
          </a>
          <a href="#random" className="underline navbar-link">
            about me
          </a>

          <a
            href="/resume/ChristopherJung_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline navbar-link"
          >
            open resume
          </a>
        </div>
      )}
    </nav>
  );
}
