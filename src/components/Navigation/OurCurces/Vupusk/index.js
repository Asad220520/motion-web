import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import "./media.scss";
import { LanguageContext } from "../../../../context";
// import { BASE_URL } from "../../../../API";
// import axios from "axios";

const Vupusk = () => {
  //   const [bob, setBob] = useState([]);
  //   useEffect(() => {
  //     axios(`${BASE_URL}/courses/courses/`).then((res) =>
  //       setBob(res.data.results)
  //     );
  //   }, []);
  //   console.log('vupusk' ,bob);
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="vupusk">
        <div className="vupusk--block">
          <div className="vupusk--block__group">
            <p>
              {language === ""
                ? "2000+"
                : language === "ky"
                ? "2000+"
                : "2000+"}
            </p>
            <span>
              {language === ""
                ? "Выпусников"
                : language === "ky"
                ? "Баштапкылар"
                : "Graduates"}
            </span>
          </div>
          <div className="vupusk--block__group">
            <p>{language === "" ? "2" : language === "ky" ? "2" : "2"}</p>
            <span>
              {language === "" ? "Года" : language === "ky" ? "Жыл" : "Years"}
            </span>
          </div>
          <div className="vupusk--block__group">
            <p>{language === "" ? "10+" : language === "ky" ? "10+" : "10+"}</p>
            <span>
              {language === ""
                ? "Менторов"
                : language === "ky"
                ? "Менторлор"
                : "Mentors"}
            </span>
          </div>
          <div className="vupusk--block__group">
            <p>
              {language === "" ? "95%+" : language === "ky" ? "95%+" : "95%+"}
            </p>
            <span>
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
