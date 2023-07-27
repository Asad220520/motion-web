import React from "react";
import Himages from "../../../assets/Homepage/Himages";
import AboutCurs from "./about";
import Vupusk from "./Vupusk";
import Kursy from "./Kursy";
import Whymotion from "./whyMotion";
import Students from "./students";
import Otzyv from "./otzuv";
import Quashin from "./quashin";

const OurSchool = () => {
  return (
    <div id="ourCurces">
      <div className="container">
        <div className="ourCurces ">
          <Himages />
          <AboutCurs />
          <Vupusk />
          <Kursy />
          <Whymotion />
          <Students/>
          <Otzyv/>
          <Quashin/>
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
