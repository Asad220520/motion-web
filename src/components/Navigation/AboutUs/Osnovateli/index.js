import React, { useContext } from "react";
import "./index.scss";
import person from "../../../../img/person.png";
import person2 from "../../../../img/person2.png";
import { LanguageContext } from "../../../../context";
const Osnovateli = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="osnovateli">
      <div className="container">
        <div className="osnovateli">
          <div className="osnovateli__block">
            <div data-aos="fade-right" className="osnovateli__block-title">
              <h1>
                {language === ""
                  ? "Основатели"
                  : language === "ky"
                  ? "Негиздоочулор"
                  : "Founders"}
              </h1>
              <p>
                {language === ""
                  ? "Motion web IT академия была основана в апреле 2021 года по инициативе Курманбека Жоошбаева и Аскерова Канатбека"
                  : language === "ky"
                  ? "Motion web IT Academy 2021-жылдын апрель айында Курманбек Жоошбаев жана Аскеров Канатбектин демилгеси менен негизделген."
                  : "Motion web IT academy was founded in April 2021 by the initiative of Kurmanbek Zhoozhbaev and Askerov Kanatbek"}
              </p>
            </div>
            <div className="osnovateli__block-img">
              <div>
                <img src={person} alt="" />
                <h1>Курманбек Жоошбаев</h1>
                <p>
                  {language === ""
                    ? "Основатель"
                    : language === "ky"
                    ? "Основатель"
                    : "Founder"}
                </p>{" "}
              </div>
              <div>
                <img src={person2} alt="" />
                <h1>Канатбек Аскеров</h1>
                <p>
                  {language === ""
                    ? "Сооснователь"
                    : language === "ky"
                    ? "Сооснователь"
                    : "Founder"}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osnovateli;
