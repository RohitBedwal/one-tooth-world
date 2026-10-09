import { useState, type FormEvent } from "react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Input, Textarea } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { Check } from "lucide-react";

export function SellWithUsPage() {
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
            eyebrow="Partner"
            title="Sell with One tooth World"
            subtitle="Join 350+ Indian brands and makers on India's most curated home marketplace."
          />
          <div className="mt-6 space-y-4">
            {[
              { t: "Curated brand store", d: "A premium storefront that matches your craft." },
              { t: "Pan-India reach", d: "We handle logistics, returns and support." },
              { t: "Growth support", d: "Campaigns, storytelling and merchandising by our team." },
            ].map((b) => (
              <div key={b.t} className="rounded-block bg-surface-soft p-5">
                <p className="text-sm font-semibold text-heading">{b.t}</p>
                <p className="mt-1 text-xs text-subtext">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-block border border-line p-6 md:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <Check className="h-8 w-8 text-primary" />
              <h3 className="font-heading text-xl">Application submitted</h3>
              <p className="text-sm text-subtext">We&apos;ll review and reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <Input label="Brand name" required />
              <Input label="Website / Instagram" placeholder="https://" />
              <Input label="Contact person" required />
              <Input label="Email" type="email" required />
              <Input label="Phone" type="tel" required />
              <Textarea label="About your brand" placeholder="What do you make?" />
              <Button type="submit" fullWidth size="lg">
                Apply to sell
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
