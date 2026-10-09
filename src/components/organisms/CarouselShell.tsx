import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface CarouselShellProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
}

export function CarouselShell({ children, className = "", itemClassName = "" }: CarouselShellProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="group/carousel relative">
      <div
        ref={ref}
        className={`scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 ${className}`}
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollBy(-1)}
        className="absolute -left-4 top-[38%] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-background shadow-md opacity-0 transition-opacity hover:bg-surface group-hover/carousel:opacity-100 md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollBy(1)}
        className="absolute -right-4 top-[38%] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-background shadow-md opacity-0 transition-opacity hover:bg-surface group-hover/carousel:opacity-100 md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className={itemClassName} hidden />
    </div>
  );
}
