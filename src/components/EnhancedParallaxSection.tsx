import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, MeshDistortMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker4 from "@/assets/sneaker-4.png";

// 3D Scene for the scroll reveal
function ScrollReveal3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#ff6b00" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#ff8c00" />

      <ExplodingRings />
      <OrbField count={25} />
    </Canvas>
  );
}

function ExplodingRings() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.1;
    group.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      mesh.rotation.x = t * (0.1 + i * 0.05);
      mesh.rotation.z = t * (0.05 + i * 0.03);
      const scale = 1 + Math.sin(t * 0.5 + i) * 0.1;
      mesh.scale.setScalar(scale);
    });
  });

  return (
    <group ref={group}>
      {[1.2, 1.8, 2.4, 3.0].map((r, i) => (
        <Torus key={i} args={[r, 0.02, 16, 64]}>
          <meshStandardMaterial
            color={i % 2 === 0 ? "#ff6b00" : "#ff8c00"}
            emissive={i % 2 === 0 ? "#ff6b00" : "#ff8c00"}
            emissiveIntensity={0.8}
            transparent
            opacity={0.5 - i * 0.08}
          />
        </Torus>
      ))}
    </group>
  );
}

function OrbField({ count = 25 }: { count?: number }) {
  const orbs = useMemo(() =>
    Array.from({ length: count }, () => ({
      pos: [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3] as [number, number, number],
      scale: Math.random() * 0.08 + 0.03,
      speed: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
    })), [count]
  );

  return (
    <>
      {orbs.map((orb, i) => (
        <AnimatedOrb key={i} {...orb} />
      ))}
    </>
  );
}

function AnimatedOrb({ pos, scale, speed, phase }: { pos: [number, number, number]; scale: number; speed: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y = pos[1] + Math.sin(t * speed + phase) * 0.8;
    ref.current.position.x = pos[0] + Math.cos(t * speed * 0.6 + phase) * 0.4;
  });
  return (
    <Sphere ref={ref} args={[scale, 8, 8]} position={pos}>
      <meshStandardMaterial color="#ff6b00" emissive="#ff8c00" emissiveIntensity={3} />
    </Sphere>
  );
}

// Scroll-triggered text reveal with word-by-word animation
const words1 = "Designed for comfort.".split(" ");
const words2 = "Built for style.".split(" ");
const words3 = "Engineered for the streets.".split(" ");

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  }),
};

const EnhancedParallaxSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -180]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [10, -20]);
  const scale3d = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.8, 1, 1.05, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[120vh] overflow-hidden py-40">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* 3D Scene behind text */}
      <motion.div style={{ scale: scale3d, opacity }} className="absolute inset-0">
        <ScrollReveal3D />
      </motion.div>

      {/* Parallax sneaker images floating around */}
      <motion.img src={sneaker1} alt="" style={{ y: y1, rotate: rotate1 }} className="absolute -left-10 top-[10%] w-64 opacity-15 blur-[2px]" />
      <motion.img src={sneaker3} alt="" style={{ y: y2, rotate: rotate2 }} className="absolute -right-10 top-[20%] w-56 opacity-15 blur-[2px]" />
      <motion.img src={sneaker2} alt="" style={{ y: y3 }} className="absolute left-[10%] bottom-[10%] w-48 opacity-10 blur-[3px]" />
      <motion.img src={sneaker4} alt="" style={{ y: y4 }} className="absolute right-[15%] bottom-[5%] w-52 opacity-10 blur-[3px]" />

      {/* Text content */}
      <div className="container relative z-10 mx-auto flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-8 font-body text-sm uppercase text-primary"
        >
          Our Philosophy
        </motion.p>

        {/* Line 1 */}
        <div className="mb-4 flex flex-wrap justify-center gap-x-4">
          {words1.map((word, i) => (
            <motion.span
              key={`w1-${i}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={wordVariants}
              className={`font-display text-5xl font-bold md:text-7xl lg:text-8xl ${word.toLowerCase().includes("comfort") ? "text-primary text-glow" : "text-foreground"}`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Line 2 */}
        <div className="mb-4 flex flex-wrap justify-center gap-x-4">
          {words2.map((word, i) => (
            <motion.span
              key={`w2-${i}`}
              custom={i + words1.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={wordVariants}
              className={`font-display text-5xl font-bold md:text-7xl lg:text-8xl ${word.toLowerCase().includes("style") ? "text-primary text-glow" : "text-foreground"}`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Line 3 */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-4">
          {words3.map((word, i) => (
            <motion.span
              key={`w3-${i}`}
              custom={i + words1.length + words2.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={wordVariants}
              className={`font-display text-4xl font-bold md:text-6xl lg:text-7xl ${word.toLowerCase().includes("streets") ? "text-primary text-glow" : "text-foreground"}`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mx-auto max-w-xl text-lg text-muted-foreground"
        >
          Every pair tells a story. From the streets of Bhiwandi to your wardrobe — premium quality at honest prices.
        </motion.p>
      </div>
    </section>
  );
};

export default EnhancedParallaxSection;
