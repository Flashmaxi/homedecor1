import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { uslugeData } from "../../data";

export default function Service() {
  const { t } = useTranslation();

  return (
    <>
      <section className="work mt-[80px] xl:mt-[150px] relative z-20 mb-[56px]">
        <div className="container mx-auto xl:px-0">
          <div className="text-center mb-24">
            <h2 className="work__title h2 mb-4">{t("usluge.uslugeNaslov")}</h2>
            <p className="work__subtitle max-w-3xl mx-auto">
              {t("usluge.uslugeOpis")}
            </p>
          </div>
          <div className="work__grid grid grid-cols-1 xl:grid-cols-3 gap-x-[104px] gap-y-[56px] mb-[96px]">
            {uslugeData.map((item, index) => (
              <Link key={index} to={item.btnlink}>
                <div className="w-full max-w-[350px] h-full mx-auto">
                  <img
                    className="mb-6 w-full rounded-tr-[120px] rounded-bl-[90px] min-h-[330px]"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="h3">{t(item.title)}</h3>
                      <p>{t(item.subtitleKey)}</p>
                    </div>
                    <Link
                      className="bg-primary text-accent hover:bg-primary/80 w-[70px] h-[70px] rounded-full flex items-center justify-center"
                      to={item.btnlink}
                    >
                      {item.icon}
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
