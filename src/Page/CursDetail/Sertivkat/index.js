import React from "react";
import "./index.scss";
import "./media.scss";
import card from "../../../img/cardd.png";

const Sertivkat = ({ language }) => {
  return (
    <div id="ser">
      <div className="container">
        <div className="ser">
          <div className="ser--text">
            <h2>
              {" "}
              {language === ""
                ? "Сертификат"
                : language === "ky"
                ? "Сертификат"
                : "Certificate"}
            </h2>
            <p>
              {" "}
              {language === ""
                ? "После успешного завершения обучения выдаётся международный сертификат Государственной степени, лицензированный Министерством образования на 3 языках."
                : language === "ky"
                ? "Окууну ийгиликтүү аяктагандан кийин Билим берүү министрлиги тарабынан 3 тилде лицензияланган Мамлекеттик даражадагы эл аралык сертификат берилет."
                : "After successful completion of the training, an international certificate of the State degree is issued, licensed by the Ministry of Education in 3 languages."}
            </p>
            <div className="ser--text__btns">
              <button>
                {" "}
                {language === ""
                  ? "Кыргызский"
                  : language === "ky"
                  ? "Кыргызча"
                  : "Kyrgyz"}{" "}
              </button>
              <button>
                {language === ""
                  ? "Русский"
                  : language === "ky"
                  ? "Орусча"
                  : "Russian"}
              </button>
              <button>
                {" "}
                {language === ""
                  ? "Английский"
                  : language === "ky"
                  ? "Англисче"
                  : "English"}
              </button>
            </div>
            <p>
              {" "}
              {language === ""
                ? "Действителен для всех госучреждений, IT компаний в Кыргызстане и IT компаний в европейских государствах"
                : language === "ky"
                ? "Кыргызстандагы бардык мамлекеттик мекемелер, IT компаниялар үчүн жарактуу жана Европа өлкөлөрүндөгү IT компаниялары"
                : "Valid for all state institutions, IT companies in Kyrgyzstan        and IT companies in European countries"}
            </p>
          </div>
          <img src={card} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Sertivkat;
