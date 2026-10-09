import { motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mobileNav } from "../../data/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-foreground/40"
      />
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.28 }}
        className="absolute left-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-heading text-xl font-bold">One tooth World</span>
          <button type="button" onClick={onClose} aria-label="Close menu" className="rounded-pill p-2 hover:bg-surface">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {mobileNav.map((item) => (
            <div key={item.label} className="border-b border-line/60">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between px-5 py-3.5 text-left text-sm font-medium"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-subtext transition-transform ${
                        expanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden bg-surface-soft"
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 px-5 py-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={onClose}
                            className="py-1.5 text-xs text-subtext hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-5 py-3.5 text-sm font-medium hover:bg-surface"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-pill bg-sale px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </motion.aside>
    </div>
  );
}
