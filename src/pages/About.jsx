import { Link } from "react-router-dom";
import { RiPhoneLine, RiArrowRightUpLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/ui/PageLayout";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.1 });

  return (
    <PageLayout
      seo={{
        title: "O nama — 20+ godina iskustva u opremanju enterijera",
        description:
          "HD Group d.o.o. — porodični atelje sa 3000+ zadovoljnih klijenata i saradnja sa vodećim svetskim brendovima (Adeko, Rasch, Marburg, FR-One, Casa Deco).",
        keywords:
          "Home Decor o nama, HD Group, atelje enterijera Beograd, opremanje doma, tradicija, kvalitet, salon Vračar",
        image: "/assets/about/aboutimg.avif",
        path: "/o-nama",
        type: "website",
      }}
    >
      <section ref={ref} className="section bg-cream-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center">
            <div className="xl:col-span-7 order-2 xl:order-none">
              <span data-reveal className="eyebrow mb-6 inline-flex items-center">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                O nama
              </span>
              <h1 data-reveal className="display-2 mb-8">
                {t("about.aboutTitle")}
              </h1>
              <div data-reveal className="h-px w-20 bg-accent mb-8" />
              <p data-reveal className="lead mb-10 max-w-2xl">
                {t("about.aboutText")}
              </p>

              <div data-reveal className="flex flex-wrap items-center gap-6 mb-10">
                <div className="bg-cream-100 w-16 h-16 rounded-full flex justify-center items-center">
                  <RiPhoneLine className="text-accent text-2xl" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink-500 mb-1">
                    {t("about.aboutCta")}
                  </div>
                  <a
                    className="font-primary text-2xl lg:text-3xl text-primary hover:text-accent transition-colors"
                    href="tel:+381116435570"
                  >
                    +381 11 64 35 570
                  </a>
                </div>
              </div>

              <Link data-reveal to="/kontakt" className="btn-primary group">
                {t("about.callCta")}
                <RiArrowRightUpLine className="text-accent text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            <div className="xl:col-span-5 order-1 xl:order-none">
              <div data-reveal className="relative aspect-[4/5] frame-luxe" style={{ borderTopRightRadius: "140px", borderBottomLeftRadius: "100px" }}>
                <img
                  src="/assets/about/aboutimg.avif"
                  alt="O nama"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
