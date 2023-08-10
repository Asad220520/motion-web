import React from "react";
import "./index.scss";
import Why from "./why";
import WereKurs from "./werekurs";
import Obusheni from "./obucheni";
import ThisKurs from "./thiskurs";
import Sertivkat from "./sertivkat";
import SvoiSait from "./delaiSvoiSait";
import Mentory from "./mentory";
import ProgramKurs from "./programKursa";
import Glav from "./glav";

const DisainDetal = () => {
  return (
    <>
      <div>
        <Glav />
        <Why />
        <WereKurs />
        <Obusheni />
        <ThisKurs />
        <Sertivkat />
        <SvoiSait />
        <Mentory />
        <ProgramKurs />
      </div>
    </>
  );
};

export default DisainDetal;
