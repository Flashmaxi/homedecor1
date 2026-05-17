import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { posteljine } from "../../data";

export default function PosteljinePeskiri() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("posteljina.naslov")}
      paragraphs={[t("posteljina.tekst")]}
      image="/assets/proizvodi/posteljina.jpg"
      photos={posteljine}
    />
  );
}
