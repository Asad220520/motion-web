import React, { useContext } from "react";
import "./index.scss";
import Why from "./why";
import Glav from "./glav";
import WereKurs from "./werekurs";
import Obusheni from "./obucheni";
import ThisKurs from "./thiskurs";
import Sertivkat from "./sertivkat";
import SvoiSait from "./delaiSvoiSait";
import Mentory from "./mentory";
import ProgramKurs from "./programkursa";
import { LanguageContext } from "../../context";

const BekenDetal = () => {
  window.scroll(0, 0);
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div>
        <Glav language={language} />
        <Why language={language} />
        <WereKurs language={language} />
        <Obusheni language={language} />
        <ThisKurs />
        <Sertivkat />
        <SvoiSait />
        <Mentory />
        <ProgramKurs />
      </div>
    </>
  );
};

export default BekenDetal;
