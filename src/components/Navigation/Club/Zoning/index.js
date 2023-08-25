import React, { useContext } from "react";
import "./index.scss";
import { LanguageContext } from "../../../../context";
const Zoning = ({ dark }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div
      style={{
        background: dark ? "#1c1c1c" : "",
      }}
      id="zoning"
    >
      <div className="container">
        <div
          style={{
            background: dark ? "#000" : "",
            border: dark ? '1px solid #fff' : ''
          }}
          className="zoning"
        >
          <div className="zoning__block">
            <p>{language === "" ? "3" : language === "ky" ? "3" : "3"}</p>
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
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
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              {language === ""
                ? "Каждую неделю"
                : language === "ky"
                ? "жума сайын"
                : "Every week"}
            </span>
          </div>
          <div className="zoning__block">
            <p>{language === "" ? "3" : language === "ky" ? "3" : "3"}</p>
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
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
