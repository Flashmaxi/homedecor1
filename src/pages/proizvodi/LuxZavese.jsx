import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { productServiceSchema } from "../../components/ui/Seo";

export default function LuxZavese() {
  const { t } = useTranslation();
  const path = "/proizvodi/lux-trakaste-zavese";
  const image = "/assets/proizvodi/trakaste-zavese.jpg";

  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("lux.naslov")}
      paragraphs={[t("lux.tekst")]}
      image={image}
      seo={{
        title: "Lux trakaste zavese — Vertikalne zavese premium klase",
        description:
          "Lux trakaste vertikalne zavese za velike staklene površine. Premium materijali, regulacija svetlopropustljivosti, ekskluzivni dizajn za poslovni i stambeni prostor.",
        keywords:
          "trakaste zavese, lux zavese, vertikalne zavese, zavese za poslovni prostor, premium zavese, staklene površine",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Lux trakaste zavese",
          description:
            "Premium vertikalne trakaste zavese za velike staklene površine.",
          image,
          path,
        }),
      }}
    />
  );
}
