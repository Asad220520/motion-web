import React from "react";
import "./index.scss";
const GoodCard = ({ el }) => {
  return (
    <div id="goodCard">
      <div className="container">
        <div className="goodCard">
          <div className="goodCard__img">
            <img src={el.media.map((el) => el.media)} alt="" />
          </div>
          <div className="goodCard__title">
            <h3>{el.title}</h3>
            <p>{el.descriptions.map((el) => el.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
