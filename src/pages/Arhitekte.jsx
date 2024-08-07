import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Arhitekte() {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s1ko0qh", "template_r4b1nmm", form.current, {
        publicKey: "XyctHlwlL5OVaodPG",
      })
      .then(
        () => {
          setMessageColor("text-green-500");
          setMessage("Poruka je uspešno poslata.");
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Došlo je do greške prilikom slanja poruke.");
          setMessageColor("text-red-500");
        }
      );
  };
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
      <div className="relative z-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="lg:text-center">
            <p className="text-base text-accent font-semibold">Home decor</p>
            <h2 className="h2">{t("arhitekte.arhitekteTitle")}</h2>
            <p className="mt-4 max-w-3xl text-xl lg:mx-auto">
              {t("arhitekte.arhitekteText")}
            </p>
            <p className="text-xl lg:mx-auto mt-4 mb-6">
              {t("arhitekte.arhitekteCta")}
            </p>
          </div>
        </div>

        <div className="container mx-auto relative z-20">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-[672px] items-center justify-center mx-auto"
          >
            <div className="block lg:flex">
              <div className="block lg:flex-col lg:me-6 lg:flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {t("arhitekte.arhitektaIme")}
                </label>
                <input
                  className=" block shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="user_name"
                  required
                />
              </div>
              <div className="block lg:flex-col lg:flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {t("arhitekte.arthitektaKompanija")}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="company_name"
                  required
                />
              </div>
            </div>

            <div className="block lg:flex">
              <div className="block lg:flex-col lg:me-6 lg:flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {t("arhitekte.arhiEmail")}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="user_email"
                  required
                />
              </div>

              <div className="block lg:flex-col lg:flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {t("arhitekte.arhiTelefon")}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel"
                  name="user_number"
                  required
                />
              </div>
            </div>

            {/* Primer obrasca za broj telefona, prilagodite prema potrebi */}
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {t("arhitekte.arhiPoruka")}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              rows={6}
              required
            />
            <button
              className="btn btn-primary hover:text-accent mt-6"
              type="submit"
              value="Send"
            >
              {t("arhitekte.arthiBtnText")}
            </button>
          </form>
          <div className={`text-center ${messageColor}`}>{message}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
