import type { ReactNode } from "react";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { UIProvider } from "./UIContext";
import { ShopifyProvider } from "./ShopifyContext";

export function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <ShopifyProvider>
      <UIProvider>
        <WishlistProvider>
          <CartProvider>{children}</CartProvider>
        </WishlistProvider>
      </UIProvider>
    </ShopifyProvider>
  );
}

export { useCart } from "./CartContext";
export { useWishlist } from "./WishlistContext";
export { useUI } from "./UIContext";
export { useShopify } from "./ShopifyContext";
