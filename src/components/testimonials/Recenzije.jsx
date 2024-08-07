// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar1 from "/assets/testimonials/01.png";
import Avatar2 from "/assets/testimonials/avatar2.png";
import Avatar3 from "/assets/testimonials/avatar3.png";
import Avatar4 from "/assets/testimonials/avatar4.png";
import Avatar5 from "/assets/testimonials/02.png";
import Avatar6 from "/assets/testimonials/04.png";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Recenzije() {
  const { t } = useTranslation();

  const swiperContent = [
    {
      image: Avatar1,
      name: "Adrijana Dobrilovic",
      place: "Beograd, Srbija",
      recenzija: "recenzije.one",
    },
    {
      image: Avatar2,
      name: "Stefan Veselinovic",
      place: "Beograd, Srbija",
      recenzija: "recenzije.two",
    },
    {
      image: Avatar3,
      name: "Milica Badivuk",
      place: "Beograd, Srbija",
      recenzija: "recenzije.three",
    },
    {
      image: Avatar4,
      name: "Konstantin Krstic",
      place: "Beograd, Srbija",
      recenzija: "recenzije.four",
    },
    {
      image: Avatar5,
      name: "Marija M.",
      place: "Beograd, Srbija",
      recenzija: "recenzije.five",
    },
    {
      image: Avatar6,
      name: "Danijela K.",
      place: "Beograd, Srbija",
      recenzija: "recenzije.six",
    },
  ];
  return (
    <section className="testimonial py-[60px] relative z-20">
      <h3 className="h3 font-semibold mx-auto text-center mb-6">
        {t("recenzije.recenzijaTitle")}
      </h3>
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
        <div className="w-full">
          <div className="testimonial__slider swiper h-[400px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  {swiperContent.map((items, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                          <div className="flex gap-4 mb-6">
                            <img src={items.image} alt="" />
                            <div>
                              <h3 className="text-base lg:text-xl">
                                {items.name}
                              </h3>
                              <div className="text-base">{items.place}</div>
                            </div>
                          </div>
                          <p className="text-sm lg:text-base">
                            {t(items.recenzija)}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
