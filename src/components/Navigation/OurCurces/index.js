import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
const OurSchool = () => {
  const { id } = useParams();
  const [bob, setBob] = useState([]);
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/courses/courses/`).then((res) =>
      setBob(res.data.results)
    );
    window.scroll(0, 0);
  }, []);
  // console.log('bog',bob);
  return (
    <div id="ourCurces">
      <div className="ourCurces ">
        {/* <Himages /> */}
        <AboutCurs />
        <Vupusk />
        <BegushiStrak />
        <div className="container">
          <div className="ourCurces__block">
            {bob.map((el) => (
              <Kursy el={el} />
            ))}
          </div>
        </div>
        <Probnyi />
        <Whymotion />
        <Students />
        <Otzyv />
        <Quashin />
      </div>
    </div>
  );
};

export default OurSchool;
