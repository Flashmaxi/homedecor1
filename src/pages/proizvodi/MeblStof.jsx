import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { mebl } from "../../data";

export default function MeblStof() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("mebl.naslov")}
      paragraphs={[t("mebl.tekst")]}
      image="/assets/proizvodi/mebl.jpg"
      photos={mebl}
    />
  );
}
