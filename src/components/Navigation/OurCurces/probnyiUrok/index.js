import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import boy from "../../../../img/boy.png";
import axios from "axios";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";

const Probnyi = ({ dark }) => {
  const [bob, setBob] = useState([]);
  const { language } = useContext(LanguageContext);
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
    footer.style.padding = "50px 0";
  };
  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/courses/triallesson/`).then((res) =>
      setBob(res.data.results)
    );
  }, [language]);

  return (
    <div
      style={{
        background: dark ? "#1c1c1c" : "",
        borderBottom: dark ? "1px solid #fff" : "",
      }}
      id="probnyi"
    >
      <div className="container">
        {bob.map((el) => (
          <div key={el.id} className="probnyi">
            <div className="probnyi--block">
              <img src={boy} alt="img" />
              <p>
                {language === ""
                  ? "Крууутоо..."
                  : language === "ky"
                  ? "Крууутоо..."
                  : "Awesome..."}
              </p>
            </div>
            <div className="probnyi--text">
              <div className="probnyi--text--group">
                <h2>
                  {language === ""
                    ? "ПРОБНЫЕ УРОКИ"
                    : language === "ky"
                    ? "СЫНОО САБАКТАРЫ"
                    : "TRIAL LESSONS"}
                </h2>
                <p>{el.description}</p>
              </div>
              <div className="probnyi--text--group2">
                <h2>
                  {el.date} в {el.time}
                  <p>
                    {language === "" ? (
                      <p> Мастер класс по {el.name}</p>
                    ) : language === "ky" ? (
                      <p> Мастер класстар {el.name}</p>
                    ) : (
                      <p> Masterclass in{el.name}</p>
                    )}{" "}
                    {el.name}
                  </p>
                </h2>
                <button onClick={handleContactClick}>
                  {language === ""
                    ? "Записаться"
                    : language === "ky"
                    ? "Каттоо"
                    : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Probnyi;
