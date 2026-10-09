import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "../../data/catalog";
import { Badge } from "../atoms/Badge";
import { Rating } from "../atoms/Rating";
import { Price } from "../atoms/Price";
import { Button } from "../atoms/Button";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const wished = has(product.id);
  const href = `/products/${product.handle}`;

  return (
    <div className={`group relative flex flex-col ${className}`}>
      <div className="relative mb-3 overflow-hidden rounded-block bg-surface aspect-[4/5]">
        <Link to={href} className="absolute inset-0">
          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </Link>

        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-1.5">
            {product.badges.slice(0, 3).map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        )}

        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            toggle(product.id);
          }}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${wished ? "fill-tertiary text-tertiary" : "text-foreground"}`}
          />
        </button>

        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            variant="white"
            size="sm"
            fullWidth
            onClick={() => add(product)}
          >
            Add to cart
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        {product.rating !== undefined && (
          <Rating rating={product.rating} count={product.reviewCount} />
        )}
        <Link to={href} className="line-clamp-2 text-sm font-medium leading-snug text-foreground hover:text-primary">
          {product.title}
        </Link>
        <Price price={product.price} compareAt={product.compareAtPrice} className="mt-auto" />
      </div>
    </div>
  );
}
