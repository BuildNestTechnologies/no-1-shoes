import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul S.", text: "Best sneaker shop in Bhiwandi! The quality is unreal for the price. I've bought 5 pairs already.", rating: 5, tag: "Verified Buyer" },
  { name: "Priya M.", text: "My go-to place for trendy shoes. Chirag always helps me find the perfect pair. Highly recommended!", rating: 5, tag: "Regular Customer" },
  { name: "Arjun K.", text: "Got the Street Runner X1 and it's amazing. Comfortable, stylish, and affordable.", rating: 5, tag: "Verified Buyer" },
  { name: "Sneha D.", text: "The streetwear collection is insane. Feels like shopping at a premium brand but at local prices!", rating: 4, tag: "New Customer" },
  { name: "Vikram P.", text: "Fast service, amazing quality. I recommended No.01 Shoes Bolte to all my friends.", rating: 5, tag: "Verified Buyer" },
  { name: "Aisha R.", text: "Love the new arrivals section! Always something fresh and trending. Best shoe store hands down.", rating: 5, tag: "Regular Customer" },
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20"
            >
              <Quote className="absolute -right-1 -top-1 h-16 w-16 text-primary/[0.04]" />

              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>

              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-[10px] text-primary">{t.tag}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
