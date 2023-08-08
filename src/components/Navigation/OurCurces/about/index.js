import React from "react";
import "./index.scss";
import "./media.scss"

const AboutCurs = () => {
  return (
    <div className="container">
      <div className="aboutcurs">
        <div className="aboutcurs--block">
          <h1>О НАС</h1>
          <div className="aboutcurs--block__text">
            <h3>
              Motion Web IT academy — это международный образовательный проект,
              который готовит специалистов-практиков IT сферы.
            </h3>
            <p>
              Благодаря нашему постоянному развитию мы разработали эффективные
              программы для подготовки IT-специалистов. Нам удалось соединить
              лучшие практики офлайн — и онлайн-образования и таким образом
              достичь высоких результатов.
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCurs;
