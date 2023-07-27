import React from "react";
import puthon from "../../../../img/python.png";
import { Link } from "react-router-dom";
const Paython = () => {
  return (
    <div id="front">
      <div className="front">
        <div className="front__img">
          <img src={puthon} alt="" />
        </div>{" "}
        <div className="front__title">
          <p>
            Python - это высокоуровневый язык программирования, который
            изначально был разработан для удобочитаемого и лаконичного кода. Он
            предлагает широкий спектр возможностей и применяется в различных
            областях, включая веб-разработку, научные исследования, анализ
            данных, искусственный интеллект, разработку игр и многое другое. Вот
            некоторые ключевые особенности Python:
            <Link>Далее</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paython;
