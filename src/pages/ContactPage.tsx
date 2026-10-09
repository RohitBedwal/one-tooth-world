import { useState, type FormEvent } from "react";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";
import { Input, Textarea, Select } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { Check } from "lucide-react";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Container className="py-10 md:py-14">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="We'd love to hear from you"
            subtitle="Questions about an order, a product, or design advice? Reach out."
          />
          <ul className="space-y-5 text-sm">
            <li>
              <p className="font-semibold text-heading">Customer Care</p>
              <p className="text-subtext">Call or WhatsApp · +91 7223002939</p>
            </li>
            <li>
              <p className="font-semibold text-heading">Business & Partnerships</p>
              <p className="text-subtext">business@onetooth.world · +91 9039419933</p>
            </li>
            <li>
              <p className="font-semibold text-heading">Address</p>
              <p className="text-subtext">
                59, Shanti Niketan Colony, Indore 452001,
                <br />
                Madhya Pradesh, India
              </p>
            </li>
          </ul>
        </div>

        <div className="rounded-block border border-line p-6 md:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl">Message sent</h3>
              <p className="text-sm text-subtext">Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <Input label="Full name" required placeholder="Your name" />
              <Input label="Email" type="email" required placeholder="you@example.com" />
              <Input label="Phone" type="tel" placeholder="+91…" />
              <Select
                label="Topic"
                options={[
                  { label: "Order support", value: "order" },
                  { label: "Product enquiry", value: "product" },
                  { label: "Design consultation", value: "design" },
                  { label: "Other", value: "other" },
                ]}
              />
              <Textarea label="Message" required placeholder="How can we help?" />
              <Button type="submit" fullWidth size="lg">
                Send message
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
