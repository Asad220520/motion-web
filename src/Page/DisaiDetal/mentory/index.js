import React from "react";
import "./index.scss";
import "./media.scss";
import men from "../../../img/men.png";
import vid from "../../../img/videoM.png";
const Mentory = ({ el, language }) => {
  return (
    <div id="mentory">
      <div className="container">
        <div className="mentory">
          <h2>
            <span>
              {language === ""
                ? "Лучшие менторы по всему Кыргызстану"
                : language === "ky"
                ? "Кыргызстан боюнча мыкты менторлор"
                : "Best mentors throughout Kyrgyzstan"}
            </span>
          </h2>
          <div className="mentory--group">
            {el.mentors?.map((el) => (
              <>
                <div className="mentory--group__block ">
                  <div className="mentory--group__block--img">
                    <img src={el.photo} alt="img" />
                  </div>
                  <h3>
                    {el.first_name} {el.last_name}
                  </h3>
                  <p>{el.description}</p>
                </div>
              </>
            ))}
          </div>
          <div className="mentory--samai">
            <div className="mentory--samai__text">
              <h3>
                {language === ""
                  ? "Самая оперативная и качественная обратная связь"
                  : language === "ky"
                  ? "Эң эффективдүү жана сапаттуу пикир"
                  : "Most prompt and high-quality feedback"}
              </h3>
              <p>
                {language === ""
                  ? "Наши менторы дают подробный разбор ваших работ, отмечают ошибки и помогают их исправить."
                  : language === "ky"
                  ? "Биздин насаатчылар ишиңизге деталдуу талдоо берип, каталарды көрсөтүп, аларды оңдоого жардам берет."
                  : "Our mentors provide detailed analysis of your work, highlight mistakes, and help fix them."}
              </p>
            </div>

            <div className="mentory--samai__group">
              <img src={vid} alt="img" />
              <img src={vid} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentory;
