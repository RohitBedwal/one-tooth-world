import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { ProductGrid } from "../components/organisms/ProductSections";
import { FilterChip } from "../components/molecules/FilterChip";
import { EmptyState } from "../components/molecules/EmptyState";
import { useShopify } from "../context/ShopifyContext";
import { Button } from "../components/atoms/Button";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

export function CollectionPage() {
  const { handle = "all" } = useParams();
  const { products, collections, getProductsByCollection } = useShopify();
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const collection = collections.find((c) => c.handle === handle);
  const list = useMemo(() => {
    let result =
      handle === "all" || handle === "grand-sale" || handle === "hot-seller"
        ? products
        : getProductsByCollection(handle);
    if (result.length === 0) result = products;
    result = result.filter((p) => p.price <= maxPrice);
    switch (sort) {
      case "price-asc":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...result].sort((a, b) => b.price - a.price);
      case "newest":
        return [...result].sort((a, b) =>
          (b.badges?.includes("New Arrivals") ? 1 : 0) - (a.badges?.includes("New Arrivals") ? 1 : 0),
        );
      default:
        return result;
    }
  }, [products, handle, getProductsByCollection, sort, maxPrice]);

  const title =
    collection?.title ??
    handle
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <Container className="py-8 md:py-12">
      <nav className="mb-6 text-xs text-subtext" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{title}</span>
      </nav>

      <SectionHeading title={title} subtitle={`${list.length} products`} />

      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-y border-line py-3">
        <button
          type="button"
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-2 text-sm font-medium lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <div className="scrollbar-none flex flex-1 gap-2 overflow-x-auto">
          {sortOptions.map((o) => (
            <FilterChip key={o.value} label={o.label} active={sort === o.value} onClick={() => setSort(o.value)} />
          ))}
        </div>
      </div>

      <div className="flex gap-10">
        <aside
          className={`${filtersOpen ? "block" : "hidden"} w-full shrink-0 lg:block lg:w-56`}
        >
          <div className="sticky top-32">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider">Filters</h3>
              {filtersOpen && (
                <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium">Max price</p>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <p className="mt-1 text-xs text-subtext">₹{maxPrice.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Categories</p>
              <ul className="space-y-1.5 text-sm text-subtext">
                {["Furniture", "Lighting", "Decor", "Kitchenware"].map((cat) => (
                  <li key={cat}>
                    <Link to={`/collections/${cat.toLowerCase()}`} className="hover:text-foreground">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {list.length > 0 ? (
            <ProductGrid products={list} />
          ) : (
            <EmptyState
              title="No products found"
              description="Try adjusting filters or explore another collection."
              action={<Button href="/collections/all">Shop all</Button>}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
