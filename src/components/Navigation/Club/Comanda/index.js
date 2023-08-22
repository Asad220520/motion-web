import React, { useContext } from "react";
import "./index.scss";
import comand from "../../../../img/comanda.png";
import { LanguageContext } from "../../../../context";
const Comanda = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="comanda">
      <div className="container">
        <div className="comanda">
          <h1>
            {language === ""
              ? "Команда"
              : language === "ky"
              ? "Команда"
              : "Team"}
          </h1>{" "}
          <div className="comanda__img">
            <img src={comand} alt="" />
          </div>
          <div className="comanda__content">
            <p>
              Frontend <br />
              UI/UX designer <br />
              Backend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comanda;
