import React from "react";
import "./index.scss";
import "./media.scss";

const Why = ({ language, el }) => {
  return (
    <div className="container">
      <div className="why">
        <div className="disain--whywe">
          <h2>
            {language === "" ? "Почему" : language === "ky" ? "Кандай" : "Why"}{" "}
            <span>MOTION WEB IT ACADEMY?</span>
          </h2>
          <div className="disain--whywe__text">
            <p>
              <p>{el.why_we}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
