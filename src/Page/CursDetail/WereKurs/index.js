import React from "react";
import "./index.scss";
import "./media.scss";
import neg from "../../../img/neg.png"; // Импортируйте ваши изображения
import img1 from "../../../img/neg2.svg";
import img2 from "../../../img/neg3.svg";

const WereKurs = ({ el, dark, language }) => {
  const images = [neg, img1, img2]; // Массив изображений

  return (
    <div className="container">
      <div className="were">
        <h1
          style={{
            color: dark ? "#fff" : "",
          }}
        >
          {language === ""
            ? "Кому подойдёт этот курс"
            : language === "ky"
            ? "Бул курс кимдер үчүн?"
            : "Who is this course for?"}
        </h1>
        <div className="were--group">
          {el.for_who?.map((item, index) => {
            const imgIndex = index % images.length; // Вычисляем индекс изображения
            return (
              <div key={index} className="were--group__block">
                <div className="were--group__block--img">
                  <img src={images[imgIndex]} alt="img" />
                </div>
                <h3
                  style={{
                    color: dark ? "#fff" : "",
                  }}
                >
                  {item.for_who.split(":")[0]}
                </h3>
                <p
                  style={{
                    color: dark ? "#fff" : "",
                  }}
                >
                  {item.for_who}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WereKurs;
