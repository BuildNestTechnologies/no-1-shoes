import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Collection", "About", "Store", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="No.1 Shoes Bolte" className="h-12 w-12 object-contain" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            NO.1 SHOES <span className="text-primary">BOLTE</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-body text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ))}
          <a href="tel:7558764648" className="magnetic-btn rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            <Phone className="mr-1 inline h-3.5 w-3.5" /> Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="font-display text-lg text-foreground hover:text-primary">
                  {l}
                </a>
              ))}
              <a href="tel:7558764648" className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground">
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
