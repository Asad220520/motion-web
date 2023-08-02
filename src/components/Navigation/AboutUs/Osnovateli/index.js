import React from "react";
import "./index.scss";
import person from "../../../../img/person.png";
import person2 from "../../../../img/person2.png";
const Osnovateli = () => {
  return (
    <div id="osnovateli">
      <div className="container">
        <div className="osnovateli">
          <div className="osnovateli__block">
            <div className="osnovateli__block-title">
              <h1>Основатели</h1>
              <p>
                Motion web IT академия была <br /> основана в апреле 2021 года <br />
                по инициативе Курманбека Жоошбаева и Аскерова Канатбека
              </p>
            </div>
            <div className="osnovateli__block-img">
              <div>
                <img src={person} alt="" />
                <h1>Курманбек Жоошбаев</h1>
                <p>Основатель</p>
              </div>
              <div>
                <img src={person2} alt="" />
                <h1>Канатбек Аскеров</h1>
                <p>Сооснователь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osnovateli;
