import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const StoreLocation = () => {
  return (
    <section id="store" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary">Visit Us</p>
          <h2 className="font-display text-5xl font-bold text-foreground md:text-7xl">
            Our <span className="text-primary">Store</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Address</h3>
                <p className="mt-1 text-muted-foreground">
                  Bharat Medical, Thane Road<br />
                  Near Ayyub Mithaiwala<br />
                  Bhiwandi, Dist Thane 421302
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Phone</h3>
                <a href="tel:7558764648" className="mt-1 block text-muted-foreground transition-colors hover:text-primary">
                  +91 7558764648
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Hours</h3>
                <p className="mt-1 text-muted-foreground">Mon - Sun: 10:00 AM – 10:00 PM</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:7558764648" className="magnetic-btn glow-box inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary">
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
