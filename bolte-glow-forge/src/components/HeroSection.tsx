import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowDown, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScrollCanvas from "./HeroScrollCanvas";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const navigate = useNavigate();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── 1. Inject style element that prevents navbar from hiding during hero pin
    //    CSS `!important` overrides Framer Motion's inline transform on <nav>
    const navStyle = document.createElement("style");
    navStyle.textContent = `body.hero-pinned nav { transform: translateY(0px) !important; }`;
    document.head.appendChild(navStyle);

    const pinNav  = () => document.body.classList.add("hero-pinned");
    const unpinNav = () => document.body.classList.remove("hero-pinned");

    const navST = ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "+=300%",
      onEnter: pinNav,
      onEnterBack: pinNav,
      onLeave: unpinNav,
      onLeaveBack: unpinNav,
    });

    // Apply immediately if section is already at top
    pinNav();

    // ── 2. Text parallax: left column drifts up + fades as shoe reveals
    let textTween: gsap.core.Tween | null = null;
    let textST: ScrollTrigger | null = null;
    if (textRef.current) {
      textTween = gsap.to(textRef.current, {
        y: -55,
        opacity: 0.12,
        ease: "power2.in",
        paused: true,
      });
      textST = ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "top+=180%",      // fades through first 60% of scroll
        scrub: 2.5,
        animation: textTween,
      });
    }

    return () => {
      navStyle.remove();
      unpinNav();
      navST.kill();
      textST?.kill();
      textTween?.kill();
    };
  }, []);

  return (
    <section
      id="hero-section"
      className="relative noise-bg"
      style={{ height: "100vh", overflow: "visible", position: "relative" }}
    >
      {/* Full-bleed canvas animation */}
      <HeroScrollCanvas />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute left-[15%] top-[25%] h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-[150px]" />
        <div className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          zIndex: 1,
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content layer */}
      <div className="relative flex h-full items-center pt-20" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

            {/* LEFT — text (scroll-reactive via GSAP, entrance via Framer Motion) */}
            <div ref={textRef} className="relative text-center lg:text-left">

              {/* Badge fades in first */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  New Collection 2026
                </span>
              </motion.div>

              {/* Headline slides up */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3.5rem] font-bold leading-[0.95] text-foreground sm:text-7xl md:text-8xl lg:text-[7rem]"
              >
                Step Into
                <br />
                <span className="text-gradient">Style.</span>
              </motion.h1>

              {/* Description drifts up */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
                className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg"
              >
                Premium footwear collection curated by Chirag at No.01 Shoes Bolte.
                Where street culture meets everyday comfort.
              </motion.p>

              {/* Buttons appear */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
                className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <motion.button
                  onClick={() => navigate("/shop")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:glow-box"
                >
                  Shop Collection
                </motion.button>
                <motion.button
                  onClick={() => {
                    const el = document.getElementById("store-location");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="magnetic-btn rounded-full border border-border px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  Visit Store
                </motion.button>
              </motion.div>

              {/* Trust badges last */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
              >
                {["Trusted in Bhiwandi", "100% Genuine Brands", "Free Local Delivery"].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — empty; shoe is rendered in canvas behind */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Price tag floats on the right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
        style={{ zIndex: 20 }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md"
      >
        <span className="block font-body text-[10px] uppercase tracking-wider text-muted-foreground">
          Starting at
        </span>
        <span className="font-display text-2xl font-bold text-primary">₹799</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ zIndex: 20 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
