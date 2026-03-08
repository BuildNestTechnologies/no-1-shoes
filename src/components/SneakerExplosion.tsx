import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const sneakers = [
  { img: sneaker1, label: "STREET" },
  { img: sneaker2, label: "CASUAL" },
  { img: sneaker3, label: "SPORT" },
  { img: sneaker4, label: "HIGH-TOP" },
  { img: sneaker5, label: "DAILY" },
];

const SneakerExplosion = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);

  return (
    <section ref={ref} className="relative min-h-[140vh] overflow-hidden">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        {/* Central text */}
        <motion.div style={{ opacity: textOpacity, scale: textScale }} className="absolute z-20 text-center">
          <h2 className="font-display text-5xl font-bold text-foreground md:text-7xl lg:text-8xl">
            THE
            <br />
            <span className="text-gradient">DROP</span>
          </h2>
          <p className="mt-3 font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            New Collection Available
          </p>
        </motion.div>

        {/* Orbiting sneakers */}
        {sneakers.map((s, i) => (
          <OrbitingSneaker key={i} {...s} index={i} total={sneakers.length} scrollYProgress={scrollYProgress} />
        ))}

        {/* Glow */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.4, 0]) }}
          className="absolute h-80 w-80 rounded-full bg-primary/15 blur-[120px]"
        />
      </div>
    </section>
  );
};

function OrbitingSneaker({ img, label, index, total, scrollYProgress }: {
  img: string; label: string; index: number; total: number; scrollYProgress: any;
}) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 250;
  const spread = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 1, 0.3]);
  const x = useTransform(spread, (v: number) => Math.cos(angle) * radius * v);
  const y = useTransform(spread, (v: number) => Math.sin(angle) * radius * v);
  const rotate = useTransform(spread, (v: number) => (index % 2 === 0 ? 15 : -15) * v);
  const scale = useTransform(spread, [0, 0.5, 1], [0.2, 0.7, 1]);
  const opacity = useTransform(spread, [0, 0.15, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div style={{ x, y, rotate, scale, opacity }} className="absolute z-10">
      <img
        src={img}
        alt={label}
        className="h-32 w-32 object-contain drop-shadow-[0_10px_30px_rgba(255,107,0,0.2)] md:h-44 md:w-44"
      />
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[9px] font-bold tracking-[0.3em] text-primary/60">
        {label}
      </span>
    </motion.div>
  );
}

export default SneakerExplosion;
