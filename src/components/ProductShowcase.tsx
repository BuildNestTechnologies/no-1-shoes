import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const products = [
  { name: "Street Runner X1", price: "₹1,499", img: sneaker1 },
  { name: "Cloud Walker Pro", price: "₹1,299", img: sneaker2 },
  { name: "Night Blaze Elite", price: "₹1,899", img: sneaker3 },
  { name: "Urban High-Top", price: "₹1,699", img: sneaker4 },
  { name: "Daily Flex", price: "₹999", img: sneaker5 },
  { name: "Street Runner X2", price: "₹1,599", img: sneaker1 },
  { name: "Cloud Walker Lite", price: "₹1,199", img: sneaker2 },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
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
            whileHover={{ y: -10 }}
            className="group min-w-[280px] cursor-pointer overflow-hidden rounded-2xl gradient-card border border-border transition-all duration-500 hover:border-primary/50"
          >
            <div className="relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <img
                src={p.img}
                alt={p.name}
                className="mx-auto h-44 w-44 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <div className="border-t border-border p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-xl font-bold text-primary">{p.price}</span>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
