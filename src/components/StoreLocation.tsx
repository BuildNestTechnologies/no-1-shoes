import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const StoreLocation = () => {
  return (
    <section id="store" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-[11px] uppercase tracking-[0.3em] text-primary">Visit Us</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Our <span className="text-gradient">Store</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d73.05!3d19.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzAwLjAiTiA3M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              title="Store Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-7"
          >
            {[
              { icon: MapPin, title: "Address", content: "Bharat Medical, Thane Road\nNear Ayyub Mithaiwala\nBhiwandi, Dist Thane 421302" },
              { icon: Phone, title: "Phone", content: "+91 7558764648", link: "tel:7558764648" },
              { icon: Clock, title: "Hours", content: "Mon - Sun: 10:00 AM – 10:00 PM" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary">
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="tel:7558764648" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:glow-box-subtle hover:scale-105">
                <Phone size={14} /> Call Now
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary">
                <Navigation size={14} /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
