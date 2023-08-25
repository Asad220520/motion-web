import React, { useContext } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../../../context";

const Kursy = ({ el, dark }) => {
  const nav = useNavigate();
  const { language } = useContext(LanguageContext);
  return (
    <div id="kursy">
      <div className="izyk">
        <div className="izyk--front">
          <div
            style={{
              background: dark ? "rgba(171, 168, 168, 0.8)" : "",
            }}
            data-aos="zoom-in"
            className="izyk--front__block"
          >
            <img
              key={el.id}
              className="izyk--front__block--img"
              src={el.images[0]?.image || ""}
              alt="img"
            />
          </div>
          <div
            style={{
              background: dark ? "#000" : "",
            }}
            className="izyk--front__group"
          >
            <h2>{el.name}</h2>
            <p>{el.description}</p>
            <div className="izyk--front__group--btns">
              {el.courses_stacks.map((el) => (
                <button
                  style={{
                    color: dark ? "#fff" : "",
                  }}
                  key={el.id}
                >
                  {el.stack}
                </button>
              ))}
            </div>
            <div className="izyk--front__group--btn">
              <button onClick={() => nav(`/curse/${el.id}`)} className="btn1">
                {language === ""
                  ? "Подробнее"
                  : language === "ky"
                  ? "Көбүрөөк"
                  : "Details"}
              </button>
              <button data-aos="flip-left" className="btn2">
                {language === ""
                  ? "Оставить заявку"
                  : language === "ky"
                  ? "Байланыш калтыруу"
                  : "Submit Application"}
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kursy;
