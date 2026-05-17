import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal children matching selector with a staggered fade-up tied to scroll position.
 * Defaults to elements with `data-reveal` attribute inside the container.
 */
export function useReveal({
  selector = "[data-reveal]",
  y = 40,
  stagger = 0.12,
  duration = 1.1,
  start = "top 85%",
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const targets = ref.current.querySelectorAll(selector);
    if (!targets.length) return;

    // Set initial state IMMEDIATELY (synchronous) to prevent flash before ScrollTrigger fires.
    gsap.set(targets, { y, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        ease: "expo.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    }, ref);

    // Refresh after images/fonts have likely loaded so triggers compute against final layout.
    const refresh = () => ScrollTrigger.refresh();
    const t1 = setTimeout(refresh, 300);
    const t2 = setTimeout(refresh, 1200);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [selector, y, stagger, duration, start, once]);

  return ref;
}

/**
 * Animate a single element on mount (no scroll trigger).
 */
export function useEntrance({ y = 30, delay = 0, duration = 1.1 } = {}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { y, opacity: 0 });
    const ctx = gsap.context(() => {
      gsap.to(ref.current, { y: 0, opacity: 1, duration, delay, ease: "expo.out" });
    }, ref);
    return () => ctx.revert();
  }, [y, delay, duration]);
  return ref;
}
