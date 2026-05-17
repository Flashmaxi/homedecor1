import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Subtle magnetic attraction toward the cursor when hovering over the element.
 * Disabled on touch devices.
 */
export function useMagnetic({ strength = 0.35, radius = 1.2 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let hovering = false;

    const onEnter = () => {
      hovering = true;
    };

    const onLeave = () => {
      hovering = false;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.45)",
      });
    };

    const onMove = (e) => {
      if (!hovering) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      const max = Math.max(rect.width, rect.height) * radius * 0.4;
      const limitedX = Math.max(-max, Math.min(max, dx));
      const limitedY = Math.max(-max, Math.min(max, dy));
      gsap.to(el, {
        x: limitedX,
        y: limitedY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousemove", onMove);
    };
  }, [strength, radius]);

  return ref;
}
