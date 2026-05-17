import { useEffect, useRef, useState } from "react";

/**
 * Tiny accent dot that follows the cursor (desktop only).
 * Grows and softens when hovering interactive elements.
 */
export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    const tick = () => {
      // Dot follows almost instantly
      dotX += (mouseX - dotX) * 0.55;
      dotY += (mouseY - dotY) * 0.55;
      dot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;

      // Ring trails behind with smoother lerp
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;

      raf = requestAnimationFrame(tick);
    };
    tick();

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // Hover state — selector for "interactive" elements
    const interactiveSel = "a, button, [data-cursor='hover'], input, textarea, label, .swiper-button-prev, .swiper-button-next";
    const onMouseOver = (e) => {
      if (e.target.closest(interactiveSel)) {
        ring.classList.add("cursor-ring--hover");
        dot.classList.add("cursor-dot--hover");
      } else {
        ring.classList.remove("cursor-ring--hover");
        dot.classList.remove("cursor-dot--hover");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring fixed top-0 left-0 w-9 h-9 border border-accent rounded-full pointer-events-none z-[9999] transition-[opacity,width,height,background,border-color] duration-300 ease-out mix-blend-difference"
        style={{ opacity: 0 }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="cursor-dot fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] transition-[opacity,width,height,background] duration-200 ease-out mix-blend-difference"
        style={{ opacity: 0 }}
      />
    </>
  );
}
