import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PhotoAlbum from "react-photo-album";
import { tapete } from "../../data";
import { Nazad } from "../../components/nazad/Nazad";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Tapete() {
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
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">{t("tapete.naslov")}</h2>
              <p>{t("tapete.tekst")}</p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/proizvodi/tapete.jpg"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={tapete} />
        </div>
        <Nazad />
      </section>
      <Footer />
    </>
  );
}
