import { motion } from "framer-motion";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker5 from "@/assets/sneaker-5.png";

const picks = [
  { name: "Chirag's Pick", subtitle: "The one I wear every day", img: sneaker1, price: "₹1,499" },
  { name: "Customer Favorite", subtitle: "Most loved by our community", img: sneaker3, price: "₹2,199" },
  { name: "Best Value", subtitle: "Maximum style, minimum price", img: sneaker5, price: "₹999" },
];

const StaffPicks = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-transparent to-primary/[0.04]" />
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Hand-Picked</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Staff <span className="text-gradient">Picks</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {picks.map((pick, i) => (
            <motion.div
              key={pick.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/20"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative p-8 text-center">
                <motion.img
                  src={pick.img}
                  alt={pick.name}
                  className="mx-auto h-44 w-44 object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="border-t border-border/50 p-6 text-center">
                <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {pick.name}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">{pick.subtitle}</p>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">{pick.price}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 w-full rounded-xl bg-primary/10 py-3 font-display text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Shop This Pick
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffPicks;
