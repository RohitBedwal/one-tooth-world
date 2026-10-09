import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/format";
import { Button } from "../atoms/Button";

export function CartDrawer() {
  const { lines, isOpen, close, setQty, remove, subtotal, count } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-foreground/40"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
            role="dialog"
            aria-label="Cart"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="font-heading text-lg">Your cart ({count})</h2>
              <button type="button" onClick={close} aria-label="Close cart" className="rounded-pill p-2 hover:bg-surface">
                <X className="h-5 w-5" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-subtext" />
                <p className="text-sm text-subtext">Your cart is empty</p>
                <Button variant="primary" onClick={close}>
                  Continue shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="space-y-5">
                    {lines.map((line) => (
                      <li key={line.id} className="flex gap-4">
                        <Link
                          to={`/products/${line.handle}`}
                          onClick={close}
                          className="h-24 w-20 shrink-0 overflow-hidden rounded-block bg-surface"
                        >
                          {line.image && (
                            <img src={line.image} alt={line.title} className="h-full w-full object-cover" />
                          )}
                        </Link>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              to={`/products/${line.handle}`}
                              onClick={close}
                              className="line-clamp-2 text-sm font-medium hover:text-primary"
                            >
                              {line.title}
                            </Link>
                            <button
                              type="button"
                              onClick={() => remove(line.id)}
                              aria-label="Remove"
                              className="shrink-0 text-subtext hover:text-sale"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          {line.variantTitle !== "Default" && (
                            <p className="mt-0.5 text-xs text-subtext">{line.variantTitle}</p>
                          )}
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center rounded-pill border border-line">
                              <button
                                type="button"
                                aria-label="Decrease quantity"
                                onClick={() => setQty(line.id, line.quantity - 1)}
                                className="px-2.5 py-1.5 hover:bg-surface"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-8 text-center text-sm">{line.quantity}</span>
                              <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => setQty(line.id, line.quantity + 1)}
                                className="px-2.5 py-1.5 hover:bg-surface"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <span className="text-sm font-semibold">{formatPrice(line.price * line.quantity)}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-line px-5 py-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-subtext">Subtotal</span>
                    <span className="font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mb-4 text-xs text-subtext">Shipping & taxes calculated at checkout.</p>
                  <Button
                    fullWidth
                    onClick={() => {
                      close();
                      navigate("/checkout");
                    }}
                  >
                    Check out
                  </Button>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-2 w-full text-center text-sm underline-offset-4 hover:underline"
                  >
                    Continue shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
