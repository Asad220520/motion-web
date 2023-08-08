import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const Vupusk = () => {
  // const [bob, setBob] = useState([]);
  // useEffect(() => {
  //   axios(`http://13.48.46.219/api/v1/courses/courses/`).then((res) =>
  //     setBob(res.data.results)
  //   );
  // }, []);
  // console.log('vupusk' ,bob);
  return (
    <div className="container">
      <div className="vupusk">
        <div className="vupusk--block">
          <div className="vupusk--block__group">
            {/* {durations.map(el => {
                <p>{el.duration}</p>
              })} */}
            {/* {
               bob.map(el => el.durations) 
              } */}
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
