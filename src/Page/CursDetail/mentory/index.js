import React from "react";
import "./index.scss";
import InstaVido from "../InstaVideo";
const Mentory = ({ el, language, dark }) => {
  return (
    <div
      style={{
        background: dark ? "#000" : "",
        borderBottom: dark ? "1px solid #fff" : "",
      }}
      id="mentory"
    >
      <div className="container">
        <div className="mentory">
          {language === "" ? (
            <h2
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              <span>
                Лучшие менторы <br />
              </span>{" "}
              по всему Кыргызстану
            </h2>
          ) : language === "ky" ? (
            <h2>
              <span>
                Кыргызстан боюнча <br />
              </span>{" "}
              мыкты менторлор
            </h2>
          ) : (
            <h2>
              <span>
                Best mentors <br />
              </span>{" "}
              throughout Kyrgyzstan
            </h2>
          )}

          <div className="mentory--group">
            {el.mentors?.map((el) => (
              <div className="mentory--group__block ">
                <img src={el.photo} alt="img" />
                <div className="mentory--group__block--text">
                  <h3
                    style={{
                      color: dark ? "#fff" : "",
                    }}
                  >
                    {el.first_name} {el.last_name}
                  </h3>
                  <p
                    style={{
                      color: dark ? "#fff" : "",
                    }}
                  >
                    {el.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <InstaVido />
        </div>
      </div>
    </div>
  );
};

export default Mentory;
