"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");

    root.classList.add("theme-switching");
    root.classList.toggle("dark", next);
    // reading a layout value forces the new colors to apply before transitions return
    void root.offsetHeight;
    root.classList.remove("theme-switching");

    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="dark mode"
      aria-pressed={dark}
      title={dark ? "switch to light mode" : "switch to dark mode"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg ${className}`}
    >
      {/* icons swap via css so the server render matches before state syncs */}
      <Moon aria-hidden="true" className="h-[18px] w-[18px] dark:hidden" />
      <Sun aria-hidden="true" className="hidden h-[18px] w-[18px] dark:block" />
    </button>
  );
}
