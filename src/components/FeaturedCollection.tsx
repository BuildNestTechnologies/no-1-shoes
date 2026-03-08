import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const categories = [
  { name: "Sneakers", img: sneaker1, count: "24 Products", color: "from-orange-500/10" },
  { name: "Sports", img: sneaker3, count: "18 Products", color: "from-blue-500/10" },
  { name: "Casual", img: sneaker2, count: "32 Products", color: "from-green-500/10" },
  { name: "Streetwear", img: sneaker4, count: "15 Products", color: "from-purple-500/10" },
  { name: "Daily Wear", img: sneaker5, count: "28 Products", color: "from-red-500/10" },
];

const FeaturedCollection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="collection" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Curated For You</p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
              Shop by <span className="text-gradient">Category</span>
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="group flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            View All Categories <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Grid: First 2 large, last 3 small */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 ${
                i < 2 ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative flex flex-col items-center p-8 pb-6">
                <motion.img
                  src={cat.img}
                  alt={cat.name}
                  className="h-40 w-40 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[-6deg] md:h-48 md:w-48"
                />
              </div>
              
              <div className="relative border-t border-border/50 px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{cat.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cat.count}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
