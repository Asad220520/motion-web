import React from "react";
import men from "../../../img/men.png";
import vid from "../../../img/videoM.png";
const Mentory = () => {
  return (
    <div id="mentory">
      <div className="container">
        <div className="mentory">
          <h2>
            <span>Лучшие менторы </span>по всему Кыргызстану
          </h2>
          <div className="mentory--group">
            <div className="mentory--group__block ">
              <div className="mentory--group__block--img">
                <img src={men} alt="img" />
              </div>
              <h3>Ахырхан Кайратов</h3>
              <p>
                Ментор по UI/UX дизайну. Работал в амерканской компании
                и на фрилансе. На счёту 200+ успешных проектов.
              </p>
            </div>
            <div className="mentory--group__block ">
              <div className="mentory--group__block--img">
                <img src={men} alt="img" />
              </div>
              <h3>Ахырхан Кайратов</h3>
              <p>
                Ментор по UI/UX дизайну. Работал в амерканской компании
                и на фрилансе. На счёту 200+ успешных проектов.
              </p>
            </div>
            <div className="mentory--group__block ">
              <div className="mentory--group__block--img">
                <img src={men} alt="img" />
              </div>
              <h3>Ахырхан Кайратов</h3>
              <p>
                Ментор по UI/UX дизайну. Работал в амерканской компании
                и на фрилансе. На счёту 200+ успешных проектов.
              </p>
            </div>
          </div>
          <div className="mentory--samai">
            <div className="mentory--samai__text">
              <h3>Самая оперативная и качественная обратная связь</h3>
              <p>
                Наши менторы дают подробный разбор ваших работ, отмечают ошибки
                и помогают их исправить.
              </p>
            </div>
            <div className="mentory--samai__group">
              <img src={vid} alt="img" />
              <img src={vid} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentory;

