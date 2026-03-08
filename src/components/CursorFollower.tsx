import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] h-5 w-5 rounded-full border-2 border-primary mix-blend-difference"
      animate={{ x: pos.x - 10, y: pos.y - 10 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CursorFollower;
