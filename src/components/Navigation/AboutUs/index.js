import React, { useEffect } from "react";
import Osnovateli from "./Osnovateli";
import License from "./license";
import WyMe from "./Wy-me";
import Galerea from "./Galarea";
import "./index.scss";
const AboutUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="aboutUs">
      <div className="aboutUs">
        <WyMe />
        <Osnovateli />
        <License />
        <Galerea />
      </div>
    </div>
  );
};

export default AboutUs;
