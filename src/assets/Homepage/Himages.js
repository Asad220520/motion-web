import React, { useContext } from "react";
import "./index.scss";
import black1 from "../../img/black1.png";
import black2 from "../../img/black2.png";
import black3 from "../../img/black3.png";
import black4 from "../../img/black4.png";
import black5 from "../../img/black5.png";
import black6 from "../../img/back6.png";
import black7 from "../../img/black7.png";
import black8 from "../../img/black8.png";
import { LanguageContext } from "../../context";

export const Himages = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const { language } = useContext(LanguageContext);
  return (
    <div id="himages">
      <div className="img">
        <img src={black1} className="img1 group" alt="" />
        <img src={black2} className="img2 group" alt="" />
        <img src={black3} className="img3 group" alt="" />
        <img src={black4} className="img4 group" alt="" />
        <img src={black5} className="img5 group" alt="" />
        <img src={black6} className="img6 group" alt="" />
        <img src={black7} className="img7 group" alt="" />
        <img src={black8} className="img8 group" alt="" />
      </div>
      <div className="himages">
        <h1>
          {language === ""
            ? "МОУШН ВЕБ"
            : language === "ky"
            ? "МОУШН ВЕБ"
            : "MOTION WEB"}
          <br />
          <span>
            {language === "" ? "IT" : language === "ky" ? "IT" : "IT"}{" "}
          </span>
          {language === ""
            ? "АКАДЕМИЯ"
            : language === "ky"
            ? "АКАДЕМИЯ"
            : "ACADEMY"}
        </h1>
        <p>
          {language === ""
            ? "Лицензированная IT академия в Бишкеке"
            : language === "ky"
            ? "Лицензияланган IT академия Бишкекте"
            : "Licensed IT academy in Bishkek"}
        </p>
        <button onClick={handleContactClick}>
          {language === ""
            ? "Оставить заявку"
            : language === "ky"
            ? "Калыпты билдирүү"
            : "Leave an application"}
        </button>
      </div>
    </div>
  );
};
export default Himages;
