"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScrollCarousel({
  children,
  ariaLabel,
  stripClassName = "",
  tightArrows = false,
}) {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updateEdges = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const max = scrollWidth - clientWidth;
      setCanLeft(scrollLeft > 2);
      setCanRight(scrollLeft < max - 2);
    };

    updateEdges();
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    el.addEventListener("scroll", updateEdges, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", updateEdges);
    };
  }, []);

  const scrollByDir = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = [...el.children];
    const { scrollLeft } = el;

    if (dir === 1) {
      const next = cards.find((card) => card.offsetLeft > scrollLeft + 2);
      if (next) el.scrollTo({ left: next.offsetLeft, behavior: "smooth" });
    } else {
      const prev = cards.findLast((card) => card.offsetLeft < scrollLeft - 2);
      if (prev) el.scrollTo({ left: prev.offsetLeft, behavior: "smooth" });
    }
  };

  const arrowBtnClass =
    "shrink-0 self-center rounded-md border-2 border-sky-400 bg-zinc-950 p-2 text-sky-100 shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_3px_10px_rgba(0,0,0,0.5)] transition hover:border-sky-300 hover:bg-sky-950 hover:text-white hover:shadow-[0_0_0_1px_rgba(125,211,252,0.5),0_4px_14px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 active:scale-[0.97] disabled:pointer-events-none disabled:border-zinc-600 disabled:bg-zinc-900 disabled:text-zinc-500 disabled:shadow-none";

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-0">
      <div
        ref={scrollerRef}
        role="region"
        aria-label={ariaLabel}
        className={`horizontal-scroll-strip relative flex min-w-0 w-full flex-row flex-nowrap items-stretch overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory pb-0 touch-manipulation ${stripClassName}`}
      >
        {children}
      </div>

      <div
        className={
          tightArrows
            ? "relative z-10 -mt-6 flex w-full flex-row items-center justify-center gap-4 sm:gap-6 pt-0"
            : "flex w-full flex-row items-center justify-center gap-4 sm:gap-6"
        }
        role="group"
        aria-label={`${ariaLabel} scroll controls`}
      >
        <button
          type="button"
          className={arrowBtnClass}
          aria-label={`Scroll ${ariaLabel} left`}
          disabled={!canLeft}
          onClick={() => scrollByDir(-1)}
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" strokeWidth={2.25} />
        </button>
        <button
          type="button"
          className={arrowBtnClass}
          aria-label={`Scroll ${ariaLabel} right`}
          disabled={!canRight}
          onClick={() => scrollByDir(1)}
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" strokeWidth={2.25} />
        </button>
      </div>
    </div>
  );
}
