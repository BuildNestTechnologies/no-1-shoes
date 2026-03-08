import { motion } from "framer-motion";
import { ShieldCheck, Repeat, Headphones, BadgePercent } from "lucide-react";

const guarantees = [
  { icon: ShieldCheck, text: "100% Genuine Products" },
  { icon: Repeat, text: "7-Day Easy Returns" },
  { icon: Headphones, text: "24/7 Customer Support" },
  { icon: BadgePercent, text: "Best Price Guarantee" },
];

const TrustBanner = () => {
  return (
    <section className="border-y border-border bg-card/50 py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <g.icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{g.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
