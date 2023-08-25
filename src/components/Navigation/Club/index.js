import React, { useContext } from "react";
import Question from "./Question";
import Zoning from "./Zoning";
import Comanda from "./Comanda";
import RazProject from "./RazProject";
import WhatYouGet from "./WhatYouGet";
import ProfilClub from "./ProfilClub";
import { LanguageContext } from "../../../context";

const Club = () => {
  window.scroll(0, 0);
  const { dark } = useContext(LanguageContext);
  return (
    <div
      style={{
        background: dark ? "#000" : "",
      }}
      id="club"
    >
      <div className="club">
        <ProfilClub dark={dark} />
        <Question dark={dark} />
        <Zoning dark={dark} />
        <Comanda dark={dark} />
        <RazProject dark={dark} />
        <WhatYouGet dark={dark} />
      </div>
    </div>
  );
};

export default Club;
