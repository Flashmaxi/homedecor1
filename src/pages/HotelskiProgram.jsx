import { RiArrowRightUpLine, RiDownloadLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/ui/PageLayout";
import { useReveal } from "../hooks/useReveal";

export default function HotelskiProgram() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.1 });

  return (
    <PageLayout
      seo={{
        title: "Hotelski program — Tekstilna oprema za hotele i restorane",
        description:
          "Kompletna tekstilna ponuda za opremanje hotela, restorana i poslovnih prostora. Posteljine, peškiri, stolnjaci, zavese, tepisi i SPA program po meri.",
        keywords:
          "hotelski program, oprema za hotele, posteljine za hotele, peškiri za hotele, stolnjaci, hotel decor, B2B tekstil",
        image: "/assets/proizvodi/hotel.avif",
        path: "/hotelski-program",
        type: "website",
      }}
    >
      <section ref={ref} className="section bg-cream-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center">
            <div className="xl:col-span-7 order-2 xl:order-none">
              <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                B2B program
              </span>
              <h1 data-reveal className="display-2 mb-8">
                {t("hotel.hotelTitle")}
              </h1>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <p data-reveal className="lead mb-10 max-w-2xl">
                {t("hotel.hotelText")}
              </p>

              <a
                data-reveal
                href="/Hotel Decor katalog.pdf"
                className="btn-primary group"
                download
              >
                <RiDownloadLine className="text-accent text-lg" />
                {t("hotel.hotelCta")}
                <RiArrowRightUpLine className="text-accent text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="xl:col-span-5 order-1 xl:order-none">
              <div
                data-reveal
                className="relative aspect-[4/5] frame-luxe"
                style={{ borderTopRightRadius: "140px", borderBottomLeftRadius: "100px" }}
              >
                <img
                  src="/assets/proizvodi/hotel.avif"
                  alt="Hotelski program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
