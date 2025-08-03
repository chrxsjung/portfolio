"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-6">
      <div className="flex justify-end items-center">
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

        <div className="hidden md:flex gap-6 text-sm font-medium ml-6">
          <Link href="/" className="hover:underline">
            home
          </Link>
          <Link href="/about" className="hover:underline">
            about me
          </Link>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
          <Link href="/skills" className="hover:underline">
            skills
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            resume
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 text-sm font-medium md:hidden items-end pr-2">
          <Link href="/" className="hover:underline">
            home
          </Link>
          <Link href="/about" className="hover:underline">
            about me
          </Link>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
          <Link href="/skills" className="hover:underline">
            skills
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            resume
          </a>
        </div>
      )}
    </nav>
  );
}
