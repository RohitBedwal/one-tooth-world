import type { LucideIcon } from "lucide-react";
import { MessageCircle, Handshake, Store, Package } from "lucide-react";
import { Link } from "react-router-dom";

const icons: Record<string, LucideIcon> = {
  message: MessageCircle,
  handshake: Handshake,
  store: Store,
  package: Package,
};

interface ContactCardProps {
  title: string;
  detail: string;
  icon: keyof typeof icons | string;
  href?: string;
}

export function ContactCard({ title, detail, icon, href }: ContactCardProps) {
  const Icon = icons[icon] ?? MessageCircle;
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Icon className="h-5 w-5 text-white" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-white/80">{detail}</p>
      </div>
    </div>
  );
  return href ? (
    <Link to={href} className="rounded-block p-5 transition-colors hover:bg-white/10">
      {content}
    </Link>
  ) : (
    <div className="rounded-block p-5">{content}</div>
  );
}
