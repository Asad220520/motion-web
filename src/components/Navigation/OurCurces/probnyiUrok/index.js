import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import boy from "../../../../img/boy.png";
import axios from "axios";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";

const Probnyi = () => {
  const [bob, setBob] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/courses/triallesson/`).then((res) =>
      setBob(res.data.results)
    );
  }, [language]);

  return (
    <div id="probnyi">
      <div className="container">
        {bob.map((el) => (
          <div key={el.id} className="probnyi">
            <div className="probnyi--block">
              <img src={boy} alt="img" />
              <p>Kрууутоо...</p>
            </div>
            <div className="probnyi--text">
              <div className="probnyi--text--group">
                <h2>ПРОБНЫЕ УРОКИ</h2>
                <p>{el.description}</p>
              </div>
              <div className="probnyi--text--group2">
                <h2>
                  {el.date} в {el.time}
                  <p>мастер класс по {el.name}</p>
                </h2>
                <button>Записаться</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Probnyi;
