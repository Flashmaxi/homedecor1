import {
  RiCompasses2Line,
  RiCheckboxMultipleLine,
  RiHammerLine,
  RiToolsLine,
  RiStarLine,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

export default function Steps() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.1 });

  const steps = [
    { icon: RiCheckboxMultipleLine, titleKey: "steps.step1Title", textKey: "steps.step1" },
    { icon: RiCompasses2Line,       titleKey: "steps.step2Title", textKey: "steps.step2" },
    { icon: RiHammerLine,           titleKey: "steps.step3Title", textKey: "steps.step3" },
    { icon: RiToolsLine,            titleKey: "steps.step4Title", textKey: "steps.step4" },
    { icon: RiStarLine,             titleKey: "steps.step5Title", textKey: "steps.step5" },
  ];

  return (
    <section ref={ref} className="section bg-cream-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/20" />

      <div className="container mx-auto">
        <div className="mb-16 lg:mb-24">
          <SectionHeading
            eyebrow="Proces saradnje"
            title={t("steps.stepTitle")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                data-reveal
                className="relative group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 flex items-center justify-center border border-accent/30 rounded-full bg-cream-50 transition-all duration-500 group-hover:bg-accent group-hover:border-accent">
                      <Icon className="text-2xl text-accent group-hover:text-cream-50 transition-colors duration-500" />
                    </div>
                    <div className="font-primary text-accent text-xs tracking-widest mt-3 text-center">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="font-primary text-2xl text-primary mb-3 leading-tight">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-ink-500 text-[15px] leading-relaxed">
                      {t(step.textKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
