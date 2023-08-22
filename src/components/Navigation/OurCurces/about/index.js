import React, { useContext } from "react";
import "./index.scss";
import "./media.scss";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../../../context";

const AboutCurs = () => {
  const nav = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="aboutcurs">
        <div className="aboutcurs--block">
          <h1>
            {language === ""
              ? "О НАС"
              : language === "ky"
              ? "БИЗ ТУУРАЛУУ"
              : "ABOUT US"}
          </h1>
          <div className="aboutcurs--block__text">
            <h3>
              {language === ""
                ? "Motion Web IT academy — это международный образовательный проект, который готовит специалистов-практиков IT сферы."
                : language === "ky"
                ? "Motion Web IT академия — бул дүйнөлүк билим берүү проект, койгонуучуларды IT башкаруу салыгында даярдайды."
                : "Motion Web IT academy is an international educational project that prepares practical IT professionals."}
            </h3>
            <p>
              {language === ""
                ? "Благодаря нашему постоянному развитию мы разработали эффективные программы для подготовки IT-специалистов. Нам удалось соединить лучшие практики офлайн — и онлайн-образования и таким образом достичь высоких результатов."
                : language === "ky"
                ? "Биздин курулуштуруу боюнча төмөндөгүлөрдү жасап, IT специалисттерди даярдоо үчүн эффективдүү программаларды түзөй алган болгонбуз. Офлайн — жана онлайн билим берүүнүн жакшы практикаларын бириктиргенбибиз, жана бул жол менен жогору натыйжолорга жетебиз."
                : "Thanks to our continuous development, we have developed effective programs for preparing IT professionals. We have managed to combine the best practices of offline and online education and thus achieve high results."}
            </p>
            <button onClick={() => nav("/aboutUs")}>
              {language === ""
                ? "Подробнее"
                : language === "ky"
                ? "Көбүрөөк"
                : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCurs;
