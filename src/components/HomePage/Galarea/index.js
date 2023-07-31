import React from "react";
import "./index.scss";
const Galerea = () => {
  return (
    <div id="galerea">
      <div className="container">
        <div className="galerea">
          <div className="galerea__block">
            <h1>Галерия</h1>
          </div>
          <div className="galerea__block">
            <div className="galerea__block-img"></div>
          </div>
          <div className="galerea__block">
            <div className="galerea__block-img"></div>
          </div>
          <div className="galerea__block">
            <div className="galerea__block-img"></div>
          </div>
          <div className="galerea__block">
            <div className="galerea__block-img"></div>
          </div>
          <div className="galerea__block">
            <p>Показать ещё</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerea;
