import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../../public/assets/hdlogo.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer mt-[80px] xl:mt-[150px] pt-12 relative z-20 bg-[#292f36]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] mb-6 xl:mb-12]">
          <div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
            <a className="flex justify-center xl:justify-start mb-8" href="/">
              <img
                className="mx-auto xl:mx-0"
                src={Logo}
                alt=""
                height={100}
                width={240}
              />
            </a>
            <p className="mb-8 text-xl text-white">{t("hero.heroNaslov")}</p>

            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <a
                  href="https://www.instagram.com/home_decor_beograd?utm_medium=copy_link"
                  target="_blank"
                >
                  <RiInstagramFill className="text-2xl text-white" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/homedecortekstil/"
                  target="_blank"
                >
                  <RiFacebookBoxFill className="text-2xl text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[80px] xl:justify-end">
            <div className="footer__item">
              <h3 className="h3 mb-3 text-accent">
                {t("footer.kolona1.title")}
              </h3>
              <ul className="flex flex-col gap-3 text-white">
                <li>
                  <Link className="text-lg" to="/hotelski-program">
                    {t("footer.kolona1.one")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/o-nama">
                    {t("footer.kolona1.two")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/proizvodi">
                    {t("footer.kolona1.three")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/kontakt">
                    {t("footer.kolona1.four")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__item ">
              <h3 className="h3 mb-3 text-accent">
                {t("footer.kolona2.title")}
              </h3>
              <ul className="flex flex-col gap-3 text-white">
                <li>
                  <Link className="text-lg" to="/proizvodi/zavese-i-draperije">
                    {t("footer.kolona2.one")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/proizvodi/tapete">
                    {t("footer.kolona2.two")}
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/proizvodi/drveni-venecijaneri">
                    {t("footer.kolona2.three")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg"
                    to="/proizvodi/posteljine-i-peskiri"
                  >
                    {t("footer.kolona2.four")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__item ">
              <h3 className="h3 mb-3 text-accent">
                {t("footer.kolona3.title")}
              </h3>
              <ul className="flex flex-col gap-3 text-white">
                <li>
                  <a
                    className="text-lg"
                    href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/@44.7932961,20.4822093,17z/data=!3m1!4b1!4m5!3m4!1s0x475a707a536f248d:0xddf60ed519be39be!8m2!3d44.7932923!4d20.484398?shorturl=1"
                  >
                    Južni bulevar 130, Beograd
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="tel:+381 11 64 35 570">
                    +381 11 64 35 570
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="tel:+381 11 64 35 568">
                    +381 11 64 35 568
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="tel:+381 60 34 56 963">
                    +381 60 34 56 963
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="mailto:office@homedecor.rs">
                    office@homedecor.rs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="footer_copy bg-[#292f36] text-center text-lg py-10 text-accent xl:border-t border-accent">
        © Home decor 2024, {t("copyright.tekst")}
      </p>
    </footer>
  );
}
