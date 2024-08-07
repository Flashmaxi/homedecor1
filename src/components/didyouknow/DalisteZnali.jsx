import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
import { useTranslation } from "react-i18next";

export default function DalisteZnali() {
  const { t } = useTranslation();

  const swiperContent = [
    {
      image: Draperije,
      zanimljivost: "dyk.fact1",
    },
    {
      image: Kraljevske,
      zanimljivost: "dyk.fact2",
    },
    {
      image: Kruzne,
      zanimljivost: "dyk.fact3",
    },
    {
      image: Prirodne,
      zanimljivost: "dyk.fact4",
    },
    {
      image: Rimske,
      zanimljivost: "dyk.fact5",
    },
    {
      image: RimskeZavese,
      zanimljivost: "dyk.fact6",
    },
    {
      image: RoletneTrska,
      zanimljivost: "dyk.fact7",
    },
    {
      image: Tamne,
      zanimljivost: "dyk.fact8",
    },
    {
      image: Tit,
      zanimljivost: "dyk.fact9",
    },
    {
      image: Venecijaneri,
      zanimljivost: "dyk.fact10",
    },
    {
      image: Zapadna,
      zanimljivost: "dyk.fact11",
    },
  ];
  return (
    <section className="testimonial py-[60px] relative z-20">
      <div className="testimonial__bg container mx-auto px-6">
        <div>
          <h3 className="h3 mb-6 mx-auto text-center font-semibold">
            {t("dyk.title")}
          </h3>
          <p className="mx-auto text-center max-w-[580px] mb-6">
            {t("dyk.text")}
          </p>
        </div>
        <div className="w-full">
          <div className="testimonial__slider swiper min-h-[400px]">
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
                        <div className="testimonial__item w-full max-w-[470px] bg-accent-secondary rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                          <div className="flex gap-4 mb-6">
                            <img className="mx-auto" src={items.image} alt="" />
                          </div>
                          <p className="text-sm lg:text-base text-center text-primary">
                            {t(items.zanimljivost)}
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
