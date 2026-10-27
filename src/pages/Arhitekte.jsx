import { RiArrowRightUpLine, RiMailLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/ui/PageLayout";
import { useReveal } from "../hooks/useReveal";

const EMAIL = "office@homedecor.rs";

export default function Arhitekte() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.08 });
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t("arhitekte.mailSubject")
  )}`;

  return (
    <PageLayout
      seo={{
        title: "Za arhitekte i dizajnere enterijera — Saradnja",
        description:
          "Specijalna ponuda za arhitekte i dizajnere enterijera. Ekskluzivne pogodnosti, posvećena podrška i pristup vodećim brendovima tekstila. Pošaljite upit.",
        keywords:
          "arhitekte saradnja, dizajneri enterijera, B2B Home Decor, profesionalna saradnja, tekstil za projekte, partnerstvo",
        image: "/assets/about/aboutimg.avif",
        path: "/arhitekte",
        type: "website",
      }}
    >
      <section ref={ref} className="section bg-cream-50 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left text */}
            <div className="lg:col-span-6">
              <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                Home Decor
              </span>
              <h1 data-reveal className="display-2 mb-8">
                {t("arhitekte.arhitekteTitle")}
              </h1>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <p data-reveal className="lead mb-6">
                {t("arhitekte.arhitekteText")}
              </p>
              <p data-reveal className="text-primary font-primary text-2xl">
                {t("arhitekte.arhitekteCta")}
              </p>
            </div>

            {/* Email card */}
            <div className="lg:col-span-6">
              <div
                data-reveal
                className="bg-cream-100 p-8 lg:p-12"
                style={{ borderTopRightRadius: "120px" }}
              >
                <h2 className="font-primary text-3xl lg:text-4xl text-primary leading-tight mb-4">
                  {t("arhitekte.mailNaslov")}
                </h2>
                <p className="text-ink-500 text-[15px] leading-relaxed mb-10 max-w-md">
                  {t("arhitekte.mailTekst")}
                </p>

                <a
                  href={mailto}
                  className="group flex items-center gap-5 border-t border-primary/10 pt-8 mb-10 transition-colors duration-300 hover:border-accent"
                >
                  <div className="w-14 h-14 bg-cream-50 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors duration-500">
                    <RiMailLine className="text-accent text-2xl" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-accent mb-2">
                      Email
                    </div>
                    <div className="font-primary text-xl sm:text-2xl text-primary leading-snug break-words transition-colors duration-300 group-hover:text-accent">
                      {EMAIL}
                    </div>
                  </div>
                </a>

                <a href={mailto} className="btn-primary group">
                  {t("arhitekte.mailDugme")}
                  <RiArrowRightUpLine className="text-accent text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
