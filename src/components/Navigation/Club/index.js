import React from "react";
import Question from "./Question";
import Zoning from "./Zoning";
import ClubProf from "./ClubProf";
import Comanda from "./Comanda";
import RazProject from "./RazProject";
import WhatYouGet from "./WhatYouGet";

const Club = () => {
  return (
    <div id="club">
      <div className="club">
        <div className="container">
          <ClubProf />
        </div>
        <Question />
        <Zoning />
        <Comanda />
        <div className="container">
          <RazProject />
        </div>
        <WhatYouGet/>
      </div>
    </div>
  );
};

export default Club;
