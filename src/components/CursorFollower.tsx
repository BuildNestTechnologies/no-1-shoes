import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let id = 0;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Add trail particle
      id++;
      setTrail((prev) => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id }]);

      // Check if hovering on interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], .magnetic-btn, .group");
      setHovering(!!isInteractive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trail.map((t, i) => (
        <motion.div
          key={t.id}
          className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full bg-primary"
          initial={{ x: t.x - 2, y: t.y - 2, opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: 4, height: 4 }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border-2 border-primary mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 10),
          y: pos.y - (hovering ? 20 : 10),
          width: hovering ? 40 : 20,
          height: hovering ? 40 : 20,
          borderColor: hovering ? "hsl(27 100% 50%)" : "hsl(27 100% 50%)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-primary"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        style={{ width: 6, height: 6 }}
      />
    </>
  );
};

export default CursorFollower;
