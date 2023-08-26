import React from "react";
import "./index.scss";
import "./media.scss";
import log from "../../../img/boy.png";

const SvoiSait = ({ language }) => {
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
    footer.style.padding = "50px 0";
  };
  return (
    <div className="container">
      <div className="sait">
        <div className="sait--block">
          <h2>
            {language === ""
              ? "Сделай свой первый дизайн"
              : language === "ky"
              ? "Биринчи дизайныңызды жасаңыз"
              : "Make your first design"}
          </h2>
          <p>
            {" "}
            {language === ""
              ? "Оставляй зявку и БЕСПЛАТНО получи пробный урок"
              : language === "ky"
              ? "Сурам калтырыңыз жана АКЫСЫЗ сыноо сабак алыңыз"
              : "Leave a request and get a FREE trial lesson"}
          </p>
        </div>
        <di v className="sait--group">
          <div className="sait--group__boy">
            <img src={log} alt="img" />
            <p>
              {" "}
              {language === ""
                ? "Попрубуй!"
                : language === "ky"
                ? "Попрубуй!"
                : "Try!"}
            </p>
          </div>
          <div className="sait--text">
            <div className="sait--text__input">
              <input
                type="text"
                placeholder={
                  language === ""
                    ? "Имя"
                    : language === "ky"
                    ? "атыңыз"
                    : "Name"
                }
              />
              <input
                type="text"
                placeholder={
                  language === ""
                    ? "Номер"
                    : language === "ky"
                    ? "Номер"
                    : "phone"
                }
              />
            </div>
            <div className="sait--text__group">
              <input type="checkbox" />
              <p>
                {" "}
                {language === ""
                  ? "Я соглашаюсь на обработку персональных данных!"
                  : language === "ky"
                  ? "Мен жеке маалыматтарды иштетүүгө макулмун"
                  : "I agree to the processing of personal data"}
              </p>
            </div>
            <button onClick={handleContactClick}>
              {" "}
              {language === ""
                ? "Оставить заявку"
                : language === "ky"
                ? "Билдирүү калтыруу"
                : "Submit your application"}
            </button>
          </div>
        </di>
      </div>
    </div>
  );
};

export default SvoiSait;
