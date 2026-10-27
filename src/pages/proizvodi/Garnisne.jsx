import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { garn } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function Garnisne() {
  const { t } = useTranslation();
  const path = "/proizvodi/garnisne";
  const image = "/assets/proizvodi/garnisne.avif";

  return (
    <ProductPage
      eyebrow={t("common.kolekcija")}
      title={t("garn.naslov")}
      paragraphs={[t("garn.tekst")]}
      image={image}
      photos={garn}
      seo={{
        title: "Garnišne — Plafonske, zidne i sa potezom",
        description:
          "Plafonske garnišne, garnišne sa potezom i zidne garnišne. Različiti modeli, boje i materijali za savršen izgled prozora — od modernog do klasičnog stila.",
        keywords:
          "garnišne, plafonske garnišne, zidne garnišne, garnišne na potez, šipke za zavese",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Garnišne",
          description:
            "Plafonske, zidne i garnišne sa potezom u različitim modelima i materijalima.",
          image,
          path,
        }),
      }}
    />
  );
}
