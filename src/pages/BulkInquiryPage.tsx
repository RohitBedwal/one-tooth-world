import { useState, type FormEvent } from "react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Input, Textarea, Select } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { Check } from "lucide-react";

export function BulkInquiryPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Container className="py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="B2B"
            title="Bulk Orders & Corporate Gifting"
            subtitle="Special pricing for 10+ units. Furniture, lighting, decor and curated gift hampers."
          />
          <ul className="mt-4 space-y-3 text-sm text-subtext">
            <li>• Dedicated account manager</li>
            <li>• Volume-based discounts</li>
            <li>• Custom branding & packaging</li>
            <li>• PAN India logistics support</li>
          </ul>
        </div>
        <div className="rounded-block border border-line p-6 md:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <Check className="h-8 w-8 text-primary" />
              <h3 className="font-heading text-xl">Inquiry received</h3>
              <p className="text-sm text-subtext">Our B2B team will respond within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <Input label="Company name" required />
              <Input label="Contact person" required />
              <Input label="Email" type="email" required />
              <Input label="Phone" type="tel" required />
              <Select
                label="Category"
                options={[
                  { label: "Furniture", value: "furniture" },
                  { label: "Lighting", value: "lighting" },
                  { label: "Decor", value: "decor" },
                  { label: "Gift hampers", value: "gifts" },
                ]}
              />
              <Input label="Approx. quantity" type="number" min={1} required />
              <Textarea label="Requirements" placeholder="Tell us about your project…" />
              <Button type="submit" fullWidth size="lg">
                Submit inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
