import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/Usluge/Service";
import Steps from "./components/steps/Steps";
import Footer from "./components/footer/Footer";
import Recenzije from "./components/testimonials/Recenzije";
import DalisteZnali from "./components/didyouknow/DalisteZnali";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import "./i18n";

function App() {
  ReactGA.initialize("G-6FDMQF60C7");

  return (
    <>
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

      <Navbar />
      <Hero />
      <Service />
      <Steps />
      <Recenzije />
      <DalisteZnali />
      <Footer />
    </>
  );
}

export default App;
