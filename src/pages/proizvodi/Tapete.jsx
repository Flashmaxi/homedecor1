import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { tapete } from "../../data";

export default function Tapete() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("tapete.naslov")}
      paragraphs={[t("tapete.tekst")]}
      image="/assets/proizvodi/tapete.jpg"
      photos={tapete}
    />
  );
}
