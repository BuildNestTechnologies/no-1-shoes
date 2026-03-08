import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const counterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
    },
  }),
};

const AboutBrand = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 rounded-full border border-dashed border-primary/10"
              />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px]" />
              <img src={logo} alt="No.1 Shoes Bolte" className="relative z-10 w-64" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-3 font-body text-sm uppercase text-primary"
            >
              Our Story
            </motion.p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              About <span className="text-primary">The Brand</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              No.01 Shoes Bolte is a footwear destination located in Bhiwandi, offering stylish and comfortable shoes for everyday wear, sports and street fashion.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              Curated by <span className="font-semibold text-foreground">Chirag</span>, the sneaker savant of Bhiwandi — we're focused on quality, style and affordability, bringing premium sneaker culture to the streets.
            </motion.p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "100+", label: "Shoe Styles" },
                { num: "5★", label: "Rating" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={counterVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="font-display text-3xl font-bold text-primary"
                  >
                    {s.num}
                  </motion.div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
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
