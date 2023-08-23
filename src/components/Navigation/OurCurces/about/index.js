import React, { useContext } from "react";
import "./index.scss";
import "./media.scss";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../../../context";

const AboutCurs = () => {
  const nav = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="aboutcurs">
        <div data-aos="fade-up" className="aboutcurs--block">
          <h1>
            {language === ""
              ? "О НАС"
              : language === "ky"
              ? "БИЗ ЖӨНҮНДӨ"
              : "ABOUT US"}
          </h1>
          <div className="aboutcurs--block__text">
            <h3>
              {language === ""
                ? "Motion Web IT academy — это международный образовательный проект, который готовит специалистов-практиков IT сферы."
                : language === "ky"
                ? "Motion Web IT academy – IT практиктерин окуткан эл аралык билим берүү долбоору."
                : "Motion Web IT academy is an international educational project that prepares practical IT professionals."}
            </h3>
            <p>
              {language === ""
                ? "Благодаря нашему постоянному развитию мы разработали эффективные программы для подготовки IT-специалистов. Нам удалось соединить лучшие практики офлайн — и онлайн-образования и таким образом достичь высоких результатов."
                : language === "ky"
                ? "Үзгүлтүксүз өнүгүүбүздүн аркасында биз IT адистерин даярдоо боюнча эффективдүү программаларды иштеп чыктык. Биз оффлайн жана онлайн билим берүүнүн мыкты тажрыйбаларын айкалыштыра алдык жана ошону менен жогорку натыйжаларга жетиштик."
                : "Thanks to our continuous development, we have developed effective programs for preparing IT professionals. We have managed to combine the best practices of offline and online education and thus achieve high results."}
            </p>
            <Link to={"/aboutUs"}>
              {language === ""
                ? "Подробнее"
                : language === "ky"
                ? "Кобуроок"
                : "More"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCurs;
