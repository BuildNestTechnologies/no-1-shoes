import { motion } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";

const trending = [
  { name: "Blaze Runner", img: sneaker1, price: "₹2,499", sold: 342, rank: 1 },
  { name: "Phantom Pro", img: sneaker2, price: "₹1,899", sold: 289, rank: 2 },
  { name: "Volt Surge", img: sneaker3, price: "₹2,199", sold: 256, rank: 3 },
  { name: "Shadow Drift", img: sneaker4, price: "₹1,699", sold: 198, rank: 4 },
  { name: "Street King", img: sneaker5, price: "₹1,999", sold: 176, rank: 5 },
];

const TrendingNow = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">Trending Now</h3>
            <p className="text-xs text-muted-foreground">Most popular this week in Bhiwandi</p>
          </div>
        </div>

        <div className="space-y-3">
          {trending.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6, backgroundColor: "hsl(0 0% 9%)" }}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20 cursor-pointer"
            >
              {/* Rank */}
              <span className={`font-display text-3xl font-bold ${i === 0 ? 'text-primary' : 'text-foreground/15'}`}>
                #{item.rank}
              </span>

              {/* Image */}
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-secondary/50 p-2">
                <img src={item.img} alt={item.name} className="h-full w-full object-contain transition-transform group-hover:scale-110" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h4 className="font-display text-sm font-semibold text-foreground">{item.name}</h4>
                <div className="mt-0.5 flex items-center gap-2">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-[10px] text-muted-foreground">{item.sold} sold this week</span>
                </div>
              </div>

              {/* Price */}
              <span className="font-display text-lg font-bold text-primary">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
