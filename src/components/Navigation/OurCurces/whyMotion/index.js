import React from "react";
import "./index.scss";
import smail from "../../../../img/smiling.png";
import roun from "../../../../img/roun.png";
import chek from "../../../../img/check.png";
import roket from "../../../../img/rocket .png";

const Whymotion = () => {
  return (
    <div id="why">
      <div className="container">
        <div className="why">
          <h1>
            Почему <span>MOTIN WEB IT ACADEMY </span>- лучший выбор для обучения
          </h1>
          <div className="why--text">
            <div className="why--text__block">
              <img src={smail} alt="img" />
              <div className="why--text__block--group">
                <h2>Обучение с нуля до Junior</h2>
                <p>
                  На курсе вы научитесь создавать интерфейсы веб-сервисов
                  с помощью языков программирования и дополнительных технологий.
                  Сможете разрабатывать планировщики задач, мессенджеры,
                  интернет-магазины
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img className="img" src={roun} alt="img" />
              <div className="why--text__block--group">
                <h2>Обучение с нуля до Junior</h2>
                <p>
                  На курсе вы научитесь создавать интерфейсы веб-сервисов
                  с помощью языков программирования и дополнительных технологий.
                  Сможете разрабатывать планировщики задач, мессенджеры,
                  интернет-магазины
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={chek} alt="img" />
              <div className="why--text__block--group">
                <h2>Обучение с нуля до Junior</h2>
                <p>
                  На курсе вы научитесь создавать интерфейсы веб-сервисов
                  с помощью языков программирования и дополнительных технологий.
                  Сможете разрабатывать планировщики задач, мессенджеры,
                  интернет-магазины
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={roket} alt="img" />
              <div className="why--text__block--group">
                <h2>Обучение с нуля до Junior</h2>
                <p>
                  На курсе вы научитесь создавать интерфейсы веб-сервисов
                  с помощью языков программирования и дополнительных технологий.
                  Сможете разрабатывать планировщики задач, мессенджеры,
                  интернет-магазины
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whymotion;
