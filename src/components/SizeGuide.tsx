import { motion } from "framer-motion";
import { useState } from "react";
import { Ruler } from "lucide-react";

const sizes = [6, 7, 8, 9, 10, 11, 12];

const SizeGuide = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10"
        >
          <Ruler className="mx-auto mb-3 h-6 w-6 text-primary" />
          <h3 className="font-display text-2xl font-bold text-foreground">Find Your Perfect Fit</h3>
          <p className="mt-1 text-sm text-muted-foreground">Available sizes — tap to select</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {sizes.map((size, i) => (
              <motion.button
                key={size}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelected(size === selected ? null : size)}
                className={`flex h-12 w-12 items-center justify-center rounded-xl border font-display text-base font-bold transition-all ${
                  selected === size
                    ? "border-primary bg-primary text-primary-foreground glow-box-subtle"
                    : "border-border text-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SizeGuide;
