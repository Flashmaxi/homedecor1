import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/Usluge/Service";
import Steps from "./components/steps/Steps";
import Footer from "./components/footer/Footer";
import Recenzije from "./components/testimonials/Recenzije";
import DalisteZnali from "./components/didyouknow/DalisteZnali";
import BrandMarquee from "./components/marquee/BrandMarquee";
import Seo, { localBusinessSchema } from "./components/ui/Seo";
import ReactGA from "react-ga4";
import "./i18n";

function App() {
  ReactGA.initialize("G-6FDMQF60C7");

  return (
    <>
      <Seo
        title="Home Decor Beograd — zavese, draperije, tapete i hotelski program"
        description="Atelje za enterijer i tekstil sa 20+ godina iskustva. Zavese, draperije, tapete, venecijaneri, mebl štof, garnišne i hotelski program — po meri, na Vračaru."
        keywords="Home Decor, Home Decor Beograd, zavese po meri, draperije, tapete, venecijaneri, plise zavese, mebl štof, garnišne, posteljine, hotelski program, dekoracija enterijera, Vračar Beograd"
        image="/assets/hero/bg.jpg"
        path="/"
        jsonLd={localBusinessSchema}
      />

      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <Service />
        <Steps />
        <Recenzije />
        <DalisteZnali />
      </main>
      <Footer />
    </>
  );
}

export default App;
