import { useTranslation } from "react-i18next";
import PageLayout from "../components/ui/PageLayout";
import Service from "../components/Usluge/Service";
import { Nazad } from "../components/nazad/Nazad";
import { useReveal } from "../hooks/useReveal";

export default function Proizvodi() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <PageLayout
      seo={{
        title: "Proizvodi — Zavese, draperije, tapete, venecijaneri",
        description:
          "Kompletan katalog: zavese i draperije, zebra i rolo, tapete, drveni venecijaneri, plise sistemi, mebl štof, lux trakaste zavese, garnišne, posteljine i peškiri.",
        keywords:
          "proizvodi Home Decor, katalog zavesa, tapete katalog, venecijaneri, plise, mebl štof, garnišne, posteljine",
        image: "/assets/proizvodi/zavese.avif",
        path: "/proizvodi",
        type: "website",
      }}
    >
      <section ref={ref} className="pt-16 lg:pt-24 pb-0 bg-cream-50 relative">
        <div className="container mx-auto text-center max-w-3xl">
          <span data-reveal className="eyebrow mb-5 inline-flex items-center">
            <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
            {t("proizvodi.eyebrow")}
            <span className="inline-block w-6 h-px bg-accent align-middle ml-3" />
          </span>
          <h1 data-reveal className="display-1 mb-6">{t("proizvodi.naslov")}</h1>
          <p data-reveal className="lead">
            {t("proizvodi.opis")}
          </p>
        </div>
      </section>
      <Service />
      <Nazad />
    </PageLayout>
  );
}
