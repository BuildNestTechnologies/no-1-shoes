import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker3 from "@/assets/sneaker-3.png";

const EnhancedParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-40 lg:py-56">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

      {/* Parallax sneakers */}
      <motion.img src={sneaker1} alt="" style={{ y: y1 }} className="absolute -left-16 top-[10%] w-56 opacity-[0.06]" />
      <motion.img src={sneaker3} alt="" style={{ y: y2 }} className="absolute -right-16 bottom-[10%] w-48 opacity-[0.06]" />

      <motion.div style={{ y: textY }} className="container relative z-10 mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 font-body text-[11px] uppercase text-primary"
        >
          Our Philosophy
        </motion.p>

        <div className="mx-auto max-w-4xl space-y-3">
          {["Designed for comfort.", "Built for style.", "Engineered for the streets."].map((line, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`font-display font-bold ${
                i < 2 ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl lg:text-6xl"
              } ${line.includes("style") ? "text-gradient" : "text-foreground"}`}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        {/* Animated line */}
        <motion.div
          style={{ width: lineWidth }}
          className="mx-auto mt-10 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground"
        >
          Every pair tells a story. From the streets of Bhiwandi to your wardrobe — premium quality at honest prices.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default EnhancedParallaxSection;
