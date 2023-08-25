import React, { useContext } from "react";
import "./index.scss";
import { LanguageContext } from "../../../../context";
const Question = ({ dark }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div
      style={{
        background: dark ? "#1c1c1c" : "",
      }}
      id="question"
    >
      <div className="container">
        <div data-aos="fade-up" className="question">
          <div className="question__title">
            <h1>
              {language === "" ? (
                <>
                  <p
                    style={{
                      color: dark ? "#fff" : "",
                    }}
                  >
                    Зачем вам
                  </p>
                  <span>IT-КЛУБ?</span>
                </>
              ) : language === "ky" ? (
                <>
                  <p
                    style={{
                      color: dark ? "#fff" : "",
                    }}
                  >
                    Эмне үчүн
                  </p>{" "}
                  <br />
                  <span>IT-КЛУБ?</span>
                </>
              ) : (
                <>
                  <p
                    style={{
                      color: dark ? "#fff" : "",
                    }}
                  >
                    Why do you need
                  </p>{" "}
                  <br />
                  <span>IT-Club?</span>
                </>
              )}
            </h1>
          </div>
          <div className="question__porag">
            <p
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              {language === "" ? (
                <>
                  Анализируя курсы в Бишкеке мы решили открыть клуб, который
                  поможет студентам подготовиться к реальным проектам. Участники
                  не заканчивая курс смогут понять как работать в команде,
                  научатся презентовать свои работы и поймут какие проблемы
                  бывают на стадии разработки
                </>
              ) : language === "ky" ? (
                "Бишкектеги курстарды талдап көрүп, ошол клуб ачууну чечтик студенттерге реалдуу долбоорлорду даярдоого жардам берет. Мүчөлөр  курсту бүтүрбөстөн, алар командада иштөөнү түшүнө алышат, өз ишин көрсөтүүнү үйрөнүү жана кандай көйгөйлөрдү түшүнүү иштеп чыгууда"
              ) : (
                "Analyzing the courses in Bishkek, we decided to open a club that will help students prepare for real projects. Participants, even without completing the course, will be able to understand how to work in a team, learn to present their work, and understand the problems that arise during the development stage."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
