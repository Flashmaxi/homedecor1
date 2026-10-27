import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { posteljine } from "../../data";
import { productServiceSchema } from "../../components/ui/Seo";

export default function PosteljinePeskiri() {
  const { t } = useTranslation();
  const path = "/proizvodi/posteljine-i-peskiri";
  const image = "/assets/proizvodi/posteljina.jpg";

  return (
    <ProductPage
      eyebrow={t("common.kolekcija")}
      title={t("posteljina.naslov")}
      paragraphs={[t("posteljina.tekst")]}
      image={image}
      photos={posteljine}
      seo={{
        title: "Posteljine i peškiri — Luksuzni pamuk i bambus",
        description:
          "Luksuzne posteljine od pamučnog satena i svile, premium peškiri od pamuka ili bambusa. Široka paleta boja i dezena za spavaću sobu i kupatilo.",
        keywords:
          "posteljine, peškiri, pamučne posteljine, svilene posteljine, bambus peškiri, luksuzni tekstil",
        image,
        path,
        type: "product",
        jsonLd: productServiceSchema({
          name: "Posteljine i peškiri",
          description: "Luksuzne posteljine i peškiri od premium materijala.",
          image,
          path,
        }),
      }}
    />
  );
}
