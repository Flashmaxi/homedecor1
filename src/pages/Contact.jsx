import { RiMapPin2Line, RiMailLine, RiPhoneLine, RiTimeLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/ui/PageLayout";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { t } = useTranslation();
  const ref = useReveal({ stagger: 0.1 });

  return (
    <PageLayout
      seo={{
        title: "Kontakt — Salon na Vračaru, Južni bulevar 130",
        description:
          "Posetite naš salon na Vračaru — Južni bulevar 130, Beograd. Radno vreme pon–pet 09–20h, subota 09–16h. Telefon +381 11 64 35 570.",
        keywords:
          "Home Decor kontakt, Home Decor Beograd adresa, Vračar Južni bulevar 130, salon zavesa Beograd, kontakt telefon",
        image: "/assets/hero/bg.jpg",
        path: "/kontakt",
        type: "website",
      }}
    >
      <section ref={ref} className="section bg-cream-50 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
            <span data-reveal className="eyebrow mb-5 inline-flex items-center">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              Posetite nas
            </span>
            <h1 data-reveal className="display-2 mb-6">
              {t("kontakt.kontaktTitle")}
            </h1>
            <p data-reveal className="lead">
              Naš tim sa zadovoljstvom će vas dočekati u salonu na Vračaru, ili
              vam odgovoriti na pitanja putem telefona i email-a.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div data-reveal className="lg:col-span-7">
              <div className="relative aspect-[5/4] overflow-hidden" style={{ borderTopLeftRadius: "120px", borderBottomRightRadius: "80px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.393243998638!2d20.4844668!3d44.7931739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707a536f248d%3A0xddf60ed519be39be!2sJu%C5%BEni%20bulevar%20130%2C%20Beograd!5e0!3m2!1sen!2srs!4v1713268008670!5m2!1sen!2srs"
                  className="absolute inset-0 w-full h-full filter grayscale"
                  allowFullScreen=""
                  loading="lazy"
                  title="Mapa"
                ></iframe>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <ContactBlock
                data-reveal
                icon={<RiMapPin2Line className="text-accent text-2xl" />}
                eyebrow={t("kontakt.kontaktAdresa")}
                href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/"
              >
                Južni bulevar 130<br />Vračar, Beograd
              </ContactBlock>

              <ContactBlock
                data-reveal
                icon={<RiTimeLine className="text-accent text-2xl" />}
                eyebrow={t("kontakt.kontaktVreme")}
              >
                Pon – Pet · 09h–20h<br />
                Subota · 09h–16h<br />
                <span className="text-ink-500">Nedelja · Zatvoreno</span>
              </ContactBlock>

              <ContactBlock
                data-reveal
                icon={<RiPhoneLine className="text-accent text-2xl" />}
                eyebrow={t("kontakt.kontaktBroj")}
                href="tel:+381 11 64 35 570"
              >
                +381 11 64 35 570
              </ContactBlock>

              <ContactBlock
                data-reveal
                icon={<RiMailLine className="text-accent text-2xl" />}
                eyebrow="Email"
                href="mailto:office@homedecor.rs"
              >
                office@homedecor.rs
              </ContactBlock>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ContactBlock({ icon, eyebrow, children, href, ...rest }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...rest}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-start gap-5 border-t border-primary/10 pt-6 transition-all duration-300 hover:border-accent"
    >
      <div className="w-14 h-14 bg-cream-100 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors duration-500">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-accent mb-2">
          {eyebrow}
        </div>
        <div className="font-primary text-xl text-primary leading-snug">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}
