import React from "react";
import "./index.scss";
const Question = () => {
  return (
    <div id="question">
      <div className="container">
        <div data-aos="fade-up" className="question">
          <div className="question__title">
            <h1>
              Зачем вам <br /> <span>IT-КЛУБ?</span>
            </h1>
          </div>
          <div className="question__porag">
            <p>
              Анализируя курсы в Бишкеке мы решили открыть клуб, который поможет
              студентам подготовиться к реальным проектам. Участники
              не заканчивая курс смогут понять как работать в команде, научатся
              презентовать свои работы и поймут какие проблемы бывают на стадии
              разработки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
