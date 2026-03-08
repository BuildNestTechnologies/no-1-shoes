import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Heart } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const products = [
  { name: "Street Runner X1", price: "₹1,499", img: sneaker1, tag: "Bestseller", rating: 4.8 },
  { name: "Cloud Walker Pro", price: "₹1,299", img: sneaker2, tag: "New", rating: 4.7 },
  { name: "Night Blaze Elite", price: "₹1,899", img: sneaker3, tag: "Premium", rating: 4.9 },
  { name: "Urban High-Top", price: "₹1,699", img: sneaker4, tag: "Limited", rating: 4.6 },
  { name: "Daily Flex", price: "₹999", img: sneaker5, tag: "Value", rating: 4.5 },
  { name: "Street Runner X2", price: "₹1,599", img: sneaker1, tag: "Hot", rating: 4.8 },
  { name: "Cloud Walker Lite", price: "₹1,199", img: sneaker2, tag: "Trending", rating: 4.7 },
  { name: "Night Blaze Pro", price: "₹2,199", img: sneaker3, tag: "Fire", rating: 4.9 },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Shop Now</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Product <span className="text-gradient">Showcase</span>
          </h2>
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-5 px-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -10 }}
            className="group min-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/20 sm:min-w-[300px]"
          >
            <div className="relative overflow-hidden p-8">
              <span className="absolute left-4 top-4 rounded-full border border-border bg-card/80 px-3 py-1 text-[10px] font-semibold text-muted-foreground backdrop-blur-sm">
                {p.tag}
              </span>
              <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary">
                <Heart size={13} />
              </button>
              <motion.img
                src={p.img}
                alt={p.name}
                className="mx-auto h-40 w-40 object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="border-t border-border/50 p-5">
              <h3 className="font-display text-base font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-[11px] text-primary">★ {p.rating}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-foreground">{p.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <ShoppingBag size={15} />
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
