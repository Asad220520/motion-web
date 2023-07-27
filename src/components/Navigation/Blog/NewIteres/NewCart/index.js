import React from "react";
import news from "../../../../../img/new.png";
import "./index.scss";
const NewCart = () => {
  return (
    <div id="newCart">
      <div className="newCart">
        <div className="newCart__img">
          <img src={news} alt="" />
        </div>
        <div className="newCart__title">
          <h1>
            Браузер Chrome на iOS позволит добавлять веб-приложения на рабочий
            стол
          </h1>
          <p>Приложения</p>
          <span>10:30 | 15 июля, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default NewCart;
