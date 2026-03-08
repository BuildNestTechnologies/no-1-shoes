import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["Hero", "Collection", "Arrivals", "Deals", "Products", "About", "Store"];

const ScrollChapterDots = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: number;
    const onScroll = () => {
      setVisible(true);
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setVisible(false), 1500);

      const scrollPos = window.scrollY + window.innerHeight / 2;
      const totalHeight = document.body.scrollHeight;
      const sectionHeight = totalHeight / sections.length;
      const idx = Math.min(Math.floor(scrollPos / sectionHeight), sections.length - 1);
      setActive(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex"
        >
          {sections.map((s, i) => (
            <div key={s} className="group relative flex items-center justify-end">
              <span className="absolute right-5 whitespace-nowrap rounded-md bg-card px-2.5 py-1 text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 border border-border">
                {s}
              </span>
              <motion.div
                animate={{
                  scale: i === active ? 1 : 0.5,
                  backgroundColor: i === active ? "hsl(27 100% 50%)" : "hsl(0 0% 25%)",
                }}
                className="h-2 w-2 cursor-pointer rounded-full"
                whileHover={{ scale: 1.2 }}
              />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollChapterDots;
