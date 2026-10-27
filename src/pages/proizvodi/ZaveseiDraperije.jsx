import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { photos } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function ZaveseiDraperije() {
  const { t } = useTranslation();
  const path = "/proizvodi/zavese-i-draperije";
  const image = "/assets/proizvodi/zavese.avif";

  return (
    <ProductPage
      eyebrow={t("common.kolekcija")}
      title={t("zavese.naslov")}
      paragraphs={[t("zavese.tekst1"), t("zavese.tekst2")]}
      image={image}
      photos={photos}
      seo={{
        title: "Zavese i draperije po meri — Beograd",
        description:
          "Zavese i draperije po meri od premium materijala. Sašijemo, izmerimo i ugradimo. Veliki izbor dezena, boja i tkanina iz vodećih svetskih kolekcija.",
        keywords:
          "zavese po meri, draperije Beograd, zavese i draperije, šivenje zavesa, ugradnja zavesa, Adeko zavese, FR-One",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Zavese i draperije",
          description:
            "Zavese i draperije po meri sa premium materijalima i profesionalnim šivenjem i ugradnjom.",
          image,
          path,
        }),
      }}
    />
  );
}
