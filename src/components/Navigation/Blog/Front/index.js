import React from "react";
import jsBlog from "../../../../img/jsBlog.png";
import "./index.scss";
import { Link } from "react-router-dom";
const Front = () => {
  return (
    <div id="front">
      <div className="front">
        <div className="front__img">
          <img src={jsBlog} alt="" />
        </div>{" "}
        <div className="front__title">
          <p>
            Веб-разработка: JavaScript является одним из основных языков
            программирования для веб-разработки. Он позволяет добавлять
            динамическое поведение и интерактивность на веб-страницы. С помощью
            JavaScript вы можете манипулировать элементами страницы,
            обрабатывать события, выполнять валидацию форм, создавать анимации и
            многое другое.
            <Link to={"/detailfront"}>Далее</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Front;
