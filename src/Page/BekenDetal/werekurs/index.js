import React from "react";
// import "./index.scss";
import neg from "../../../img/neg.png";

const WereKurs = ({ el }) => {
  return (
    <div className="container">
      <div className="were">
        <h1>Кому подойдёт этот курс</h1>
        <div className="were--group">
          <div className="were--group__block ">
            <div className="were--group__block--img">
              <img src={neg} alt="img" />
            </div>
            <h3>Новичкам</h3>
            <p>Научитесь с нуля разрабатывать интерфейсы. Узнаете, как с помощью дизайна направлять пользователей и решать задачи</p>
          </div>
          <div className="were--group__block">
            <div className="were--group__block--img">
              <img src={neg} alt="img" />
            </div>
            <h3>Новичкам</h3>
            <p>
              Научитесь с нуля разрабатывать интерфейсы. Узнаете, как с помощью
              дизайна направлять пользователей и решать задачи
            </p>
          </div>
          <div className="were--group__block">
            <div className="were--group__block--img ">
              <img src={neg} alt="img" />
            </div>
            <h3>Новичкам</h3>
            <p>
              Научитесь с нуля разрабатывать интерфейсы. Узнаете, как с помощью
              дизайна направлять пользователей и решать задачи
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WereKurs;
