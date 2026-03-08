import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "500+", label: "Pairs Sold", icon: "👟" },
  { value: "100+", label: "Styles Available", icon: "🔥" },
  { value: "5★", label: "Customer Rating", icon: "⭐" },
  { value: "24/7", label: "Style Support", icon: "💬" },
];

const ScrollRevealStats = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl gradient-card border border-border text-3xl transition-all group-hover:border-primary/50 group-hover:glow-box"
              >
                {stat.icon}
              </motion.div>
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollRevealStats;
