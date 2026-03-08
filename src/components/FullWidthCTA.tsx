import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker4 from "@/assets/sneaker-4.png";

const FullWidthCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/[0.04] to-transparent" />
      
      {/* Decorative sneakers */}
      <motion.img
        src={sneaker2}
        alt=""
        style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
        className="absolute -left-10 top-1/2 w-48 -translate-y-1/2 -rotate-12 opacity-[0.07]"
      />
      <motion.img
        src={sneaker4}
        alt=""
        style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
        className="absolute -right-10 top-1/2 w-44 -translate-y-1/2 rotate-12 opacity-[0.07]"
      />

      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.02]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute h-[200%] w-10 -rotate-12 bg-primary" style={{ left: `${i * 14}%`, top: "-50%" }} />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Ready to <span className="text-gradient">Upgrade</span> Your Sole Game?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground">
            Visit our store or call now to get the freshest kicks at the best prices in Bhiwandi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:7558764648"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-primary px-10 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:glow-box"
            >
              Call Chirag Now
            </motion.a>
            <motion.a
              href="https://wa.me/917558764648"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-border px-10 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullWidthCTA;
