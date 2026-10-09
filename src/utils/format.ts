export function formatPrice(amount: number | string, currency = "INR"): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(num);
}

export function discountPercent(compareAt?: number, price?: number): number | null {
  if (!compareAt || !price || compareAt <= price) return null;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length).trimEnd() + "…" : text;
}
