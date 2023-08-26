import React, { useState } from "react";
import "./index.scss";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const ProgramKurs = ({ el, dark, language }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      style={{
        background: dark ? "#000" : "",
        borderBottom: dark ? "1px solid #fff" : "",
      }}
      id="program"
    >
      <div className="container">
        <div className="program">
          <div className="program--title">
            <h3>
              {language === ""
                ? "Программа курса"
                : language === "ky"
                ? "Курс программасы"
                : "Course program"}
            </h3>
          </div>
          <div className="program--group">
            {el.program?.map((programEl, i) => (
              <div
                key={i}
                style={{
                  transition: ".4s",
                  height: openIndex === i ? "100%" : "100px",
                  overflow: openIndex === i ? "" : "hidden",
                  borderRadius: openIndex === i ? "30px" : "30px",
                }}
                className="program--group__block"
              >
                <div
                  onClick={() => toggleOpen(i)}
                  className="program--group__block--ims"
                >
                  <div
                    style={{
                      alignItems: openIndex === i ? "start" : "center",
                    }}
                    className="program--group__block--ims__img"
                  >
                    <div
                      style={{
                        alignItems: openIndex === i ? "start" : "center",
                      }}
                      className="program--group__block--ims__img--vden"
                    >
                      <h3>{programEl.title}</h3>
                    </div>
                    {openIndex === i ? (
                      <GoChevronUp style={{ fontSize: "25px" }} />
                    ) : (
                      <GoChevronDown style={{ fontSize: "25px" }} />
                    )}
                  </div>
                  <div
                    style={{
                      transition: ".4s ease-in-out",
                      opacity: openIndex === i ? "1" : "0",
                    }}
                    className="program--group__block--ims__text"
                  >
                    <div className="program--group__block--ims__text--grou">
                      <p>{programEl.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramKurs;
