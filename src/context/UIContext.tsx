import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface UIContextValue {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  activeMegaMenu: string | null;
  setActiveMegaMenu: (label: string | null) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const value = useMemo<UIContextValue>(
    () => ({
      isMobileMenuOpen,
      openMobileMenu: () => setIsMobileMenuOpen(true),
      closeMobileMenu: () => setIsMobileMenuOpen(false),
      isSearchOpen,
      openSearch: () => setIsSearchOpen(true),
      closeSearch: () => setIsSearchOpen(false),
      activeMegaMenu,
      setActiveMegaMenu,
    }),
    [isMobileMenuOpen, isSearchOpen, activeMegaMenu],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
