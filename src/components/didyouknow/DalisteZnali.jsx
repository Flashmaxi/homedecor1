import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

import Draperije from "/assets/didyouknow/draperije.jpg";
import Kraljevske from "/assets/didyouknow/kraljevske-zavese.jpg";
import Kruzne from "/assets/didyouknow/kruzne-zavese.jpg";
import Prirodne from "/assets/didyouknow/prirodni-materijali.jpg";
import Rimske from "/assets/didyouknow/rimske-roletne.jpg";
import RimskeZavese from "/assets/didyouknow/rimske-zavese.jpg";
import RoletneTrska from "/assets/didyouknow/roletne-trska.jpg";
import Tamne from "/assets/didyouknow/tamne-zavese.jpg";
import Tit from "/assets/didyouknow/mech.avif";
import Venecijaneri from "/assets/didyouknow/venecijaneri.jpg";
import Zapadna from "/assets/didyouknow/zapadna-ruza.jpg";

import "swiper/css";

export default function DalisteZnali() {
  const { t } = useTranslation();
  const ref = useReveal();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const items = [
    { image: Draperije, key: "dyk.fact1" },
    { image: Kraljevske, key: "dyk.fact2" },
    { image: Kruzne, key: "dyk.fact3" },
    { image: Prirodne, key: "dyk.fact4" },
    { image: Rimske, key: "dyk.fact5" },
    { image: RimskeZavese, key: "dyk.fact6" },
    { image: RoletneTrska, key: "dyk.fact7" },
    { image: Tamne, key: "dyk.fact8" },
    { image: Tit, key: "dyk.fact9" },
    { image: Venecijaneri, key: "dyk.fact10" },
    { image: Zapadna, key: "dyk.fact11" },
  ];

  return (
    <section ref={ref} className="section bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Inspiracija"
            title={t("dyk.title")}
            subtitle={t("dyk.text")}
            light
          />
        </div>

        <div data-reveal className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group relative h-[440px] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <div className="h-px w-10 bg-accent mb-4 transition-all duration-500 group-hover:w-16" />
                    <p className="text-cream-100 text-sm leading-relaxed">
                      {t(item.key)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-3 mt-10">
            <button
              ref={prevRef}
              className="w-12 h-12 border border-cream-100/20 text-cream-100 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500"
              aria-label="Previous"
            >
              <RiArrowLeftLine />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 border border-cream-100/20 text-cream-100 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500"
              aria-label="Next"
            >
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
