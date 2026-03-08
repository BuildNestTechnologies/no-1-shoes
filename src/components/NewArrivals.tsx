import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Flame, ArrowRight, ShoppingBag, Heart, Eye } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const arrivals = [
  { name: "Blaze Runner 2026", price: "₹2,499", oldPrice: "₹3,199", img: sneaker1, badge: "Just Dropped", colors: 3, rating: 4.8 },
  { name: "Phantom High", price: "₹1,899", oldPrice: "₹2,499", img: sneaker2, badge: "Exclusive", colors: 2, rating: 4.9 },
  { name: "Volt Surge Pro", price: "₹2,199", oldPrice: "₹2,899", img: sneaker3, badge: "Limited", colors: 4, rating: 4.7 },
  { name: "Shadow Drift X", price: "₹1,699", oldPrice: "₹2,199", img: sneaker4, badge: "Trending", colors: 3, rating: 4.6 },
  { name: "Street King Max", price: "₹1,999", oldPrice: "₹2,699", img: sneaker5, badge: "New", colors: 5, rating: 4.8 },
  { name: "Urban Legend II", price: "₹2,299", oldPrice: "₹2,999", img: sneaker1, badge: "Hot", colors: 2, rating: 4.9 },
];

const NewArrivals = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="arrivals" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <Flame className="h-4 w-4 text-primary" />
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-primary">Fresh Drops</p>
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
              New <span className="text-gradient">Arrivals</span>
            </h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            View All <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Product Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {arrivals.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/20"
            >
              {/* Badge */}
              <div className="absolute left-4 top-4 z-20 rounded-full bg-primary px-3 py-1">
                <span className="font-display text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {item.badge}
                </span>
              </div>

              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: hoveredIdx === i ? 1 : 0, x: hoveredIdx === i ? 0 : 10 }}
                className="absolute right-4 top-4 z-20 flex flex-col gap-2"
              >
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-border text-muted-foreground transition-colors hover:text-primary">
                  <Heart size={14} />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-border text-muted-foreground transition-colors hover:text-primary">
                  <Eye size={14} />
                </button>
              </motion.div>

              {/* Image */}
              <div className="relative overflow-hidden px-8 py-10 pt-14">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="mx-auto h-44 w-44 object-contain transition-all duration-700 group-hover:scale-110 md:h-52 md:w-52"
                />
              </div>

              {/* Info */}
              <div className="border-t border-border/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {Array.from({ length: item.colors }).map((_, j) => (
                      <span key={j} className="h-2.5 w-2.5 rounded-full border border-border" style={{
                        background: ['hsl(var(--primary))', '#333', '#666', '#fff', '#555'][j]
                      }} />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">+{item.colors} colors</span>
                </div>

                <h3 className="font-display text-base font-semibold text-foreground">{item.name}</h3>
                
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[11px] text-primary">★ {item.rating}</span>
                  <span className="text-[10px] text-muted-foreground">(128 reviews)</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl font-bold text-foreground">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{item.oldPrice}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:glow-box-subtle"
                  >
                    <ShoppingBag size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-border px-10 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Load More Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
