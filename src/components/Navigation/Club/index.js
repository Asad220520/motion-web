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
        <ClubProf />
        <Question />
        <Zoning />
        <Comanda />
        <RazProject />
        <WhatYouGet />
      </div>
    </div>
  );
};

export default Club;
