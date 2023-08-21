import React, { useEffect, useState } from "react";
import "./index.scss";
import "./media.scss"
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
  return (
    <div className="container">
      <div className="vupusk">
        <div className="vupusk--block">
          <div className="vupusk--block__group">
         
            <p>2000+</p>
            <span>Выпусников</span>
          </div>
          <div className="vupusk--block__group">
            <p>2</p>  
            <span>Года</span>
          </div>
          <div className="vupusk--block__group">
            <p>10+</p>
            <span>Менторов</span>
          </div>
           <div className="vupusk--block__group">
            <p>95%+</p>
            <span>Трудоустроились</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vupusk;
