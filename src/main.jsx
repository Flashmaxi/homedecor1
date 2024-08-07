import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Promenjeni importi
import About from "./pages/About.jsx";
import Arhitekte from "./pages/Arhitekte.jsx";
import HotelskiProgram from "./pages/HotelskiProgram.jsx";
import Proizvodi from "./pages/Proizvodi.jsx";
import ZaveseiDraperije from "./pages/proizvodi/ZaveseiDraperije.jsx";
import ZebraiRolo from "./pages/proizvodi/ZebraiRolo.jsx";
import Tapete from "./pages/proizvodi/Tapete.jsx";
import LuxZavese from "./pages/proizvodi/LuxZavese.jsx";
import MeblStof from "./pages/proizvodi/MeblStof.jsx";
import Garnisne from "./pages/proizvodi/Garnisne.jsx";
import Dvenecijaneri from "./pages/proizvodi/Dvenecijaneri.jsx";
import PliseSistemi from "./pages/proizvodi/PliseSistemi.jsx";
import PosteljinePeskiri from "./pages/proizvodi/PosteljinePeskiri.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/o-nama" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/arhitekte" element={<Arhitekte />} />
        <Route path="/hotelski-program" element={<HotelskiProgram />} />
        <Route path="/proizvodi" element={<Proizvodi />} />
        <Route
          path="/proizvodi/zavese-i-draperije"
          element={<ZaveseiDraperije />}
        />
        <Route path="/proizvodi/zebra-i-rolo" element={<ZebraiRolo />} />
        <Route path="/proizvodi/tapete" element={<Tapete />} />
        <Route path="/proizvodi/lux-trakaste-zavese" element={<LuxZavese />} />
        <Route path="/proizvodi/mebl-stof" element={<MeblStof />} />
        <Route path="/proizvodi/garnisne" element={<Garnisne />} />
        <Route
          path="/proizvodi/drveni-venecijaneri"
          element={<Dvenecijaneri />}
        />
        <Route path="/proizvodi/plise-sistemi" element={<PliseSistemi />} />
        <Route
          path="/proizvodi/posteljine-i-peskiri"
          element={<PosteljinePeskiri />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
