import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const NewCart = ({ ne }) => {
  return (
    <div id="newCart">
      <div className="newCart">
        <div data-aos="flip-left" className="newCart__img">
          <Link to={`/detailsIscl/${ne.id}`}>
            <img src={ne.media.map((el) => el.media)} alt="" />
          </Link>
        </div>
        <div className="newCart__title">
          <h1>{ne.descriptions.map((el) => el.description)}</h1>
          <p>Приложения</p>
          <span> {ne.created_at}</span>
        </div>
      </div>
    </div>
  );
};

export default NewCart;
