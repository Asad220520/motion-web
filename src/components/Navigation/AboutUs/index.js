import React, { useContext, useEffect } from "react";
import Osnovateli from "./Osnovateli";
import License from "./license";
import WyMe from "./Wy-me";
import Galerea from "./Galarea";
import "./index.scss";
import { LanguageContext } from "../../../context";
const AboutUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { dark } = useContext(LanguageContext);
  return (
    <div
      style={{
        background: dark ? "#000" : "",
      }}
      id="aboutUs"
    >
      <div className="aboutUs">
        <WyMe dark={dark} />
        <Osnovateli dark={dark} />
        <License dark={dark} />
        <Galerea />
      </div>
    </div>
  );
};

export default AboutUs;
