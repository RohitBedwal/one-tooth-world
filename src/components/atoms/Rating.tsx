import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating?: number;
  count?: number;
  className?: string;
}

export function Rating({ rating = 5, count, className = "" }: RatingProps) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < full) return <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />;
          if (i === full && hasHalf)
            return <StarHalf key={i} className="h-3.5 w-3.5 fill-primary text-primary" />;
          return <Star key={i} className="h-3.5 w-3.5 text-line-strong" />;
        })}
      </div>
      <span className="text-xs text-subtext">{rating.toFixed(1)}</span>
      {count !== undefined && <span className="text-xs text-subtext">({count})</span>}
    </div>
  );
}
