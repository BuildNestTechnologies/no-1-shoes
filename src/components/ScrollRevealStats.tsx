import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Pairs Sold" },
  { value: "100+", label: "Styles Available" },
  { value: "5★", label: "Customer Rating" },
  { value: "24/7", label: "Style Support" },
];

const ScrollRevealStats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealStats;
