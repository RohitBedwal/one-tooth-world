import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View All",
  align = "left",
  children,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`mb-8 ${centered ? "text-center" : "flex flex-wrap items-end justify-between gap-4"}`}>
      <div className={centered ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-2xl leading-tight text-heading md:text-3xl lg:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-subtext md:text-base">{subtitle}</p>}
        {children}
      </div>
      {viewAllHref && !centered && (
        <Link
          to={viewAllHref}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          {viewAllLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
      {viewAllHref && centered && (
        <Link
          to={viewAllHref}
          className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          {viewAllLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
