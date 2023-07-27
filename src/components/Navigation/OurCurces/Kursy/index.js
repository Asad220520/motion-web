import React, { useEffect, useState } from "react";
import "./index.scss";
import beg1 from "../../../../img/бегу.png";
import beg2 from "../../../../img/бегу 2.png";
import front from "../../../../img/front.png";
import boy from "../../../../img/boy.png";
import { useNavigate } from "react-router-dom";

const Kursy = () => {
  const nav = useNavigate(-1)
  return (
    <div className="kursy">
      <div className="">
        <marquee className="begu">
          <img src={beg1} alt="img" />
        </marquee>
        <marquee className="begu2" behavior="" direction="">
          <img src={beg2} alt="img" className="img2" />
        </marquee>
      </div>

      <div className="kursy--izyk">
        <div className="kursy--izyk__front">
          <div className="kursy--izyk__front--block">
            <img src={front} alt="img" />
          </div>
          <div className="kursy--izyk__front--group">
            <h2>UX/UI DESIGN</h2>
            <p>
              Бэкенд-разработчик — это специалист, который отвечает
              за внутреннюю и вычислительную логику веб-сайта
            </p>
            <div className="kursy--izyk__front--group__btns">
              <button>Figma</button>
              <button>Adobe XD</button>
              <button>Photoshop</button>
              <button>+Английский</button>
              <button>3 месяцев</button>
            </div>
            <div className="kursy--izyk__front--group__btn">
              <button onClick={()=> nav("/front")} className="btn1">Подробнее</button>
              <button className="btn2">Оставить заявку</button>
            </div>
          </div>
        </div>
        <div className="kursy--izyk__front">
          <div className="kursy--izyk__front--block">
            <img src={front} alt="img" />
          </div>
          <div className="kursy--izyk__front--group">
            <h2>UX/UI DESIGN</h2>
            <p>
              Бэкенд-разработчик — это специалист, который отвечает
              за внутреннюю и вычислительную логику веб-сайта
            </p>
            <div className="kursy--izyk__front--group__btns">
              <button>Figma</button>
              <button>Adobe XD</button>
              <button>Photoshop</button>
              <button>+Английский</button>
              <button>3 месяцев</button>
            </div>
            <div className="kursy--izyk__front--group__btn">
              <button className="btn1">Подробнее</button>
              <button className="btn2">Оставить заявку</button>
            </div>
          </div>
        </div>
        <div className="kursy--izyk__front">
          <div className="kursy--izyk__front--block">
            <img src={front} alt="img" />
          </div>
          <div className="kursy--izyk__front--group">
            <h2>UX/UI DESIGN</h2>
            <p>
              Бэкенд-разработчик — это специалист, который отвечает
              за внутреннюю и вычислительную логику веб-сайта
            </p>
            <div className="kursy--izyk__front--group__btns">
              <button>Figma</button>
              <button>Adobe XD</button>
              <button>Photoshop</button>
              <button>+Английский</button>
              <button>3 месяцев</button>
            </div>
            <div className="kursy--izyk__front--group__btn">
              <button className="btn1">Подробнее</button>
              <button className="btn2">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>

      <div className="kursy--block">
        <div className="kursy--block__boy">
          <img src={boy} alt="img" />
          <p>Kрууутоо...</p>
        </div>
        <div className="kursy--block__text">
          <div className="kursy--block__text--group">
            <h2>ПРОБНЫЕ УРОКИ</h2>
            <p>
              Прочуствуй дружную атмосферу нашей академии! Оставь заявку
              на пробный урок и стань ближе к своей цели!
            </p>
          </div>
          <div className="kursy--block__text--group2">
            <h2>18 февраля в 18:00 мастер класс по FRONTEND</h2>
            <button>Записаться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kursy;
