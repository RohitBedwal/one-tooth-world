import { useParams } from "react-router-dom";
import { Container } from "../components/atoms/Container";
import { SectionHeading } from "../components/atoms/SectionHeading";

const policies: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our store.",
      "We collect information such as device type, IP address, and browsing behaviour to improve your experience.",
      "When you purchase, we collect your name, email, address, and order details to fulfil your order.",
      "We may share information with Shopify and other processors to provide services. We never sell your data.",
      "You may contact us at any time to access, correct, or delete your personal information.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms of Service.",
      "Products and pricing are subject to change without notice. We reserve the right to refuse any order.",
      "All content, images and designs on this site belong to One tooth World or its licensors and may not be reproduced without permission.",
      "These terms are governed by the laws of India.",
    ],
  },
  refund: {
    title: "Return & Refund Policy",
    body: [
      "We offer easy returns within 7 days of delivery for most products in original condition.",
      "Customised or made-to-order items are not eligible for return unless damaged.",
      "Refunds are initiated within 3–5 business days of receiving the returned product.",
      "For assistance, contact customer care at +91 7223002939.",
    ],
  },
  warranty: {
    title: "Warranty & Cancellation",
    body: [
      "Products come with a standard manufacturer warranty against manufacturing defects unless stated otherwise.",
      "Orders can be cancelled before they are shipped. Once shipped, standard return policy applies.",
      "Warranty does not cover normal wear and tear, misuse, or damage from improper assembly.",
    ],
  },
};

export function PolicyPage() {
  const { handle } = useParams();
  const policy = policies[handle ?? "privacy"] ?? policies.privacy;

  return (
    <Container size="narrow" className="py-12 md:py-16">
      <SectionHeading title={policy.title} />
      <div className="space-y-4">
        {policy.body.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-subtext md:text-base">
            {p}
          </p>
        ))}
      </div>
    </Container>
  );
}
