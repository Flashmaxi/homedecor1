import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { tapete } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function Tapete() {
  const { t } = useTranslation();
  const path = "/proizvodi/tapete";
  const image = "/assets/proizvodi/tapete.jpg";

  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("tapete.naslov")}
      paragraphs={[t("tapete.tekst")]}
      image={image}
      photos={tapete}
      seo={{
        title: "Tapete za zid — Premium dezeni i materijali",
        description:
          "Veliki izbor zidnih tapeta: Rasch, Marburg, Living Walls, Casa Deco. Lako se postavljaju i uklanjaju, postojanih i intenzivnih boja.",
        keywords:
          "tapete za zid, zidne tapete, tapete Beograd, Rasch tapete, Marburg tapete, Casa Deco, Living Walls",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Zidne tapete",
          description:
            "Premium kolekcija zidnih tapeta od vodećih svetskih proizvođača.",
          image,
          path,
        }),
      }}
    />
  );
}
