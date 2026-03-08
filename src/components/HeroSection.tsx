import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroSneaker from "@/assets/hero-sneaker.png";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sneakerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const sneakerScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden noise-bg">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[15%] top-[25%] h-[600px] w-[600px] rounded-full bg-primary/[0.07] blur-[150px]" />
        <div className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 flex min-h-screen items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <motion.div style={{ y: textY }} className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary">New Collection 2026</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3.5rem] font-bold leading-[0.95] text-foreground sm:text-7xl md:text-8xl lg:text-[7rem]"
              >
                Step Into
                <br />
                <span className="text-gradient">Style.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg"
              >
                Premium footwear collection curated by Chirag at No.01 Shoes Bolte. 
                Where street culture meets everyday comfort.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <motion.a
                  href="#collection"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:glow-box"
                >
                  Shop Collection
                </motion.a>
                <motion.a
                  href="#store"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn rounded-full border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  Visit Store
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
              >
                {["500+ Happy Customers", "100% Genuine", "Free Delivery"].map((badge) => (
                  <span key={badge} className="flex items-center gap-2 font-body text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Sneaker */}
            <motion.div
              style={{ y: sneakerY, scale: sneakerScale }}
              className="relative flex items-center justify-center"
            >
              {/* Glow behind sneaker */}
              <div className="absolute h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
              
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-primary/10 sm:h-[480px] sm:w-[480px]"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={heroSneaker}
                  alt="Premium sneaker from No.01 Shoes Bolte"
                  className="sneaker-float relative z-10 w-full max-w-md drop-shadow-[0_30px_80px_rgba(255,107,0,0.3)] sm:max-w-lg"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  drag
                  dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                  dragElastic={0.08}
                />
              </motion.div>

              {/* Price tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                className="absolute -right-2 top-10 z-20 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md sm:right-4"
              >
                <span className="block font-body text-[10px] uppercase tracking-wider text-muted-foreground">Starting at</span>
                <span className="font-display text-2xl font-bold text-primary">₹799</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
