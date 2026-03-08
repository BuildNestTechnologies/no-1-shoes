import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker3 from "@/assets/sneaker-3.png";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <motion.img
        src={sneaker1}
        alt=""
        style={{ y: y1 }}
        className="absolute -left-20 top-20 w-72 opacity-20 blur-sm"
      />
      <motion.img
        src={sneaker3}
        alt=""
        style={{ y: y2 }}
        className="absolute -right-20 bottom-20 w-72 opacity-20 blur-sm"
      />

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 font-body text-sm uppercase tracking-[0.3em] text-primary"
        >
          Our Philosophy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto max-w-4xl font-display text-5xl font-bold leading-tight text-foreground md:text-7xl"
        >
          Designed for <span className="text-primary">Comfort.</span>
          <br />
          Built for <span className="text-primary">Style.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground"
        >
          Every pair tells a story. From the streets of Bhiwandi to your wardrobe — premium quality at honest prices.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
