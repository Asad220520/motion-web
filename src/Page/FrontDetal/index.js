import React, { useEffect, useState } from "react";
import "./index.scss";
import Why from "./Why";
import WereKurs from "./WereKurs";
import Obusheni from "./obucheni";
import ThisKurs from "./ThisKurs";
import Sertivkat from "./Sertivkat";
import SvoiSait from "./delaiSvoiSait";
import Mentory from "./mentory";
import ProgramKurs from "./programKursa";
import Glav from "./glav";
import { useParams } from "react-router-dom";
import axios from "axios";

const KursFront = () => {
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

export default KursFront;
