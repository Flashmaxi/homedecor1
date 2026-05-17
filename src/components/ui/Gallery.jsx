import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  RiCloseLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { gsap } from "gsap";

/**
 * Luxury grid gallery with cinematic lightbox.
 * `photos` = [{ src, width?, height? }, ...]
 */
export default function Gallery({ photos = [], cols = "auto" }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % photos.length),
    [photos.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  // Scroll lock
  useEffect(() => {
    if (open) {
      const sbWidth = window.innerWidth - document.documentElement.clientWidth;
      if (sbWidth > 0) document.body.style.paddingRight = `${sbWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // Preload neighbour images for instant transitions
  useEffect(() => {
    if (!open || !photos.length) return;
    const neighbours = [
      photos[(index + 1) % photos.length]?.src,
      photos[(index - 1 + photos.length) % photos.length]?.src,
    ];
    neighbours.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [open, index, photos]);

  if (!photos.length) return null;

  // Choose grid columns
  const gridCols =
    cols === "auto"
      ? photos.length > 20
        ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : cols;

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className={`grid ${gridCols} gap-3 md:gap-4`}>
        {photos.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="group relative aspect-[4/5] overflow-hidden bg-cream-100 cursor-zoom-in"
            aria-label={`Otvori sliku ${i + 1}`}
          >
            <img
              src={p.src}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors duration-700" />
            <div className="absolute inset-3 border border-cream-50/0 group-hover:border-cream-50/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="flex items-center gap-2 text-cream-50">
                <span className="h-px w-6 bg-accent" />
                <span className="text-[11px] uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(photos.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <Lightbox
            photos={photos}
            index={index}
            setIndex={setIndex}
            onClose={close}
            onNext={next}
            onPrev={prev}
          />,
          document.body
        )}
    </>
  );
}

/* ─────────────── Lightbox ─────────────── */

function Lightbox({ photos, index, setIndex, onClose, onNext, onPrev }) {
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Open animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.96, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          delay: 0.05,
        }
      );
      gsap.fromTo(
        ".lightbox-chrome",
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.04,
          delay: 0.15,
          ease: "expo.out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // Image change: crossfade
  useEffect(() => {
    if (!imageRef.current) return;
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" }
    );
  }, [index]);

  // Close with fade-out
  const handleClose = useCallback(() => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(containerRef.current, {
      opacity: 0,
      scale: 0.97,
      y: 6,
      duration: 0.3,
      ease: "power2.in",
    });
    tl.to(
      ".lightbox-chrome",
      { opacity: 0, duration: 0.2, ease: "power2.in" },
      "<"
    );
    tl.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, "<");
  }, [onClose]);

  // Touch swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    if (absX > 50 && absX > absY) {
      if (dx < 0) onNext();
      else onPrev();
    } else if (dy < -80 && absY > absX) {
      handleClose();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={handleClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(15, 17, 20, 0.94)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {/* Top chrome: brand mark + counter + close */}
      <div
        className="lightbox-chrome absolute top-0 left-0 right-0 flex items-center justify-between px-5 lg:px-10 py-5 lg:py-7 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-cream-100/70 pointer-events-auto">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-widest">
            Galerija
          </span>
        </div>

        <div className="pointer-events-auto font-primary text-cream-50 flex items-baseline gap-2">
          <span className="text-3xl lg:text-5xl leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-accent text-lg lg:text-2xl">/</span>
          <span className="text-cream-100/50 text-sm lg:text-base tracking-widest">
            {String(photos.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Zatvori"
          className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 border border-cream-50/30 text-cream-50 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500"
        >
          <RiCloseLine className="text-2xl" />
        </button>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Prethodna"
        className="lightbox-chrome absolute left-3 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 border border-cream-50/30 text-cream-50 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500 z-10 group"
      >
        <RiArrowLeftLine className="text-2xl transition-transform duration-500 group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Sledeća"
        className="lightbox-chrome absolute right-3 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 border border-cream-50/30 text-cream-50 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500 z-10 group"
      >
        <RiArrowRightLine className="text-2xl transition-transform duration-500 group-hover:translate-x-0.5" />
      </button>

      {/* Image */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center cursor-pointer select-none px-6"
        style={{ maxWidth: "92vw", maxHeight: "78vh" }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <img
          ref={imageRef}
          key={photos[index].src}
          src={photos[index].src}
          alt=""
          draggable={false}
          className="block max-w-[92vw] max-h-[78vh] object-contain shadow-luxe"
          style={{ pointerEvents: "auto" }}
        />
      </div>

      {/* Thumbnail rail */}
      <div
        className="lightbox-chrome absolute bottom-0 left-0 right-0 px-5 lg:px-10 pb-5 lg:pb-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <div className="flex gap-2 overflow-x-auto pb-1 max-w-full scrollbar-thin">
            {photos.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Slika ${i + 1}`}
                className={`relative shrink-0 w-12 h-16 lg:w-16 lg:h-20 overflow-hidden transition-all duration-500 ${
                  i === index
                    ? "ring-2 ring-accent opacity-100"
                    : "opacity-40 hover:opacity-80"
                }`}
              >
                <img
                  src={p.src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
