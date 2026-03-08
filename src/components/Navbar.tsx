import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, ShoppingBag, Search } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "New Arrivals", href: "#arrivals" },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#about" },
  { label: "Store", href: "#store" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    setHidden(latest > prev && latest > 300);
  });

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-border" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="No.1 Shoes Bolte"
              className="h-10 w-10 object-contain"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="font-display text-base font-bold tracking-wider text-foreground">
              NO.1 SHOES <span className="text-primary">BOLTE</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative px-4 py-2 font-body text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground group"
              >
                {l.label}
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Search size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ShoppingBag size={16} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                0
              </span>
            </motion.button>
            <a
              href="tel:7558764648"
              className="ml-2 flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:glow-box-subtle hover:scale-105"
            >
              <Phone size={13} /> Call Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="text-foreground lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 border-l border-border bg-card p-8"
            >
              <button onClick={() => setOpen(false)} className="mb-8 text-muted-foreground hover:text-foreground">
                <X size={24} />
              </button>
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border py-4 font-display text-2xl font-bold text-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="tel:7558764648"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                <Phone size={16} /> Call Now
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
