import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Button } from "../components/atoms/Button";
import { EmptyState } from "../components/molecules/EmptyState";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";

export function CartPage() {
  const { lines, setQty, remove, subtotal, count, clear } = useCart();

  if (lines.length === 0) {
    return (
      <Container className="py-16">
        <EmptyState
          icon={<ShoppingBag className="h-7 w-7 text-subtext" />}
          title="Your cart is empty"
          description="Discover handpicked furniture, lights and decor."
          action={<Button href="/collections/all">Continue shopping</Button>}
        />
      </Container>
    );
  }

  return (
    <Container className="py-10 md:py-14">
      <SectionHeading title={`Your cart (${count})`} />
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="divide-y divide-line border-y border-line">
            {lines.map((line) => (
              <li key={line.id} className="flex gap-5 py-6">
                <Link
                  to={`/products/${line.handle}`}
                  className="h-28 w-24 shrink-0 overflow-hidden rounded-block bg-surface"
                >
                  {line.image && <img src={line.image} alt={line.title} className="h-full w-full object-cover" />}
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <Link to={`/products/${line.handle}`} className="text-sm font-medium hover:text-primary">
                      {line.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => remove(line.id)}
                      aria-label="Remove item"
                      className="text-subtext hover:text-sale"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  {line.variantTitle !== "Default" && (
                    <p className="mt-1 text-xs text-subtext">{line.variantTitle}</p>
                  )}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-pill border border-line">
                      <button type="button" onClick={() => setQty(line.id, line.quantity - 1)} className="px-3 py-1.5 hover:bg-surface">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm">{line.quantity}</span>
                      <button type="button" onClick={() => setQty(line.id, line.quantity + 1)} className="px-3 py-1.5 hover:bg-surface">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold">{formatPrice(line.price * line.quantity)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button type="button" onClick={clear} className="mt-4 text-xs text-subtext underline-offset-4 hover:underline">
            Clear cart
          </button>
        </div>

        <aside>
          <div className="sticky top-32 rounded-block border border-line p-6">
            <h3 className="mb-4 font-heading text-lg">Order summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-subtext">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-subtext">Shipping</span>
                <span className="text-success">Free</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t border-line pt-4 text-base font-semibold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-6 space-y-2">
              <Button fullWidth size="lg" href="/checkout">
                Check out
              </Button>
              <Button fullWidth variant="outline" href="/collections/all">
                Continue shopping
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
