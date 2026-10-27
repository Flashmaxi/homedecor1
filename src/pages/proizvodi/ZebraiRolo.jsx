import { useTranslation } from "react-i18next";
import PageLayout from "../../components/ui/PageLayout";
import Gallery from "../../components/ui/Gallery";
import { Nazad } from "../../components/nazad/Nazad";
import { useReveal } from "../../hooks/useReveal";
import { rolo } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function ZebraiRolo() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.1 });
  const path = "/proizvodi/zebra-i-rolo";
  const image = "/assets/proizvodi/zebra.avif";

  return (
    <PageLayout
      seo={{
        title: "Zebra i Rolo zavese — Antistatičke i lake za održavanje",
        description:
          "Zebra zavese (dvostruki materijal, regulacija svetla) i rolo zavese — funkcionalna zaštita od sunca po meri. Ručno ili motorno upravljanje, povezivo sa smart home sistemom.",
        keywords:
          "zebra zavese, rolo zavese, day-night zavese, zaštita od sunca, motor za zavese, smart home zavese",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Zebra i Rolo zavese",
          description:
            "Zebra zavese (dvoslojne) i rolo zavese sa ručnim ili motornim upravljanjem.",
          image,
          path,
        }),
      }}
    >
      <section ref={ref} className="section bg-cream-50 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          {/* Section 1 — Zebra */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center mb-24 lg:mb-32">
            <div className="xl:col-span-7 order-2 xl:order-none">
              <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                {t("zebraRolo.zebraEyebrow")}
              </span>
              <h1 data-reveal className="display-2 mb-8">
                {t("zebraRolo.zebraTitle")}
              </h1>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <p data-reveal className="lead">{t("zebraRolo.zebraTekst")}</p>
            </div>
            <div className="xl:col-span-5 order-1 xl:order-none">
              <div
                data-reveal
                className="relative aspect-[4/5] frame-luxe"
                style={{ borderTopRightRadius: "140px", borderBottomLeftRadius: "100px" }}
              >
                <img src="/assets/proizvodi/zebra.avif" alt="Zebra zavese" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Section 2 — Rolo */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center mb-24 lg:mb-32">
            <div className="xl:col-span-5">
              <div
                data-reveal
                className="relative aspect-[4/5] frame-luxe"
                style={{ borderTopLeftRadius: "140px", borderBottomRightRadius: "100px" }}
              >
                <img src="/assets/zebrarolo/r1.webp" alt="Rolo zavese" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="xl:col-span-7">
              <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                {t("zebraRolo.roloEyebrow")}
              </span>
              <h2 data-reveal className="display-2 mb-8">
                {t("zebraRolo.roloTitle")}
              </h2>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <p data-reveal className="lead">{t("zebraRolo.roloTekst")}</p>
            </div>
          </div>

          <div data-reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">{t("common.galerija")}</span>
            </div>
            <Gallery photos={rolo} />
          </div>
        </div>
        <Nazad />
      </section>
    </PageLayout>
  );
}
