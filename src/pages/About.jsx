import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { RiPhoneFill, RiArrowRightLine } from "react-icons/ri";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
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
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">{t("about.aboutTitle")}</h2>
              <p className="text-[19px]">{t("about.aboutText")}</p>

              <div className="flex items-center justify-center xl:justify-start gap-4">
                <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                  <RiPhoneFill className="text-accent text-4xl" />
                </div>

                <div className="text-left">
                  <div>
                    <a
                      className="text-xl lg:text-2xl font-bold"
                      href="tel:+381116435570"
                    >
                      +381 11 64 35 570
                    </a>
                  </div>
                  <div>{t("about.aboutCta")}</div>
                </div>
              </div>
              <Link to="/kontakt" className="btn btn-primary">
                {t("about.callCta")}{" "}
                <RiArrowRightLine className="text-accent" />
              </Link>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/about/aboutimg.avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
