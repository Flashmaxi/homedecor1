import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { productServiceSchema } from "../../components/ui/Seo";

export default function PliseSistemi() {
  const { t } = useTranslation();
  const path = "/proizvodi/plise-sistemi";
  const image = "/assets/proizvodi/plise-sistemi.jpg";

  return (
    <ProductPage
      eyebrow={t("common.kolekcija")}
      title={t("plise.naslov")}
      paragraphs={[t("plise.tekst")]}
      image={image}
      seo={{
        title: "Plise sistemi — Zavese za nestandardne prozore",
        description:
          "Plise zavese sa ručnim upravljanjem, idealne za nestandardne prozore (trougao, krug, polukrug). Antistatičke i lako se održavaju.",
        keywords:
          "plise sistemi, plise zavese, zavese za nestandardne prozore, plise za krov, antistatičke zavese",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Plise sistemi",
          description:
            "Plise zavese koje se mogu ugraditi u svaki nestandardni okvir prozora.",
          image,
          path,
        }),
      }}
    />
  );
}
