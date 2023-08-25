import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import "./media.scss";
import { LanguageContext } from "../../../../context";
// import { BASE_URL } from "../../../../API";
// import axios from "axios";

const Vupusk = ({ dark }) => {
  //   const [bob, setBob] = useState([]);
  //   useEffect(() => {
  //     axios(`${BASE_URL}/courses/courses/`).then((res) =>
  //       setBob(res.data.results)
  //     );
  //   }, []);
  //   console.log('vupusk' ,bob);
  const { language } = useContext(LanguageContext);

  return (
    <div id="zoning">
      <div className="container">
        <div
          style={{
            background: dark ? "#000" : "",
            border: dark ? "1px solid #fff" : "",
          }}
          className="zoning"
        >
          <div className="zoning__block">
            <p>
              {language === ""
                ? "2000+"
                : language === "ky"
                ? "2000+"
                : "2000+"}
            </p>
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              {language === ""
                ? "Выпусников"
                : language === "ky"
                ? "Баштапкылар"
                : "Graduates"}
            </span>
          </div>
          <div className="zoning__block">
            <p>{language === "" ? "2" : language === "ky" ? "2" : "2"}</p>
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              {language === "" ? "Года" : language === "ky" ? "Жыл" : "Years"}
            </span>
          </div>
          <div className="zoning__block">
            <p>{language === "" ? "10+" : language === "ky" ? "10+" : "10+"}</p>
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              {language === ""
                ? "Менторов"
                : language === "ky"
                ? "Менторлор"
                : "Mentors"}
            </span>
          </div>{" "}
          <div className="zoning__block">
            <p>
              {language === "" ? "95%+" : language === "ky" ? "95%+" : "95%+"}
            </p>
            <span
              style={{
                color: dark ? "#fff" : "",
              }}
            >
              {language === ""
                ? "Трудоустроились"
                : language === "ky"
                ? "Ишке орнотулгандар"
                : "Employed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vupusk;
