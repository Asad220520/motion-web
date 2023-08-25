import React from "react";
import "./index.scss";
import "./media.scss";

const Why = ({ language, el, dark }) => {
  return (
    <div className="container">
      <div className="why">
        <div className="disain--whywe">
          <h2
            style={{
              color: dark ? "#fff" : "",
            }}
          >
            {language === ""
              ? "Почему"
              : language === "ky"
              ? "Эмне үчүн"
              : "Why"}{" "}
            <span>MOTION WEB IT ACADEMY?</span>
          </h2>
          <div className="disain--whywe__text">
            <p>
              <p
                style={{
                  color: dark ? "#fff" : "",
                }}
              >
                {el.why_we}
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
