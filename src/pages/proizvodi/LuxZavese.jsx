import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";

export default function LuxZavese() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("lux.naslov")}
      paragraphs={[t("lux.tekst")]}
      image="/assets/proizvodi/trakaste-zavese.jpg"
    />
  );
}
