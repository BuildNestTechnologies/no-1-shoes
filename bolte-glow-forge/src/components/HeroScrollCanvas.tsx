import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 194;

export default function HeroScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const stRef = useRef<ScrollTrigger | null>(null);

  const sizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = window.innerWidth  + "px";
    canvas.style.height = window.innerHeight + "px";
  };

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = framesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (ir > cr) { sw = sh * cr;  sx = (img.naturalWidth  - sw) / 2; }
    else         { sh = sw / cr;  sy = (img.naturalHeight - sh) / 2; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  useEffect(() => {
    sizeCanvas();
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const setup = () => {
      framesRef.current = imgs;
      drawFrame(0);
      stRef.current = ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: 1.5,
        anticipatePin: 1,
        onUpdate(self) {
          const frame = Math.min(TOTAL_FRAMES - 1, Math.round(self.progress * (TOTAL_FRAMES - 1)));
          if (frame !== currentFrameRef.current) {
            currentFrameRef.current = frame;
            drawFrame(frame);
          }
        },
      });
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/hero-frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
      imgs[i] = img;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setup();
      };
    }

    const onResize = () => { sizeCanvas(); drawFrame(currentFrameRef.current); ScrollTrigger.refresh(); };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      stRef.current?.kill();
      stRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0, display: "block", pointerEvents: "none" }}
    />
  );
}
