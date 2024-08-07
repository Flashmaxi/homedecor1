import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Service from "../components/Usluge/Service";
import { Nazad } from "../components/nazad/Nazad";
import { Helmet } from "react-helmet";
export default function Proizvodi() {
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
      <Service />
      <Nazad />
      <Footer />
    </>
  );
}
