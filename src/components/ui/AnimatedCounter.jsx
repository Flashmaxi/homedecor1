import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Counts from 0 to `value` when scrolled into view.
 * `suffix` is appended after the number ("+", "k", etc.).
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  className = "",
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { n: 0 };
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          n: value,
          duration,
          ease: "power2.out",
          onUpdate: () => setDisplay(Math.round(obj.n)),
        });
      },
    });
    return () => trigger.kill();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
