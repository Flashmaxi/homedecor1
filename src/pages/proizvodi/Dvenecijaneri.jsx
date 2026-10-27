import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { dv } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function Dvenecijaneri() {
  const { t } = useTranslation();
  const path = "/proizvodi/drveni-venecijaneri";
  const image = "/assets/proizvodi/drveni-venecijaneri.jpg";

  return (
    <ProductPage
      eyebrow={t("common.kolekcija")}
      title={t("dv.naslov")}
      paragraphs={[t("dv.tekst")]}
      image={image}
      photos={dv}
      seo={{
        title: "Drveni venecijaneri — Lamele 25mm i 50mm",
        description:
          "Drveni venecijaneri od plemenitog drveta, otporni na UV zračenje. Lamele 25mm ili 50mm, široka paleta boja, ručno upravljanje kanapom.",
        keywords:
          "drveni venecijaneri, venecijaneri po meri, drvene lamele, prirodno drvo, zaštita od sunca",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Drveni venecijaneri",
          description:
            "Drveni venecijaneri od plemenitog drveta, dostupni u lamelama 25mm i 50mm.",
          image,
          path,
        }),
      }}
    />
  );
}
