import { useState, type FormEvent } from "react";
import { PackageSearch } from "lucide-react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";

const steps = [
  { label: "Order placed", done: true },
  { label: "Packed", done: true },
  { label: "Shipped", done: true },
  { label: "Out for delivery", done: false },
  { label: "Delivered", done: false },
];

export function TrackOrderPage() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setResult(trackingId.trim());
  };

  return (
    <Container size="narrow" className="py-12 md:py-16">
      <SectionHeading
        eyebrow="Track"
        title="Track Your Order"
        subtitle="Enter your order or AWB number to see live status."
        align="center"
      />

      <form onSubmit={submit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
        <Input
          required
          placeholder="Order ID or AWB number"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <Button type="submit" className="shrink-0">
          Track
        </Button>
      </form>

      {result && (
        <div className="mt-12 rounded-block border border-line p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <PackageSearch className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">Order #{result.toUpperCase()}</p>
              <p className="text-xs text-subtext">Estimated delivery: 3–5 business days</p>
            </div>
          </div>
          <ol className="relative space-y-6 border-l border-line pl-6">
            {steps.map((s) => (
              <li key={s.label} className="relative">
                <span
                  className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 ${
                    s.done ? "border-primary bg-primary" : "border-line-strong bg-background"
                  }`}
                />
                <p className={`text-sm ${s.done ? "font-medium text-foreground" : "text-subtext"}`}>
                  {s.label}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </Container>
  );
}
