import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const products = [
  { name: "Street Runner X1", price: "₹1,499", img: sneaker1, tag: "Bestseller" },
  { name: "Cloud Walker Pro", price: "₹1,299", img: sneaker2, tag: "New" },
  { name: "Night Blaze Elite", price: "₹1,899", img: sneaker3, tag: "Premium" },
  { name: "Urban High-Top", price: "₹1,699", img: sneaker4, tag: "Limited" },
  { name: "Daily Flex", price: "₹999", img: sneaker5, tag: "Value" },
  { name: "Street Runner X2", price: "₹1,599", img: sneaker1, tag: "Hot" },
  { name: "Cloud Walker Lite", price: "₹1,199", img: sneaker2, tag: "Trending" },
  { name: "Night Blaze Pro", price: "₹2,199", img: sneaker3, tag: "Fire" },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      {/* Animated bg strip */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">Shop Now</p>
          <h2 className="font-display text-5xl font-bold text-foreground md:text-7xl">
            Product <span className="text-primary">Showcase</span>
          </h2>
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 px-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -16, transition: { duration: 0.3 } }}
            className="group min-w-[300px] cursor-pointer overflow-hidden rounded-2xl gradient-card border border-border transition-all duration-500 hover:border-primary/50 hover:glow-box"
          >
            <div className="relative overflow-hidden p-8">
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                {p.tag}
              </span>
              <motion.img
                src={p.img}
                alt={p.name}
                className="mx-auto h-48 w-48 object-contain"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            </div>
            <div className="border-t border-border p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-xl font-bold text-primary">{p.price}</span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <ShoppingBag size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
