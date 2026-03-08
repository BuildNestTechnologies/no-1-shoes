import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const categories = [
  { name: "Sneakers", img: sneaker1, tag: "New" },
  { name: "Sports Shoes", img: sneaker3, tag: "Hot" },
  { name: "Casual Shoes", img: sneaker2, tag: "Trending" },
  { name: "Streetwear", img: sneaker4, tag: "Fire" },
  { name: "Daily Wear", img: sneaker5, tag: "Popular" },
];

const FeaturedCollection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="relative py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">Curated For You</p>
          <h2 className="font-display text-5xl font-bold text-foreground md:text-7xl">
            Featured <span className="text-primary">Collection</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl gradient-card border border-border transition-all duration-500 hover:border-primary/50 hover:glow-box"
            >
              <div className="relative overflow-hidden p-6 pb-0">
                <motion.img
                  src={cat.img}
                  alt={cat.name}
                  className="mx-auto h-48 w-48 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="absolute right-4 top-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  {cat.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Explore →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
