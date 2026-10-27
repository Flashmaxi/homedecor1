import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { RiDoubleQuotesL, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useReveal } from "../../hooks/useReveal";
import SectionHeading from "../ui/SectionHeading";

import Avatar1 from "/assets/testimonials/01.png";
import Avatar2 from "/assets/testimonials/avatar2.png";
import Avatar3 from "/assets/testimonials/avatar3.png";
import Avatar4 from "/assets/testimonials/avatar4.png";
import Avatar5 from "/assets/testimonials/02.png";
import Avatar6 from "/assets/testimonials/04.png";

import "swiper/css";
import "swiper/css/pagination";

export default function Recenzije() {
  const { t } = useTranslation();
  const ref = useReveal();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const items = [
    { image: Avatar1, name: "Adrijana Dobrilović", place: "Beograd, Srbija", recenzija: "recenzije.one" },
    { image: Avatar2, name: "Stefan Veselinović", place: "Beograd, Srbija", recenzija: "recenzije.two" },
    { image: Avatar3, name: "Milica Badivuk",     place: "Beograd, Srbija", recenzija: "recenzije.three" },
    { image: Avatar4, name: "Konstantin Krstić",  place: "Beograd, Srbija", recenzija: "recenzije.four" },
    { image: Avatar5, name: "Marija M.",          place: "Beograd, Srbija", recenzija: "recenzije.five" },
    { image: Avatar6, name: "Danijela K.",        place: "Beograd, Srbija", recenzija: "recenzije.six" },
  ];

  return (
    <section ref={ref} className="section bg-cream-50 relative">
      <div className="container mx-auto">
        <div className="mb-16">
          <SectionHeading
            eyebrow={t("common.reciKlijenata")}
            title={t("recenzije.recenzijaTitle")}
          />
        </div>

        <div data-reveal className="relative max-w-5xl mx-auto">
          <RiDoubleQuotesL className="absolute -top-8 left-0 text-7xl text-accent/15 pointer-events-none" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={32}
            breakpoints={{
              960: { slidesPerView: 2 },
            }}
            className="!pb-14"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-cream-100 p-8 lg:p-10 h-full flex flex-col min-h-[280px]">
                  <p className="font-primary italic text-xl lg:text-2xl text-primary leading-snug mb-6 flex-1">
                    “{t(item.recenzija)}”
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-accent/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover bg-accent/10"
                    />
                    <div>
                      <div className="font-primary text-lg text-primary">
                        {item.name}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-ink-500">
                        {item.place}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-between mt-4">
            <div className="testimonial-pagination flex gap-2"></div>
            <div className="flex gap-2">
              <button
                ref={prevRef}
                className="w-12 h-12 border border-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-cream-50 hover:border-primary transition-all duration-500"
                aria-label="Previous"
              >
                <RiArrowLeftLine />
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 border border-primary/15 flex items-center justify-center text-primary hover:bg-primary hover:text-cream-50 hover:border-primary transition-all duration-500"
                aria-label="Next"
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 2px;
          border-radius: 0;
          background: #1a1d20;
          opacity: 0.2;
          transition: all 0.3s;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #cda274;
          opacity: 1;
          width: 36px;
        }
      `}</style>
    </section>
  );
}
