/**
 * ShopifyContext — drop-in Storefront API layer.
 * Currently serves mock catalog data; set VITE_SHOPIFY_* env vars
 * and the fetch helpers will call your Shopify Storefront API.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  mockProducts,
  mockCollections,
  type Product,
  type Collection,
} from "../data/catalog";

const SHOP = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string | undefined;
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string | undefined;

interface ShopifyContextValue {
  products: Product[];
  collections: Collection[];
  loading: boolean;
  getProductByHandle: (handle: string) => Product | undefined;
  getCollectionByHandle: (handle: string) => Collection | undefined;
  getProductsByCollection: (handle: string) => Product[];
  searchProducts: (query: string) => Product[];
  /** Create a Shopify checkout URL (liquid cart permalink style). */
  checkoutUrl: (lineItems: { variantId: string; quantity: number }[]) => string;
}

const ShopifyContext = createContext<ShopifyContextValue | null>(null);

async function fetchShopify<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T | null> {
  if (!SHOP || !TOKEN) return null;
  try {
    const res = await fetch(`https://${SHOP}/api/2024-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as T;
  } catch {
    return null;
  }
}

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!) {
    products(first: $first) {
      nodes {
        id
        handle
        title
        description
        featuredImage { url altText }
        variants(first: 1) {
          nodes {
            id
            title
            price { amount currencyCode }
            compareAtPrice { amount currencyCode }
            availableForSale
          }
        }
      }
    }
  }
`;

function mapShopifyProduct(node: Record<string, any>): Product {
  const v = node.variants?.nodes?.[0];
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    price: parseFloat(v?.price?.amount ?? "0"),
    compareAtPrice: v?.compareAtPrice ? parseFloat(v.compareAtPrice.amount) : undefined,
    images: node.featuredImage?.url ? [node.featuredImage.url] : [],
    image: node.featuredImage?.url,
    available: v?.availableForSale ?? true,
    category: "",
    collections: [],
    description: node.description ?? "",
    variants: [
      {
        id: v?.id ?? node.id,
        title: v?.title ?? "Default",
        price: parseFloat(v?.price?.amount ?? "0"),
        compareAtPrice: v?.compareAtPrice ? parseFloat(v.compareAtPrice.amount) : undefined,
        available: v?.availableForSale ?? true,
      },
    ],
  };
}

export function ShopifyProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [collections] = useState<Collection[]>(mockCollections);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const data = await fetchShopify<{ products: { nodes: Record<string, any>[] } }>(
        PRODUCTS_QUERY,
        { first: 50 },
      );
      if (!cancelled && data?.products?.nodes?.length) {
        setProducts(data.products.nodes.map(mapShopifyProduct));
      }
      if (!cancelled) setLoading(false);
    }
    if (SHOP && TOKEN) void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<ShopifyContextValue>(
    () => ({
      products,
      collections,
      loading,
      getProductByHandle: (handle) => products.find((p) => p.handle === handle),
      getCollectionByHandle: (handle) => collections.find((c) => c.handle === handle),
      getProductsByCollection: (handle) =>
        products.filter((p) => p.collections.includes(handle) || p.category.toLowerCase() === handle),
      searchProducts: (query) => {
        const q = query.trim().toLowerCase();
        if (!q) return [];
        return products.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.collections.some((c) => c.includes(q)),
        );
      },
      checkoutUrl: (lineItems) => {
        const items = lineItems.map((i) => `${i.variantId}:${i.quantity}`).join(",");
        return SHOP ? `https://${SHOP}/cart/${items}` : "/cart";
      },
    }),
    [products, collections, loading],
  );

  return <ShopifyContext.Provider value={value}>{children}</ShopifyContext.Provider>;
}

export function useShopify(): ShopifyContextValue {
  const ctx = useContext(ShopifyContext);
  if (!ctx) throw new Error("useShopify must be used within ShopifyProvider");
  return ctx;
}
