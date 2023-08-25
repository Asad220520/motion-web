import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Himages from "../../../assets/Homepage/Himages";
import AboutCurs from "./about";
import Vupusk from "./Vupusk";
import Kursy from "./Kursy";
import Whymotion from "./whyMotion";
import Students from "./students";
import Otzyv from "./otzuv";
import Quashin from "./quashin";
import "./index.scss";
import BegushiStrak from "./begushiStrak";
import Probnyi from "./probnyiUrok";
import { BASE_URL } from "../../../API";
import { LanguageContext } from "../../../context";
const OurSchool = () => {
  const [bob, setBob] = useState([]);
  const { language } = useContext(LanguageContext);
  const { dark } = useContext(LanguageContext);
  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/courses/courses/
`).then((res) => setBob(res.data.results));
    window.scroll(0, 0);
  }, [language]);
  console.log(bob);

  return (
    <div>
      <div
        style={{
          background: dark ? "#000" : "",
        }}
        id="ourCurces"
      >
        <Himages />
        <div
          style={{
            background: dark ? "#1c1c1c" : "",
          }}
          className="ourCurces "
        >
          <AboutCurs dark={dark} />
          <Vupusk dark={dark} />
          <BegushiStrak dark={dark} />
          <div className="container">
            <div className="ourCurces__block">
              {bob.map((el) => (
                <>
                  <Kursy dark={dark} key={el.id} el={el} />
                </>
              ))}
            </div>
          </div>
          <Probnyi dark={dark} />
          <Whymotion dark={dark} />
          <Students dark={dark} />
          <Otzyv dark={dark} />
          <Quashin dark={dark} />
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
