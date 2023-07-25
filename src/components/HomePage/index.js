import React from "react";
import Osnovateli from "./Osnovateli";
import License from "./license";

const HomePage = () => {
  return (
    <div id="homePage">
      <div className="homePage">
        <Osnovateli />
        <License/>
      </div>
    </div>
  );
};

export default HomePage;
