import React from "react";
import "./";
import log from "../../../img/boy.png";

const SvoiSait = () => {
  return (
    <div className="container">
      <div className="sait">
        <div className="sait--block">
          <h2>Сделай свой первый дизайн</h2>
          <p>Оставляй зявку и БЕСПЛАТНО получи пробный урок</p>
        </div>
        <di v className="sait--group">
          <div className="sait--group__boy">
            <img src={log} alt="img" />
            <p>Попрубуй!</p>
          </div>
          <div className="sait--text">
            <div className="sait--text__input">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Номер" />
            </div>
            <div className="sait--text__group">
              <input type="checkbox" />
              <p>Я соглашаюсь на обработку персональных данных</p>
            </div>
            <button>Оставить заявку</button>
          </div>
        </di>
      </div>
    </div>
  );
};

export default SvoiSait;



// import React from 'react'

// const SvoiSait = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default SvoiSait

