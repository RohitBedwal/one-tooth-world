import { useState, type FormEvent } from "react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Input, Select } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { Check } from "lucide-react";

export function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // With Shopify connected, redirect to checkoutUrl(lines.map(...))
    setPlaced(true);
    clear();
  };

  if (placed) {
    return (
      <Container size="narrow" className="py-24 text-center">
        <Check className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-heading text-3xl">Order placed 🎉</h1>
        <p className="mt-2 text-sm text-subtext">
          Thank you! A confirmation email is on its way.
        </p>
        <div className="mt-8">
          <Button href="/collections/all">Continue shopping</Button>
        </div>
      </Container>
    );
  }

  if (lines.length === 0) {
    return (
      <Container size="narrow" className="py-24 text-center">
        <h1 className="font-heading text-3xl">Your cart is empty</h1>
        <div className="mt-6">
          <Button href="/collections/all">Browse products</Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-10 md:py-14">
      <SectionHeading title="Checkout" />
      <form onSubmit={submit} className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <h3 className="font-heading text-lg">Shipping details</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="First name" required />
            <Input label="Last name" required />
            <Input label="Email" type="email" required className="sm:col-span-2" />
            <Input label="Phone" type="tel" required />
            <Input label="Pincode" required />
            <Input label="Address" required className="sm:col-span-2" />
            <Input label="City" required />
            <Select
              label="State"
              options={[
                { label: "Madhya Pradesh", value: "MP" },
                { label: "Maharashtra", value: "MH" },
                { label: "Delhi", value: "DL" },
                { label: "Karnataka", value: "KA" },
                { label: "Tamil Nadu", value: "TN" },
              ]}
            />
          </div>
        </div>

        <aside className="rounded-block border border-line p-6">
          <h3 className="mb-4 font-heading text-lg">Order summary</h3>
          <ul className="mb-4 space-y-3">
            {lines.map((l) => (
              <li key={l.id} className="flex justify-between gap-3 text-sm">
                <span className="line-clamp-1 text-subtext">
                  {l.title} × {l.quantity}
                </span>
                <span className="shrink-0 font-medium">{formatPrice(l.price * l.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t border-line pt-4 text-base font-semibold">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Button type="submit" fullWidth size="lg" className="mt-6">
            Place order
          </Button>
          <p className="mt-3 text-center text-[11px] text-subtext">
            Payments processed securely via Shopify.
          </p>
        </aside>
      </form>
    </Container>
  );
}
