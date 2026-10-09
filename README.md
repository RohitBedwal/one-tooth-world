# One tooth World Storefront

React + Vite + TypeScript + Tailwind CSS storefront inspired by onetooth.world, structured with Atomic Design (atoms → molecules → organisms → pages), ready to connect to a Shopify backend for dropshipping.

## Commands

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview build
```

## Change colors in ONE place

All brand colors are CSS variables in `src/index.css` (`:root` block):

- `--color-primary` — olive green (buttons, brand)
- `--color-tertiary` — terracotta (sale, accents)
- `--color-secondary` — warm taupe
- neutrals, badges, etc.

Tailwind classes (`bg-primary`, `text-sale`…) read from these variables via `tailwind.config.js`, so editing `src/index.css` updates the entire app. JS-side mirrors live in `src/theme/colors.ts`.

## Folder structure

```
src/
  components/
    atoms/        # Button, Badge, Price, Rating, Input, SectionHeading…
    molecules/    # ProductCard, Marquee, CollectionCard, FilterChip…
    organisms/    # Header, MegaMenu/drawers, HeroCarousel, sections, Footer, Layout
  pages/          # Home, Collection, Product, Cart, Checkout, Wishlist, Search…
  routing/        # AppRoutes.tsx, paths.ts
  context/        # CartContext, WishlistContext, UIContext, ShopifyContext
  data/           # Mock catalog + navigation (replace with Shopify data)
  theme/          # JS color tokens
  utils/          # formatPrice etc.
```

## Connecting Shopify

1. Create a Storefront API token (Shopify admin → Develop apps → Storefront API).
2. Copy `.env.example` → `.env` and set:
   - `VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com`
   - `VITE_SHOPIFY_STOREFRONT_TOKEN=shpat_…`
3. `ShopifyContext` will fetch products via GraphQL; until then it serves mock catalog data.
4. Checkout: `useShopify().checkoutUrl()` builds a cart permalink (`/cart/variantId:qty,…`) you can redirect to, or swap in the Checkout API / cart attribute flow.

## Animations

- framer-motion: hero carousel crossfade + zoom-out, drawers, overlays
- CSS marquee: announcement bar + value-prop marquees (`--marquee-duration` customizable)
