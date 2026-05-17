import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";

export default function PliseSistemi() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("plise.naslov")}
      paragraphs={[t("plise.tekst")]}
      image="/assets/proizvodi/plise-sistemi.jpg"
    />
  );
}
