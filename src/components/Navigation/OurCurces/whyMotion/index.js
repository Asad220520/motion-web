import React, { useContext } from "react";
import "./index.scss";
import "./media.scss";
import smail from "../../../../img/smiling.png";
import roun from "../../../../img/roun.png";
import chek from "../../../../img/check.png";
import roket from "../../../../img/rocket .png";
import { LanguageContext } from "../../../../context";

const Whymotion = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="why">
      <div className="container">
        <div className="why">
          <h1>
            {language === "" ? "Почему" : language === "ky" ? "Кимге" : "Why"}{" "}
            <span>MOTION WEB IT ACADEMY </span>
            {language === ""
              ? "- лучший выбор для обучения"
              : language === "ky"
              ? "- окутууга чыгыш кылган жетекшиси"
              : "- the best choice for learning"}
          </h1>
          <div className="why--text">
            <div className="why--text__block">
              <img src={smail} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Обучение с нуля до Junior"
                    : language === "ky"
                    ? "Нолдонуштан Juniorга чейинки окутуу"
                    : "Learning from scratch to Junior"}
                </h2>
                <p>
                  {language === ""
                    ? "На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков программирования и дополнительных технологий. Сможете разрабатывать планировщики задач, мессенджеры, интернет-магазины"
                    : language === "ky"
                    ? "Курста сиз уеб-сервис интерфейсдерини тил программалары жана кошумча технологияларды колдонуп жасай аласыз. Ишини пландоочулуктарды, мессенджерлери, интернет-дүкөндөрдү дайындай айырбастай аласыз"
                    : "In this course, you will learn to create interfaces for web services using programming languages and additional technologies. You will be able to develop task schedulers, messengers, online stores."}
                </p>
              </div>
            </div>
            {/* ... Repeat similar code blocks for other items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whymotion;
