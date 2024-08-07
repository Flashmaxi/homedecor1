import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { hero } from "../../data";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const { description, btnlink } = hero;
  return (
    <section
      className="hero h-[640px] xl:h-[840px] bg-bottom lg:bg-center bg-cover bg-no-repeat lg:bg-fixed xl:rounded-bl-[290px] relative z-20 opacity-90"
      style={{
        backgroundImage: `url("/assets/hero/bg.jpg")`,
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="hero__text w-[567px] text-accent-secondary flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="h1 mb-8 xl:text-white">{t("hero.heroNaslov")}</h1>
          <p className="mb-8">{description}</p>
          <Link to={btnlink} className="btn btn-primary mx-auto xl:mx-0">
            {t("hero.heroBtnText")}
            <RiArrowRightLine className="text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
