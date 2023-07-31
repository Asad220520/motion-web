import React from "react";
import Osnovateli from "./Osnovateli";
import License from "./license";
import WyMe from "./Wy-me";
import Galerea from "./Galarea";

const HomePage = () => {
  return (
    <div id="homePage">
      <div className="homePage">
        <WyMe />
        <Osnovateli />
        <License />
        <Galerea />
      </div>
    </div>
  );
};

export default HomePage;
