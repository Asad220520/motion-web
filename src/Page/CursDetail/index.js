import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../../API";
import { LanguageContext } from "../../context";
import { useParams } from "react-router-dom";

const CursDetail = () => {
  const [detal, setDetal] = useState([]);
  const { language, dark } = useContext(LanguageContext);
  const { id } = useParams();
  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/courses/courses/${id}/`)
      .then((res) => setDetal(res.data))
      .catch((error) => console.error(error));

    window.scroll(0, 0);
  }, [id, language]);

  console.log("detal", detal);
  return (
    <>
      <div
        style={{
          background: dark ? "#000" : "",
          borderBottom: dark ? "1px solid #fff" : "",
        }}
      >
        <Glav el={detal} />
        <Why language={language} el={detal} dark={dark} />
        <WereKurs language={language} el={detal} dark={dark} />
        <Obusheni el={detal} dark={dark} />
        <ThisKurs language={language} el={detal} dark={dark} />
        <Sertivkat />
        <SvoiSait />
        <Mentory el={detal} language={language} dark={dark} />
        <ProgramKurs el={detal} language={language} dark={dark} />
      </div>
    </>
  );
};

export default CursDetail;
