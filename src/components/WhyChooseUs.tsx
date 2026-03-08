import { motion } from "framer-motion";
import { Truck, Shield, Headphones, CreditCard, RefreshCw, Award } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Delivery", desc: "Free shipping on orders above ₹999" },
  { icon: Shield, title: "Quality Assured", desc: "100% genuine products guaranteed" },
  { icon: Headphones, title: "24/7 Support", desc: "Call Chirag anytime for assistance" },
  { icon: CreditCard, title: "Easy Payments", desc: "Cash, UPI, and card accepted" },
  { icon: RefreshCw, title: "Easy Returns", desc: "7-day hassle-free return policy" },
  { icon: Award, title: "Best Prices", desc: "Unbeatable prices in Bhiwandi" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Why Us</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Why Choose <span className="text-gradient">Bolte</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
