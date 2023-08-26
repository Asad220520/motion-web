import React, { useState } from "react";
import "./index.scss";
import "./media.scss";
import { HiXMark } from "react-icons/hi2";
// import { BiFontSize } from "react-icons/bi";

const Obusheni = ({ el, language }) => {
  const [online, setOnline] = useState(false);
  const [ofline, setOfline] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOfline(false);
          setOnline(false);
        }}
        style={{
          display: ofline || online ? "block" : "none",
          width: "100%",
          height: "900vh",
          background: "#000000cd",
          position: "absolute",
          top: "0",
          zIndex: "4",
        }}
      ></div>
      <div className="container">
        <div className="obucheni">
          <div className="obucheni--group">
            <div className="obucheni--group__block">
              {el.durations?.map((el, i) => (
                <div className="obucheni--group__block-b" key={i}>
                  <p>{i % 2 === 0 ? el.duration : null}</p>
                  <h1>{i % 2 === 1 ? el.duration : null}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="obucheni--modal">
            <button
              onClick={() => {
                setOfline(!ofline);
                setOnline(false);
              }}
              className="obucheni--modal__ofline"
            >
              <h2>
                {language === ""
                  ? "Офлайн"
                  : language === "ky"
                  ? "Оффлайн"
                  : "Offline"}
              </h2>
            </button>
            <button
              onClick={() => {
                setOnline(!online);
                setOfline(false);
              }}
              className="obucheni--modal__online"
            >
              <h2>
                {language === ""
                  ? "Онлайн"
                  : language === "ky"
                  ? "Онлайн"
                  : "Online"}
              </h2>
            </button>
            <div
              style={{
                display: ofline ? "block" : "none",
              }}
              className="ofli"
            >
              <HiXMark
                className="icon"
                onClick={() => {
                  setOfline(false);
                }}
                style={{
                  position: "absolute",
                  right: "30px",
                  top: "30px",
                  fontSize: "35px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
              <h2>
                {language === ""
                  ? "Офлайн"
                  : language === "ky"
                  ? "Оффлайн"
                  : "Offline"}
              </h2>
              <ol>
                <li>
                  {language === ""
                    ? " В одной группе обучается всего 10-12-14 студентов стандартной формы."
                    : language === "ky"
                    ? "Бир тайпада стандарттык формадагы 10-12-14 гана окуучу бар."
                    : "In one group, there are only 10-12-14 students of the standard form."}
                </li>
                <li>
                  {language === ""
                    ? "Занятия будут проходить на кыргызском языке."
                    : language === "ky"
                    ? "Сабактар ​​кыргыз тилинде өткөрүлөт."
                    : "Classes will be held in the Kyrgyz language."}
                </li>
                <li>
                  {language === ""
                    ? "В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22 (OPEN SPACE)."
                    : language === "ky"
                    ? "Академияда класстан тышкаркы окууну практикалоо мүмкүнчүлүгү бар 09дан 22ге чейин (АЧЫК мейкиндик)."
                    : "The Academy has the opportunity to practice extracurricular learning in the period from 09 to 22 (OPEN SPACE)."}
                </li>
              </ol>
            </div>

            <div
              style={{
                display: online ? "block" : "none",
              }}
              className="onli"
            >
              <HiXMark
                className="icon"
                onClick={() => {
                  setOnline(false);
                }}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                  fontSize: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
              <h2>
                {language === ""
                  ? "Онлайн"
                  : language === "ky"
                  ? "Онлайн"
                  : "Online"}
              </h2>
              <ol>
                <li>
                  {language === ""
                    ? " В одной группе обучается всего 10-12-14 студентов стандартной формы."
                    : language === "ky"
                    ? "Бир тайпада стандарттык формадагы 10-12-14 гана окуучу бар."
                    : "In one group, there are only 10-12-14 students of the standard form."}
                </li>
                <li>
                  {language === ""
                    ? "Занятия будут проходить на кыргызском языке."
                    : language === "ky"
                    ? "Сабактар ​​кыргыз тилинде өткөрүлөт."
                    : "Classes will be held in the Kyrgyz language."}
                </li>
                <li>
                  {language === ""
                    ? "В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22 (OPEN SPACE)."
                    : language === "ky"
                    ? "Академияда класстан тышкаркы окууну практикалоо мүмкүнчүлүгү бар 09дан 22ге чейин (АЧЫК мейкиндик)."
                    : "The Academy has the opportunity to practice extracurricular learning in the period from 09 to 22 (OPEN SPACE)."}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Obusheni;
