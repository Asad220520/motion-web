import React from "react";
import license from "../../../../img/license.png";
import './index.scss'
const License = () => {
  return (
    <div id="license">
      <div className="container">
        <div className="license">
          <div className="license__title">
            <h1>Наша лицензия</h1>
            <p>
              Наша программа по IT прошла проверку в Министерстве образования
              КР, что доказывает Motion web имеет право на:
            </p>
            <div className="license__title-wrap">
              <h2>01.</h2>
              <p>Обучать IT</p>
            </div>
            <div className="license__title-wrap">
              <h2>02.</h2>
              <p>Направлять на обучение и стажировку за границу</p>
            </div>
          </div>
          <div className="license__img">
            <img src={license} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
