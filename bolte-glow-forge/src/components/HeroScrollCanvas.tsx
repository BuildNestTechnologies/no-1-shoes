import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 194;
// Intro auto-plays to this frame so the right side is never empty on load
const INTRO_END_FRAME = 71;

interface HeroScrollCanvasProps {
  triggerRef: React.RefObject<HTMLDivElement>;
  pinRef: React.RefObject<HTMLDivElement>;
}

export default function HeroScrollCanvas({ triggerRef, pinRef }: HeroScrollCanvasProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const framesRef  = useRef<HTMLImageElement[]>([]);
  const frameRef   = useRef(0);
  const introRef   = useRef<gsap.core.Tween | null>(null);

  /* ─── size canvas to fill the full viewport ─── */
  const sizeCanvas = () => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    c.width  = window.innerWidth  * dpr;
    c.height = window.innerHeight * dpr;
    c.style.width  = window.innerWidth  + "px";
    c.style.height = window.innerHeight + "px";
  };

  /* ─── draw a single frame with cover-fill ─── */
  const drawFrame = (index: number) => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const img = framesRef.current[index];
    if (!img?.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const cw  = c.width  / dpr;
    const ch  = c.height / dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // crop source to match canvas aspect (cover)
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (ir > cr) { sw = sh * cr;  sx = (img.naturalWidth  - sw) / 2; }
    else         { sh = sw / cr;  sy = (img.naturalHeight - sh) / 2; }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      sizeCanvas();

      let loaded = 0;
      const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES);

      const onAllLoaded = () => {
        framesRef.current = imgs;

        if (canvasRef.current) {
          canvasRef.current.style.opacity = "0";
          gsap.to(canvasRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" });
        }

        drawFrame(0);

        const obj = { f: 0 };
        introRef.current = gsap.to(obj, {
          f: INTRO_END_FRAME,
          duration: 1.8,
          ease: "power2.out",
          onUpdate() {
            const frame = Math.round(obj.f);
            if (frame !== frameRef.current) {
              frameRef.current = frame;
              drawFrame(frame);
            }
          },
        });

        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.5,
          anticipatePin: 1,
          onToggle: (self) => {
            if (self.isActive) {
              introRef.current?.kill();
              introRef.current = null;
            }
          },
          onUpdate(self) {
            const frame = Math.min(
              TOTAL_FRAMES - 1,
              Math.round(self.progress * (TOTAL_FRAMES - 1))
            );
            if (frame !== frameRef.current) {
              frameRef.current = frame;
              drawFrame(frame);
            }
          },
        });
      };

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = `/hero-frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
        imgs[i]  = img;
        img.onload = img.onerror = () => { if (++loaded === TOTAL_FRAMES) onAllLoaded(); };
      }
    });

    const onResize = () => {
      sizeCanvas();
      drawFrame(frameRef.current);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [triggerRef, pinRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0, left: 0,
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
        opacity: 0,           /* starts invisible, fades in on load */
      }}
    />
  );
}
