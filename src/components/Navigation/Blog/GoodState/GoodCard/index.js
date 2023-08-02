import React from "react";
import "./index.scss";
import state from "../../../../../img/state.svg";
const GoodCard = ({ el }) => {
  return (
    <div id="goodCard">
      <div className="container">
        <div className="goodCard">
          <div className="goodCard__img">
            <img src={state} alt="" />
          </div>
          <div className="goodCard__title">
            <h3>Тестировщик в IT: узнай, подходит ли тебе профессия</h3>
            <p>
              Далеко не все айтишники – программисты, которые пишут код. Можно
              не знать ни одного языка программирования, но при этом быть
              незаменимым специалистом в ИТ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
