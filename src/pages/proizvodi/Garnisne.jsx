import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { garn } from "../../data";

export default function Garnisne() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("garn.naslov")}
      paragraphs={[t("garn.tekst")]}
      image="/assets/proizvodi/garnisne.avif"
      photos={garn}
    />
  );
}
