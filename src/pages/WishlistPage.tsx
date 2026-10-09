import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Button } from "../components/atoms/Button";
import { EmptyState } from "../components/molecules/EmptyState";
import { ProductGrid } from "../components/organisms/ProductSections";
import { useWishlist } from "../context/WishlistContext";
import { useShopify } from "../context/ShopifyContext";
import { Heart } from "lucide-react";

export function WishlistPage() {
  const { ids } = useWishlist();
  const { products } = useShopify();
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <Container className="py-10 md:py-14">
      <SectionHeading title={`Wishlist (${saved.length})`} />
      {saved.length === 0 ? (
        <EmptyState
          icon={<Heart className="h-7 w-7 text-subtext" />}
          title="Your wishlist is empty"
          description="Tap the heart on any product to save it for later."
          action={<Button href="/collections/all">Explore products</Button>}
        />
      ) : (
        <ProductGrid products={saved} />
      )}
    </Container>
  );
}
