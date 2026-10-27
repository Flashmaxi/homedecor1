import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { RiMenuLine, RiCloseLine, RiPhoneLine, RiMapPin2Line } from "react-icons/ri";
import Logo from "../../../public/assets/hdlogo.svg";
import "../../i18n";
import { useTranslation } from "react-i18next";
import FlagModule from "react-world-flags";

// react-world-flags is a UMD build with a nested `default` export that Vite 8 doesn't unwrap
const Flag = FlagModule.default ?? FlagModule;

export default function Navbar({ variant = "solid" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { pathname } = location;

  // Apply scroll lock *synchronously* with the click so the body never has a
  // frame where it's still scrollable while the menu is sliding in.
  const setMenuOpen = useCallback((open) => {
    if (open) {
      const sbWidth = window.innerWidth - document.documentElement.clientWidth;
      if (sbWidth > 0) document.body.style.paddingRight = `${sbWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    setIsMenuOpen(open);
  }, []);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close menu on every navigation — use location.key (changes on every
  // navigation, even same-path clicks) instead of pathname.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.key, setMenuOpen]);

  useEffect(() => {
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, []);

  const lngs = {
    srb: { code: "SRB", label: "Srpski" },
    en: { code: "GB", label: "English" },
  };

  const navigation = [
    { name: t("navigacija.navItems.home"), href: "/" },
    { name: t("navigacija.navItems.products"), href: "/proizvodi" },
    { name: t("navigacija.navItems.hotelProgram"), href: "/hotelski-program" },
    { name: t("navigacija.navItems.architects"), href: "/arhitekte" },
    { name: t("navigacija.navItems.aboutUs"), href: "/o-nama" },
    { name: t("navigacija.navItems.contact"), href: "/kontakt" },
  ];

  const isTransparent = variant === "transparent" && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent && !isMenuOpen
            ? "bg-transparent"
            : isMenuOpen
              ? "bg-primary"
              : "bg-primary/95 backdrop-blur-md"
        } ${scrolled ? "shadow-luxe-sm" : ""}`}
      >
        {/* Top utility bar — desktop only */}
        <div
          className={`hidden lg:block border-b transition-colors duration-500 ${
            isTransparent ? "border-cream-50/15" : "border-accent/10"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center py-2.5 text-[12px] tracking-wider uppercase">
            <div className="flex items-center gap-5 text-cream-100/80">
              <a
                href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/@44.7932961,20.4822093,17z/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <RiMapPin2Line className="text-accent text-sm" />
                Južni bulevar 130, Beograd
              </a>
              <span className="text-cream-100/30">·</span>
              <a
                href="tel:+381 11 64 35 570"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <RiPhoneLine className="text-accent text-sm" />
                +381 11 64 35 570
              </a>
            </div>
            <div className="flex items-center gap-2">
              {Object.keys(lngs).map((lng) => {
                const active = i18n.resolvedLanguage === lng;
                return (
                  <button
                    key={lng}
                    type="button"
                    onClick={() => i18n.changeLanguage(lng)}
                    className={`flex items-center gap-1.5 px-2 py-1 transition-opacity ${
                      active ? "opacity-100" : "opacity-50 hover:opacity-100"
                    }`}
                    aria-label={lngs[lng].label}
                  >
                    <Flag
                      code={lngs[lng].code}
                      style={{ width: "18px", height: "12px" }}
                    />
                    <span className="text-cream-100 text-[11px]">
                      {lng.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="container mx-auto flex justify-between items-center py-4 lg:py-5">
          <Link to="/" className="flex items-center relative z-[1]">
            <img src={Logo} alt="Home Decor" className="h-12 lg:h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-[13px] uppercase tracking-widest font-medium transition-colors duration-300 ${
                    active ? "text-accent" : "text-cream-100 hover:text-accent"
                  } group`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-500 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            className="lg:hidden text-cream-100 p-2 -mr-2 relative z-[1]"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="text-3xl" />
            ) : (
              <RiMenuLine className="text-3xl" />
            )}
          </button>
        </div>

        {/* Thin accent line under the navbar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-accent/15 transition-opacity duration-500 ${
            isTransparent && !isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
      </header>

      {/* Mobile menu — rendered as a sibling of <header>, full viewport,
          z-40 so the navbar (z-50) stays on top. Slides up off-screen when
          closed, leaving no peek-through under the navbar. */}
      <div
        className="lg:hidden fixed inset-0 z-40 overflow-y-auto"
        aria-hidden={!isMenuOpen}
        style={{
          backgroundColor: "#0f1114",
          backgroundImage:
            "radial-gradient(ellipse at top right, rgba(205,162,116,0.12), transparent 60%), radial-gradient(ellipse at bottom left, rgba(205,162,116,0.08), transparent 60%)",
          transform: isMenuOpen
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, -100%, 0)",
          transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: isMenuOpen ? "auto" : "none",
          willChange: "transform",
        }}
      >
        <div
          className="container mx-auto flex flex-col min-h-full pb-12"
          style={{ paddingTop: "calc(80px + 2rem)" }}
        >
          <nav className="flex flex-col gap-6">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-cream-100 font-primary text-3xl tracking-tight transition-all duration-700 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 60 + 150}ms` }}
              >
                <span className="text-accent text-sm mr-3 align-middle">
                  0{i + 1}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-12 border-t border-accent/20 space-y-4">
            <a
              href="tel:+381 11 64 35 570"
              className="flex items-center gap-3 text-cream-100"
            >
              <RiPhoneLine className="text-accent text-xl" />
              +381 11 64 35 570
            </a>
            <a
              href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-cream-100"
            >
              <RiMapPin2Line className="text-accent text-xl" />
              Južni bulevar 130, Beograd
            </a>
            <div className="flex gap-3 pt-4">
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => i18n.changeLanguage(lng)}
                  className={`px-3 py-2 border text-[11px] uppercase tracking-widest transition-colors ${
                    i18n.resolvedLanguage === lng
                      ? "border-accent text-accent"
                      : "border-cream-100/20 text-cream-100/60"
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
