"use client";

import { Children, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ label, intro, children }) {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [thumb, setThumb] = useState({ width: 100, offset: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const max = scrollWidth - clientWidth;
      setCanLeft(scrollLeft > 4);
      setCanRight(scrollLeft < max - 4);
      // thumb mirrors a native scrollbar: its size is the visible share of the strip
      setThumb({
        width: (clientWidth / scrollWidth) * 100,
        offset: (scrollLeft / scrollWidth) * 100,
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const items = [...el.querySelectorAll(":scope > ul > li")];
    // on mobile the strip has side padding, so a card's resting position is offset by it
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    const { scrollLeft } = el;
    const target =
      dir > 0
        ? items.find((item) => item.offsetLeft - pad > scrollLeft + 4)
        : items.findLast((item) => item.offsetLeft - pad < scrollLeft - 4);
    // js-driven smooth scrolling ignores the css reduced-motion rule, so check it here
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (target) {
      el.scrollTo({
        left: target.offsetLeft - pad,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  const arrowClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-fg transition-colors hover:border-subtle hover:bg-surface disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div className="min-w-0">{intro}</div>
        <div
          className="flex shrink-0 gap-2"
          role="group"
          aria-label={`${label} controls`}
        >
          <button
            type="button"
            className={arrowClass}
            onClick={() => scrollByCard(-1)}
            disabled={!canLeft}
            aria-label={`previous ${label}`}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={arrowClass}
            onClick={() => scrollByCard(1)}
            disabled={!canRight}
            aria-label={`next ${label}`}
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="scrollbar-none relative -mx-6 mt-8 snap-x snap-mandatory scroll-pl-12 overflow-x-auto overscroll-x-contain md:mx-0 md:scroll-pl-10 md:rounded-lg"
      >
        {/* w-max sizes the list to its cards, so the right padding counts toward the scroll width */}
        <ul className="flex w-max gap-4 px-6 sm:gap-6 md:px-0">
          {Children.map(children, (child) => (
            // cards narrower than the screen leave the next one peeking in
            <li className="w-[calc(100vw-5rem)] shrink-0 snap-start sm:w-72">
              {child}
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="mt-6 h-px w-full bg-line">
        <div
          className="h-px bg-fg/70 transition-[margin] duration-150 ease-out"
          style={{ width: `${thumb.width}%`, marginLeft: `${thumb.offset}%` }}
        />
      </div>
    </div>
  );
}
