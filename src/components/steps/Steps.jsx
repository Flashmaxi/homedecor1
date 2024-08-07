import {
  RiCompasses2Line,
  RiCheckboxMultipleLine,
  RiHammerFill,
  RiToolsFill,
  RiStarFill,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";

export default function Steps() {
  const { t } = useTranslation();

  return (
    <section className="steps mt-[120px] py-[56px] relative z-20">
      <h2 className="h2 mb-10 mx-auto text-center">{t("steps.stepTitle")}</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 mb-5">
          <div className="steps__step text-center">
            <div className="mb-4">
              <RiCheckboxMultipleLine className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">{t("steps.step1Title")}</h3>
            <p className="mb-4 max-w-md mx-auto">{t("steps.step1")}</p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <RiCompasses2Line className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">{t("steps.step2Title")}</h3>
            <p className="mb-5 max-w-md mx-auto">{t("steps.step2")}</p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <RiHammerFill className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">{t("steps.step3Title")}</h3>
            <p className="mb-5 max-w-md mx-auto">{t("steps.step3")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
          <div className="steps__step text-center">
            <div className="mb-4">
              <RiToolsFill className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">{t("steps.step4Title")}</h3>
            <p className="mb-5 max-w-md mx-auto">{t("steps.step4")}</p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <RiStarFill className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">{t("steps.step5Title")}</h3>
            <p className="mb-5 max-w-md mx-auto">{t("steps.step5")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
