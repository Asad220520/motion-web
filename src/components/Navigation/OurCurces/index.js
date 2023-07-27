import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [bob, setBob] = useState([]);
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/courses/courses/`).then((res) =>
      setBob(res.data)
    );
  }, []);
  console.log(bob);
  return (
    <div id="ourCurces">
      <div className="container">
        <div className="ourCurces">
          {/* {bob.map((el) => (
            <div key={el.id}>
              <h1>{el.last_name}</h1>
            </div>
          ))} */}
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
