import { motion } from "framer-motion";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";

const promos = [
  {
    title: "Summer\nCollection",
    subtitle: "Up to 40% Off",
    cta: "Shop Now",
    img: sneaker1,
    bg: "from-orange-900/30 to-orange-950/50",
    span: "md:col-span-2",
  },
  {
    title: "New\nStreet Drop",
    subtitle: "Just Arrived",
    cta: "Explore",
    img: sneaker2,
    bg: "from-zinc-800/50 to-zinc-900/80",
    span: "",
  },
  {
    title: "Sports\nEssentials",
    subtitle: "Performance Gear",
    cta: "View Range",
    img: sneaker3,
    bg: "from-zinc-800/50 to-zinc-900/80",
    span: "",
  },
  {
    title: "Premium\nSelects",
    subtitle: "Exclusive Pieces",
    cta: "Discover",
    img: sneaker4,
    bg: "from-orange-900/20 to-zinc-900/60",
    span: "md:col-span-2",
  },
];

const PromoGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${promo.bg} ${promo.span} min-h-[220px]`}
            >
              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-7">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">{promo.subtitle}</p>
                  <h3 className="mt-2 whitespace-pre-line font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                    {promo.title}
                  </h3>
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-4 w-fit font-body text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-accent"
                >
                  {promo.cta} →
                </motion.button>
              </div>

              {/* Image */}
              <div className="absolute -bottom-4 -right-4 h-40 w-40 opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-110 md:h-52 md:w-52">
                <img src={promo.img} alt="" className="h-full w-full object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoGrid;
