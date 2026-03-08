import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.png";
import sneaker2 from "@/assets/sneaker-2.png";
import sneaker3 from "@/assets/sneaker-3.png";
import sneaker4 from "@/assets/sneaker-4.png";
import sneaker5 from "@/assets/sneaker-5.png";
import heroSneaker from "@/assets/hero-sneaker.png";

const images = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5, heroSneaker];

const InstagramGallery = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">Follow Us</p>
          <h2 className="font-display text-5xl font-bold text-foreground md:text-7xl">
            @No_1_shoes_<span className="text-primary">bolte</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-2xl gradient-card border border-border"
            >
              <img
                src={img}
                alt="Sneaker"
                className="h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/20">
                <Instagram className="text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100" size={32} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
