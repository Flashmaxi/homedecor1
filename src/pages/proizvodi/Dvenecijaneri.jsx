import { useTranslation } from "react-i18next";
import ProductPage from "../../components/ui/ProductPage";
import { dv } from "../../data";

export default function Dvenecijaneri() {
  const { t } = useTranslation();
  return (
    <ProductPage
      eyebrow="Kolekcija"
      title={t("dv.naslov")}
      paragraphs={[t("dv.tekst")]}
      image="/assets/proizvodi/drveni-venecijaneri.jpg"
      photos={dv}
    />
  );
}
