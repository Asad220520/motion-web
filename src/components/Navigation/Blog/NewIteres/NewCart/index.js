import React from "react";
import "./index.scss";
const NewCart = ({ ne }) => {
  return (
    <div id="newCart">
      <div className="newCart">
        <div className="newCart__img">
          <img src={ne.media.map(el => el.media)} alt="" />
        </div>
        <div className="newCart__title">
          <h1>{ne.descriptions.map(el => el.description)}</h1>
          <p>Приложения</p>
          <span> {ne.created_at}</span>
        </div>
      </div>
    </div>
  );
};

export default NewCart;
