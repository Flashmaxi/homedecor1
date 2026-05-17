import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "../../../public/assets/hdlogo.svg";

/**
 * Curtain-style route transition. Dark navy panels sweep down from the top,
 * the brand mark fades in centered, then everything exits downward.
 *
 * Panels are *always* rendered (never display:none) so GSAP can read their
 * starting transform reliably — toggling display caused the first transition
 * after a refresh to begin from the wrong position.
 */
export default function PageTransition() {
  const location = useLocation();
  const panelsRef = useRef([]);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const lastKey = useRef(location.key);
  const tlRef = useRef(null);

  useEffect(() => {
    if (lastKey.current === location.key) return;
    lastKey.current = location.key;

    const panels = panelsRef.current.filter(Boolean);
    if (!panels.length) return;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: () => {
        // Reset to initial off-screen state — no display toggling.
        gsap.set(panels, { yPercent: -101 });
        gsap.set([logoRef.current, lineRef.current], { opacity: 0 });
        tlRef.current = null;
      },
    });
    tlRef.current = tl;

    tl.set(panels, { yPercent: -101 })
      .set(logoRef.current, { opacity: 0, scale: 0.92, y: 16 })
      .set(lineRef.current, { opacity: 0, scaleX: 0 })

      // 1) Curtain visibly drops down — balanced easing so motion is perceptible
      //    across the whole duration, not crammed into the first 100ms.
      .to(panels, {
        yPercent: 0,
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.05,
      })

      // tiny beat so the eye registers full coverage before the logo
      .to({}, { duration: 0.08 })

      // 2) Logo + line appear OVER the now-covered screen
      .to(logoRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        lineRef.current,
        { opacity: 1, scaleX: 1, duration: 0.5, ease: "power2.out" },
        "-=0.35"
      )

      // 3) Hold so the brand registers
      .to({}, { duration: 0.3 })

      // 4) Logo + line exit upward
      .to([logoRef.current, lineRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      })

      // 5) Curtain slides off downward — uniformly, header clears in one motion
      .to(
        panels,
        {
          yPercent: 101,
          duration: 0.6,
          ease: "power3.inOut",
        },
        "-=0.05"
      );

    return () => tl.kill();
  }, [location.key]);

  const panelCount = 4;
  const PANEL_COLOR = "#1a1d20"; // matches navbar (bg-primary)

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none flex"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 200,
      }}
    >
      {/* Curtain panels — always rendered, just translated off-screen until needed. */}
      {Array.from({ length: panelCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (panelsRef.current[i] = el)}
          className="flex-1 h-full"
          style={{
            backgroundColor: PANEL_COLOR,
            marginLeft: i === 0 ? 0 : "-1px",
            transform: "translate3d(0, -101%, 0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

      {/* Brand mark overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          ref={logoRef}
          src={Logo}
          alt=""
          className="h-20 md:h-24 lg:h-28 w-auto"
          style={{ opacity: 0, willChange: "transform, opacity" }}
        />
        <span
          ref={lineRef}
          className="block h-px w-32 lg:w-44 bg-accent mt-6 origin-center"
          style={{ opacity: 0, transform: "scaleX(0)", willChange: "transform, opacity" }}
        />
      </div>
    </div>
  );
}
