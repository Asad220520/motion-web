import React from "react";
import club1 from "../../../../img/club1.png";
import club21 from "../../../../img/club2.1.png";
import club22 from "../../../../img/club2.2.png";
import club3 from "../../../../img/club3.png";
import club4 from "../../../../img/club4.png";
import club51 from "../../../../img/club5.1.png";
import club52 from "../../../../img/club5.2.png";
import "./index.scss";
const WhatYouGet = () => {
  return (
    <div id="whatYouGet">
      <div className="container">
        <div className="whatYouGet">
          <div className="whatYouGet__bloc">
            <h1>
              Что вы <br /> получете
            </h1>
          </div>
          <div className="whatYouGet__block">
            <div className="whatYouGet__block-wrap">
              <img src={club1} alt="" />
            </div>
            <p>Расширение кругозоров в сфере IT</p>
          </div>
          <div className="whatYouGet__block">
            <div className="whatYouGet__block-wrap">
              <img src={club21} alt="" />
              <img src={club22} alt="" />
            </div>
            <p>Улучшение английского языка</p>
          </div>
          <div className="whatYouGet__block">
            <div className="whatYouGet__block-wrap">
              <img src={club3} alt="" />
            </div>
            <p>Работа с командой</p>
          </div>
          <div className="whatYouGet__block">
            <div className="whatYouGet__block-wrap">
              <img src={club4} alt="" />
            </div>
            <p>Портфолио</p>
          </div>
          <div className="whatYouGet__block">
            <div className="whatYouGet__block-wrap">
              <img src={club51} alt="" />
              <img src={club52} alt="" />
            </div>
            <p>Работа с реальными проектами</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
