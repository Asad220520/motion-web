import React from "react";
import "./index.scss";
const Galerea = () => {
  return (
    <div id="galerea">
      <div className="container">
        <div className="galerea">
          <div className="galerea__block a">
            <h1 className="a">Галерия</h1>
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
          <div className="galerea__block b">
            <p className="b">Показать ещё</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerea;
