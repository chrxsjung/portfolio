"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LINKS } from "@/lib/links";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // while a nav click's smooth scroll is in flight, the clicked link owns the
  // highlight; otherwise it would step through every section it passes
  const clickLock = useRef(false);
  const unlockTimer = useRef(null);
  const syncActive = useRef(() => {});

  const releaseLockSoon = () => {
    clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      clickLock.current = false;
      syncActive.current();
    }, 200);
  };

  const handleNavClick = (id) => {
    setActive(id);
    setOpen(false);
    clickLock.current = true;
    releaseLockSoon();
  };

  useEffect(() => {
    // derive the active section from scroll position instead of the url hash,
    // so the highlight stays correct when the user scrolls manually
    const sections = [...document.querySelectorAll("main section[id]")];

    const syncFromScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const line = window.innerHeight * 0.35;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };
    syncActive.current = syncFromScroll;

    const update = () => {
      setScrolled(window.scrollY > 8);
      // each scroll frame pushes the unlock back, so it releases once scrolling stops
      if (clickLock.current) {
        releaseLockSoon();
        return;
      }
      syncFromScroll();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(unlockTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        elevated
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-bg"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8">
        <Link
          href="/#intro"
          onClick={() => setOpen(false)}
          className="text-[15px] font-medium tracking-tight text-fg transition-opacity hover:opacity-70"
        >
          christopher jung
        </Link>

        <nav aria-label="primary" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <Link
                    href={`/#${id}`}
                    onClick={() => handleNavClick(id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative rounded-md px-3 py-1.5 transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
            <li className="ml-3">
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 rounded-md border border-line-strong px-3 py-1.5 text-fg transition-colors hover:border-subtle hover:bg-surface"
              >
                resume
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                />
              </a>
            </li>
            <li className="ml-1">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="-mr-2 flex items-center gap-1 md:hidden">
          <ThemeToggle className="h-10 w-10" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "close menu" : "open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="primary"
          className="border-t border-line md:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-3">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={() => handleNavClick(id)}
                  aria-current={active === id ? "location" : undefined}
                  className={`flex items-center justify-between py-3 text-base transition-colors ${
                    active === id ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                  {active === id && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-line pt-3">
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 py-3 text-base text-fg"
              >
                open resume
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
