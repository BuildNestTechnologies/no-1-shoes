import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-10 text-center sm:p-14"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Get <span className="text-gradient">Exclusive</span> Drops
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Be the first to know about new arrivals, flash sales, and exclusive offers.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 rounded-xl border border-border bg-background px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:glow-box-subtle"
            >
              <Send className="h-3.5 w-3.5" /> Subscribe
            </motion.button>
          </motion.div>

          <p className="mt-4 text-[11px] text-muted-foreground">
            Join 2,000+ sneakerheads. No spam, only fire drops 🔥
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
