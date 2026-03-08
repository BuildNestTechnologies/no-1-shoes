import { motion } from "framer-motion";
import heroSneaker from "@/assets/hero-sneaker.png";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  delay: Math.random() * 4,
}));

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10 mx-auto grid items-center gap-8 px-6 lg:grid-cols-2">
        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary"
          >
            Premium Footwear
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-6xl font-bold leading-none text-foreground md:text-8xl lg:text-9xl"
          >
            Step Into
            <br />
            <span className="text-glow text-primary">Style.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 max-w-md font-body text-lg text-muted-foreground lg:mx-0 mx-auto"
          >
            Premium Footwear Collection at No.01 Shoes Bolte
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a href="#collection" className="magnetic-btn glow-box rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105">
              Shop Collection
            </a>
            <a href="#store" className="magnetic-btn rounded-full border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary">
              Visit Store
            </a>
          </motion.div>
        </div>

        {/* Sneaker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-primary/20 blur-[80px]" />
          <motion.img
            src={heroSneaker}
            alt="Premium sneaker"
            className="sneaker-float relative z-10 w-full max-w-lg drop-shadow-[0_20px_60px_rgba(255,107,0,0.4)]"
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
