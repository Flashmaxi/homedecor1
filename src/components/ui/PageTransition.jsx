import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Logo from "../../../public/assets/hdlogo.svg";

/**
 * Curtain-style route transition. Dark navy panels sweep down from the top,
 * the brand mark fades in centered, then everything exits downward.
 *
 * Initial visibility is controlled with opacity (not transform) so GSAP fully
 * owns the transform property — no conflict between inline CSS transforms and
 * GSAP-managed yPercent values.
 */
export default function PageTransition() {
  const location = useLocation();
  const panelsRef = useRef([]);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const lastKey = useRef(location.key);
  const tlRef = useRef(null);

  // Position panels off-screen ONCE on mount so they aren't visible
  // even for a frame before the first transition fires.
  useLayoutEffect(() => {
    const panels = panelsRef.current.filter(Boolean);
    if (panels.length) {
      gsap.set(panels, { yPercent: -101, opacity: 0 });
    }
    if (logoRef.current) gsap.set(logoRef.current, { opacity: 0 });
    if (lineRef.current) gsap.set(lineRef.current, { opacity: 0, scaleX: 0 });
  }, []);

  useEffect(() => {
    if (lastKey.current === location.key) return;
    lastKey.current = location.key;

    const panels = panelsRef.current.filter(Boolean);
    if (!panels.length) return;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut" },
      onComplete: () => {
        // Reset state for next transition
        gsap.set(panels, { yPercent: -101, opacity: 0 });
        gsap.set([logoRef.current, lineRef.current], { opacity: 0 });
        gsap.set(lineRef.current, { scaleX: 0 });
        tlRef.current = null;
      },
    });
    tlRef.current = tl;

    // Initial state at start of each transition: panels off-screen above & opaque,
    // logo + line hidden.
    tl.set(panels, { yPercent: -101, opacity: 1 })
      .set(logoRef.current, { opacity: 0, scale: 0.92, y: 16 })
      .set(lineRef.current, { opacity: 0, scaleX: 0 })

      // 1) Curtain drops down — visible, balanced motion
      .to(panels, {
        yPercent: 0,
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.05,
      })

      // tiny beat so the eye registers full coverage
      .to({}, { duration: 0.08 })

      // 2) Logo + line appear over the cover
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

      // 3) Hold
      .to({}, { duration: 0.3 })

      // 4) Logo + line exit
      .to([logoRef.current, lineRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      })

      // 5) Curtain slides off downward
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
  const PANEL_COLOR = "#1a1d20"; // matches navbar bg-primary

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
      {Array.from({ length: panelCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (panelsRef.current[i] = el)}
          className="flex-1 h-full"
          style={{
            backgroundColor: PANEL_COLOR,
            marginLeft: i === 0 ? 0 : "-1px",
            opacity: 0,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

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
          style={{ opacity: 0, willChange: "transform, opacity" }}
        />
      </div>
    </div>
  );
}
