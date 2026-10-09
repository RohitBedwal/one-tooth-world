import { Link } from "react-router-dom";
import type { Collection } from "../../data/catalog";

interface CollectionCardProps {
  collection: Collection;
  variant?: "circle" | "rounded";
}

export function CollectionCard({ collection, variant = "circle" }: CollectionCardProps) {
  const isCircle = variant === "circle";
  return (
    <Link
      to={`/collections/${collection.handle}`}
      className="group flex flex-col items-center gap-3 text-center"
    >
      <div
        className={`overflow-hidden bg-surface transition-transform duration-300 group-hover:scale-[1.03] ${
          isCircle ? "aspect-square rounded-full" : "aspect-[4/5] rounded-block"
        }`}
      >
        {collection.image ? (
          <img
            src={collection.image}
            alt={collection.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-secondary" />
        )}
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary">
        {collection.title}
      </span>
    </Link>
  );
}
