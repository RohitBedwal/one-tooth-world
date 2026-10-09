import { formatPrice, discountPercent } from "../../utils/format";

interface PriceProps {
  price: number;
  compareAt?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeCls = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-lg",
};

export function Price({ price, compareAt, size = "md", className = "" }: PriceProps) {
  const off = discountPercent(compareAt, price);
  return (
    <div className={`flex flex-wrap items-baseline gap-2 ${className}`}>
      <span
        className={`font-semibold ${sizeCls[size]} ${off ? "text-sale" : "text-foreground"}`}
      >
        {formatPrice(price)}
      </span>
      {compareAt && compareAt > price && (
        <span className={`text-subtext line-through ${size === "lg" ? "text-sm" : "text-xs"}`}>
          {formatPrice(compareAt)}
        </span>
      )}
      {off && (
        <span className="text-xs font-medium text-sale">({off}% off)</span>
      )}
    </div>
  );
}
