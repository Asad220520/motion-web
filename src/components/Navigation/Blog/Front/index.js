import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Front = ({ el }) => {
  const nav = useNavigate();
  return (
    <div id="front">
      <div className="front">
        <div className="front__img">
          <img src={el.media[0].media} alt="alt" />
        </div>
        <div className="front__title">
          <p>
            {el.descriptions.length > 0 &&
              `${el.descriptions[0].description.slice(0, 150)}${
                el.descriptions[0].description.length > 50 ? "..." : ""
              }`}
          </p>
          <button onClick={() => nav(`/detailsIscl/${el.id}`)}>Далее</button>
        </div>
      </div>
    </div>
  );
};

export default Front;
