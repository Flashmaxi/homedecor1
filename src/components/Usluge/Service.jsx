import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiArrowRightUpLine } from "react-icons/ri";
import { uslugeData } from "../../data";
import { useReveal } from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

export default function Service() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.08 });

  return (
    <section ref={ref} className="section bg-cream-50 relative">
      <div className="container mx-auto">
        <div className="mb-16 lg:mb-24">
          <SectionHeading
            eyebrow={t("common.nasaPonuda")}
            title={t("usluge.uslugeNaslov")}
            subtitle={t("usluge.uslugeOpis")}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {uslugeData.map((item, index) => (
            <Link
              key={index}
              to={item.btnlink}
              data-reveal
              className="group block"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-cream-100">
                {/* Number */}
                <div className="absolute top-5 left-5 z-20 font-primary text-cream-50 text-sm tracking-widest opacity-80">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image */}
                <img
                  src={item.image}
                  alt={t(item.title)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-700" />

                {/* Reveal label on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="flex items-center gap-3 text-cream-50">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs uppercase tracking-widest">
                      {t("common.pogledajKolekciju")}
                    </span>
                  </div>
                </div>

                {/* Subtle inner border */}
                <div className="absolute inset-3 border border-cream-50/0 group-hover:border-cream-50/30 transition-colors duration-700 pointer-events-none" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-accent mb-2">
                    {t(item.subtitleKey)}
                  </div>
                  <h3 className="font-primary text-2xl text-primary leading-tight transition-colors duration-300 group-hover:text-accent">
                    {t(item.title)}
                  </h3>
                </div>
                <span className="shrink-0 w-11 h-11 border border-primary/15 rounded-full flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-accent group-hover:border-primary">
                  <RiArrowRightUpLine className="text-lg transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
