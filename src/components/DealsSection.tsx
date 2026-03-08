import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Clock, ArrowRight } from "lucide-react";
import sneaker5 from "@/assets/sneaker-5.png";

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3">
      {[
        { val: time.hours, label: "HRS" },
        { val: time.minutes, label: "MIN" },
        { val: time.seconds, label: "SEC" },
      ].map((t) => (
        <div key={t.label} className="flex flex-col items-center">
          <motion.div
            key={t.val}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card font-display text-xl font-bold text-primary sm:h-16 sm:w-16 sm:text-2xl"
          >
            {String(t.val).padStart(2, "0")}
          </motion.div>
          <span className="mt-1.5 text-[9px] uppercase tracking-wider text-muted-foreground">{t.label}</span>
        </div>
      ))}
    </div>
  );
}

const DealsSection = () => {
  const ref = useRef(null);

  return (
    <section id="deals" ref={ref} className="section-padding relative overflow-hidden">
      {/* Diagonal stripe accent */}
      <div className="absolute inset-0 opacity-[0.015]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[200%] w-16 -rotate-12 bg-primary"
            style={{ left: `${i * 10}%`, top: "-50%" }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="font-display text-[10px] font-bold uppercase tracking-wider text-primary">Flash Sale</span>
            </div>

            <h2 className="mb-5 font-display text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
              Up to <span className="text-gradient">60% OFF</span>
            </h2>

            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Don't miss out on our biggest sale of the season. Premium sneakers at unbeatable prices — only at No.01 Shoes Bolte.
            </p>

            <div className="mb-6 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-body text-[11px] uppercase tracking-wider text-muted-foreground">Ends in</span>
            </div>
            <CountdownTimer />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:glow-box"
            >
              Shop the Sale <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right - Deal card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-destructive px-5 py-2">
                <span className="font-display text-sm font-bold text-destructive-foreground">-60%</span>
              </div>

              <div className="p-8 sm:p-10">
                <motion.img
                  src={sneaker5}
                  alt="Deal sneaker"
                  className="mx-auto h-52 w-52 object-contain sm:h-64 sm:w-64"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <div className="border-t border-border p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground">Daily Flex Max</h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-primary">₹799</span>
                  <span className="text-lg text-muted-foreground line-through">₹1,999</span>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>87 sold</span>
                    <span>13 remaining</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full rounded-xl bg-primary py-3.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground hover:glow-box-subtle"
                >
                  Grab Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
