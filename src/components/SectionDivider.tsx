import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "dots" | "line" | "gradient" | "pattern";
}

const SectionDivider = ({ variant = "line" }: SectionDividerProps) => {
  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-full ${i === 1 ? "h-2 w-2 bg-primary" : "h-1.5 w-1.5 bg-border"}`}
          />
        ))}
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className="py-2">
        <div className="mx-auto h-[1px] w-2/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    );
  }

  if (variant === "pattern") {
    return (
      <div className="overflow-hidden py-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-border" />
          <div className="h-1.5 w-1.5 rotate-45 border border-primary/30" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className="mx-auto h-[1px] w-1/3 bg-border" />
    </div>
  );
};

export default SectionDivider;
