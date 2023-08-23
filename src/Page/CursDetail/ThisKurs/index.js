import React from "react";
import "./index.scss";
import "./media.scss";
const ThisKurs = ({ el, language }) => {
  return (
    <div id="this">
      <div className="container">
        <div className="this">
          <h2>
            {language === ""
              ? "Что даст вам этот курс"
              : language === "ky"
              ? "Бул курс сизге эмне берет"
              : "What this course will give you"}
          </h2>
          <div className="this--group">
            {el.what_give?.map((item, index) => (
              <div className="this--group__block" key={index}>
                <div className="this--group__block--text">
                  <h2>{(index + 1).toString().padStart(2, "0")}.</h2>
                  <h3>{item.reason}</h3>
                </div>
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisKurs;
