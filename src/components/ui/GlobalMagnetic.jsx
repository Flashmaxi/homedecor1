import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Mounts global "magnetic" effect on any .btn-primary, .btn-accent, [data-magnetic]
 * element across the app. Skipped on touch devices.
 */
export default function GlobalMagnetic() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const selector = ".btn-primary, .btn-accent, [data-magnetic]";
    const cleanups = new WeakMap();

    const attach = (el) => {
      if (cleanups.has(el)) return;
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
        const dx = (e.clientX - cx) * 0.25;
        const dy = (e.clientY - cy) * 0.35;
        const maxX = rect.width * 0.25;
        const maxY = rect.height * 0.35;
        gsap.to(el, {
          x: Math.max(-maxX, Math.min(maxX, dx)),
          y: Math.max(-maxY, Math.min(maxY, dy)),
          duration: 0.5,
          ease: "power3.out",
        });
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      window.addEventListener("mousemove", onMove);
      cleanups.set(el, () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("mousemove", onMove);
        gsap.set(el, { clearProps: "transform" });
      });
    };

    // Attach to current elements
    document.querySelectorAll(selector).forEach(attach);

    // Watch for new elements (route changes mount new DOM)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches?.(selector)) attach(node);
          node.querySelectorAll?.(selector).forEach(attach);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
