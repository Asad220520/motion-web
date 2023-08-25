import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";
const Galerea = () => {
  const [osnov, setOsnov] = useState([]);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/blog/about-us-gallery/`)
      .then((res) => setOsnov(res.data.results))
      .catch((err) => console.log(err));
  }, [language]);
  console.log("osnoooov", osnov);

  return (
    <div id="galerea">
      <div className="container">
        <div className="galerea">
          <div className="galerea__block">
            <h1 className="a">Галерея</h1>
            {osnov.map((el) => (
              <img data-aos="flip-left" key={el.id} src={el.image} alt="" />
            ))}{" "}
            {/* {osnov.map(
              (el) =>
                el.file &&
                el.file.endsWith(".webm") && (
                  <video controls key={el.id}>
                    <source className="vidi" src={el.file} type="video/webm" />
                  </video>
                )
            )} */}
            {/* <p className="b">Показать ещё</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerea;
