import { useEffect, useState } from "react";
import { RiArrowUpLine, RiPhoneLine, RiWhatsappLine, RiMailLine, RiCloseLine } from "react-icons/ri";

export default function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handle = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      setProgress(pct);
      setShowTop(scrolled > 400);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  // Ring math
  const size = 56;
  const stroke = 2;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-[55] flex flex-col items-end gap-3">
      {/* Contact actions stack */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          expanded
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <FloatingLink
          href="tel:+381116435570"
          label="Pozovi"
          icon={<RiPhoneLine />}
        />
        <FloatingLink
          href="https://wa.me/381603456963"
          label="WhatsApp"
          icon={<RiWhatsappLine />}
          target="_blank"
        />
        <FloatingLink
          href="mailto:office@homedecor.rs"
          label="Email"
          icon={<RiMailLine />}
        />
      </div>

      {/* Main contact toggle */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? "Zatvori kontakt" : "Kontaktirajte nas"}
        className="w-14 h-14 bg-accent text-primary rounded-full shadow-luxe flex items-center justify-center hover:bg-accent-hover transition-all duration-500 hover:scale-105"
      >
        <span
          className={`transition-transform duration-500 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          {expanded ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <RiPhoneLine className="text-2xl" />
          )}
        </span>
      </button>

      {/* Scroll-to-top with progress ring */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Vrati na vrh"
        className={`relative w-14 h-14 rounded-full bg-primary text-cream-50 flex items-center justify-center transition-all duration-500 hover:bg-primary-hover shadow-luxe ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(244, 240, 236, 0.15)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#cda274"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.15s linear" }}
          />
        </svg>
        <RiArrowUpLine className="text-xl relative z-10" />
      </button>
    </div>
  );
}

function FloatingLink({ href, label, icon, ...rest }) {
  return (
    <a
      href={href}
      {...rest}
      className="group flex items-center gap-3"
    >
      <span className="bg-primary text-cream-50 text-[11px] uppercase tracking-widest px-3 py-1.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-400 whitespace-nowrap">
        {label}
      </span>
      <span className="w-12 h-12 bg-cream-50 border border-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-cream-50 hover:border-primary transition-all duration-500 shadow-luxe-sm">
        <span className="text-xl">{icon}</span>
      </span>
    </a>
  );
}
