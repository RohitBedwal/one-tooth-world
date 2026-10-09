import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "tertiary" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-dark",
  secondary: "bg-secondary text-on-secondary hover:bg-secondary-dark",
  outline: "border border-line-strong text-foreground hover:border-foreground bg-transparent",
  ghost: "bg-transparent text-foreground hover:bg-surface",
  tertiary: "bg-tertiary text-white hover:bg-tertiary-dark",
  white: "bg-white text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  fullWidth,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
