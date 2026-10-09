interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-pill border px-4 py-2 text-xs font-medium transition-colors ${
        active
          ? "border-primary bg-primary text-on-primary"
          : "border-line-strong bg-transparent text-foreground hover:border-foreground"
      }`}
    >
      {label}
    </button>
  );
}
