import { motion } from "framer-motion";

const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance", "Skechers", "Asics", "Fila", "Vans", "Converse"];

const BrandsStrip = () => {
  return (
    <section className="overflow-hidden py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center font-body text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          Brands We Carry
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="shrink-0 cursor-default font-display text-2xl font-bold text-foreground/10 transition-colors duration-300 hover:text-primary/60 md:text-3xl"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsStrip;
