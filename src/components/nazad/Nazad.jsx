import { useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export const Nazad = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-16 lg:my-24">
      <button
        onClick={() => navigate(-1)}
        className="group inline-flex items-center gap-3 text-[13px] uppercase tracking-widest font-medium text-primary hover:text-accent transition-colors duration-500"
      >
        <span className="w-12 h-12 border border-primary/15 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-cream-50">
          <RiArrowLeftLine className="text-lg transition-transform duration-500 group-hover:-translate-x-0.5" />
        </span>
        {t("backBtn.tekst")}
      </button>
    </div>
  );
};
