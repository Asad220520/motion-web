import React from "react";
import II from "../../../../img/II.png";
import { Link } from "react-router-dom";
const IscI = () => {
  return (
    <div id="front">
      <div className="front">
        <div className="front__img">
          <img src={II} alt="" />
        </div>
        <div className="front__title">
          <p>
            В будущем IT-индустрия продолжит свое быстрое развитие и будет
            играть еще более важную роль в нашей жизни. Вот некоторые из
            возможных направлений развития в будущем IT будет играть решающую
            роль во многих аспектах нашей жизни и принесет ряд значительных
            преимуществ. Вот несколько способов, как IT может помочь в будущем:
            <Link to={"/detailsIscl"}>Далее</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IscI;
