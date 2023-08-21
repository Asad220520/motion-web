import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../../../API";
const Galerea = () => {
  const [osnov, setOsnov] = useState([]);
  useEffect(() => {
    axios(`${BASE_URL}/blog/about-us-gallery/`)
      .then((res) => setOsnov(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(osnov);
  return (
    <div id="galerea">
      <div className="container">
        <div className="galerea">
          <div className="galerea__block">
            <h1 className="a">Галерия</h1>
            {osnov.map((el) => (
              <img key={el.id} src={el.image} alt="" />
            ))}
            {/* <p className="b">Показать ещё</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerea;
