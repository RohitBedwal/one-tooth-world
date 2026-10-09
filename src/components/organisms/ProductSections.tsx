import { useMemo, useState } from "react";
import { Container, Section } from "../atoms/Container";
import { SectionHeading } from "../atoms/SectionHeading";
import { FilterChip } from "../molecules/FilterChip";
import { ProductCard } from "../molecules/ProductCard";
import { CollectionCard } from "../molecules/CollectionCard";
import { CarouselShell } from "./CarouselShell";
import { useShopify } from "../../context/ShopifyContext";
import type { Product } from "../../data/catalog";

export function CollectionCircleSection({
  title,
  collections,
}: {
  title?: string;
  collections: { id: string; handle: string; title: string; image?: string }[];
}) {
  return (
    <Section>
      <Container>
        {title && <SectionHeading title={title} align="center" />}
        <CarouselShell>
          {collections.map((c) => (
            <div key={c.id} className="w-[28%] shrink-0 snap-start sm:w-[22%] md:w-[16%] lg:w-[12.5%]">
              <CollectionCard collection={c} />
            </div>
          ))}
        </CarouselShell>
      </Container>
    </Section>
  );
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  products?: Product[];
  filterChips?: { label: string; filter?: string }[];
}

export function ProductCarouselSection({
  title,
  subtitle,
  viewAllHref = "/collections/all",
  products: fixedProducts,
  filterChips,
}: ProductCarouselProps) {
  const { products } = useShopify();
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const list = useMemo(() => {
    let result = fixedProducts ?? products;
    if (activeChip) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(activeChip.toLowerCase()) ||
          p.category.toLowerCase().includes(activeChip.toLowerCase()) ||
          p.collections.some((c) => c.includes(activeChip.toLowerCase().replace(/\s+/g, "-"))),
      );
    }
    return result.slice(0, 10);
  }, [products, fixedProducts, activeChip]);

  if (list.length === 0) return null;

  return (
    <Section className="py-10 md:py-14">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} viewAllHref={viewAllHref} />
        {filterChips && (
          <div className="scrollbar-none -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
            {filterChips.map((chip) => (
              <FilterChip
                key={chip.label}
                label={chip.label}
                active={activeChip === (chip.filter ?? chip.label)}
                onClick={() =>
                  setActiveChip((cur) =>
                    cur === (chip.filter ?? chip.label) ? null : (chip.filter ?? chip.label),
                  )
                }
              />
            ))}
          </div>
        )}
        <CarouselShell>
          {list.map((p) => (
            <div key={p.id} className="w-[46%] shrink-0 snap-start sm:w-[32%] md:w-[24%] lg:w-[calc(20%-1.1rem)]">
              <ProductCard product={p} />
            </div>
          ))}
        </CarouselShell>
      </Container>
    </Section>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
