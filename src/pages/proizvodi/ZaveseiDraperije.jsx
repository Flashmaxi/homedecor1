import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { photos } from "../../data";

export default function ZaveseiDraperije() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("zavese.naslov")}
      paragraphs={[t("zavese.tekst1"), t("zavese.tekst2")]}
      image="/assets/proizvodi/zavese.avif"
      photos={photos}
    />
  );
}
