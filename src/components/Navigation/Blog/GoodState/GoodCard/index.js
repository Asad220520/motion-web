import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const GoodCard = ({ el }) => {
  return (
    <div id="goodCard">
      <div className="container">
        <div className="goodCard">
          <div className="goodCard__img">
            <Link to={`/detailsIscl/${el.id}`}>
              <img src={el.media.map((el) => el.media)} alt="" />
            </Link>
          </div>
          <div data-aos="flip-left" className="goodCard__title">
            <h3>{el.title}</h3>
            <p>{el.descriptions.map((el) => el.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;
