import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const sneakers = [
  { img: sneaker1, label: "STREET", rotate: -15 },
  { img: sneaker2, label: "CASUAL", rotate: 10 },
  { img: sneaker3, label: "SPORT", rotate: -8 },
  { img: sneaker4, label: "HIGH-TOP", rotate: 12 },
  { img: sneaker5, label: "DAILY", rotate: -5 },
];

const SneakerExplosion = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Stagger the spread of sneakers as you scroll
  const spread = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0, 1, 1, 0.5]);
  const globalRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.75], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0.25, 0.45], [0.5, 1]);

  return (
    <section ref={ref} className="relative min-h-[150vh] overflow-hidden">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        {/* Central text */}
        <motion.div style={{ opacity: textOpacity, scale: textScale }} className="absolute z-20 text-center">
          <h2 className="font-display text-6xl font-bold text-foreground md:text-8xl lg:text-9xl">
            THE
            <br />
            <span className="text-glow text-primary">DROP</span>
          </h2>
          <p className="mt-4 font-body text-sm uppercase tracking-[0.4em] text-muted-foreground">
            New Collection Available
          </p>
        </motion.div>

        {/* Exploding sneakers */}
        {sneakers.map((s, i) => {
          const angle = (i / sneakers.length) * Math.PI * 2 - Math.PI / 2;
          const maxRadius = 300;

          return (
            <SneakerOrbit
              key={i}
              img={s.img}
              label={s.label}
              angle={angle}
              maxRadius={maxRadius}
              spread={spread}
              baseRotate={s.rotate}
              index={i}
            />
          );
        })}

        {/* Glow effect */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.6, 0]) }}
          className="absolute h-96 w-96 rounded-full bg-primary/20 blur-[100px]"
        />
      </div>
    </section>
  );
};

function SneakerOrbit({
  img, label, angle, maxRadius, spread, baseRotate, index
}: {
  img: string; label: string; angle: number; maxRadius: number;
  spread: any; baseRotate: number; index: number;
}) {
  const x = useTransform(spread, (v: number) => Math.cos(angle) * maxRadius * v);
  const y = useTransform(spread, (v: number) => Math.sin(angle) * maxRadius * v);
  const rotate = useTransform(spread, (v: number) => baseRotate * v);
  const scale = useTransform(spread, [0, 0.5, 1], [0.3, 0.8, 1]);
  const opacity = useTransform(spread, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="absolute z-10"
    >
      <div className="group relative">
        <img
          src={img}
          alt={label}
          className="h-40 w-40 object-contain drop-shadow-[0_10px_40px_rgba(255,107,0,0.3)] transition-transform duration-500 group-hover:scale-110 md:h-52 md:w-52"
        />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-xs font-bold tracking-[0.3em] text-primary"
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );
}

export default SneakerExplosion;
