import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { mebl } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function MeblStof() {
  const { t } = useTranslation();
  const path = "/proizvodi/mebl-stof";
  const image = "/assets/proizvodi/mebl.jpg";

  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("mebl.naslov")}
      paragraphs={[t("mebl.tekst")]}
      image={image}
      photos={mebl}
      seo={{
        title: "Mebl štof — Tkanine za tapaciranje nameštaja",
        description:
          "Mebl štof za tapaciranje i presvlačenje nameštaja. Baroque, etno, boho, minimal, geometrijski i cvetni dezeni sa visokim koeficijentom otpornosti.",
        keywords:
          "mebl štof, tkanine za nameštaj, štof za tapaciranje, presvlačenje nameštaja, dekorativni štof",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Mebl štof",
          description:
            "Tkanine za tapaciranje nameštaja različitih sastava i dezena.",
          image,
          path,
        }),
      }}
    />
  );
}
