import { badgeColors } from "../../theme/colors";

const defaults: Record<string, string> = {
  "Grand Sale": "bg-sale text-white",
  "Hot Seller": "bg-sale text-white",
  Bestseller: "bg-primary text-on-primary",
  "New Arrivals": "bg-primary text-on-primary",
  "Designer Edition": "bg-foreground text-white",
  "Premium Edition": "bg-primary-dark text-white",
  "Trending Now": "bg-tertiary-dark text-white",
  "Ready to Ship": "bg-primary-light text-white",
  "Must Have": "bg-primary text-on-primary",
  "Sold out": "bg-soldout text-white",
};

interface BadgeProps {
  label: string;
  className?: string;
}

export function Badge({ label, className = "" }: BadgeProps) {
  const style = badgeColors[label];
  const fallback = defaults[label] ?? "bg-foreground text-white";
  return (
    <span
      className={`inline-block rounded-pill px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider leading-none ${fallback} ${className}`}
      style={style ? { backgroundColor: style.bg, color: style.text } : undefined}
    >
      {label}
    </span>
  );
}
