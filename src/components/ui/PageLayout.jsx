import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet";

export default function PageLayout({
  children,
  title = "Home Decor | Oplemenite svoj životni prostor",
  description = "Home Decor RS - Vaš pouzdan partner za venecijanere, zavese, meblstofe i hotelski program. Pronađite savršene dekorativne elemente za vaš dom i poslovni prostor.",
  navVariant = "solid",
  noPadding = false,
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="venecijaneri, zavese, meblstofe, hotelski program, posteljine, peškiri, dekoracija, kućni tekstil, Home Decor RS"
        />
      </Helmet>
      <Navbar variant={navVariant} />
      <main className={noPadding ? "" : "pt-[88px] lg:pt-[112px]"}>
        {children}
      </main>
      <Footer />
    </>
  );
}
