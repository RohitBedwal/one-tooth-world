import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { ProductGrid } from "../components/organisms/ProductSections";
import { EmptyState } from "../components/molecules/EmptyState";
import { Button } from "../components/atoms/Button";
import { useShopify } from "../context/ShopifyContext";

export function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";
  const { searchProducts } = useShopify();
  const results = useMemo(() => searchProducts(q), [q, searchProducts]);

  return (
    <Container className="py-10 md:py-14">
      <SectionHeading
        title={q ? `Search results for “${q}”` : "Search"}
        subtitle={`${results.length} products found`}
      />
      {results.length > 0 ? (
        <ProductGrid products={results} />
      ) : (
        <EmptyState
          title="No results"
          description="Try a different keyword like “lamp”, “table” or “vase”."
          action={<Button href="/collections/all">Browse all products</Button>}
        />
      )}
    </Container>
  );
}
