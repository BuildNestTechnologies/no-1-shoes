import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = ["FREE DELIVERY", "•", "PREMIUM QUALITY", "•", "BEST PRICES", "•", "STREETWEAR", "•", "100% GENUINE", "•", "NO.01 SHOES BOLTE", "•"];

const MarqueeBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="overflow-hidden border-y border-border py-5">
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-3 font-display text-sm font-bold uppercase tracking-[0.15em] ${
              item === "•" ? "text-primary" : "text-foreground/30"
            } md:text-base`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeBanner;
