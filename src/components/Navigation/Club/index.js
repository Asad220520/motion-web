import React, { useEffect } from "react";
import Question from "./Question";
import Zoning from "./Zoning";
import Comanda from "./Comanda";
import RazProject from "./RazProject";
import WhatYouGet from "./WhatYouGet";
import ProfilClub from "./ProfilClub";

const Club = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="club">
      <div className="club">
        <ProfilClub />
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
