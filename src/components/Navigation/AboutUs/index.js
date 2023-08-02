import React from "react";
import Osnovateli from "./Osnovateli";
import License from "./license";
import WyMe from "./Wy-me";
import Galerea from "./Galarea";
import './index.scss'
const AboutUs = () => {
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
