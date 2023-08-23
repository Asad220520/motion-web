import React, { useContext } from "react";
import license from "../../../../img/license.png";
import "./index.scss";
import { LanguageContext } from "../../../../context";
const License = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="license">
      <div className="container">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="license"
        >
          <div className="license__title">
            <h1>
              {language === ""
                ? "Наша лицензия"
                : language === "ky"
                ? "Биздин лицензия"
                : "Our License"}
            </h1>
            <p>
              {language === ""
                ? "Наша программа по IT прошла проверку в Министерстве образования КР, что доказывает Motion web имеет право на:"
                : language === "ky"
                ? "Биздин IT программабыз Кыргыз Республикасынын Билим берүү министрлиги тарабынан сыналган, бул Motion web төмөнкүлөргө укуктуу экенин далилдейт:"
                : "Our IT program has been approved by the Ministry of Education of the Kyrgyz Republic, proving that Motion web is entitled to:"}
            </p>
            <div className="license__title-wrap">
              <h2>01.</h2>
              <p>
                {language === ""
                  ? "Обучать IT"
                  : language === "ky"
                  ? "IT-ни уйротуу"
                  : "Teach IT"}
              </p>
            </div>
            <div className="license__title-wrap">
              <h2>02.</h2>
              <p>
                {language === ""
                  ? "Направлять на обучение и стажировку за границу"
                  : language === "ky"
                  ? "Чет өлкөгө окууга жана стажировкага жөнөтүү"
                  : "Direct for education and internship abroad"}
              </p>
            </div>
          </div>

          <div className="license__img">
            <img src={license} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
