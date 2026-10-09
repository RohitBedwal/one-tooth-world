import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import type { Product, ProductVariant } from "../data/catalog";

export interface CartLine {
  id: string;
  productId: string;
  handle: string;
  title: string;
  image?: string;
  variantTitle: string;
  price: number;
  quantity: number;
  available: boolean;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD"; product: Product; variant?: ProductVariant; quantity?: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" };

const initialState: CartState = { lines: [], isOpen: false };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const variant =
        action.variant ?? action.product.variants[0];
      const id = `${action.product.id}:${variant.id}`;
      const existing = state.lines.find((l) => l.id === id);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          lines: state.lines.map((l) =>
            l.id === id ? { ...l, quantity: l.quantity + (action.quantity ?? 1) } : l,
          ),
        };
      }
      return {
        ...state,
        isOpen: true,
        lines: [
          ...state.lines,
          {
            id,
            productId: action.product.id,
            handle: action.product.handle,
            title: action.product.title,
            image: action.product.images[0],
            variantTitle: variant.title,
            price: variant.price,
            quantity: action.quantity ?? 1,
            available: variant.available,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
    case "SET_QTY":
      return {
        ...state,
        lines: state.lines
          .map((l) => (l.id === action.id ? { ...l, quantity: Math.max(0, action.quantity) } : l))
          .filter((l) => l.quantity > 0),
      };
    case "CLEAR":
      return { ...state, lines: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  add: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo<CartContextValue>(() => {
    const count = state.lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = state.lines.reduce((n, l) => n + l.price * l.quantity, 0);
    return {
      lines: state.lines,
      isOpen: state.isOpen,
      count,
      subtotal,
      add: (product, variant, quantity) =>
        dispatch({ type: "ADD", product, variant, quantity }),
      remove: (id) => dispatch({ type: "REMOVE", id }),
      setQty: (id, quantity) => dispatch({ type: "SET_QTY", id, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
      open: () => dispatch({ type: "OPEN" }),
      close: () => dispatch({ type: "CLOSE" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
