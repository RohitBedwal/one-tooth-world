import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, Heart, ChevronDown } from "lucide-react";
import { mainNav, type NavItem } from "../../data/navigation";
import { useUI } from "../../context/UIContext";
import { useCart } from "../../context/CartContext";
import { SearchOverlay } from "./SearchOverlay";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

/**
 * Mega dropdown panel.
 * - Open state is controlled (activeMegaMenu in UIContext) so it closes
 *   on route change / item click — not just CSS hover.
 * - Parent li is `relative`; panel is `absolute top-full` → sits under the nav item
 */
function MegaMenu({ item, open, onClose }: { item: NavItem; open: boolean; onClose: () => void }) {
  const childCount = item.children?.length ?? 0;
  const hasPromo = Boolean(item.promoImages?.length);
  // Fewer columns when promo images are present so the panel never overflows
  const columns = hasPromo
    ? childCount > 12
      ? 3
      : childCount > 6
        ? 2
        : 1
    : childCount > 10
      ? 3
      : childCount > 5
        ? 2
        : 1;

  if (!open) return null;

  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1" role="menu">
      {/* Hover bridge keeps panel open while the mouse travels down */}
      <div aria-hidden className="h-2 w-full" />

      <div className="box-border w-max min-w-[220px] max-w-[min(92vw,780px)] overflow-hidden rounded-block border border-line bg-background p-5 shadow-[0_12px_40px_-8px_rgba(17,17,17,0.15)] md:p-6">
        <div className="flex min-w-0 items-start gap-6 md:gap-8">
          {/* Submenu — vertical list; columns shrink to fit panel */}
          <ul
            className="min-w-0"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, minmax(0, max-content))`,
              columnGap: "2rem",
              rowGap: "0.125rem",
              alignItems: "start",
              justifyItems: "start",
            }}
          >
            {item.children!.map((child) => (
              <li key={child.label} className="w-full">
                <Link
                  to={child.href}
                  role="menuitem"
                  onClick={onClose}
                  className="block w-full rounded-md px-2 py-2 text-[13px] leading-6 text-subtext transition-colors hover:bg-surface-soft hover:text-foreground"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Promo cards — fixed width, clipped inside the panel */}
          {hasPromo && (
            <div className="flex shrink-0 gap-2.5 border-l border-line pl-6 md:pl-8">
              {item.promoImages!.map((promo) => (
                <Link
                  key={promo.label}
                  to={promo.href}
                  onClick={onClose}
                  className="group/promo w-24 shrink-0 md:w-28"
                  role="menuitem"
                >
                  <div className="mb-2 aspect-[3/4] overflow-hidden rounded-block bg-surface">
                    <img
                      src={promo.image}
                      alt={promo.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/promo:scale-105"
                    />
                  </div>
                  <p className="text-xs font-medium leading-tight text-foreground group-hover/promo:text-primary">
                    {promo.label}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    isSearchOpen,
    openSearch,
    closeSearch,
    activeMegaMenu,
    setActiveMegaMenu,
  } = useUI();
  const { count } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || isSearchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  // Close any open dropdown whenever the route changes (e.g. after clicking a submenu item)
  useEffect(() => {
    setActiveMegaMenu(null);
  }, [location.pathname, setActiveMegaMenu]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-background">
        {/* Top row — 3-column grid, logo always centered */}
        <div className="mx-auto grid max-w-container grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open menu"
              onClick={openMobileMenu}
              className="rounded-pill p-2 transition-colors hover:bg-surface lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Search"
              onClick={openSearch}
              className="hidden w-64 items-center gap-2.5 rounded-pill border border-line bg-surface px-4 py-2.5 text-left text-[13px] text-subtext transition-colors hover:border-line-strong md:flex xl:w-72"
            >
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate">Search for products…</span>
            </button>
          </div>

          <Link to="/" className="flex items-center justify-center" aria-label="One tooth World home">
            <span className="font-heading text-2xl font-bold tracking-tight text-heading md:text-[1.7rem]">
              One tooth World
            </span>
          </Link>

          <div className="flex items-center justify-end gap-0.5 md:gap-1">
            <button
              type="button"
              aria-label="Search"
              onClick={openSearch}
              className="rounded-pill p-2 transition-colors hover:bg-surface md:hidden"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden rounded-pill p-2.5 transition-colors hover:bg-surface sm:block"
            >
              <Heart className="h-[18px] w-[18px]" />
            </Link>
            <Link
              to="/account"
              aria-label="Account"
              className="hidden items-center gap-1.5 rounded-pill px-3 py-2 text-sm font-medium transition-colors hover:bg-surface sm:flex"
            >
              <User className="h-[18px] w-[18px]" />
              <span className="hidden lg:inline">Log in</span>
            </Link>
            <button
              type="button"
              aria-label={`Cart (${count})`}
              onClick={() => navigate("/cart")}
              className="relative rounded-pill p-2.5 transition-colors hover:bg-surface"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute right-0.5 top-0.5 flex min-w-[16px] items-center justify-center rounded-pill bg-tertiary px-1 py-0.5 text-[9px] font-bold leading-none text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom row — nav links */}
        <nav aria-label="Main" className="hidden border-t border-line lg:block">
          <ul className="mx-auto flex max-w-container items-stretch justify-center px-4">
            {mainNav.map((item) => (
                <li
                  key={item.label}
                  className="group relative flex"
                  onMouseEnter={() => item.children && setActiveMegaMenu(item.label)}
                  onMouseLeave={() => item.children && setActiveMegaMenu(null)}
                  onFocus={() => item.children && setActiveMegaMenu(item.label)}
                >
                  <Link
                    to={item.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className="relative flex items-center gap-1 whitespace-nowrap px-2.5 py-3 text-[12.5px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary xl:px-3"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="rounded-pill bg-sale px-1.5 py-px text-[8px] font-bold uppercase leading-[1.4] tracking-wider text-white">
                        {item.badge}
                      </span>
                    )}
                    {item.children && <ChevronDown className="h-3 w-3 text-subtext" />}
                    <span className="absolute inset-x-2.5 bottom-0 h-0.5 scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>

                  {item.children && (
                    <MegaMenu
                      item={item}
                      open={activeMegaMenu === item.label}
                      onClose={() => setActiveMegaMenu(null)}
                    />
                  )}
                </li>
              ))}
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenuDrawer open={isMobileMenuOpen} onClose={closeMobileMenu} />
        )}
      </AnimatePresence>
      <AnimatePresence>{isSearchOpen && <SearchOverlay onClose={closeSearch} />}</AnimatePresence>
    </>
  );
}
