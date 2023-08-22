import React, { useContext } from "react";
import "./index.scss";
import { LanguageContext } from "../../../../context";
const Zoning = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="zoning">
      <div className="container">
        <div className="zoning">
          <div className="zoning__block">
            <p>{language === "" ? "3" : language === "ky" ? "3" : "3"}</p>
            <span>
              {language === "" ? "Месяца" : language === "ky" ? "Ай" : "Months"}
            </span>
          </div>
          <div className="zoning__block">
            <p>
              {language === ""
                ? "Talking club"
                : language === "ky"
                ? "Сүйлөшүү клубу"
                : "Talking club"}
            </p>
            <span>
              {language === ""
                ? "Каждую неделю"
                : language === "ky"
                ? "жумад сайын"
                : "Every week"}
            </span>
          </div>
          <div className="zoning__block">
            <p>{language === "" ? "3" : language === "ky" ? "3" : "3"}</p>
            <span>
              {language === ""
                ? "Проекта"
                : language === "ky"
                ? "Проект"
                : "Projects"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zoning;
