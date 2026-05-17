import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Seo from "./Seo";

export default function PageLayout({
  children,
  seo = {},
  navVariant = "solid",
  noPadding = false,
}) {
  return (
    <>
      <Seo {...seo} />
      <Navbar variant={navVariant} />
      <main className={noPadding ? "" : "pt-[88px] lg:pt-[112px]"}>
        {children}
      </main>
      <Footer />
    </>
  );
}
