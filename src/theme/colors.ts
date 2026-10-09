/**
 * JS mirror of the CSS design tokens in src/index.css.
 * Use for JS-only needs (inline styles, charts, canvas).
 * For UI, prefer Tailwind classes (bg-primary, text-tertiary…).
 */
export const colors = {
  primary: "#4c5941",
  primaryLight: "#5e6a54",
  primaryDark: "#3a4532",
  primarySoft: "#7d8674",
  secondary: "#dfdAd3",
  secondaryDark: "#c9c2b8",
  tertiary: "#c26649",
  tertiaryLight: "#daa392",
  tertiaryDark: "#a4523a",
  background: "#ffffff",
  surface: "#ededed",
  surfaceSoft: "#f7f6f4",
  foreground: "#111111",
  heading: "#000000",
  subtext: "#666666",
  border: "#ededed",
  sale: "#c26649",
  soldout: "#702c37",
  onPrimary: "#ffffff",
} as const;

export const badgeColors: Record<string, { bg: string; text: string }> = {
  "Grand Sale": { bg: colors.tertiary, text: "#ffffff" },
  "Hot Seller": { bg: colors.tertiary, text: "#ffffff" },
  Bestseller: { bg: colors.primary, text: "#ffffff" },
  "New Arrivals": { bg: colors.primary, text: "#ffffff" },
  "Designer Edition": { bg: colors.foreground, text: "#ffffff" },
  "Premium Edition": { bg: colors.primaryDark, text: "#ffffff" },
  "Trending Now": { bg: colors.tertiaryDark, text: "#ffffff" },
  "Ready to Ship": { bg: colors.primaryLight, text: "#ffffff" },
  "Must Have": { bg: colors.primary, text: "#ffffff" },
  "Sold out": { bg: colors.soldout, text: "#ffffff" },
};

export const fonts = {
  body: "var(--font-body)",
  heading: "var(--font-heading)",
} as const;
