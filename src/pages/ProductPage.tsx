import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { Container } from "../components/atoms/Container";
import { Badge } from "../components/atoms/Badge";
import { Rating } from "../components/atoms/Rating";
import { Price } from "../components/atoms/Price";
import { Button } from "../components/atoms/Button";
import { ProductCarouselSection } from "../components/organisms/ProductSections";
import { EmptyState } from "../components/molecules/EmptyState";
import { useShopify } from "../context/ShopifyContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export function ProductPage() {
  const { handle } = useParams();
  const { getProductByHandle, products } = useShopify();
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = handle ? getProductByHandle(handle) : undefined;

  if (!product) {
    return (
      <Container className="py-20">
        <EmptyState
          title="Product not found"
          description="This product may have moved or sold out."
          action={<Button href="/collections/all">Continue shopping</Button>}
        />
      </Container>
    );
  }

  const wished = has(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <>
      <Container className="py-8 md:py-12">
        <nav className="mb-6 text-xs text-subtext" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/collections/${product.category.toLowerCase()}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground line-clamp-1">{product.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-block bg-surface">
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="h-full w-full object-cover"
              />
              {product.badges?.[0] && (
                <div className="absolute left-4 top-4">
                  <Badge label={product.badges[0]} />
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`h-20 w-20 overflow-hidden rounded-block border-2 transition-colors ${
                      i === activeImage ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              {product.badges?.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>
            <h1 className="font-heading text-2xl leading-tight text-heading md:text-4xl">
              {product.title}
            </h1>
            {product.rating !== undefined && (
              <div className="mt-3">
                <Rating rating={product.rating} count={product.reviewCount} />
              </div>
            )}
            <div className="mt-4">
              <Price price={product.price} compareAt={product.compareAtPrice} size="lg" />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-subtext md:text-base">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-pill border border-line-strong">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 hover:bg-surface"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-medium">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 hover:bg-surface"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button size="lg" onClick={() => add(product, undefined, qty)} className="flex-1 min-w-[200px]">
                Add to cart
              </Button>
              <button
                type="button"
                onClick={() => toggle(product.id)}
                aria-label="Toggle wishlist"
                className="flex h-12 w-12 items-center justify-center rounded-pill border border-line-strong hover:border-foreground"
              >
                <Heart className={`h-5 w-5 ${wished ? "fill-tertiary text-tertiary" : ""}`} />
              </button>
            </div>

            <ul className="mt-8 space-y-3 border-t border-line pt-6 text-sm text-subtext">
              <li className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-primary" /> Free shipping on PAN India orders
              </li>
              <li className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 text-primary" /> Easy 7-day returns & exchange
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-primary" /> Quality assured · Secure packaging
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <ProductCarouselSection
          title="You may also like"
          products={related}
          viewAllHref={`/collections/${product.category.toLowerCase()}`}
        />
      )}
    </>
  );
}
