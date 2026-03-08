import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const AboutBrand = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px]" />
              <img src={logo} alt="No.1 Shoes Bolte" className="relative z-10 w-64" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              About <span className="text-primary">The Brand</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              No.01 Shoes Bolte is a footwear destination located in Bhiwandi, offering stylish and comfortable shoes for everyday wear, sports and street fashion.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Founded by <span className="font-semibold text-foreground">Chirag</span>, we're focused on quality, style and affordability — bringing premium sneaker culture to our community.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "100+", label: "Shoe Styles" },
                { num: "5★", label: "Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-primary">{s.num}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
