import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const marqueeItems = [
  "FREE DELIVERY", "PREMIUM QUALITY", "BEST PRICES", "NO.01 SHOES BOLTE",
  "STREETWEAR", "SNEAKER CULTURE", "BHIWANDI'S FINEST", "STEP INTO STYLE",
];

const MarqueeBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border py-8">
      <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-8 font-display text-4xl font-bold text-foreground/10 md:text-6xl">
            {item} <span className="text-primary/20">•</span>
          </span>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="mt-4 flex whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="mx-8 font-display text-3xl font-bold text-primary/10 md:text-5xl">
            {item} <span className="text-foreground/10">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeBanner;
