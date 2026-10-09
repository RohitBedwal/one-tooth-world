import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useShopify } from "../../context/ShopifyContext";

interface Props {
  onClose: () => void;
}

const popularSearches = [
  "Table lamp", "Console table", "Wall lights", "Vase", "Coffee table", "Urli",
];

export function SearchOverlay({ onClose }: Props) {
  const [query, setQuery] = useState("");
  const { searchProducts } = useShopify();
  const navigate = useNavigate();
  const results = useMemo(() => searchProducts(query).slice(0, 8), [query, searchProducts]);

  const go = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background"
    >
      <div className="mx-auto max-w-container px-4 py-6 md:px-6">
        <div className="flex items-center gap-3 border-b border-line pb-4">
          <Search className="h-5 w-5 shrink-0 text-subtext" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose();
              if (e.key === "Enter" && query.trim()) go(`/search?q=${encodeURIComponent(query)}`);
            }}
            placeholder="Search products…"
            className="w-full bg-transparent text-lg text-foreground placeholder:text-subtext focus:outline-none md:text-2xl"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="rounded-pill p-2 hover:bg-surface">
            <X className="h-5 w-5" />
          </button>
        </div>

        {query.trim() === "" ? (
          <div className="py-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-subtext">
              Most searched
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="rounded-pill border border-line px-4 py-2 text-sm hover:border-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 py-6 md:grid-cols-4">
            {results.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => go(`/products/${p.handle}`)}
                className="group text-left"
              >
                <div className="mb-2 aspect-square overflow-hidden rounded-block bg-surface">
                  <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <p className="line-clamp-2 text-xs font-medium group-hover:text-primary">{p.title}</p>
                <p className="mt-1 text-xs text-subtext">₹{p.price.toLocaleString("en-IN")}</p>
              </button>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-sm text-subtext">No products found for “{query}”.</p>
        )}
      </div>
    </motion.div>
  );
}
