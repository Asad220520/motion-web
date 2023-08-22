import React, { useContext } from "react";
import club1 from "../../../../img/club1.png";
import club21 from "../../../../img/club2.1.png";
import club22 from "../../../../img/club2.2.png";
import club3 from "../../../../img/club3.png";
import club4 from "../../../../img/club4.png";
import club51 from "../../../../img/club5.1.png";
import club52 from "../../../../img/club5.2.png";
import "./index.scss";
import { LanguageContext } from "../../../../context";
const WhatYouGet = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="whatYouGet">
      <div className="container">
        <div className="whatYouGet">
          <div className="whatYouGet__bloc">
            <h1>
              {language === ""
                ? "Что вы получете"
                : language === "ky"
                ? "Сиз эмне алаласыз"
                : "What You Get"}
            </h1>
          </div>
          <div className="whatYouGet__block">
            <div data-aos="zoom-in-up" className="whatYouGet__block-wrap">
              <img src={club1} alt="" />
            </div>
            <p>
              {language === ""
                ? "Расширение кругозоров в сфере IT"
                : language === "ky"
                ? "IT тармагындагы горизонтторду кеңейтүү"
                : "Broadening horizons in the IT field"}
            </p>
          </div>
          <div className="whatYouGet__block">
            <div data-aos="zoom-in-up" className="whatYouGet__block-wrap">
              <img src={club21} alt="" />
              <img src={club22} alt="" />
            </div>
            <p>
              {language === ""
                ? "Улучшение английского языка"
                : language === "ky"
                ? "Англис тилин өркүндөтүү"
                : "Improving English language skills"}
            </p>
          </div>
          <div className="whatYouGet__block">
            <div data-aos="zoom-in-up" className="whatYouGet__block-wrap">
              <img src={club3} alt="" />
            </div>
            <p>
              {language === ""
                ? "Работа с командой"
                : language === "ky"
                ? "Команда менен иштөө"
                : "Team collaboration"}
            </p>
          </div>
          <div className="whatYouGet__block">
            <div data-aos="zoom-in-up" className="whatYouGet__block-wrap">
              <img src={club4} alt="" />
            </div>
            <p>
              {language === ""
                ? "Портфолио"
                : language === "ky"
                ? "Портфолио"
                : "Portfolio"}
            </p>
          </div>
          <div className="whatYouGet__block">
            <div data-aos="zoom-in-up" className="whatYouGet__block-wrap">
              <img src={club51} alt="" />
              <img src={club52} alt="" />
            </div>
            <p>
              {language === ""
                ? "Работа с реальными проектами"
                : language === "ky"
                ? "Чыныгы долбоорлор менен иштөө"
                : "Hands-on experience with real projects"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
