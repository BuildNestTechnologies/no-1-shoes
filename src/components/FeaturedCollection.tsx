import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const categories = [
  { name: "Sneakers", img: sneaker1, tag: "New", desc: "Urban street classics" },
  { name: "Sports Shoes", img: sneaker3, tag: "Hot", desc: "Performance driven" },
  { name: "Casual Shoes", img: sneaker2, tag: "Trending", desc: "Everyday comfort" },
  { name: "Streetwear", img: sneaker4, tag: "Fire", desc: "Bold statement pieces" },
  { name: "Daily Wear", img: sneaker5, tag: "Popular", desc: "All-day style" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateY: -15, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
    },
  }),
};

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
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1 }}
            className="mb-3 font-body text-sm uppercase text-primary"
          >
            Curated For You
          </motion.p>
          <h2 className="font-display text-5xl font-bold text-foreground md:text-7xl">
            Featured <span className="text-primary">Collection</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" style={{ perspective: "1200px" }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -16, scale: 1.03, rotateY: 5, transition: { duration: 0.3 } }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl gradient-card border border-border transition-all duration-500 hover:border-primary/50 hover:glow-box"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden p-6 pb-0">
                <motion.img
                  src={cat.img}
                  alt={cat.name}
                  className="mx-auto h-48 w-48 object-contain"
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
                <motion.span
                  initial={{ x: 40, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="absolute right-4 top-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {cat.tag}
                </motion.span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
                <motion.div
                  className="mt-3 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
