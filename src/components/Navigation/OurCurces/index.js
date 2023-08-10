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
const OurSchool = () => {
  const [bob, setBob] = useState([]);
  return (
    <div id="ourCurces">
      <div className="ourCurces ">
        <Himages />
        <AboutCurs />
        <Vupusk />
        <BegushiStrak />
        <Kursy/>
      
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
