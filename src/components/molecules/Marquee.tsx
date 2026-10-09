import type { ReactNode } from "react";

interface MarqueeProps {
  items: string[];
  duration?: number;
  className?: string;
  separatorIcon?: ReactNode;
  variant?: "info" | "light";
}

export function Marquee({
  items,
  duration = 40,
  className = "",
  separatorIcon,
  variant = "info",
}: MarqueeProps) {
  const doubled = [...items, ...items];
  const bg = variant === "info" ? "bg-primary text-on-primary" : "bg-surface text-foreground";
  return (
    <div className={`overflow-hidden ${bg} ${className}`}>
      <div
        className="animate-marquee-left flex w-max items-center gap-12 py-2.5"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.15em]">
            {separatorIcon}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
