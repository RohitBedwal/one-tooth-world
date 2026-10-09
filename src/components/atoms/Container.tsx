import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-container",
  wide: "max-w-[1600px]",
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return <div className={`mx-auto w-full px-4 md:px-6 lg:px-8 ${sizes[size]} ${className}`}>{children}</div>;
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}

export function Section({ children, className = "", as: Tag = "section" }: SectionProps) {
  return <Tag className={`py-12 md:py-16 ${className}`}>{children}</Tag>;
}
