import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const AboutBrand = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-primary/10 blur-[80px]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-10 rounded-full border border-dashed border-primary/10"
              />
              <img src={logo} alt="No.1 Shoes Bolte" className="relative z-10 w-48 md:w-56" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              About <span className="text-gradient">The Brand</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              No.01 Shoes Bolte is a footwear destination located in Bhiwandi, offering stylish and comfortable shoes for everyday wear, sports and street fashion.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Curated by <span className="font-semibold text-foreground">Chirag</span>, the sneaker savant of Bhiwandi — we're focused on quality, style and affordability, bringing premium sneaker culture to the streets.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "100+", label: "Shoe Styles" },
                { num: "5★", label: "Rating" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="font-display text-2xl font-bold text-primary md:text-3xl">{s.num}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
