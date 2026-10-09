import type { ReactNode } from "react";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface">
        {icon ?? <PackageOpen className="h-7 w-7 text-subtext" />}
      </div>
      <h3 className="font-heading text-xl text-heading">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-sm text-subtext">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
