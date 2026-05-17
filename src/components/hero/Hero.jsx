import { useEffect, useRef } from "react";
import { RiArrowRightUpLine, RiPlayCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Hero() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Initial entrance
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from("[data-hero-eyebrow]", {
        opacity: 0,
        y: 16,
        duration: 1.0,
        delay: 0.2,
      })
        .from(
          "[data-hero-word]",
          {
            opacity: 0,
            y: 60,
            duration: 1.2,
            stagger: 0.08,
          },
          "-=0.6"
        )
        .from(
          "[data-hero-line]",
          { scaleX: 0, duration: 1.1, transformOrigin: "left" },
          "-=0.8"
        )
        .from(
          "[data-hero-sub]",
          { opacity: 0, y: 20, duration: 0.9 },
          "-=0.7"
        )
        .from(
          "[data-hero-cta]",
          { opacity: 0, y: 20, duration: 0.9 },
          "-=0.6"
        )
        .from(
          "[data-hero-image]",
          { opacity: 0, y: 60, duration: 1.4, ease: "expo.out" },
          "-=1.2"
        )
        .from(
          "[data-hero-meta]",
          { opacity: 0, y: 20, duration: 0.8, stagger: 0.12 },
          "-=0.6"
        );

      // Parallax on the image on mousemove (desktop)
      const handleMove = (e) => {
        if (window.innerWidth < 1024 || !imageRef.current) return;
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 20;
        const y = (e.clientY / innerHeight - 0.5) * 20;
        gsap.to(imageRef.current, {
          x,
          y,
          duration: 1.2,
          ease: "power3.out",
        });
      };
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-cream-50 pt-[120px] lg:pt-[160px] pb-20 lg:pb-32"
    >
      {/* Decorative gradient blur */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-light/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-8" data-hero-eyebrow>
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Home Decor · Beograd</span>
            </div>

            <h1 className="display-1 mb-8 overflow-hidden">
              {t("hero.heroNaslov")
                .split(" ")
                .map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden pb-2 mr-[0.25em]"
                  >
                    <span data-hero-word className="inline-block">
                      {word}
                    </span>
                  </span>
                ))}
            </h1>

            <div
              data-hero-line
              className="h-px w-24 bg-accent mb-8 origin-left"
            />

            <p
              data-hero-sub
              className="lead max-w-xl mb-10"
            >
              Otmeni tekstil, zavese, draperije i hotelska oprema — krojeni
              prema vašem prostoru, izabrani sa pažnjom prema detalju.
            </p>

            <div data-hero-cta className="flex flex-wrap items-center gap-5">
              <Link to="/proizvodi" className="btn-primary group">
                {t("hero.heroBtnText")}
                <RiArrowRightUpLine className="text-accent text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                to="/o-nama"
                className="btn-link"
              >
                <RiPlayCircleLine className="text-base text-accent" />
                Naša priča
              </Link>
            </div>

            <div className="mt-16 lg:mt-20 grid grid-cols-3 gap-8 max-w-xl">
              {[
                { value: 20, suffix: "+", label: "Godina iskustva" },
                { value: 1500, suffix: "+", label: "Realizovanih projekata" },
                { value: 9, suffix: "", label: "Kategorija proizvoda" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  data-hero-meta
                  className="border-l border-accent/30 pl-4"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block font-primary text-3xl lg:text-4xl text-primary mb-1"
                  />
                  <div className="text-xs uppercase tracking-widest text-ink-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageRef}
              data-hero-image
              className="relative aspect-[4/5] frame-luxe overflow-hidden"
              style={{ borderTopRightRadius: "160px" }}
            >
              <img
                src="/assets/hero/bg.jpg"
                alt="Home Decor enterijer"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="hidden md:flex absolute -bottom-8 -left-8 bg-cream-50 shadow-luxe p-6 max-w-[240px] items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="font-primary text-2xl text-accent">★</span>
              </div>
              <div>
                <div className="font-primary text-xl text-primary leading-tight">
                  Atelje za enterijer
                </div>
                <div className="text-xs uppercase tracking-widest text-ink-500 mt-1">
                  od 2004
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 text-ink-500">
        <span className="text-[10px] uppercase tracking-ultra">Scroll</span>
        <span className="h-12 w-px bg-ink-500/30 relative overflow-hidden">
          <span className="absolute top-0 left-0 h-1/2 w-full bg-accent animate-pulse" />
        </span>
      </div>
    </section>
  );
}
