import React from "react";
// import "./index.scss";
import card from "../../../img/cardd.png";

const Sertivkat = () => {
  return (
    <div id="ser">
      <div className="container">
        <div className="ser">
          <div className="ser--text">
            <h2>Сертификат</h2>
            <p>
              После успешного завершения обучения выдаётся международный
              сертификат Государственной степени, лицензированный Министерством
              образования на 3 языках.
            </p>
            <div className="ser--text__btns">
              <button>Кыргызский</button>
              <button>Русский</button>
              <button>Английский</button>
            </div>
            <p>
              Действителен для всех госучреждений, IT компаний в Кыргызстане
              и IT компаний в европейских государствах
            </p>
          </div>
          <img src={card} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Sertivkat;
