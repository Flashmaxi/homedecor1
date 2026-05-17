import { RiInstagramLine, RiFacebookCircleLine, RiArrowRightUpLine, RiMapPin2Line, RiPhoneLine, RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../../public/assets/hdlogo.svg";
import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";

export default function Footer() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.08, start: "top 90%" });

  return (
    <footer ref={ref} className="bg-primary text-cream-100 pt-20 lg:pt-28 mt-0 relative">
      <div className="container mx-auto">
        {/* CTA strip */}
        <div className="border-t border-accent/30 pt-16 lg:pt-20 pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <div>
            <span data-reveal className="eyebrow text-accent mb-5 inline-block">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              Recite nam o vašem prostoru
            </span>
            <h2 data-reveal className="font-primary text-4xl lg:text-6xl text-cream-50 leading-[1.05]">
              Spremni da oplemenite{" "}
              <em className="not-italic text-accent">vaš dom?</em>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6">
            <p data-reveal className="text-cream-100/70 max-w-md text-[15px] leading-relaxed">
              Posetite naš salon na Vračaru ili nas pozovite — pomoći ćemo vam
              da pronađete savršen tekstil i opremu za vaš prostor.
            </p>
            <Link
              data-reveal
              to="/kontakt"
              className="group inline-flex items-center gap-4 text-cream-50 hover:text-accent transition-colors"
            >
              <span className="font-primary text-2xl">Zakažite konsultaciju</span>
              <span className="w-12 h-12 rounded-full border border-cream-50/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all duration-500">
                <RiArrowRightUpLine className="text-xl" />
              </span>
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-16 pb-12 border-t border-cream-100/10">
          <div data-reveal className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src={Logo} alt="Home Decor" className="h-14 w-auto" />
            </Link>
            <p className="text-cream-100/70 text-[15px] leading-relaxed mb-8 max-w-sm">
              {t("hero.heroNaslov")} — atelje za enterijer i tekstil sa
              tradicijom dužom od dve decenije.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/home_decor_beograd"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-cream-100/15 flex items-center justify-center text-cream-100 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500"
              >
                <RiInstagramLine className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com/homedecortekstil/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 border border-cream-100/15 flex items-center justify-center text-cream-100 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500"
              >
                <RiFacebookCircleLine className="text-lg" />
              </a>
            </div>
          </div>

          <div data-reveal className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-accent mb-5 font-medium">
              {t("footer.kolona1.title")}
            </h3>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/hotelski-program" className="link-underline">{t("footer.kolona1.one")}</Link></li>
              <li><Link to="/o-nama" className="link-underline">{t("footer.kolona1.two")}</Link></li>
              <li><Link to="/proizvodi" className="link-underline">{t("footer.kolona1.three")}</Link></li>
              <li><Link to="/kontakt" className="link-underline">{t("footer.kolona1.four")}</Link></li>
            </ul>
          </div>

          <div data-reveal className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-accent mb-5 font-medium">
              {t("footer.kolona2.title")}
            </h3>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/proizvodi/zavese-i-draperije" className="link-underline">{t("footer.kolona2.one")}</Link></li>
              <li><Link to="/proizvodi/tapete" className="link-underline">{t("footer.kolona2.two")}</Link></li>
              <li><Link to="/proizvodi/drveni-venecijaneri" className="link-underline">{t("footer.kolona2.three")}</Link></li>
              <li><Link to="/proizvodi/posteljine-i-peskiri" className="link-underline">{t("footer.kolona2.four")}</Link></li>
            </ul>
          </div>

          <div data-reveal className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-accent mb-5 font-medium">
              {t("footer.kolona3.title")}
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a
                  className="flex items-start gap-3 hover:text-accent transition-colors"
                  href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiMapPin2Line className="text-accent text-base mt-1 shrink-0" />
                  Južni bulevar 130,<br />Beograd
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 hover:text-accent transition-colors" href="tel:+381 11 64 35 570">
                  <RiPhoneLine className="text-accent text-base shrink-0" />
                  +381 11 64 35 570
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 hover:text-accent transition-colors" href="tel:+381 60 34 56 963">
                  <RiPhoneLine className="text-accent text-base shrink-0" />
                  +381 60 34 56 963
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 hover:text-accent transition-colors" href="mailto:office@homedecor.rs">
                  <RiMailLine className="text-accent text-base shrink-0" />
                  office@homedecor.rs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div data-reveal className="border-t border-cream-100/10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs uppercase tracking-widest text-cream-100/50">
          <p>© {new Date().getFullYear()} Home Decor · {t("copyright.tekst")}</p>
          <p>Beograd · Vračar</p>
        </div>
      </div>
    </footer>
  );
}
