import React, { useContext } from "react";
import "./index.scss";
import rec from "../../../../img/book.png";
import pla from "../../../../img/platf.png";
import ress from "../../../../img/ress.png";
import shop from "../../../../img/bshop.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../../context";

const Students = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="student">
      <div className="container">
        <div className="student">
          <div className="student--group">
            <div className="student--group__block">
              <h1>
                {language === ""
                  ? "Проекты студентов"
                  : language === "ky"
                  ? "Студенттердин проекттери"
                  : "Student Projects"}{" "}
                <span>MOTION WEB IT ACADEMY</span>
              </h1>
            </div>
            <div className="student--group__block">
              <Link to="https://bookshop-nu.vercel.app/" target="black">
                <img src={shop} alt="img" />{" "}
              </Link>
            </div>
            <div className="student--group__block">
              <Link to="https://club-project.vercel.app/" target="black">
                <img src={pla} alt="img" />
              </Link>
            </div>
            <div className="student--group__block">
              <Link to="https://self-levelup.vercel.app/" target="blank">
                <img src={rec} alt="img" />
              </Link>
            </div>
            <div className="student--group__block">
              <Link to="https://restaurant1-three.vercel.app/" target="black">
                <img src={ress} alt="img" />
              </Link>
            </div>
            <div className="student--group__block">
              <button className="btn">
                {language === ""
                  ? "Показать ещё"
                  : language === "ky"
                  ? "Көбүрөөк көрсөтүү"
                  : "Show More"}
                <p>...</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
