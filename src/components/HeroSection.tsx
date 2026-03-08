import { motion } from "framer-motion";
import heroSneaker from "@/assets/hero-sneaker.png";
import Hero3DScene from "./Hero3DScene";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  delay: Math.random() * 4,
}));

// Stagger letter animation
const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.5 + i * 0.05, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const headline1 = "Step Into".split("");
const headline2 = "Style.".split("");

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* 3D Background Scene */}
      <Hero3DScene />

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
            initial={{ opacity: 0, y: 30, letterSpacing: "0em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4 font-body text-sm font-medium uppercase text-primary"
          >
            Premium Footwear
          </motion.p>

          {/* Animated headline - letter by letter */}
          <h1 className="font-display text-6xl font-bold leading-none text-foreground md:text-8xl lg:text-9xl">
            <span className="inline-block">
              {headline1.map((char, i) => (
                <motion.span
                  key={`h1-${i}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="inline-block text-glow text-primary">
              {headline2.map((char, i) => (
                <motion.span
                  key={`h2-${i}`}
                  custom={i + headline1.length}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 max-w-md font-body text-lg text-muted-foreground lg:mx-0 mx-auto"
          >
            Premium Footwear Collection at No.01 Shoes Bolte
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <motion.a
              href="#collection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn glow-box rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              Shop Collection
            </motion.a>
            <motion.a
              href="#store"
              whileHover={{ scale: 1.05, borderColor: "hsl(27 100% 50%)" }}
              whileTap={{ scale: 0.97 }}
              className="magnetic-btn rounded-full border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:text-primary"
            >
              Visit Store
            </motion.a>
          </motion.div>
        </div>

        {/* Sneaker with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-primary/20 blur-[80px]" />
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={heroSneaker}
              alt="Premium sneaker"
              className="sneaker-float relative z-10 w-full max-w-lg drop-shadow-[0_20px_60px_rgba(255,107,0,0.4)]"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.1}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              className="mx-auto h-2 w-1 rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
