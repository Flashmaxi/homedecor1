import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { RiMapPin2Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Home decor | Oplemenite svoj životni prostor</title>
        <meta
          name="description"
          content="Home Decor RS - Vaš pouzdan partner za venecijanere, zavese, meblstofe i hotelski program. Pronađite savršene dekorativne elemente za vaš dom i poslovni prostor."
        />
        <meta
          name="keywords"
          content="venecijaneri, zavese, meblstofe, hotelski program, posteljine, peškiri, dekoracija, kućni tekstil, Home Decor RS"
        />
      </Helmet>
      <div className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 right-0 left-0 z-10"></div>
      </div>
      <section className="container mx-auto relative z-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="h2"> {t("kontakt.kontaktTitle")}</h2>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.393243998638!2d20.4844668!3d44.7931739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707a536f248d%3A0xddf60ed519be39be!2sJu%C5%BEni%20bulevar%20130%2C%20Beograd!5e0!3m2!1sen!2srs!4v1713268008670!5m2!1sen!2srs"
                  className="rounded-tr-[160px] rounded-bl-[90px]"
                  width="100%"
                  height="480"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="h3 mb-3">{t("kontakt.kontaktAdresa")}</h3>
                    <a
                      className="flex items-center"
                      href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/@44.7932961,20.4822093,17z/data=!3m1!4b1!4m5!3m4!1s0x475a707a536f248d:0xddf60ed519be39be!8m2!3d44.7932923!4d20.484398?shorturl=1"
                      target="_blank"
                    >
                      <RiMapPin2Fill />
                      <p className="ms-2 mt-1">
                        Južni bulevar 130 Vračar, Beograd
                      </p>
                    </a>
                  </div>
                  <div className="border-t border-accent px-6 py-4">
                    <h3 className="h3">{t("kontakt.kontaktVreme")}</h3>
                    <p className="mt-1">Pon - pet: 09h - 20h</p>
                    <p className="mt-1">Subota: 09h - 16h</p>
                    <p className="mt-1">Nedelja: Zatvoreno</p>
                  </div>
                  <div className="border-t border-accent px-6 py-4">
                    <h3 className="h3">{t("kontakt.kontaktBroj")}</h3>
                    <a
                      className="flex items-center"
                      href="mailto:office@homedecor.rs"
                    >
                      <RiMailFill />
                      <p className="ms-2 mt-1">office@homedecor.rs</p>
                    </a>
                    <a
                      className="flex items-center"
                      href="tel:+381 11 64 35 570"
                    >
                      <RiPhoneFill />
                      <p className="ms-2 mt-1">+381 11 64 35 570</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
